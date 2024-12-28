'use client';
import React from "react";
import Image from "next/image";
import hero from "../assets/hero2.png";

const HeroSection = () => {
  return (
    <div className="relative bg-black min-h-screen flex flex-col justify-start items-center mt-[4rem]">
      {/* Overlay Text */}
      <div className="z-10 text-[#98cbff] text-center">
        <h1 className="text-4xl md:text-5xl font-bold">Satellite Tracking</h1>
        <p className="text-lg md:text-4xl font-bold mt-2">
          for Evaluation and Analysis of Marinery
        </p>
      </div>

      {/* Hero Image */}
      <Image
        src={hero}
        alt="Hero"
        width={100}
        height={100}
        className="w-screen object-cover h-[60vh] mt-12"
      />
    </div>
  );
};

export default HeroSection;
