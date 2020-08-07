const mongoose = require("mongoose");
const Joi = require("@hapi/joi");

const adminSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  phoneNo: Number,
  password: String,
  status: {
    type: String,
    enum: ["active", "inactive"],
  },
  createdOn: String,
  updatedOn: String,
  role: {
    type: String,
    enum: ["admin", "merchant", "outlet", "customer"],
  },
});

const Admin = mongoose.model("Admin", adminSchema);

exports.Admin = Admin;
