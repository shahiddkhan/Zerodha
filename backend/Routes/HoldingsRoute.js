const express = require("express");
const router = express.Router();
const { HoldingsModel } = require("../model/HoldingsModel");

// Seed Holdings
router.get("/add", async (req, res) => {
  let tempHoldings = [
    { name: "BHARTIARTL", qty: 2, avg: 538.05, price: 541.15, net: "+0.58%", day: "+2.99%" },
    { name: "HDFCBANK", qty: 2, avg: 1383.4, price: 1522.35, net: "+10.04%", day: "+0.11%" },
    { name: "HINDUNILVR", qty: 1, avg: 2335.85, price: 2417.4, net: "+3.49%", day: "+0.21%" },
    // ... add rest of your sample holdings here
  ];

  try {
    for (let item of tempHoldings) {
      let newHolding = new HoldingsModel(item);
      await newHolding.save();
    }
    res.send("✅ Holdings seeded!");
  } catch (err) {
    res.status(500).json({ error: "Failed to seed holdings" });
  }
});

// Get all holdings
router.get("/all", async (req, res) => {
  try {
    const allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch holdings" });
  }
});

module.exports = router;
