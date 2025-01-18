import React from 'react';
import hero from '../assets/hero.png';
import hero1 from '../assets/hero1.png';

const HomePage = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-start"
      style={{
        backgroundImage: `url(${hero1})`, // Default to mobile hero image
      }}
    >
      {/* Desktop version with hero1.png */}
      <div className="hidden lg:block" style={{ backgroundImage: `url(${hero})` }} />
      
      <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg max-w-sm w-full ml-10">
        <p className="text-3xl font-semibold mb-4 text-gray-800">Welcome to Our Website</p>
        <p className="text-lg mb-6 text-gray-600">Explore our amazing features and discover more!</p>
        <button
          className="px-6 py-3 bg-violet-600 text-white rounded hover:bg-violet-700"
          onClick={() => alert('Explore Now clicked!')}
        >
          Explore Now
        </button>
      </div>
    </div>
  );
};

export default HomePage;
