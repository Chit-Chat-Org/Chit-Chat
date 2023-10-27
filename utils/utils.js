const { s3Bucket, BUCKET_NAME } = require("../config/aws.config");
const bcrypt = require("bcrypt");
const crypto = require("crypto");

const OrganizationModel = require("../models/org.model");

const AiTrainingModel = require("../models/train.model");

const { Configuration, OpenAIApi } = require("openai");

const pdf = require('pdf-parse');
const Papa = require('papaparse');

const secretKey = process.env.CRYPTO_SECRET;

let embeddingStore = {};

exports.uploadToAWS = async (req, res) => {
  try {
    if (!req.files | !req.files.file) {
      return res.json({
        status: "Failed",
        message: "No file uploaded",
        error: error.message,
      });
    }
    const file = req.files.file;

    if (file.mimetype === "application/pdf") {
      let data = await pdf(file.data);
      let textContent = data.text;

      file.name = file.name.replace(".pdf", ".txt");
      file.data = Buffer.from(textContent, "utf8");
      file.mimetype = "text/plain";
    } else if (file.mimetype === "text/csv") {
      const parsedData = Papa.parse(file.data.toString("utf8"));
      const jsonData = JSON.stringify(parsedData.data, null, 2);

      file.name = file.name.replace(".csv", ".txt");
      file.data = Buffer.from(jsonData, "utf8");
      file.mimetype = "text/plain";
    }
    s3Bucket.putObject(
      {
        Bucket: BUCKET_NAME,
        Key: "uploads/" + file.name,
        Body: file.data,
        ContentType: file.mimetype,
      },

      async (err, data) => {
        if (err) {
          console.log({ err });
          return res.json({
            status: "Failed",
            message: "File upload failed",
            error: err.message,
          });
        } else {
          return res.json({
            status: "Success",
            message: "File uploaded successfully",
            data: {
              tag: data,
              url: `https://${BUCKET_NAME}.s3.ap-south-1.amazonaws.com/uploads/${file.name}`,
            },
          });
        }
      }
    );
  } catch (error) {
    res.json({
      status: "Failed",
      message: "File Upload Failed",
      error: error.message,
    });
  }
};

exports.CreateNewOrg = async (req, res) => {
  try {
    const userId = req.body.userId;

    if (!userId) {
      return res.json({
        status: "Failed",
        response: {},
        error: "Not Authenticated !",
      });
    }

    const newOrganization = await OrganizationModel.create({
      userId: userId,
      OrganizationName: req.body.OrganizationName,
      OrganizationWebsite: req.body.OrganizationWebsite,
      organizationEmail: req.body.organizationEmail,
      OrganizationPhone: req.body.OrganizationPhone,
      isActive: req.body.isActive,
    });

    res.json({
      status: "Success",
      response: {
        data: newOrganization,
      },
    });
  } catch (error) {
    console.log("Error:", error);
    res.json({
      status: "Failed",
      response: {},
      error: error.message,
    });
  }
};

exports.getAllOrg = async (req, res) => {
  try {
    const allOrg = await OrganizationModel.find();

    res.json({
      status: "Success",
      response: {
        data: allOrg,
      },
    });
  } catch (error) {
    res.json({
      status: "Failed",
      response: {},
      error: error.message,
    });
  }
};

exports.getOrganizationById = async (req, res) => {
  try {
    // Extract userId from query parameter instead of cookies
    // const userIdFromQuery = req.query.UserId;
    const userIdFromQuery = req.cookies.UserId;

    if (!userIdFromQuery) {
      return res.json({
        status: "Failed",
        response: {},
        error: "UserId query parameter not found",
      });
    }

    const organization = await OrganizationModel.find({
      userId: userIdFromQuery,
    });

    if (!organization) {
      return res.json({
        status: "Failed",
        response: {},
        error: "Organization not found for given user ID",
      });
    }

    res.json({
      status: "Success",
      response: {
        data: organization,
      },
    });
  } catch (error) {
    console.log("Error:", error);
    res.json({
      status: "Failed",
      response: {},
      error: error.message,
    });
  }
};

exports.addNewtrainingModel = async (req, res) => {
  try {
    const userId = req.body.organization.userId;

    if (!userId) {
      return res.json({
        status: "Failed",
        response: {},
        error: "Not Authenticated !",
      });
    }

    const newAITrainingModel = {
      userId: userId,
      organizationName: req.body.organization.organizationName,
      uploadKnowledge: req.body.url,
      openAIApi: req.body.openAIApi,
      embeddedKnowlege: "",
      apiKey: "",
      originalAPIKey: "",
    };

    //open ai instance defined

    const configuration = new Configuration({
      apiKey: newAITrainingModel.openAIApi,
    });
    const openai = new OpenAIApi(configuration);

    const fileName = newAITrainingModel.uploadKnowledge.substring(
      newAITrainingModel.uploadKnowledge.lastIndexOf("/") + 1
    );

    const knowledgeSource = await getKnowledgeData(`uploads/${fileName}`);

    console.log({ fileName, knowledgeSource, openai });

    const embeddedFileData = await createEmbedding(
      fileName,
      knowledgeSource,
      openai
    );

    newAITrainingModel.embeddedKnowlege = embeddedFileData.embededFileLocation;

    const { organizationName, embeddedKnowlege } = newAITrainingModel;

    newAITrainingModel.originalAPIKey = generateApiKey({
      organizationName,
      embeddedKnowlege,
    });

    newAITrainingModel.apiKey = await bcrypt.hash(
      newAITrainingModel.originalAPIKey,
      10
    );
    console.log({ newAITrainingModel });
    const AiTrainedModel = await AiTrainingModel.create(newAITrainingModel);

    res.json({
      status: "Success",
      response: {
        data: AiTrainedModel,
      },
    });
  } catch (error) {
    console.log("Error", error);
    res.json({
      status: "Failed",
      response: {},
      error: error.message,
    });
  }
};

exports.getAiModelById = async (req, res) => {
  try {
    const userIdFromQuery = req.cookies.UserId;
    if (!userIdFromQuery) {
      return res.json({
        status: "Failed",
        response: {},
        error: "UserId query parameter not found",
      });
    }

    const aiModel = await AiTrainingModel.find({ userId: userIdFromQuery });

    if (!aiModel) {
      return res.json({
        status: "Failed",
        response: {},
        error: "AI Model not found for given user ID",
      });
    }

    res.json({
      status: "Success",
      response: {
        data: aiModel,
      },
    });
  } catch (error) {
    console.log("Error:", error);
    res.json({
      status: "Failed",
      response: {},
      error: error.message,
    });
  }
};

const getKnowledgeData = (source) => {
  const params = {
    Bucket: BUCKET_NAME,
    Key: source,
  };
  return new Promise((resolve, reject) => {
    s3Bucket.getObject(params, (err, data) => {
      if (err) {
        console.log("Error: ", err);
        reject(err);
      } else {
        resolve(data.Body.toString("utf-8"));

        return data.Body.toString("utf-8");
      }
    });
  });
};

async function createEmbedding(fileName, knowledgeSource, openai) {
  let text = knowledgeSource;
  let embeddingStore = {};

  let paras = [];
  const rawValue = text.split(/\n\s*\n/);
  for (let i = 0; i < rawValue.length; i++) {
    let rawPara = rawValue[i].trim().replaceAll("\n", " ").replace(/\r/g, "");

    if (rawPara.charAt(rawPara.length - 1) != "?") {
      if (rawPara.split(/\s+/).length >= 5) {
        paras.push(rawPara);
      }
    }
  }
  const paraLen = paras.length;
  const date = new Date().getTime();

  try {
    const response = await openai.createEmbedding({
      input: paras,
      model: "text-embedding-ada-002",
    });
    if (response.data.data.length >= paraLen) {
      for (let i = 0; i < paraLen; i++) {
        embeddingStore["embeds:" + paras[i]] = JSON.stringify({
          embedding: response.data.data[i].embedding,
          created: date,
        });
      }
    }

    // fs.writeFileSync('sample/embedding/embeding.json', embeddingStore);

    const embededFileUploadedURL = await uploadEmbededModeltoAWS(
      embeddingStore,
      fileName
    );

    return embededFileUploadedURL;
  } catch (error) {
    console.log("Sorry! Can't Embed !");
    if (error.response) {
      console.error(error.response.status, error.response.data);
    } else {
      console.log(error);
    }
  }
}

async function uploadEmbededModeltoAWS(embeddingStore, fileName) {
  const uploadParams = {
    Bucket: BUCKET_NAME,
    Key: `embedding/embeded-${fileName}`,
    Body: JSON.stringify(embeddingStore),
  };
  return new Promise((resolve, reject) => {
    s3Bucket.putObject(uploadParams, (err, data) => {
      if (err) {
        reject(err);
      } else {
        const embededFileLocation = `https://${BUCKET_NAME}.s3.ap-south-1.amazonaws.com/embedding/embeded-${fileName}`;
        resolve({ embededFileLocation: embededFileLocation });
      }
    });
  });
}

const salt = crypto.randomBytes(16);
const key = crypto.scryptSync(secretKey, salt, 32);

const generateApiKey = (data) => {
  const dataString = JSON.stringify(data);
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
  let encrypted = cipher.update(dataString, "utf8", "hex");
  encrypted += cipher.final("hex");
  return iv.toString("hex") + encrypted;
};

exports.getAiTrainedModel = async (req, res) => {
  try {
    const getAllAiTrained = await AiTrainingModel.find();

    res.json({
      status: "Success",
      response: {
        data: getAllAiTrained,
      },
    });
  } catch (error) {
    console.log("Error", error);
    res.json({
      status: "Failed",
      response: {},
      error: error,
    });
  }
};

exports.QnARetrieval = async (req, res) => {
  const data = await AiTrainingModel.findOne({ apiKey: req.query.key });

  if (!data) {
    return res.json({
      status: "Error",
      message: "Invalid ApiKey",
    });
  }

  const isValidApiKey = await bcrypt.compare(
    data.originalAPIKey,
    req.query.key
  );

  if (isValidApiKey && data.isDisabled) {
    return res.json({
      status: "Error",
      message: "API Key is deactivated",
    });
  }

  if (isValidApiKey) {
    let embeddedQuestion;

    try {
      const configuration = new Configuration({
        apiKey: data.openAIApi,
      });
      const openai = new OpenAIApi(configuration);

      const fileName = extractFileNamewithExt(data.embeddedKnowlege);
      const embeddingStoreJSON = await getKnowledgeData(
        `embedding/${fileName}`
      );

      embeddingStore = JSON.parse(embeddingStoreJSON);

      let embeddedQuestionResponse = await openai.createEmbedding({
        input: req.body.prompt,
        model: "text-embedding-ada-002",
      });

      if (embeddedQuestionResponse.data.data.length) {
        embeddedQuestion = embeddedQuestionResponse.data.data[0].embedding;
      } else {
        throw Error("Question not embedded properly");
      }
      let closestParagraphs = findClosestParagraphs(embeddedQuestion, 5);

      console.log("closest para", closestParagraphs);
      let completionData = await openai.createChatCompletion({
        model: "gpt-3.5-turbo-16k",
        messages: [
          {
            role: "user",
            content: Prompt(req.body.prompt, closestParagraphs),
          },
        ],
        temperature: 0,
      });

      if (!completionData.data.choices) {
        throw new Error("No answer gotten");
      }

      console.log(completionData.data.choices[0].message.content.trim());
      completionData.data.choices[0].message.content.trim();

      return res.json({
        status: "success",
        message: completionData.data.choices[0].message.content.trim(),
      });
    } catch (error) {
      console.log(error);
      if (error.response) {
        console.error(error.response.status, error.response.data);
      } else {
        console.error(`Error with OpenAI API request: ${error.message}`);
      }

      return res.status(400).json({
        status: "Failed",
        message: error,
      });
    }
  }
};

function findClosestParagraphs(questionEmbedding, count) {
  const items = [];

  for (const key in embeddingStore) {
    let paragraph = key.substring("embeds:".length);

    let currentEmbedding = JSON.parse(embeddingStore[key]).embedding;

    items.push({
      paragraph: paragraph,
      score: compareEmbeddings(questionEmbedding, currentEmbedding),
    });
  }

  items.sort(function (a, b) {
    return b.score - a.score;
  });

  return items.slice(0, count).map((item) => item.paragraph);
}

function compareEmbeddings(embedding1, embedding2) {
  const length = Math.min(embedding1.length, embedding2.length);
  let dotprod = 0;

  for (let i = 0; i < length; i++) {
    dotprod += embedding1[i] * embedding2[i];
  }
  return dotprod;
}

const Prompt = (question, paragraph) => {
  return (
    "You are AI Assistant, your name is Chit-Chats. developed by Apurv Krishn Jha. Answer the following question from the context, if the answer can not be deduced from the context, say 'Sorry! I didn't Understand the Question, Please explain it in detail' :\n\n" +
    "Context :\n" +
    paragraph.join("\n\n") +
    "\n\nQuestion :\n" +
    question +
    "?" +
    "\n\nAnswer :"
  );
};

const extractFileNamewithExt = (url) => {
  const fileName = url.substring(url.lastIndexOf("/") + 1);
  return fileName;
};
