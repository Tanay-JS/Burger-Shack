// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/BurgerList">Burger</Link>
        </li>
        <li>
          <Link to="/side">Side</Link>
        </li>
        <li>
          <Link to="/drink">Drink</Link>
        </li>
        <li>
            <Link to = "/Contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
