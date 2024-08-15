import React from "react";
import logo from "../assets/TradeLogo.png";

const LogoSection = () => {
  return (
    <div className="relative flex items-center bg-white">
      {/* Rectangle (for Logo and Contact Info) */}
      <div className="relative flex w-full items-center justify-between p-4">
        <img src={logo} alt="Company Logo" className="h-[80px] w-[230px]" />
        {/* <div className="text-sm text-black">
          <p>Tel: +88 017 1152 3638</p>
          <p>Email: tlc@tlcbd.com</p>
        </div> */}
      </div>

      {/* Triangle (CSS based clip-path) */}
      <div className="absolute right-0 top-0 h-0 w-0 border-b-[30px] border-l-[30px] border-b-white border-l-transparent"></div>
    </div>
  );
};

export default LogoSection;
