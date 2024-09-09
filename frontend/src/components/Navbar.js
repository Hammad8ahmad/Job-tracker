//import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { useThemeContext } from "../hooks/useThemeContext";

// const Navbar = () => {
//   const { isDarkMode, toggleTheme } = useThemeContext();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const location = useLocation();

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const getBlinkClass = () => (isDarkMode ? "blink-me-2" : "blink-me");

//   const renderNavLink = (path, label) => (
//     <Link
//       to={path}
//       className={`py-2 px-4 transition-colors ${
//         location.pathname === path
//           ? "text-blue-700 dark:text-yellow-300"
//           : "hover:text-blue-700 dark:hover:text-yellow-300"
//       }`}
//     >
//       {label}
//       <span
//         className={
//           location.pathname === path ? `${getBlinkClass()} ml-1.5` : "hidden"
//         }
//       ></span>
//     </Link>
//   );

//   return (
//     <nav className="bg-white text-gray-800 shadow-md dark:bg-neutral-900 dark:text-gray-200">
//       <div className="container mx-auto flex justify-between items-center p-4">
//         <Link
//           to="/"
//           className={`text-2xl font-semibold ${
//             location.pathname === "/"
//               ? "text-blue-700 dark:text-yellow-300"
//               : "hover:text-blue-700 dark:hover:text-yellow-300"
//           } transition-colors`}
//         >
//           Job Tracker
//         </Link>

//         <div>
//           {/* <button
//             onClick={toggleMenu}
//             aria-label="Toggle menu"
//             className=" md:hidden text-gray-800 dark:text-gray-200 hover:text-blue-700 dark:hover:text-yellow-300 transition-colors"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16m-7 6h7"
//               />
//             </svg>
//           </button> */}
//           <div className="flex flex-col items-center ">
//             <button
//               onClick={toggleMenu}
//               aria-label="Toggle menu"
//               className=" md:hidden mb-2 text-gray-800 dark:text-gray-200 hover:text-blue-700 dark:hover:text-yellow-300 transition-colors"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 6h16M4 12h16m-7 6h7"
//                 />
//               </svg>
//             </button>
//             <div
//               className={`flex flex-col md:flex-row md:space-x-4 ${
//                 isMenuOpen ? "block" : "hidden md:flex"
//               }`}
//             >
//               <button
//                 onClick={toggleTheme}
//                 className={`px-4 py-2 border-[1px] ${
//                   isDarkMode ? "border-yellow-300" : "border-blue-300"
//                 } `}
//               >
//                 {isDarkMode ? "Light" : "Dark"}
//               </button>
//               {renderNavLink("/", "Home")}
//               {renderNavLink("/jobs", "Jobs")}
//               {renderNavLink("/about", "About")}
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// TESTINGGGGGGGGG

// import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { useThemeContext } from "../hooks/useThemeContext";

// const Navbar = () => {
//   const { isDarkMode, toggleTheme } = useThemeContext();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const location = useLocation();

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const getBlinkClass = () => (isDarkMode ? "blink-me-2" : "blink-me");

//   const renderNavLink = (path, label) => (
//     <Link
//       to={path}
//       className={`py-2 px-4 transition-colors ${
//         location.pathname === path
//           ? "text-blue-700 dark:text-yellow-300"
//           : "hover:text-blue-700 dark:hover:text-yellow-300"
//       }`}
//     >
//       {label}
//       <span
//         className={
//           location.pathname === path ? `${getBlinkClass()} ml-1.5` : "hidden"
//         }
//       ></span>
//     </Link>
//   );

//   return (
//     <nav className="bg-white text-gray-800 shadow-md dark:bg-neutral-900 dark:text-gray-200 relative">
//       <div className="container mx-auto flex justify-between items-center p-4">
//         {/* Logo */}
//         <Link
//           to="/"
//           className={`text-2xl font-semibold ${
//             location.pathname === "/"
//               ? "text-blue-700 dark:text-yellow-300"
//               : "hover:text-blue-700 dark:hover:text-yellow-300"
//           } transition-colors`}
//         >
//           Job Tracker
//         </Link>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={toggleMenu}
//           aria-label="Toggle menu"
//           className="md:hidden text-gray-800 dark:text-gray-200 hover:text-blue-700 dark:hover:text-yellow-300 transition-colors"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M4 6h16M4 12h16m-7 6h7"
//             />
//           </svg>
//         </button>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex md:items-center md:space-x-4">
//           <button
//             onClick={toggleTheme}
//             className={`px-4 py-2 border-[1px] ${
//               isDarkMode ? "border-yellow-300" : "border-blue-300"
//             } `}
//           >
//             {isDarkMode ? "Light" : "Dark"}
//           </button>
//           {renderNavLink("/", "Home")}
//           {renderNavLink("/jobs", "Jobs")}
//           {renderNavLink("/about", "About")}
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="absolute top-full left-60 right-0 bg-white dark:bg-neutral-900 shadow-md p-4 flex flex-col space-y-2 md:hidden z-10">
//             <button
//               onClick={toggleTheme}
//               className={`px-4 py-2 border-[1px] ${
//                 isDarkMode ? "border-yellow-300" : "border-blue-300"
//               } `}
//             >
//               {isDarkMode ? "Light" : "Dark"}
//             </button>
//             {renderNavLink("/", "Home")}
//             {renderNavLink("/jobs", "Jobs")}
//             {renderNavLink("/about", "About")}
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// TESTING ----2

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useThemeContext } from "../hooks/useThemeContext";

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useThemeContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getBlinkClass = () => (isDarkMode ? "blink-me-2" : "blink-me");

  const renderNavLink = (path, label) => (
    <Link
      to={path}
      className={`py-2 px-4 transition-colors ${
        location.pathname === path
          ? "text-blue-700 dark:text-yellow-300"
          : "hover:text-blue-700 dark:hover:text-yellow-300"
      }`}
    >
      {label}
      <span
        className={
          location.pathname === path ? `${getBlinkClass()} ml-1.5` : "hidden"
        }
      ></span>
    </Link>
  );

  return (
    <nav className="bg-white text-gray-800 shadow-md dark:bg-neutral-900 dark:text-gray-200 relative">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
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

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle menu"
          className="md:hidden text-gray-800 dark:text-gray-200 hover:text-blue-700 dark:hover:text-yellow-300 transition-colors"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {/* X Icon */}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {/* Hamburger Icon */}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:items-center md:space-x-4">
          <button
            onClick={toggleTheme}
            className={`px-4 py-2 border-[1px] ${
              isDarkMode ? "border-yellow-300" : "border-blue-300"
            } `}
          >
            {isDarkMode ? "Light" : "Dark"}
          </button>
          {renderNavLink("/", "Home")}
          {renderNavLink("/jobs", "Jobs")}
          {renderNavLink("/about", "About")}
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-60 right-0 bg-white dark:bg-neutral-900 shadow-md p-4 flex flex-col space-y-2 md:hidden z-10">
            <button
              onClick={toggleTheme}
              className={`px-4 py-2 border-[1px] ${
                isDarkMode ? "border-yellow-300" : "border-blue-300"
              } `}
            >
              {isDarkMode ? "Light" : "Dark"}
            </button>
            {renderNavLink("/", "Home")}
            {renderNavLink("/jobs", "Jobs")}
            {renderNavLink("/about", "About")}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
