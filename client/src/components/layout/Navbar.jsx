"use client";
import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-300 py-4 px-6 sticky top-0 z-10">
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="rounded-full p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-cat h-8 w-8 primary-color"
              data-lov-id="src/components/Navbar.tsx:16:14"
              data-lov-name="Cat"
              data-component-path="src/components/Navbar.tsx"
              data-component-line="16"
              data-component-file="Navbar.tsx"
              data-component-name="Cat"
              data-component-content="%7B%22className%22%3A%22h-8%20w-8%20text-pet-primary%22%7D"
            >
              <path d="M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z"></path>
              <path d="M8 14v.5"></path>
              <path d="M16 14v.5"></path>
              <path d="M11.25 16.25h1.5L12 17l-.75-.75Z"></path>
            </svg>
          </div>
          <span className="text-[#233742] font-bold md:text-2xl ">Paw Pal</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/find-sitters"
            className="font-semibold opacity-80 text-lg hover:text-[#3aafa9] transition-colors duration-300"
          >
            Find Sitters
          </Link>
          <Link
            href="/services"
            className="font-semibold opacity-80 text-lg hover:text-[#3aafa9] transition-colors duration-300"
          >
            Services
          </Link>
          <Link
            href="/about"
            className="font-semibold opacity-80 text-lg hover:text-[#3aafa9] transition-colors duration-300"
          >
            About Us
          </Link>
        </div>

        <div className="md:flex items-center gap-5 hidden">
          <Link href={"/signin"} className="text-[#3aafa9] text-sm font-medium  leading-[1.25rem] border py-2.5 px-5 rounded-lg hover:bg-[#3aafa9] hover:text-white transition-colors duration-300 cursor-pointer">
            Sign In
          </Link>
          <Link href={"/signup"} className="text-white bg-[#3aafa9] text-sm font-medium  leading-[1.25rem] border py-2.5 px-5 rounded-lg hover:bg-[#4f817e] transition-colors duration-300 cursor-pointer">
            Sign Up
          </Link>
        </div>

        {/* resposive */}
        <div onClick={toggleMenu} className="md:hidden">
          <FontAwesomeIcon icon={faEllipsisVertical} className="text-xl" />
        </div>
      </div>
      <div>
        {isOpen && (
          <div className="absolute top-16 right-4 bg-white shadow-lg rounded-lg p-4 z-20 md:hidden">
            <Link
              onClick={toggleMenu}
              href="/services"
              className="block text-gray-700 hover:text-[#3aafa9] py-2 px-4 rounded"
            >
              Find Sitters
            </Link>
            <Link
              onClick={toggleMenu}
              href="/contact"
              className="block text-gray-700 hover:text-[#3aafa9] py-2 px-4 rounded"
            >
              Contact Us
            </Link>
            <Link
              onClick={toggleMenu}
              href="/about"
              className="block text-gray-700 hover:text-[#3aafa9] py-2 px-4 rounded"
            >
              About Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
