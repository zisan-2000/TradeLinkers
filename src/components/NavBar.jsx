import React from "react";
import DropDown from "./DropDown";
import Search from "./Search";

const NavBar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Navigation Links */}
        <ul className="flex space-x-6 text-black">
          <li>
            <a href="/" className="hover:text-red-600">
              HOME
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-red-600">
              ABOUT US
            </a>
          </li>
          <DropDown
            title="SOLUTIONS"
            items={["HVAC", "Cold Chain", "Dairy", "Marine Food"]}
          />
          <li>
            <a href="/clients" className="hover:text-red-600">
              CLIENTS
            </a>
          </li>
          <li>
            <a href="/partners" className="hover:text-red-600">
              PARTNERS
            </a>
          </li>
          <li>
            <a href="/media" className="hover:text-red-600">
              MEDIA
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-red-600">
              CONTACT
            </a>
          </li>
        </ul>

        {/* Search Component */}
        <Search />
      </div>
    </nav>
  );
};

export default NavBar;
