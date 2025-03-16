import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-between w-full px-6 pt-6 bg-inherit">
      {/* Logo */}
      <img
        className="h-[90px] w-[110px] rounded-3xl"
        src="/images/hhrc_logo.png"
        alt="Logo"
      />

      {/* Navigation */}
      <ul className="flex items-center gap-8 text-[24px] font-medium text-[#F8F5F0]">
        <li>
          <a href="#" className="transition-colors duration-300 ease-in-out hover:text-[#E2B13C]">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="transition-colors duration-300 ease-in-out hover:text-[#E2B13C]">
            Events
          </a>
        </li>
        <li>
          <a href="#" className="transition-colors duration-300 ease-in-out hover:text-[#E2B13C]">
            Pastor
          </a>
        </li>
        <li>
          <a href="#" className="transition-colors duration-300 ease-in-out hover:text-[#E2B13C]">
            Sermons
          </a>
        </li>
        <li>
          <a href="#" className="transition-colors duration-300 ease-in-out hover:text-[#E2B13C]">
            About
          </a>
        </li>
        <li>
          <a href="#" className="transition-colors duration-300 ease-in-out text-[#E2B13C]">
            Contact
          </a>
        </li>
      </ul>

      {/* Donate Button */}
      <a
        href="#"
        className="text-[#1A365D] font-bold px-6 py-2 rounded-full bg-[#E2B13C] hover:bg-[#7D2935] hover:text-[#F8F5F0] transition-all duration-300"
      >
        Donate
      </a>
    </div>
  );
};

export default Header;
