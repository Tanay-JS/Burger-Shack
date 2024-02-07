// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import BurgerList from './BurgerList';
import Side from './Side';
import Drink from './Drink';
import Welcome from './Welcome';
import Contact from './Contact';
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path = "/" element ={<Welcome/>}/>
        <Route path="/BurgerList" element={<BurgerList />} />
        <Route path="/Side" element={<Side />} />
        <Route path="/Drink" element={<Drink />} />
        <Route path="/Contact" element={<Contact/>} />

      </Routes>
    </Router>
  );
};

export default App;
