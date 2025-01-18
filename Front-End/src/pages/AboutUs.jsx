import React from 'react';

const AboutUs = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white text-violet-900 p-8">
      <div className="text-center max-w-3xl p-6 rounded-lg bg-white bg-opacity-90 backdrop-blur-md">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg mb-4">
          We are a team of passionate individuals dedicated to providing the best culinary experiences. Our goal is to provide easy-to-follow guides and resources to help you make better food choices.
        </p>
        {/* You can add more content about your company/team here */}
      </div>
    </div>
  );
};

export default AboutUs;
