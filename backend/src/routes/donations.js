const express = require('express');
const router = express.Router();
const Donation = require('../models/Donation');

// Get all donations
router.get('/', async (req, res) => {
  const donations = await Donation.find();
  res.json(donations);
});

// Add new donation
router.post('/', async (req, res) => {
  const { donorName, age, bloodType, contact } = req.body;
  const donation = new Donation({ donorName, age, bloodType, contact });
  await donation.save();
  res.status(201).json(donation);
});

// Update a donation by ID
router.put('/:id', async (req, res) => {
  try {
    const { donorName, age, bloodType, contact } = req.body;
    const updatedDonation = await Donation.findByIdAndUpdate(
      req.params.id,
      { donorName, age, bloodType, contact },
      { new: true, runValidators: true }
    );
    if (!updatedDonation) {
      return res.status(404).json({ message: 'Donation not found' });
    }
    res.json(updatedDonation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router; 