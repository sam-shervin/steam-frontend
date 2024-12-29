'use client';

import React, { useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import heatmap from "../assets/heatmap.jpg"; // Replace with your heatmap image path.
import { FaArrowDown } from "react-icons/fa";

const HeatmapSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false });

  const scrollToComplaintSection = () => {
    const complaintSection = document.getElementById("complaint");
    if (complaintSection) {
      complaintSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const router = useRouter();
  const handleRaiseTicketClick = () => {
    router.push("/map");
  };

  return (
    <div
      ref={sectionRef}
      className="min-h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-24 py-16 gap-12 bg-gradient-to-b from-[#000000] to-[#0F1C4C] text-white"
    >
      {/* Left Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="flex-1"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 mt-2">
          Heatmap Visualisation
        </h2>
        <p className="text-lg md:text-xl leading-relaxed mb-6">
          Track water quality and pollution levels with interactive heatmaps.
        </p>
        <ul className="list-disc list-inside space-y-2 mb-8 text-lg md:text-xl">
          <li>Colour-coded regions highlight affected areas.</li>
          <li>Detailed insights on hover or click.</li>
          <li>Time sliders to compare changes over time.</li>
        </ul>
        <button onClick={handleRaiseTicketClick} className="bg-[#3F7596] text-white md:ml-12 px-6 py-3 rounded-lg hover:scale-105 transition transform duration-300">
          Generate Pollution Heatmap
        </button>
        {/* Motivational Section */}
        <div className="mt-8 text-center">
          <p className="text-xl md:text-2xl font-semibold text-[#3F7596] mb-2">
            Why limit yourself to basic data visualisation?
          </p>
          <p className="text-lg md:text-xl text-white mb-4">
            Let us step up the game for you
          </p>
          <button
            onClick={scrollToComplaintSection}
            className="p-3 rounded-full bg-[#3F7596] hover:bg-[#2D5674] transition transform duration-300"
          >
            <FaArrowDown className="text-white text-xl" />
          </button>
        </div>
      </motion.div>

      {/* Right Heatmap Image Section */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
        className="flex-1"
      >
        <Image
          src={heatmap}
          alt="Heatmap"
          className="max-w-full h-auto mx-auto rounded-lg shadow-lg"
          width={400}
          height={400}
          priority
        />
      </motion.div>
    </div>
  );
};

export default HeatmapSection;
