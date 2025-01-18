import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'Mahesh',
    image: '/assets/mahesh.jpg', // Replace with your image link
    github: 'https://github.com/mahesh-pagrut',
    instagram: 'https://www.instagram.com/imaxvibe?igsh=bHJkcG8yM2ZnNmEx',
    linkedin: 'https://www.linkedin.com/in/mahesh-pagrut-%F0%9F%8E%AE-887535274/',
  },
  {
    name: 'Md. Touseef',
    image: '/assets/touseef.jpg', // Replace with your image link
    github: 'https://github.com/touseef',
    instagram: 'https://www.instagram.com/touseef',
    linkedin: 'https://www.linkedin.com/in/touseef',
  },
  {
    name: 'Deepesh',
    image: '/assets/deepesh.jpg', // Replace with your image link
    github: 'https://github.com/deepesh',
    instagram: 'https://www.instagram.com/deepesh',
    linkedin: 'https://www.linkedin.com/in/deepesh',
  },
];

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-white p-8 text-violet-700 flex items-center justify-center">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg">Feel free to reach out with any questions or feedback.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{member.name}</h2>
              <div className="flex justify-center space-x-6">
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-300 transition-transform duration-300"
                  style={{ fontSize: 24 }}
                >
                  <FaGithub className="hover:scale-125" />
                </a>
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-pink-400 transition-transform duration-300"
                  style={{ fontSize: 24 }}
                >
                  <FaInstagram className="hover:scale-125" />
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-transform duration-300"
                  style={{ fontSize: 24 }}
                >
                  <FaLinkedin className="hover:scale-125" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
