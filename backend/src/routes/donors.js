const express = require('express');
const router = express.Router();
const Donor = require('../models/Donor');

// Get all donor schedules
router.get('/schedule', async (req, res) => {
  const schedules = await Donor.find();
  res.json(schedules);
});

// Add new donor schedule
router.post('/schedule', async (req, res) => {
  const { name, bloodType, date, time, contact } = req.body;
  const schedule = new Donor({ name, bloodType, date, time, contact });
  await schedule.save();
  res.status(201).json(schedule);
});

module.exports = router; 