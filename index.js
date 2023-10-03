const express = require('express')
const app = express()
require('dotenv').config();
const port = 8000
const cors = require('cors')
const fileUpload = require('express-fileupload')
const controller = require('./routes/routes.control')
const mongoose = require("mongoose");


// MongoDB Connection

app.use(cors())
app.use(express.json())
app.use(fileUpload())

mongoose
  .connect(process.env.MONGOOSE_SECRET_KRY)
  .then(() => console.log("DB connection successful!"))
  .catch((error) => console.log(error));

app.use('/api/v1',controller)


app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}`)
})