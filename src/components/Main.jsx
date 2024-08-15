import React from "react";
import LogoSection from "./LogoSection";
import SocialMedia from "./SocialMedia";
import Triangle from "./Triangle";

const Main = () => {
  return (
    <header>
      {/* Red Background */}
      <div className="bg-red-600 py-2">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo Section */}
          <LogoSection />

          {/* Triangle and Contact Info in a flex row */}
          <div className="flex items-center">
            <Triangle />
            {/* <ContactInfo /> */}
          </div>

          {/* Social Media Section */}
          <div className=" mb-20">
            <SocialMedia />
          </div>
        </div>
      </div>

      {/* White Navbar Section */}
    </header>
  );
};

export default Main;
