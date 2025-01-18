import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import UserGuid from '../pages/UserGuid';
import CaloriesCalculator from '../pages/CaloriesCalculator';
import ContactUs from '../pages/ContactUs';


const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/user-guide" element={<UserGuid />} />
      <Route path="/calories-calculator" element={<CaloriesCalculator />} />
      <Route path="/contact-us" element={<ContactUs />} />
    </Routes>
  );
};

export default AllRoutes;
