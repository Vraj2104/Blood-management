const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
  donorName: { type: String, required: true, trim: true },
  age: { type: Number, required: true, min: 18, max: 65 },
  bloodType: { type: String, required: true, enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'] },
  contact: { type: String, required: true },
  donationDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Donation', donationSchema); 