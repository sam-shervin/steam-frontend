'use client';
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Transition } from "@headlessui/react";
import { FaBars, FaTimes, FaCog, FaRocket } from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-[rgba(25,39,122,1)] rounded-lg m-4 p-4 fixed top-0 left-0 w-full z-50 text-white flex items-center justify-between shadow-lg">
      {/* Logo Section */}
      <Link href="/" className="flex items-center gap-2">
        <Image src={logo} alt="Logo" width={40} height={40} />
        <span className="text-xl font-semibold">Space Explorer</span>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6">
        <Link href="/why-steam" className="hover:underline">
          Why Steam?
        </Link>
        <Menu as="div" className="relative">
          <Menu.Button className="flex items-center gap-2 hover:underline">
            Services <FaCog />
          </Menu.Button>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Menu.Items className="absolute bg-white text-black mt-2 p-2 rounded shadow-lg">
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="/services/option1"
                    className={`${
                      active && "bg-gray-200"
                    } flex items-center gap-2 p-2`}
                  >
                    <FaRocket /> Option 1
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="/services/option2"
                    className={`${
                      active && "bg-gray-200"
                    } flex items-center gap-2 p-2`}
                  >
                    <FaCog /> Option 2
                  </Link>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
        <Link href="/contact" className="hover:underline">
          Contact
        </Link>
        <Link
          href="/get-started"
          className="bg-[rgba(63,117,150,1)] hover:bg-orange-500 px-4 py-2 rounded-lg"
        >
          Get Started
        </Link>
      </div>

      {/* Mobile Menu */}
      <button
        className="md:hidden text-xl z-50"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[rgba(25,39,122,1)] text-white flex flex-col p-4 gap-4 rounded-lg">
          <Link href="/why-steam" className="hover:underline">
            Why Steam?
          </Link>
          <Link href="/services" className="hover:underline">
            Services
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
          <Link
            href="/get-started"
            className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
