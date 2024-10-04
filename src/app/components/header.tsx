"use client";


import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

export default function Header() {
  // State to manage the visibility of the dropdown
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null); // Ref to detect outside click

  // Function to toggle the dropdown visibility
  const toggleDropdown = () => {
    setDropdownVisible(prev => !prev);
  };

  // Hide dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event:MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false); // Close dropdown if clicked outside
      }
    };

    // Add event listener for detecting clicks outside
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Cleanup event listener when component unmounts
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="flex justify-between">
      <nav className="w-full bg-gradient-to-r from-indigo-600 flex items-center gap-[550px]">
        <div className="flex-shrink-0 ml-10">
          <a href="/">
            <h1>
              <strong>Home</strong>
            </h1>
          </a>
        </div>
        <div className="max-w-8xl mx-9 px-4 ml-96">
          <div className="flex items-center gap-80 h-16">
            <div className="flex items-center gap-80">
              <div className="hidden md:block">
                <div className="ml-96 flex place-items-end space-x-10 font-bold mx-auto">
                  <a
                    href="about"
                    className="text-white bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 rounded-lg p-2"
                  >
                    About US
                  </a>
                  <a
                    href="contact"
                    className="text-white bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 rounded-lg p-2"
                  >
                    Contact
                  </a>

                  {/* Projects Dropdown */}
                  <div className="relative" ref={dropdownRef}>
                    <div
                      onClick={toggleDropdown}
                      className="text-white bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 rounded-lg p-2 cursor-pointer"
                    >
                      Projects
                    </div>

                    {/* Dropdown menu */}
                    {isDropdownVisible && (
                      <div
                        id="dropdown"
                        className="rounded border-[1px] bg-gradient-to-r from-indigo-500 py-4 absolute top-[40px] w-[130px] shadow-lg font-semibold z-10"
                      >
                        <div className="cursor-pointer hover:bg-gradient-to-r from-indigo-800 p-4">
                          <Link href="./resume-01" onClick={() => setDropdownVisible(false)}>
                            Resume 1
                          </Link>
                        </div>
                        <div className="cursor-pointer hover:bg-gradient-to-r from-indigo-800 p-4">
                          <Link href="./resume-02" onClick={() => setDropdownVisible(false)}>
                            Resume 2
                          </Link>
                        </div>
                        <div className="cursor-pointer hover:bg-gradient-to-r from-indigo-800 p-4">
                          <Link href="./resume-03" onClick={() => setDropdownVisible(false)}>
                            Resume 3
                          </Link>
                        </div>
                        <div className="cursor-pointer hover:bg-gradient-to-r from-indigo-800 p-4">
                          <Link href="./resume-04" onClick={() => setDropdownVisible(false)}>
                            Resume 4
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                  {/* End of Projects Dropdown */}
                </div>
              </div>
            </div>
            <div className="md:hidden flex items-center"></div>
          </div>
        </div>
      </nav>
    </header>
  );
}

