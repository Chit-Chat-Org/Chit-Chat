const express = require("express");
const user = require("../models/register.modal");
const router = express.Router();
const bcrypt = require("bcrypt");

router.post("/signup", async (req, res) => {
  try {
    const HashedPassword = await bcrypt.hash(req.body.Password, 10);
    const findUser = await user.findOne({ UserName: req.body.UserName });
    let register;

    if (!findUser) {
      register = await user.create({
        UserName: req.body.UserName,
        UserEmail: req.body.UserEmail,
        Password: HashedPassword,
      });

      res
        .cookie("UserId", register._id.toString(), {
          expires: new Date(Date.now() + 25892000000),
          secure:true
        })
        .json({
          status: "Success",
          response: {
            data: register._id,
          },
        });
    } else {
      return res.json({
        status: "User Already Exist!",
        response: {},
        error: "User already exists.",
      });
    }
  } catch (error) {
    console.log("Error:", error);
    res.json({
      status: "Failed",
      response: {},
      error: error.message,
    });
  }
});

router.post("/login", async (req, res) => {
  try {
    const findUser = await user.findOne({ UserName: req.body.UserName });

    if (!findUser) {
      return res.json({
        status: "Failed",
        response: {},
        error: "User not found.",
      });
    }

    const validPassword = await bcrypt.compare(
      req.body.Password,
      findUser.Password
    );
    if (!validPassword) {
      return res.json({
        status: "Failed",
        response: {},
        error: "Incorrect password.",
      });
    }

    const id = findUser._id.toString();

    res
      .cookie("UserId", id,{
        expires: new Date(Date.now() + 25892000000),
      })
      .json({
        status: "Success",
        response: {
          data: findUser,
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
});

module.exports = router;
