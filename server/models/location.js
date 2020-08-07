const mongoose = require("mongoose");
const Joi = require("@hapi/joi");

const locationSchema = new mongoose.Schema({
  location: String,
});

function validateLocation(req) {
  const schema = {
    location: Joi.string().required(),
  };

  return Joi.validate(req, schema);
}

const Location = mongoose.model("Location", locationSchema);

exports.Location = Location;
exports.validateLocation = validateLocation;
