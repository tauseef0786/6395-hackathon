import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full text-violet-600 font-sans font-normal px-6 p-2">
      <nav className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/">MyApp</Link>
        </div>

        {/* Hamburger Button */}
        <button
          className="block lg:hidden text-2xl"
          onClick={toggleMenu}
        >
          ☰
        </button>

        {/* Links */}
        <ul
          className={`absolute lg:static top-16 left-0 w-full lg:w-auto lg:flex bg-blue-600 lg:bg-transparent lg:space-x-8 lg:items-center p-4 lg:p-0 transition-all duration-300 ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <li className="py-2 lg:py-0">
            <Link
              to="/"
              className="block lg:inline hover:text-violet-800 hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="py-2 lg:py-0">
            <Link
              to="/about-us"
              className="block lg:inline hover:text-violet-800 hover:underline"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
          </li>
          <li className="py-2 lg:py-0">
            <Link
              to="/user-guide"
              className="block lg:inline hover:text-violet-800 hover:underline"
              onClick={() => setIsOpen(false)}
            >
              User Guide
            </Link>
          </li>
          <li className="py-2 lg:py-0">
            <Link
              to="/calories-calculator"
              className="block lg:inline hover:text-violet-800 hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Calories Calculator
            </Link>
          </li>
          <li className="py-2 lg:py-0">
            <Link
              to="/contact-us"
              className="block lg:inline hover:text-violet-800 hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
