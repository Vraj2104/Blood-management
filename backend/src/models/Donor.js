const mongoose = require('mongoose');

const donorSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  bloodType: { type: String, required: true, enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'] },
  date: { type: String, required: true },
  time: { type: String, required: true },
  contact: { type: String, required: true }
});

module.exports = mongoose.model('Donor', donorSchema); 