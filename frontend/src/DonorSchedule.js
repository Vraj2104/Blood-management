import React, { useState } from 'react';
import './DonorSchedule.css';

const DonorSchedule = ({ onSchedule }) => {
  const [form, setForm] = useState({
    name: '',
    bloodType: '',
    date: '',
    time: '',
    contact: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (onSchedule) {
        await onSchedule(form);
      }
      alert('Donation Scheduled Successfully!');
      setForm({ name: '', bloodType: '', date: '', time: '', contact: '' });
    } catch (error) {
      console.error('Failed to schedule donation', error);
      alert('Failed to schedule donation. Please try again.');
    }
  };

  return (
    <div className="donor-schedule-container">
      <h2>Schedule Blood Donation</h2>
      <form onSubmit={handleSubmit} className="donor-schedule-form">
        <input type="text" name="name" placeholder="Donor Name" value={form.name} onChange={handleChange} required />
        <select name="bloodType" value={form.bloodType} onChange={handleChange} required>
          <option value="">Select Blood Type</option>
          <option value="A+">A+</option>
          <option value="B+">B+</option>
          <option value="O+">O+</option>
          <option value="AB+">AB+</option>
        </select>
        <input type="date" name="date" value={form.date} onChange={handleChange} required />
        <input type="time" name="time" value={form.time} onChange={handleChange} required />
        <input type="text" name="contact" placeholder="Contact Number" value={form.contact} onChange={handleChange} required />
        <button type="submit">Schedule</button>
      </form>
    </div>
  );
};

export default DonorSchedule;
