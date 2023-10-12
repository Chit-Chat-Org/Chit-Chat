const express = require("express");
const router = express.Router();
const utils = require("../utils/utils");

router.post("/upload", utils.uploadToAWS);

router.post("/newOrganization",utils.CreateNewOrg);

router.get('/getAllOrganization', utils.getAllOrg)

router.get('/getOrganizationById',utils.getOrganizationById)

router.post('/addAiTrainingModel',utils.addNewtrainingModel)

router.get('/getAllAiTrainedData',utils.getAiTrainedModel)

router.get('/getAiModelById',utils.getAiModelById)

router.post('/QnARetrieval',utils.QnARetrieval)

module.exports = router ;