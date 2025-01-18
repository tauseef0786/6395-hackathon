import React from 'react';

const UserGuid = () => {
  return (
    <div className="user-guid">
      <h1>User Guide</h1>
      <p>Welcome to the User Guide! Here, you'll find all the information you need to navigate and use our platform effectively.</p>
      <ul>
        <li><strong>Home:</strong> Navigate through the homepage to explore our services.</li>
        <li><strong>Calories Calculator:</strong> Use this feature to calculate and track your calorie intake.</li>
        <li><strong>Contact Us:</strong> Get in touch with us for support or inquiries.</li>
        {/* Add more sections as necessary */}
      </ul>
    </div>
  );
};

export default UserGuid;
