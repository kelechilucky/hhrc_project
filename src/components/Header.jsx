import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about', subMenu: [
      { label: 'Our Story', href: '/about/story' },
      { label: 'Leadership', href: '/about/leadership' }
    ]},
    { label: 'Sermons', href: '/sermons' },
    { label: 'Events', href: '/events' },
    { label: 'Contact', href: '/contact' }
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-indigo-700 shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Church Logo and Name */}
          <div className="flex items-center space-x-4">
            <div className="h-12 w-12">
              <img
                src="/images/church_logo.png"
                alt="Church Logo"
                className="h-full w-full rounded-full object-cover transition hover:scale-110"
              />
            </div>
            <span className="text-2xl font-bold text-white">
              House Of The Holy Spirit
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 items-center">
            {menuItems.map((item) => (
              <div key={item.label} className="relative group">
                <a 
                  href={item.href} 
                  className="text-white hover:text-indigo-200 transition flex items-center"
                >
                  {item.label}
                  {item.subMenu && <ChevronDown size={16} className="ml-1" />}
                </a>
                {item.subMenu && (
                  <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2 py-2 min-w-[200px]">
                    {item.subMenu.map((subItem) => (
                      <a
                        key={subItem.label}
                        href={subItem.href}
                        className="block px-4 py-2 text-gray-800 hover:bg-indigo-50"
                      >
                        {subItem.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white" 
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-4 bg-indigo-700">
            {menuItems.map((item) => (
              <div key={item.label}>
                <a 
                  href={item.href} 
                  className="block text-white hover:text-indigo-200 py-2"
                >
                  {item.label}
                </a>
                {item.subMenu && item.subMenu.map((subItem) => (
                  <a
                    key={subItem.label}
                    href={subItem.href}
                    className="block text-white hover:text-indigo-200 py-2 pl-4 text-sm"
                  >
                    {subItem.label}
                  </a>
                ))}
              </div>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;