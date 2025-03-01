const express = require("express");
const user = require("../models/register.modal");
const router = express.Router();
const bcrypt = require("bcrypt");

router.post("/signup", async (req, res) => {
  try {
    const { UserName, UserEmail, Password, ExternalId } = req.body;

    // Check if user already exists
    const findUser = await user.findOne({ _id: ExternalId });
    if (findUser) {
      return res.json({
        status: "User Already Exist!",
        response: {},
        error: "User already exists.",
      });
    }

    // Handle password hashing if provided
    let HashedPassword = null;
    if (Password) {
      HashedPassword = await bcrypt.hash(Password, 10);
    }

    const register = await user.create({
      _id: ExternalId, 
      UserName,
      UserEmail,
      Password: HashedPassword,
    });

    // Send response with a cookie
    res.json({
        status: "Success",
        response: {
          data: register._id,
        },
      });
  } catch (error) {
    console.error("Error:", error);
    res.json({
      status: "Failed",
      response: {},
      error: error.message,
    });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { ExternalId } = req.body;

    const findUser = await user.findOne({ _id: ExternalId });
    if (!findUser) {
      return res.json({
        status: "Failed",
        response: {},
        error: "User not found.",
      });
    }

      return res.json({
          status: "Success",
          response: {
            data: findUser._id,
          },
        });

  } catch (error) {
    console.error("Error:", error);
    res.json({
      status: "Failed",
      response: {},
      error: error.message,
    });
  }
});



module.exports = router;
