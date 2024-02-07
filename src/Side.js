

import React from 'react';
import './Side.css';

const Side = () => {
  // Sample data: replace this with your actual drinks data
  const Side = [
    { name: 'Garlic Bread', imageUrl: 'https://as1.ftcdn.net/v2/jpg/02/50/60/84/1000_F_250608456_QEtEplql6a0YFD3EmLsavHF9Ka34jvg0.jpg' },
    { name: 'French Fries', imageUrl: 'https://static.vecteezy.com/system/resources/previews/025/062/054/original/french-fries-on-white-bowl-isolated-on-transparent-background-fried-fast-food-snack-isolated-food-photography-junk-food-fried-potatoes-free-png.png' },
    { name: 'Cookie', imageUrl: 'https://img.freepik.com/free-photo/chocolate-chip-cookies-isolated-white-background-ai-generative_123827-24070.jpg' },
  ];

  return (
    <div>
      <h1 className="menu-title">Sides</h1>
      <div className="drinks-menu">
        {Side.map((Side, index) => (
          <div key={index} className="side-item">
            <img
              src={Side.imageUrl}
              alt={Side.name}
              className="side-image"
            />
            <p>{Side.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Side;

