import React, { useState } from "react";

const DropDown = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-black hover:text-red-600"
      >
        {title}
      </button>
      {isOpen && (
        <ul className="absolute left-0 top-8 w-48 border border-gray-200 bg-white shadow-lg">
          {items.map((item) => (
            <li key={item} className="px-4 py-2 hover:bg-gray-100">
              <a href={`/${item.toLowerCase().replace(/ /g, "-")}`}>{item}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropDown;
