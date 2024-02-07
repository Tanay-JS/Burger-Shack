import React, { useState } from 'react';
import './BurgerList.css'; // Import the CSS file

function BurgerList() {

    const burgers = [
        { id: 1, name: 'Classic Burger', imageUrl: 'https://media.istockphoto.com/id/157696235/photo/simple-meat-burger-isolated-on-white.jpg?s=612x612&w=0&k=20&c=zzFK5ChMFy0ZV8jVJRdPHk9muw7dGnLnKPvc8itIdPY=',description: 'A juicy classic beef burger with lettuce, tomato, and onions.' },
        { id: 2, name: 'Cheeseburger', imageUrl: 'https://media.istockphoto.com/id/1319396810/photo/delicious-grilled-burger-isolated-on-white-background-fast-food-hamburger-perfect-classic.jpg?s=612x612&w=0&k=20&c=oGQuQAGp0glpFjBUEU7MS5O30LaJ3Bied70w1G0i-v8=', description: 'A classic beef burger topped with melted cheese, lettuce, tomato, and onions.' },
        { id: 3, name: 'Bacon Burger', imageUrl: 'https://media.istockphoto.com/id/520215281/photo/bacon-burger.jpg?s=612x612&w=0&k=20&c=oeN1zlDU0_CiXXbSaH9ugzdUqaUmaUXUJXmLn-pw4jM=', description: 'A flavorful beef burger topped with crispy bacon, lettuce, tomato, and onions.' },
        
    ];

    return (
        <div>
            <h1 className="menu-title">Burgers List</h1>
            <div className="burgers-menu">
        {burgers.map((burger, index) => (
          <div key={index} className="burger-item">
            <img
              src={burger.imageUrl}
              alt={burger.name}
              className="burger-image"
            />
            <p>{burger.name}</p>
          </div>
        ))}
      </div>
    </div>
    );
}

export default BurgerList;