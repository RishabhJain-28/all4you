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
const { Merchant } = require("../models/merchant");

// * Functions

// * Util
const smtpTransport = require("../config/nodemailerSetup");
const router = require("./customer");

// * Middleware

// * Requests -->

// * Create a New Merchant ( A )
router.post("/new", async(req, res) => {
    
});

// * Update Merchant ( Basic ) ( M )

// * Update Merchant ( Complete ) ( A )

// * Login Merchant ( M )

// * Requests End -->

module.exports = router;
