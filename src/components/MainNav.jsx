import React, { useState } from 'react';

const MainNav = () => {
  const [expandedItem, setExpandedItem] = useState(null);
  const [expandedSubItem, setExpandedSubItem] = useState(null);

  const handleItemClick = (index) => {
    setExpandedItem(expandedItem === index ? null : index);
    setExpandedSubItem(null); // Close sub-items when a main item is clicked
  };

  const handleSubItemClick = (index) => {
    setExpandedSubItem(expandedSubItem === index ? null : index);
  };

  return (
    <nav className="bg-white w-full z-10 h-[65px]">
      <div className="container mx-auto px-4">
        <div className="flex items-center py-4">
          <ul className="hidden md:flex space-x-4">
            {['HOME', 'ABOUT US', 'SOLUTIONS', 'CLIENTS', 'PARTNERS', 'MEDIA', 'CONTACT'].map((item, index) => (
              <li key={index} className="relative">
                <button
                  onClick={() => handleItemClick(index)}
                  className="hover:text-gray-400 focus:outline-none"
                >
                  {item}
                </button>
                {expandedItem === index && (
                  <ul className="absolute left-0 top-full mt-2 bg-white text-sm space-y-2 p-2">
                    {['Sub-item 1', 'Sub-item 2', 'Sub-item 3'].map((subItem, subIndex) => (
                      <li key={subIndex} className="relative">
                        <button
                          onClick={() => handleSubItemClick(subIndex)}
                          className="block px-4 py-2 hover:text-gray-400 focus:outline-none w-[150px]"
                        >
                          {subItem}
                        </button>
                        {expandedSubItem === subIndex && (
                          <ul className="absolute left-full top-0 mt-2 bg-white text-sm space-y-2 p-2">
                            {['Nested 1', 'Nested 2'].map((nestedItem, nestedIndex) => (
                              <li key={nestedIndex}>
                                <a href="#" className="block px-4 py-2 hover:text-gray-400 w-[150px]">
                                  {nestedItem}
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MainNav;
