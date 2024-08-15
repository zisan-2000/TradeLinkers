import React from "react";
import logo from "../assets/TradeLogo.png"; // Import the logo

const Header = () => {
  return (
    <div className="flex items-center justify-between bg-red-600 p-4">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Company Logo" className="w-24" />
        <span className="ml-4 text-lg text-white">
          TRADELINKERS ENGINEERING LIMITED
        </span>
      </div>

      {/* Contact Info */}
      <div className="flex items-center text-white">
        <div className="mr-6">
          <p>Tel: +88 017 1152 3638</p>
          <p>Email: tlc@tlcbd.com</p>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-3">
          <a href="https://facebook.com" className="text-white">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://instagram.com" className="text-white">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://linkedin.com" className="text-white">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
