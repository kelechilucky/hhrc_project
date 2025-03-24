// src/components/Header.jsx
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-indigo-700 text-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Church Logo and Name */}
          <div className="flex items-center space-x-2">
            <div className="h-10 w-10">
              <img
                src="/images/church_logo.png"  // Replace with the actual path and file name
                alt="Church Logo"
                className="h-full w-full rounded-full object-cover"
              />
            </div>
            <span className="text-xl font-semibold">House Of The Holy Spirit</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="hover:text-indigo-200 transition">Home</a>
            <a href="/about" className="hover:text-indigo-200 transition">About Us</a>
            <a href="/sermons" className="hover:text-indigo-200 transition">Sermons</a>
            <a href="/events" className="hover:text-indigo-200 transition">Events</a>
            <a href="/contact" className="hover:text-indigo-200 transition">Contact</a>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden text-white" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-4">
            <a href="/" className="block hover:text-indigo-200">Home</a>
            <a href="/about" className="block hover:text-indigo-200">About Us</a>
            <a href="/sermons" className="block hover:text-indigo-200">Sermons</a>
            <a href="/events" className="block hover:text-indigo-200">Events</a>
            <a href="/contact" className="block hover:text-indigo-200">Contact</a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
