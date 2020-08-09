const express = require("express");
const mongoose = require("mongoose");

// * NPM Packages
const passport = require("passport");
const bcrypt = require("bcryptjs");
const moment = require("moment");
const _ = require("lodash");
const crypto = require("crypto");
const async = require("async");

// * Models
const { Merchant, validateMerchant } = require("../models/merchant");

// * Functions

// * Util
const smtpTransport = require("../config/nodemailerSetup");
const router = require("./customer");
const Joi = require("@hapi/joi");

// * Middleware

// * Requests -->

// * Get all merchants ( A )
// * Done
router.get("/all", async (req, res) => {
  try {
    const merchants = await Merchant.find({}).sort("-createdOrg").exec();

    if (!merchants) return res.send("No merchants found.");

    res.send(merchants);
  } catch (error) {
    console.log(error);
    res.send("Something went wrong.");
  }
});

// * Get merchant for specific category
// * Done
router.get("/:category_id", async (req, res) => {
  try {
    const merchants = await Merchant.find({
      categories: req.params.category_id,
    }).exec();

    if (!merchants) return res.send("No vendors exists for this category.");

    res.send(merchants);
  } catch (error) {
    console.log(error);
    res.send("Something went wrong.");
  }
});

// * Get a single merchant ( A )
// * Done
router.get("/view/:id", async (req, res) => {
  try {
    const merchant = await Merchant.findById(req.params.id).exec();

    if (!merchant) return res.send("User does not exist.");

    res.send(merchant);
  } catch (error) {
    console.log(error);
    res.send("Something went wrong.");
  }
});

// * Create a New Merchant ( A )
// * Done
router.post("/new", async (req, res) => {
  try {
    const { error } = validateMerchant(req.body);
    if (error) return res.send(error.details[0].message);

    if (req.body.password.trim() !== req.body.confirmPassword.trim())
      return res.send("Passwords do not match.");

    const salt = await bcrypt.genSalt(10);
    var password = await bcrypt.hash(req.body.password.trim(), salt);

    var reqBody = _.omit(req.body, ["password", "confirmPassword"]);

    var newMerchant = {
      ...reqBody,
      password: password,
      status: "active",
      createdOn: moment().format("D/M/YYYY, h:m A"),
      createdOrg: new Date(),
      role: "merchant",
    };

    const merchant = await Merchant.create(newMerchant);

    res.send(merchant);
  } catch (error) {
    console.log(error);
    res.send("Something went wrong.");
  }
});

// * Update Merchant ( Complete ) ( A )
// * Done
router.put("/edit/:id", async (req, res) => {
  try {
    var verificationSchema = Joi.object({
      businessName: Joi.string().max(150).required(),
      email: Joi.string().email().required(),
      businessInfo: Joi.object().keys({
        businessType: Joi.string().required(),
        title: Joi.string().required(),
        logo: Joi.string(),
        description: Joi.string(),
      }),
      contactInfo: Joi.object().keys({
        firstName: Joi.string().max(150).required(),
        lastName: Joi.string().max(150).required(),
        altMobile: Joi.string().min(10).max(10),
        landline: Joi.string(),
        communicationEmail: Joi.string().email().required(),
        about: Joi.string(),
      }),
      locationInfo: Joi.when("businessInfo.businessType", {
        is: "single",
        then: Joi.object().keys({
          state: Joi.string().required(),
          city: Joi.string().required(),
          area: Joi.string().required(),
          addrLine1: Joi.string().required(),
          addrLine2: Joi.string().required(),
          landmark: Joi.string().required(),
          zipcode: Joi.number().required(),
        }),
      }),
      categories: Joi.array().required(),
      images: Joi.array(),
      status: Joi.string().required(),
    });

    const { error } = verificationSchema.validate(req.body);
    if (error) return res.send(error.details[0].message);

    var merchant = await Merchant.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    }).exec();
    if (!merchant) return res.send("User does not exist.");

    res.send(merchant);
  } catch (error) {
    console.log(error);
    res.send("Something went wrong.");
  }
});

// * Change Status of Merchant ( A )
// * Done
router.put("/change-status/:id", async (req, res) => {
  try {
    var merchant = await Merchant.findById(req.params.id).exec();

    if (!merchant) return res.send("User does not exist.");

    merchant.status = req.body.status.trim().toLowerCase();

    merchant = await merchant.save();

    res.send(merchant);
  } catch (error) {
    console.log(error);
    res.send("Something went wrong.");
  }
});

// * Get profile ( M )
// * Done
router.get("/profile", async (req, res) => {
  try {
    const merchant = await Merchant.findById(req.user._id).exec();

    if (!merchant) return res.send("User does not exist.");

    res.send(merchant);
  } catch (error) {
    console.log(error);
    res.send("Something went wrong.");
  }
});

// * Update Merchant ( Basic ) ( M )
// * Done
router.put("/profile", async (req, res) => {
  try {
    const verificationSchema = Joi.object({
      newName: Joi.string().max(150),
      newEmail: Joi.string().email(),
    });

    const { error } = verificationSchema.validate(req.body);
    if (error) return res.send(error.details[0].message);

    var merchant = await Merchant.findById(req.user._id).exec();

    if (!merchant) return res.send("User does not exist.");

    merchant.email = req.body.newEmail.trim();
    merchant.name = req.body.newName.trim();

    merchant = await merchant.save();

    res.send(merchant);
  } catch (error) {
    console.log(error);
    res.send("Something went wrong.");
  }
});

// * Change Password ( M )
// * Done
router.put("/change-password", async (req, res) => {
  try {
    var merchant = await Merchant.findById(req.user._id).exec();

    if (!merchant) return res.send("User does not exists.");

    if (merchant.password !== req.body.oldPassword.trim())
      return res.send("Previous password is incorrect.");

    if (req.body.password.trim() !== req.body.confirmPassword.trim())
      return res.send("Passwords do not match.");

    const salt = await bcrypt.genSalt(10);
    var password = await bcrypt.hash(req.body.password.trim(), salt);

    merchant.password = password;
    merchant = await merchant.save();

    res.send(merchant);
  } catch (error) {
    console.log(error);
    res.send("Something went wrong.");
  }
});

// * Login Merchant ( M )
router.post("/login", (req, res, next) => {
  passport.authenticate("merchant", {
    successRedirect: "/",
    failureRedirect: "/login",
  })(req, res, next);
});

// * Requests End -->

module.exports = router;
