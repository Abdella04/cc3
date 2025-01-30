import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      className="max-w-5xl mx-auto p-10 text-center space-y-12"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Header Section */}
      <motion.section
        className="section-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <h1 className="text-5xl font-extrabold text-white mb-4">About Us</h1>
        <p className="text-xl text-gray-300">
          Welcome to <strong className="text-indigo-400">Travel Morocco</strong>, your ultimate guide to exploring the beauty, culture, and adventure of Morocco!
        </p>
      </motion.section>

      {/* Our Story Section */}
      <motion.section
        className="section-content bg-gray-800 shadow-lg rounded-2xl p-8"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <h2 className="text-3xl font-semibold text-white mb-4">Our Story</h2>
        <p className="text-gray-300 text-lg">
          Founded by passionate travelers, Travel Morocco was born out of love for the diverse landscapes, rich history, and warm hospitality of this incredible country.
        </p>
      </motion.section>

      {/* What We Offer Section */}
      <motion.section
        className="section-content bg-gray-800 shadow-lg rounded-2xl p-8"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <h2 className="text-3xl font-semibold text-white mb-4">What We Offer</h2>
        <ul className="text-gray-300 text-lg list-disc list-inside space-y-2">
          <li>In-depth guides to Morocco’s top attractions and hidden gems</li>
          <li>Travel tips and itineraries tailored to every type of traveler</li>
          <li>Recommendations for authentic Moroccan experiences</li>
        </ul>
      </motion.section>

      {/* Join Us Section */}
      <motion.section
        className="section-content bg-gray-800 shadow-lg rounded-2xl p-8"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <h2 className="text-3xl font-semibold text-white mb-4">Join Us</h2>
        <p className="text-gray-300 text-lg">
          Let us be your trusted companion as you embark on a magical journey through Morocco.
        </p>
      </motion.section>
    </motion.div>
  );
};

export default About;