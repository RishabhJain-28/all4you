const router = require("express").Router();

const { Deal, validateDeal } = require("../models/deals");

router.get("/all", async (req, res) => {
  const deals = await Deal.find();
  res.json(deals);
});

router.get("/category/:categoryId", async (req, res) => {
  const { categoryId } = req.params;

  const deals = await Deal.find({ category: categoryId });

  res.json(deals);
});

router.post("/new", async (req, res) => {
  const { error } = validateDeal(req.body);
  if (error) res.status(400).send(error.details[0].message);

  const deal = new Deal(req.body);
  await deal.save();

  res.json(deal);
});

module.exports = router;
