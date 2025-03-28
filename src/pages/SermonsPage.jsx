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

const SermonsPage = () => {
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
        <h1 className="text-4xl font-bold text-center mb-8">Our Sermons</h1>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Sermon cards will go here */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold">Sermon Title</h3>
            <p className="text-gray-600">Date and Speaker</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SermonsPage;