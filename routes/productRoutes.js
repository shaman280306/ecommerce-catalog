const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

router.post("/add", async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.json(product);
});

router.get("/ratings", async (req, res) => {
  const result = await Product.aggregate([
    { $unwind: "$reviews" },
    {
      $group: {
        _id: "$category",
        avgCategoryRating: { $avg: "$reviews.rating" }
      }
    }
  ]);
  res.json(result);
});

module.exports = router;