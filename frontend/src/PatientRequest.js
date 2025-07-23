import React, { useState } from 'react';
import './PatientRequest.css';

const PatientRequest = ({ onPatientRequest }) => {
  const [request, setRequest] = useState({
    patientName: '',
    bloodType: '',
    unitsNeeded: '',
    hospital: '',
    contact: '',
  });

  const handleChange = (e) => {
    setRequest({ ...request, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (onPatientRequest && request.bloodType && request.unitsNeeded) {
      await onPatientRequest({
        patientName: request.patientName,
        bloodType: request.bloodType,
        unitsNeeded: parseInt(request.unitsNeeded),
        hospital: request.hospital,
        contact: request.contact
      });
      alert('Blood Request Submitted Successfully!');
      setRequest({ patientName: '', bloodType: '', unitsNeeded: '', hospital: '', contact: '' });
    } else {
      alert('Please fill in all required fields.');
    }
  };

  return (
    <div className="patient-request-container">
      <h2>Patient Blood Request Form</h2>
      <form onSubmit={handleSubmit} className="patient-request-form">
        <input type="text" name="patientName" placeholder="Patient Name" value={request.patientName} onChange={handleChange} required />
        <select name="bloodType" value={request.bloodType} onChange={handleChange} required>
          <option value="">Select Blood Type</option>
          <option value="A+">A+</option>
          <option value="B+">B+</option>
          <option value="O+">O+</option>
          <option value="AB+">AB+</option>
        </select>
        <input type="number" name="unitsNeeded" placeholder="Units Needed" value={request.unitsNeeded} onChange={handleChange} required />
        <input type="text" name="hospital" placeholder="Hospital Name" value={request.hospital} onChange={handleChange} required />
        <input type="text" name="contact" placeholder="Contact Number" value={request.contact} onChange={handleChange} required />
        <button type="submit">Submit Request</button>
      </form>
    </div>
  );
};

export default PatientRequest;
