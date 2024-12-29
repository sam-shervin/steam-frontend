'use client';

import React from "react";
import Image from "next/image";
import steamLogo from "../assets/logo.png"; // Replace with the actual logo path

const ContactUs = () => {
  return (
    <div id="contact" className="min-h-screen bg-black flex flex-col items-center justify-center text-white px-6 py-16">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-[#3F7596] text-center mb-8">
        Have further queries? Reach out to us
      </h2>

      {/* Contact Box */}
      <div className="w-full max-w-3xl bg-gradient-to-b from-[#0C114D82] to-[#1C28B382] rounded-lg shadow-lg p-8 flex flex-col md:flex-row items-center">
        {/* Left Side: Logo */}
        <div className="w-full md:w-1/3 flex justify-center mb-8 md:mb-0">
          <Image
            src={steamLogo}
            alt="Steam Logo"
            width={120}
            height={120}
            className="rounded-md"
            priority
          />
        </div>

        {/* Right Side: Form */}
        <div className="w-full md:w-2/3 space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-semibold mb-2">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              className="w-full bg-transparent border border-gray-400 rounded-md py-2 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#3F7596]"
            />
          </div>

          {/* Email Address */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-2">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email address"
              className="w-full bg-transparent border border-gray-400 rounded-md py-2 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#3F7596]"
            />
          </div>

          {/* Query/Feedback */}
          <div>
            <label
              htmlFor="query"
              className="block text-sm font-semibold mb-2"
            >
              Query/Feedback
            </label>
            <textarea
              id="query"
              placeholder="Enter your query or feedback"
              className="w-full bg-transparent border border-gray-400 rounded-md py-2 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#3F7596]"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button className="bg-[#3F7596] text-white font-bold py-2 px-8 rounded-full hover:opacity-90 transition">
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* Footer Line */}
      <p className="mt-8 text-center text-sm md:text-base">
        Stay informed, stay connected and protect what remains
      </p>
    </div>
  );
};

export default ContactUs;
