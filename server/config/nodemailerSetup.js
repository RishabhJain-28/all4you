// * NPM packages
const nodemailer = require("nodemailer");

var smtpTransport = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "zqexaf@gmail.com",
    pass: "randompasswordthatiwillforget",
  },
});

module.exports = smtpTransport;
