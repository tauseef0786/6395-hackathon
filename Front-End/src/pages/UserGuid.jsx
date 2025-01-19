import React from 'react';

const UserGuid = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white text-violet-900 p-8">
      <div className="text-center max-w-3xl p-6 rounded-lg bg-white bg-opacity-90 backdrop-blur-md">
        <h1 className="text-4xl font-bold mb-4">User Guide</h1>
        <p className="text-lg mb-4">
          Welcome to the User Guide! Here, you'll find all the information you need to navigate and use our platform effectively.
        </p>
        <ul className="text-left mb-4 space-y-2">
          <li>
            <strong>Home:</strong> Navigate through the homepage to explore our services.
          </li>
          <li>
            <strong>Calories Calculator:</strong> Use this feature to calculate and track your calorie intake.
          </li>
          <li>
            <strong>Contact Us:</strong> Get in touch with us for support or inquiries.
          </li>
          {/* Add more sections as necessary */}
        </ul>
      </div>
    </div>
  );
};

export default UserGuid;
