const express = require("express");
const mongoose = require("mongoose");

// * NPM packages
const passport = require("passport");
const bcrypt = require("bcryptjs");
const moment = require("moment");
const _ = require("lodash");
const crypto = require("crypto");

// * Models
const { Admin } = require("../models/admin");
const { Customer } = require("../models/customer");
const { Merchant } = require("../models/merchant");

// * Functions

// * Util

// * Middleware

// * Requests -->
const router = express.Router();

// * Create a new admin

// * Login Admin

// * Get all merchants

// * Get all customers

// * Requests End -->

module.exports = router;
