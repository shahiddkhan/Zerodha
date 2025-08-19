const express = require("express");
const router = express.Router();
const { HoldingsModel } = require("../model/HoldingsModel");

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
