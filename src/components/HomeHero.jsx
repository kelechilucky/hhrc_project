// src/components/HomeHero.jsx
import React from 'react';

const HomeHero = () => {
  return (
    <section
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/background2.jpg')", // Image from public folder
      }}
    >
      <div className="text-center text-white p-8 bg-black bg-opacity-50 rounded-lg">
        <h1 className="text-5xl font-bold mb-6">
          Welcome to House Of The Holy Spirit
        </h1>
        <p className="text-lg mb-8">
          Discover God's love, grow in faith, and become part of our loving
          community.
        </p>
        <a
          href="/about"
          className="inline-block px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition"
        >
          Learn More
        </a>
      </div>
    </section>
  );
};

export default HomeHero;
