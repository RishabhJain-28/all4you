const mongoose = require("mongoose");
const Joi = require("@hapi/joi");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  subcategories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subcategory",
    },
  ],
});

function validateCategory(category) {
  const schema = {
    name: Joi.string(),
  };

  return Joi.validate(category, schema);
}

const Category = mongoose.model("Category", categorySchema);

exports.Category = Category;
exports.validateCategory = validateCategory;
