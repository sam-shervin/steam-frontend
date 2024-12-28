'use client'

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import globe from "../assets/earth.png";

const GlobeComponent = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div
      ref={ref}
      className="min-h-[70vh] flex flex-col md:flex-row items-center justify-center text-white px-8 md:px-24 py-16 gap-12"
    >
      {/* Left Section */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="text-center md:text-left flex-1"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          STEAM addresses the challenge of water pollution.
        </h2>
        <p className="text-lg md:text-xl leading-relaxed">
          Combining satellite and HAPS data with machine learning to monitor, visualise, and report pollution levels across oceans.
        </p>
      </motion.div>

      {/* Right Section */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
        className="flex-1"
      >
        <Image
          src={globe}
          alt="Earth"
          className="max-w-full h-auto mx-auto"
          width={300}
          height={300}
          priority
        />
      </motion.div>
    </div>
  );
};

export default GlobeComponent;
