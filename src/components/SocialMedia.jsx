import React from "react";

const SocialMedia = () => {
  return (
    <div className="flex space-x-3 text-white">
      <a href="https://facebook.com" className="hover:text-gray-300">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="https://instagram.com" className="hover:text-gray-300">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="https://linkedin.com" className="hover:text-gray-300">
        <i className="fab fa-linkedin-in"></i>
      </a>
    </div>
  );
};

export default SocialMedia;
