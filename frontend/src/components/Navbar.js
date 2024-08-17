import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useThemeContext } from "../hooks/useThemeContext";

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useThemeContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Get current location

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white text-gray-800 shadow-md dark:bg-neutral-900 dark:text-gray-200">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link
          to="/"
          className={`text-2xl font-semibold ${
            location.pathname === "/"
              ? "text-blue-700 dark:text-yellow-300"
              : "hover:text-blue-700 dark:hover:text-yellow-300"
          } transition-colors`}
        >
          Job Tracker
        </Link>
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="text-gray-800 dark:text-gray-200 hover:text-blue-700 dark:hover:text-yellow-300 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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
        <div
          className={`flex flex-col md:flex-row md:space-x-4 ${
            isMenuOpen ? "block" : "hidden md:flex"
          }`}
        >
          <button
            onClick={toggleTheme}
            className={`px-4 py-2 border-[1px] ${
              isDarkMode ? "border-yellow-300" : "border-blue-300"
            } `}
          >
            {isDarkMode ? "Light" : "Dark"}
          </button>
          <Link
            to="/"
            className={`py-2 px-4 transition-colors ${
              location.pathname === "/"
                ? "text-blue-700 dark:text-yellow-300"
                : "hover:text-blue-700 dark:hover:text-yellow-300"
            }`}
          >
            Home
            <span
              className={
                location.pathname === "/" ? "blink-me ml-1.5" : "hidden"
              }
            ></span>
          </Link>
          <Link
            to="/jobs"
            className={`py-2 px-4 transition-colors ${
              location.pathname === "/jobs"
                ? "text-blue-700 dark:text-yellow-300"
                : "hover:text-blue-700 dark:hover:text-yellow-300"
            }`}
          >
            Jobs
            <span
              className={
                location.pathname === "/jobs" ? "blink-me ml-1.5" : "hidden"
              }
            ></span>
          </Link>
          <Link
            to="/about"
            className={`py-2 px-4 transition-colors ${
              location.pathname === "/about"
                ? "text-blue-700 dark:text-yellow-300"
                : "hover:text-blue-700 dark:hover:text-yellow-300"
            }`}
          >
            About
            <span
              className={
                location.pathname === "/about" ? "blink-me ml-1.5" : "hidden"
              }
            ></span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
