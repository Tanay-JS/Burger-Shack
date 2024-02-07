import React from 'react';
import './Drink.css';

const Drink = () => {
  // Sample data: replace this with your actual drinks data
  const drinks = [
    { name: 'Coke', imageUrl: 'https://target.scene7.com/is/image/Target/GUEST_7819ee30-1f78-46ee-a21c-d2096f99ba42?wid=488&hei=488&fmt=pjpeg' },
    { name: 'Sprite', imageUrl: 'https://assets.wakefern.com/is/image/wakefern/4900000764-001?$Mi9Product_detail$' },
    { name: 'Redbull', imageUrl: 'https://images.heb.com/is/image/HEBGrocery/001476509-1' },
  ];

  return (
    <div>
      <h1 className="menu-title">Drinks</h1>
      <div className="drinks-menu">
        {drinks.map((drink, index) => (
          <div key={index} className="drink-item">
            <img
              src={drink.imageUrl}
              alt={drink.name}
              className="drink-image"
            />
            <p>{drink.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Drink;

