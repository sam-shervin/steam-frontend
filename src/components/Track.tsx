"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import track from "../assets/track.png"; // Update the image path as needed

const Track = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false });

  return (
    <div
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

        {/* Right: Image */}
        <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
        className="flex-1"
      >
        <Image
          src={track}
          alt="Track"
          className="flex justify-center w-[60vw]"
          width={200}
          height={200}
          priority
        />
      </motion.div>
    </div>
  );
};

export default Track;
