const express = require("express");
const router = express.Router();
const { PositionsModel } = require("../model/PositionsModel");

// Seed Positions
router.get("/add", async (req, res) => {
  let tempPositions = [
    { product: "CNC", name: "EVEREADY", qty: 2, avg: 316.27, price: 312.35, net: "+0.58%", day: "-1.24%", isLoss: true },
    { product: "CNC", name: "JUBLFOOD", qty: 1, avg: 3124.75, price: 3082.65, net: "+10.04%", day: "-1.35%", isLoss: true },
  ];

  try {
    for (let item of tempPositions) {
      let newPosition = new PositionsModel(item);
      await newPosition.save();
    }
    res.send("✅ Positions seeded!");
  } catch (err) {
    res.status(500).json({ error: "Failed to seed positions" });
  }
});

// Get all positions
router.get("/all", async (req, res) => {
  try {
    const allPositions = await PositionsModel.find({});
    res.json(allPositions);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch positions" });
  }
});

module.exports = router;
