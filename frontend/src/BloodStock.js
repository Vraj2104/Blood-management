import React from 'react';
import './BloodStock.css';

const BloodStock = ({ bloodStockData }) => {
  return (
    <div className="blood-stock-container">
      <h2>Blood Stock Dashboard</h2>
      <table className="blood-stock-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Blood Type</th>
            <th>Units Available</th>
            <th>Last Updated</th>
          </tr>
        </thead>
        <tbody>
          {bloodStockData.map((stock) => (
            <tr key={stock.id}>
              <td>{stock.id}</td>
              <td>{stock.bloodType}</td>
              <td>{stock.units}</td>
              <td>{stock.lastUpdated}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BloodStock;
