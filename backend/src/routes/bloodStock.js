const express = require('express');
const router = express.Router();
const BloodStock = require('../models/BloodStock');

// Get all blood stock
router.get('/', async (req, res) => {
  const stocks = await BloodStock.find();
  res.json(stocks);
});

// Add or update blood stock
router.post('/', async (req, res) => {
  const { bloodType, units } = req.body;
  let stock = await BloodStock.findOne({ bloodType });
  if (stock) {
    stock.units += units;
    stock.lastUpdated = new Date();
    await stock.save();
    return res.json(stock);
  } else {
    stock = new BloodStock({ bloodType, units });
    await stock.save();
    return res.status(201).json(stock);
  }
});

// Get critical stock (units <= 5)
router.get('/critical', async (req, res) => {
  const critical = await BloodStock.find({ units: { $lte: 5 } });
  res.json(critical);
});

module.exports = router; 