import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        {/* Footer Top */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-300">
              At MyApp, we are committed to delivering cutting-edge solutions that simplify your everyday tasks and enhance productivity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-4">
              <ul>
                <li>
                  <Link to="/" className="text-gray-300 hover:text-blue-400">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about-us" className="text-gray-300 hover:text-blue-400">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/user-guide" className="text-gray-300 hover:text-blue-400">
                    User Guide
                  </Link>
                </li>
                <li>
                  <Link to="/calories-calculator" className="text-gray-300 hover:text-blue-400">
                    Calories Calculator
                  </Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link to="/contact-us" className="text-gray-300 hover:text-blue-400">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/ai-with-image" className="text-gray-300 hover:text-blue-400">
                    AI with Image
                  </Link>
                </li>
                <li>
                  <Link to="/ai-with-text" className="text-gray-300 hover:text-blue-400">
                    AI with Text
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-300">Email: support@myapp.com</p>
            <p className="text-gray-300">Phone: +1 234 567 890</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-4">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} MyApp. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-gray-300 hover:text-blue-400">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-gray-300 hover:text-blue-400">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
