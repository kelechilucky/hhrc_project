import React from 'react';

const HomeHero = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center text-center relative -mt-16 pointer-events-none">
      <h1 className="text-3xl font-semibold w-auto font-serif pointer-events-auto text-[#E2B13C]">
        Welcome to
      </h1>
      <p className="text-6xl mt-2 w-[70%] font-mono leading-tight font-bold pointer-events-auto text-[#F8F5F0]">
        House Of The Holy Spirit
      </p>

      <a
        href="#"
        className="mt-8 text-[#1A365D] font-medium px-8 py-3 rounded-full bg-[#E2B13C] hover:bg-[#7D2935] hover:text-[#F8F5F0] transition-all duration-300 pointer-events-auto"
      >
        Join Us Sunday
      </a>
    </div>
  );
};

export default HomeHero;
