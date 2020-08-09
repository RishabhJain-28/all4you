const mongoose = require("mongoose");
const Joi = require("@hapi/joi");
Joi.objectId = require("joi-objectid")(Joi);
const dealSchema = new mongoose.Schema({
  name: String,
  description: String,
  img: {
    type: String,
    required: true,
  },
  outlet: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Outlet",
  },
  price: {
    type: Number,
    required: true,
  },
  commision: {
    //? also percent?? if yes also change validation
    type: Number,
    required: true,
  },
  discountPercent: Number,
  prefernceOrder: {
    type: Number,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  Subcategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Subcategory",
  },
  valide: {
    from: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
  },
  location: {
    type: String,
  },
  createdOn: String,
});
function validateDeal(deal) {
  const schema = Joi.object({
    name: Joi.string(),
    description: Joi.string(),
    img: Joi.string().required(),
    // outlet: Joi.objectId().required(),
    price: Joi.number().required(),
    commision: Joi.number().required(),
    discountPercent: Joi.number(),
    prefernceOrder: Joi.number().required(),
    category: Joi.objectId().required(),
    // Subcategory: Joi.objectId().required(),
    valide: Joi.object({
      from: Joi.string().required(),
      to: Joi.string().required(),
    }),
    createdOn: Joi.string(),
  });

  return schema.validate(deal);
}

const Deal = mongoose.model("Deal", dealSchema);

exports.Deal = Deal;
exports.validateDeal = validateDeal;
