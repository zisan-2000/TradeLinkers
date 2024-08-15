import React from "react";
import LogoSection from "./LogoSection";
import NavBar from "./NavBar";
import SocialMedia from "./SocialMedia";

const Header = () => {
  return (
    <header>
      {/* Red Background */}
      <div className="bg-red-600 py-2">
        <div className="container mx-auto flex items-center justify-between">
          <LogoSection />
          <div className="text-sm text-black">
            <p>Tel: +88 017 1152 3638</p>
            <p>Email: tlc@tlcbd.com</p>
          </div>
          <SocialMedia />
        </div>
      </div>

      {/* White Navbar Section */}
      <NavBar />
    </header>
  );
};

export default Header;
