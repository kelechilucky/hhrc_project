import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <img
              src="/images/church_logo.png"
              alt="Church Logo"
              className="h-16 mb-4"
            />
            <h3 className="text-xl font-semibold mb-4">House Of The Holy Spirit</h3>
            <p className="text-gray-400">
              123 Faith Avenue
              <br />
              Anytown, ST 12345
              <br />
              (123) 456-7890
              <br />
              info@churchexample.com
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <nav className="space-y-2">
              <Link to="/" className="block hover:text-indigo-300">Home</Link>
              <Link to="/about" className="block hover:text-indigo-300">About Us</Link>
              <Link to="/sermons" className="block hover:text-indigo-300">Sermons</Link>
              <Link to="/events" className="block hover:text-indigo-300">Events</Link>
              <Link to="/connect" className="block hover:text-indigo-300">Connect</Link>
            </nav>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {/* Add social media icons/links */}
              <a href="#" className="text-white hover:text-indigo-300">Facebook</a>
              <a href="#" className="text-white hover:text-indigo-300">Instagram</a>
              <a href="#" className="text-white hover:text-indigo-300">YouTube</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;