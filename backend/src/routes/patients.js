const express = require('express');
const router = express.Router();
const Patient = require('../models/Patient');

// Get all patient requests
router.get('/requests', async (req, res) => {
  const requests = await Patient.find();
  res.json(requests);
});

// Add new patient request
router.post('/requests', async (req, res) => {
  const { patientName, bloodType, unitsNeeded, hospital, contact } = req.body;
  const request = new Patient({ patientName, bloodType, unitsNeeded, hospital, contact });
  await request.save();
  res.status(201).json(request);
});

module.exports = router; 