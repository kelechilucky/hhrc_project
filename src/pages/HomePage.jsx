// src/pages/HomePage.jsx
import React from 'react';
import Header from '../components/Header';
import HomeHero from '../components/HomeHero';

const HomePage = () => {
  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-center"
      style={{
        backgroundImage: "url('/background2.jpg')", // Use the image path from your public folder
      }}
    >
      <Header />
      <HomeHero />

      <main className="flex-grow">
        {/* Welcome Section */}
        <section className="py-16 bg-white bg-opacity-80 backdrop-blur-md">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Welcome to House Of The Holy Spirit
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                We are a vibrant, loving community dedicated to sharing God's love and grace
                with everyone. No matter where you are on your spiritual journey, you're welcome here.
              </p>
              <a
                href="/about"
                className="inline-block px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition"
              >
                Learn More About Us
              </a>
            </div>
          </div>
        </section>

        {/* Weekly Activities Section */}
        <section className="py-16 bg-gradient-to-br from-indigo-100 via-white to-indigo-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Weekly Activities</h2>

            {/* Add Weekly Activities grid here */}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <img
                src="/path/to/your-logo.png"
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
                info@HHRCchurch.example
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              {/* Quick Links List */}
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                {/* Social icons */}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
