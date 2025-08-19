const express = require("express");
const router = express.Router();
const { OrdersModel } = require("../model/OrdersModel");

// Create new order
router.post("/new", async (req, res) => {
  try {
    let newOrder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });

    await newOrder.save();
    res.send("✅ Order saved!");
  } catch (err) {
    res.status(500).json({ error: "Failed to save order" });
  }
});

module.exports = router;
