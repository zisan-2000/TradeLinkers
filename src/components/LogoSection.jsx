import React from "react";
import logo from "../assets/TradeLogo.png";

const LogoSection = () => {
  return (
    <div className="flex items-center justify-between bg-white px-4 py-2">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Company Logo" className="w-28" />
      </div>

      {/* Contact Info */}
    </div>
  );
};

export default LogoSection;
