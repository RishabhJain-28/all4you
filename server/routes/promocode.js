const express = require("express");

// * NPM Packages
const _ = require("lodash");

// * Models
const { Promocode, validatePromocode } = require("../models/promocode");
const { Order } = require("../models/orders");

// * Functions

// * Middleware

// * Requests -->

const router = express.Router();

// * Get all Promocodes
// * Done
router.get("/all", async (req, res) => {
  try {
    var promocode = await Promocode.find({}).exec();
    if (!promocode) return res.send("No promocodes found.");

    res.send(promocode);
  } catch (error) {
    console.log(error);
    res.send("Something went wrong.");
  }
});

// * Get a single promocode
// * Done
router.get("/view/:id", async (req, res) => {
  try {
    var promocode = await Promocode.findById(req.params.id)
      .populate("forDeals, forUsers")
      .exec();
    if (!promocode) return res.send("No promocodes found.");

    res.send(promocode);
  } catch (error) {
    console.log(error);
    res.send("Something went wrong.");
  }
});

// * Create new Promocode
// * Done
router.post("/new", async (req, res) => {
  try {
    const { error } = validatePromocode(req.body);
    if (error) return res.send(error.details[0].message);

    var reqBody = _.omit(req.body, ["validFrom", "validTill"]);

    var newPromocode = await Promocode.create({
      ...reqBody,
      validFrom: new Date(req.body.validFrom.toString()),
      validTill: new Date(req.body.validTill.toString()),
    });

    res.send(newPromocode);
  } catch (error) {
    console.log(error);
    res.send("Something went wrong.");
  }
});

// * Edit a promocode
// * Done
router.put("/edit/:id", async (req, res) => {
  try {
    const { error } = validatePromocode(req.body);
    if (error) return res.send(error.details[0].message);

    var reqBody = _.omit(req.body, ["validFrom", "validTill"]);

    var updatedPromocode = await Promocode.findByIdAndUpdate(
      req.params.id,
      {
        ...reqBody,
        validFrom: new Date(req.body.validFrom.toString()),
        validTill: new Date(req.body.validTill.toString()),
      },
      { new: true }
    );

    res.send(updatedPromocode);
  } catch (error) {
    console.log(error);
    res.send("Something went wrong.");
  }
});

// * Delete a promocode
router.delete("/delete/:id", async (req, res) => {
  try {
    var promocode = await Promocode.findByIdAndRemove(req.params.id).exec();

    res.send(promocode);
  } catch (error) {
    console.log(error);
    res.send("Something went wrong.");
  }
});

// * Apply promocode
// TODO
router.post("/apply", async (req, res) => {
  /*
    req.body => [
      {deal: _id, merchant: _id, price: number},
      {deal: _id, merchant: _id, price: number}, 
      {deal: _id, merchant: _id, price: number}...,
      totalPrice: Number
    ]
  */

  try {
    var promocode = await Promocode.findOne({
      code: req.body.code.trim(),
      validFrom: { $gte: new Date() },
      validTill: { $lte: new Date() },
    });

    if (!promocode) return res.send("Promocode is invalid or has expired.");

    if (
      promocode.isUserSpecific === true &&
      promocode.forUsers.includes(req.body.customer) === false
    )
      return res.send("Promocode is invalid.");

    if (
      promocode.isUserSpecific === false ||
      (promocode.isUserSpecific === true &&
        promocode.forUsers.includes(req.body.customer) === true)
    ) {
      /*
      check if promocode is valid on deal
      
        If promocode is NOT deal specific
          If totalPrice is in min and max bounds
            Apply discount on cart
          else 
            If totalPrice < minPrice
              Cart value is less than the required value
            If totalPrice > maxPrice
              Cart value exceeds the permited value of promocode 

        If promocode is deal specific and deal is not in cart
          Invalid promocode
          
        If promocode is deal specific and deal is in the cart
          Apply discount on that deal
      */
    }
  } catch (error) {
    console.log(error);
    res.send("Something went wrong.");
  }
});

// * Remove promocode
// TODO
router.post("/remove", async (req, res) => {});

// * Requests End -->
