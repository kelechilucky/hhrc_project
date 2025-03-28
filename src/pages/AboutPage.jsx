// src/pages/AboutPage.jsx
import React from 'react';
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

const AboutPage = () => {
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
        <h1 className="text-4xl font-bold text-center mb-8">About Our Church</h1>
        <div className="max-w-4xl mx-auto">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-700">
              Detailed mission statement about your church's purpose and community impact.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Our Leadership</h2>
            {/* Add leadership team details */}
          </section>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;