import React, { useState } from 'react';
import './DonationRequest.css';

const DonationRequest = ({ onDonationSubmit }) => {
  const [form, setForm] = useState({
    name: '',
    age: '',
    bloodType: '',
    contact: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (onDonationSubmit && form.bloodType) {
      await onDonationSubmit({
        donorName: form.name,
        age: parseInt(form.age),
        bloodType: form.bloodType,
        contact: form.contact
      });
    }
    alert("Donation Request Submitted! Blood stock has been updated.");
    setForm({ name: '', age: '', bloodType: '', contact: '' });
  };

  return (
    <div className="donation-request-container">
      <h2>Donation Request Form</h2>
      <form onSubmit={handleSubmit} className="donation-form">
        <input type="text" name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required />
        <input type="number" name="age" placeholder="Age" value={form.age} onChange={handleChange} required />
        <select name="bloodType" value={form.bloodType} onChange={handleChange} required>
          <option value="">Select Blood Type</option>
          <option value="A+">A+</option>
          <option value="B+">B+</option>
          <option value="O+">O+</option>
          <option value="AB+">AB+</option>
        </select>
        <input type="text" name="contact" placeholder="Contact Number" value={form.contact} onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DonationRequest;
