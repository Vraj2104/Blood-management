const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  patientName: { type: String, required: true, trim: true },
  bloodType: { type: String, required: true, enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'] },
  unitsNeeded: { type: Number, required: true, min: 1 },
  hospital: { type: String, required: true },
  contact: { type: String, required: true },
  requestDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Patient', patientSchema); 