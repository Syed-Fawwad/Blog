"use client"
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="fixed top-0 w-full z-50 shadow-md">
      <nav className="flex items-center justify-between px-6 md:px-12 h-[80px] bg-[#ea1b48] text-white">
        {/* Logo */}
        <div>
          <h1 className="text-[1.5rem] md:text-[2rem] font-bold tracking-wide">
            SF'BLOG'S
          </h1>
        </div>

        {/* Links */}
        <div>
          <ul className="hidden md:flex gap-10 text-lg font-semibold">
            <Link href="/landingpage">
              <li className="hover:text-gray-300 transition-colors cursor-pointer">
                Home
              </li>
            </Link>
            <Link href="/">
              <li className="hover:text-gray-300 transition-colors cursor-pointer">
                Blogs
              </li>
            </Link>
            <Link href="/contact">
              <li className="hover:text-gray-300 transition-colors cursor-pointer">
                Contact
              </li>
            </Link>
          </ul>

          {/* Hamburger Menu for Small Screens */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Responsive Menu */}
      {menuOpen && (
        <div className="flex flex-col items-center bg-[#ea1b48] text-white gap-6 py-4 text-lg font-semibold md:hidden">
          <Link href="/landingpage">
            <li
              className="hover:text-gray-300 transition-colors cursor-pointer list-none"
              onClick={toggleMenu}
            >
              Home
            </li>
          </Link>
          <Link href="/">
            <li
              className="hover:text-gray-300 transition-colors cursor-pointer list-none"
              onClick={toggleMenu}
            >
              Blogs
            </li>
          </Link>
          <Link href="/contact">
            <li
              className="hover:text-gray-300 transition-colors cursor-pointer list-none"
              onClick={toggleMenu}
            >
              Contact
            </li>
          </Link>
        </div>
      )}
    </div>
  );
}