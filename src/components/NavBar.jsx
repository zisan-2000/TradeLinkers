import React from "react";
import DropDown from "./DropDown";
import Search from "./Search";

const NavBar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <a href="/" className="text-black hover:text-red-600">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="text-black hover:text-red-600">
              About Us
            </a>
          </li>
          <DropDown
            title="Solutions"
            items={["HVAC", "Cold Chain", "Dairy", "Marine Food"]}
          />
          <li>
            <a href="/clients" className="text-black hover:text-red-600">
              Clients
            </a>
          </li>
          <li>
            <a href="/partners" className="text-black hover:text-red-600">
              Partners
            </a>
          </li>
          <li>
            <a href="/media" className="text-black hover:text-red-600">
              Media
            </a>
          </li>
          <li>
            <a href="/contact" className="text-black hover:text-red-600">
              Contact
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
