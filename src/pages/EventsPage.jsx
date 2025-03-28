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

const EventsPage = () => {
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
        <h1 className="text-4xl font-bold text-center mb-8">Upcoming Events</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Event cards will go here */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold">Event Name</h3>
            <p className="text-gray-600">Date and Time</p>
            <p className="mt-2">Brief event description</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EventsPage;