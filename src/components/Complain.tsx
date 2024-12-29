'use client';

import React, { useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import complainImg from "../assets/complain.png"; // Update the image path as needed

const Complain = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false });
  const router = useRouter();

  const handleRaiseTicketClick = () => {
    router.push("/raise-ticket");
  };

  return (
    <div id="complaint" 
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-b from-[#000000] to-[#0F1C4C] flex flex-col items-center px-12 md:px-32 py-16 gap-16 text-white"
    >
      {/* Heading and Subheading */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="text-center space-y-4 -mt-1"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#3F7596]">
          Register complaints through a personalised form
        </h2>
        <p className="text-lg md:text-xl leading-relaxed text-white">
          Empowering users to report water-related issues like pollution,
          stagnation, or contamination effortlessly.
        </p>
      </motion.div>

      {/* Content: Text and Image */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
        className="flex flex-col lg:flex-row justify-between items-center w-full gap-12 -mt-12"
      >
        {/* Left: Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <p className="text-lg md:text-xl leading-relaxed">
            Simply fill out a form with the location, issue type, and upload
            optional photos for better clarity.
          </p>
        </div>

        {/* Right: Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src={complainImg}
            alt="Complaint Image"
            className="max-w-full w-[500px] h-[300px] md:h-[500px] rounded-lg shadow-lg -mt-12"
            width={400}
            height={400}
            priority
          />
        </div>
      </motion.div>

      {/* Centered Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
        className="flex justify-center w-full -mt-10"
      >
        <button onClick={handleRaiseTicketClick}
          className="bg-[#3F7596] text-white font-bold py-3 px-8 rounded-full hover:opacity-90 transition"
        >
          Report Issue
        </button>
      </motion.div>
    </div>
  );
};

export default Complain;
