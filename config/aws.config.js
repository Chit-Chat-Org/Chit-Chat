const aws = require('aws-sdk')
require("aws-sdk/lib/maintenance_mode_message").suppress = true;

const accessKeyId = process.env.AWS_ACCESS_KEY_ID
const secret = process.env.AWS_ACCESS_SECRET
const bucket = process.env.AWS_BUCKET_NAME


aws.config.update({
    accessKeyId: accessKeyId,
    secretAccessKey: secret
})

exports.BUCKET_NAME = bucket;

exports.s3Bucket = new aws.S3();
