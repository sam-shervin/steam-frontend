import React from "react";
import Image from "next/image";
import hero from "../assets/hero.png";

const HeroSection = () => {
  return (
    <div className="relative bg-black min-h-screen flex items-center justify-center overflow-hidden">
      {/* Overlay Text */}
      <div className="absolute z-10 text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold">Satellite Tracking</h1>
        <p className="text-lg md:text-2xl mt-2">
          for Evaluation and Analysis of Marinery
        </p>
      </div>

      {/* Hero Image */}
      <Image
        src={hero}
        height={100}
        alt="Hero"
        layout="intrinsic"
        objectFit="cover"
        className="w-full h-48"
        priority
      />
    </div>
  );
};

export default HeroSection;
