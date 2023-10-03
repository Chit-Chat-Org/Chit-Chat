const express = require("express");
const router = express.Router();
const utils = require("../utils/utils");

router.post("/upload", utils.uploadToAWS);

router.post("/newOrganization",utils.CreateNewOrg);

router.get('/getAllOrganization', utils.getAllOrg)

router.post('/addAiTrainingModel',utils.addNewtrainingModel)

router.get('/getAllAiTrainedData',utils.getAiTrainedModel)

router.post('/QnARetrieval',utils.QnARetrieval)

module.exports = router ;