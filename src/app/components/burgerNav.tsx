"use client";

import { useState } from "react";
import Link from "next/link";

export default function BurgerNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:hidden">
      <button
        onClick={toggleMenu}
        className="flex flex-col justify-center items-center w-10 h-10 space-y-1.5 p-2"
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 bg-white/70 transition-transform duration-300 ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-white/70 transition-opacity duration-300 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-white/70 transition-transform duration-300 ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-[#011627] border border-[#1e2d3d] z-50 m-4 h-[calc(100vh-13rem)]">
          <nav className="flex flex-col">
            <Link
              href="/"
              className="p-4 border-b border-[#1e2d3d] hover:bg-[#263b50]"
              onClick={toggleMenu}
            >
              _hello
            </Link>
            <Link
              href="/about"
              className="p-4 border-b border-[#1e2d3d] hover:bg-[#263b50]"
              onClick={toggleMenu}
            >
              _about-me
            </Link>
            <Link
              href="/projects"
              className="p-4 border-b border-[#1e2d3d] hover:bg-[#263b50]"
              onClick={toggleMenu}
            >
              _projects
            </Link>
            <Link
              href="/contact"
              className="p-4 hover:bg-[#263b50]"
              onClick={toggleMenu}
            >
              _contact-me
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
