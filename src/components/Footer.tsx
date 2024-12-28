'use client';

import React from 'react';
import Image from 'next/image';
import steamLogo from '../assets/logo.png'; // Replace with the actual logo path

const Footer = () => {
  const categories = ['First Link', 'Second Link', 'Third Link', 'Fourth Link'];
  const socialMedia = [
    { href: '#', icon: 'facebook', aria: 'Facebook' },
    { href: '#', icon: 'twitter', aria: 'Twitter' },
    { href: '#', icon: 'instagram', aria: 'Instagram' },
    { href: '#', icon: 'linkedin', aria: 'LinkedIn' },
  ];

  return (
    <footer className="text-white body-font bg-[#0C114D]">
      <div className="container px-5 py-10 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        {/* Logo Section */}
        <div className="w-64 flex-shrink-0 md:ml-8 ml-8 text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image
              src={steamLogo}
              alt="Steam Logo"
              width={120}
              height={120}
              className="rounded-md"
              priority
            />
          </a>
          <p className="mt-2 text-sm text-white">
            Satellite Tracking for Evaluation and Analysis of Marinery
          </p>
        </div>

        {/* Categories */}
        <div className="lg:w-1/4 md:w-1/2 w-full px-4 md:pl-20 md:mt-0 mt-10 md:text-left text-center">
          <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
            CATEGORIES
          </h2>
          <nav className="list-none mb-10">
            {categories.map((link, index) => (
              <li key={index}>
                <a className="text-white hover:text-gray-200">{link}</a>
              </li>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div className="lg:w-1/4 md:w-1/2 w-full mr-0 md:mt-0 mt-10 md:text-right text-center">
          <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
            CONTACT
          </h2>
          <p className="text-white">steam@pechacks.com</p>
          <p className="text-white mt-2">+91 90000 12365</p>
        </div>
      </div>

      {/* Social Media */}
      <div className="bg-gray-900">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">© 2024 STEAM</p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            {socialMedia.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.aria}
                className="text-gray-500 hover:text-white ml-3"
              >
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  {/* Example SVGs for icons */}
                  {social.icon === 'facebook' && (
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  )}
                  {social.icon === 'twitter' && (
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  )}
                </svg>
              </a>
            ))}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
