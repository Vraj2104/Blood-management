import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import BloodStock from './BloodStock';
import DonationRequest from './DonationRequest';
import PatientRequest from './PatientRequest';
import DonorSchedule from './DonorSchedule';
import './App.css';
import { getBloodStock, addDonation, addPatientRequest, addDonorSchedule } from './api';

const NavLink = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link 
      to={to} 
      className={`nav-link ${isActive ? 'active' : ''}`}>
      {children}
    </Link>
  );
};

const App = () => {
  const [bloodStockData, setBloodStockData] = useState([]);

  useEffect(() => {
    fetchBloodStock();
  }, []);

  const fetchBloodStock = async () => {
    const data = await getBloodStock();
    setBloodStockData(data);
  };

  const handleDonation = async (donation) => {
    await addDonation(donation);
    fetchBloodStock();
  };

  const handlePatientRequest = async (request) => {
    await addPatientRequest(request);
    fetchBloodStock();
  };

  const handleDonorSchedule = async (schedule) => {
    await addDonorSchedule(schedule);
  };

  return (
    <Router>
      <div>
        <nav className="navbar">
          <div className="nav-container">
            <div className="logo">
              <span className="logo-icon">🩸</span>
              <span className="brand-text">Blood Management</span>
            </div>
            <div className="nav-links">
              <NavLink to="/">Blood Stock</NavLink>
              <NavLink to="/donation-request">Donation Request</NavLink>
              <NavLink to="/patient-request">Patient Request</NavLink>
              <NavLink to="/donor-schedule">Donor Schedule</NavLink>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<BloodStock bloodStockData={bloodStockData} />} />
          <Route path="/donation-request" element={<DonationRequest onDonationSubmit={handleDonation} />} />
          <Route path="/patient-request" element={<PatientRequest onPatientRequest={handlePatientRequest} />} />
          <Route path="/donor-schedule" element={<DonorSchedule onSchedule={handleDonorSchedule} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
