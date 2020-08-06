const mongoose = require("mongoose");
const Joi = require("@hapi/joi");

const customerSchema = new mongoose.Schema({
  name: String,
  gender: {
    type: String,
    enum: ["male", "female", "other"],
  },
  email: {
    type: String,
    unique: true,
  },
  phoneNo: {
    type: Number,
    min: 10,
    max: 10,
    unique: true,
  },
  password: String,
  DOB: String,
  age: Number,
  orders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
  resetToken: String,
  resetTokenValidity: Date,
  role: {
    type: String,
    enum: ["admin", "merchant", "outlet", "customer"],
    default: "customer",
  },
});

function validateCustomer(customer) {
  const schema = {
    email: Joi.string().email().required(),
    name: Joi.string().required(),
    gender: Joi.string().required(),
    phoneNo: Joi.string().min(10).max(10).required(),
    DOB: Joi.string().required(),
  };

  return Joi.validate(customer, schema);
}

const Customer = mongoose.model("Customer", customerSchema);

exports.Customer = Customer;
exports.validateCustomer = validateCustomer;
