import React from "react";
import DropDown from "./DropDown";
import Search from "./Search";

const NavBar = () => {
  return (
    <div>
      <nav className="  bg-white p-[11px] shadow-lg">
        <div className="container mx-auto ml-52 mr-64 flex items-center justify-between p-2">
          {/* Navigation Links */}
          <ul className="flex space-x-6 text-black">
            <li>
              <a href="/" className="hover:text-red-600">
                HOME
              </a>
            </li>
            <DropDown
              title="About Us"
              items={["vision", "mission", "uniqueness", "Founder", "Team"]}
            />
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
            <Search />
          </ul>

          {/* Search Component */}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
