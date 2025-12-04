import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import {
  FaCalculator,
  FaBrain,
  FaLanguage,
  FaMoneyBill,
  FaNewspaper,
} from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const mobileLinks = [
    { name: "Maths", path: "/Apptitude/Unit-I", icon: <FaCalculator /> },
    { name: "Logical", path: "/Apptitude/Unit-II", icon: <FaBrain /> },
    { name: "Language", path: "/Apptitude/Unit-III", icon: <FaLanguage /> },
    { name: "Economy", path: "/Apptitude/Unit-IV", icon: <FaMoneyBill /> },
    {
      name: "Current Affairs",
      path: "/Apptitude/Unit-V",
      icon: <FaNewspaper />,
    },
  ];

  // Disable body scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <header className="flex items-center justify-between px-4 md:px-8 py-4 bg-base-800 glass relative z-50">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-lg text-white font-bold text-lg md:text-4xl">
          {"{ }"}
        </div>
        <Link to="/apptitude">
          <h1 className="text-xl md:text-2xl font-bold text-slate-200 cursor-pointer">
            Aptitude
          </h1>
        </Link>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden lg:flex space-x-6 text-slate-200 md:text-xl">
        {mobileLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className="hover:text-white transition-colors duration-200 hover:font-bold"
          >
            {link.name}
          </Link>
        ))}
      </nav>

      {/* Mobile Hamburger */}
      {/* <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-slate-200 focus:outline-none"
        >
          {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div> */}

      {/* Overlay
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )} */}

      {/* Mobile Sidebar */}
    </header>
  );
};

export default Header;
