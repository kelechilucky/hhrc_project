import React, { useState } from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, x: '-100vw' },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: '100vw' }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5
};

const GivePage = () => {
  const [donationAmount, setDonationAmount] = useState('');

  const handleDonationChange = (e) => {
    setDonationAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add donation submission logic
    console.log(`Donation amount: $${donationAmount}`);
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="min-h-screen flex flex-col"
    >
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Give & Support</h1>
        <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-8">
          <p className="text-center text-gray-700 mb-6">
            Your generous support helps us continue our mission and community work.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Donation Amount</label>
              <input
                type="number"
                name="donation"
                value={donationAmount}
                onChange={handleDonationChange}
                className="w-full px-3 py-2 border rounded-lg"
                min="1"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
            >
              Donate Now
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default GivePage;