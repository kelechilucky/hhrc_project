import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-between w-full px-6 pt-6 bg-inherit">
      {/* Logo */}
      <img
        className="h-[90px] w-[110px] rounded-3xl "
        src="/images/hhrc_logo.png"
        alt="Logo"
      />

      {/* Navigation */}
      <ul className="flex items-center gap-8 text-[24px] font-medium">
        <li>
          <a
            href="#"
            className="transition-all duration-500 hover:text-[#ADD8E6]"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className="transition-all duration-500 hover:text-[#ADD8E6]"
          >
            Events
          </a>
        </li>
        <li>
          <a
            href="#"
            className="transition-all duration-500 hover:text-[#ADD8E6]"
          >
            Pastor
          </a>
        </li>
        <li>
          <a
            href="#"
            className="transition-all duration-500 hover:text-[#ADD8E6]"
          >
            Sermons
          </a>
        </li>
        <li>
          <a
            href="#"
            className="transition-all duration-500 hover:text-[#ADD8E6]"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#"
            className="transition-all duration-500 hover:text-[#468ba2]"
          >
            Contact
          </a>
        </li>
      </ul>

      {/* Donate Button */}
      <a
        href="#"
        className="text-black px-6 py-2 rounded-full bg-[#ADD8E6] hover:bg-[#468ba2] transition-all duration-300"
      >
        Donate
      </a>
    </div>
  );
};

export default Header;
