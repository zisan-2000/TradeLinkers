import React, { useState } from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import Search from './Search';

function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleDropdownToggle = (item) => {
    if (activeDropdown === item) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(item);
      setActiveSubDropdown(null); 
    }
  };

  const handleSubDropdownToggle = (item) => {
    if (activeSubDropdown === item) {
      setActiveSubDropdown(null);
    } else {
      setActiveSubDropdown(item);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null); 
    setActiveSubDropdown(null); 
  };

  return (
    <nav className='bg-white w-full h-[65px] relative z-20'>
      <div className='flex justify-between items-center px-4 pt-4'>
        <div className="font-bold text-lg md:hidden text-gray-900">TRADELINKERS</div>
        <button className='lg:hidden' onClick={toggleMobileMenu}>
          <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      <div className={`lg:flex lg:items-center lg:justify-evenly lg:relative lg:pt-0 lg:h-auto text-sm font-semibold ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <ul className='lg:flex lg:items-center  bg-gray-300 md:bg-white pl-4 md:pl-0  '>
          <li className='relative'>
            <NavLink to="/" exact activeClassName="active" className='block py-2 lg:py-0 lg:px-4'>HOME</NavLink>
          </li>

      
          <li className='relative'>
            <button onClick={() => handleDropdownToggle('about')} className='block py-2 lg:py-0 lg:px-4 focus:outline-none'>
              ABOUT US
            </button>
            {activeDropdown === 'about' && (
              <ul className='lg:absolute lg:top-full lg:left-0 mt-2 lg:mt-0 text-xs text-gray-600 hover:text-gray-800'>
                <li><NavLink to="/about/vision" className='expandItems' activeClassName="active">VISION</NavLink></li>
                <li><NavLink to="/about/mission" className='expandItems' activeClassName="active">MISSION</NavLink></li>
                <li><NavLink to="/about/unique" className='expandItems' activeClassName="active">UNIQUENESS</NavLink></li>
                <li><NavLink to="/about/founder" className='expandItems' activeClassName="active">FOUNDER</NavLink></li>
                <li><NavLink to="/about/team" className='expandItems' activeClassName="active">TEAM</NavLink></li>
              </ul>
            )}
          </li>

 
          <li className='relative'>
            <button onClick={() => handleDropdownToggle('solutions')} className='block py-2 lg:py-0 lg:px-4 focus:outline-none '>
              SOLUTIONS
            </button>
            {activeDropdown === 'solutions' && (
              <ul className='lg:absolute lg:top-full lg:left-0  mt-2 lg:mt-0 text-xs '>
                <li className='relative'>
                  <button onClick={() => handleSubDropdownToggle('hvac')} className='expandItems'>
                    HVAC
                  </button>
                  {activeSubDropdown === 'hvac' && (
                    <ul className='lg:absolute lg:left-full lg:top-0 mt-2 lg:mt-0 xs:pl-4 md:pl-0'>
                      <li><NavLink to="/solutions/hvac/commercial" className='expandItems' activeClassName="active">COMMERCIAL HVAC</NavLink></li>
                      <li><NavLink to="/solutions/hvac/industrial" className='expandItems' activeClassName="active">INDUSTRIAL HVAC</NavLink></li>
                      <li><NavLink to="/solutions/hvac/precision" className='expandItems' activeClassName="active">PRECISION HVAC</NavLink></li>
                      <li><NavLink to="/solutions/hvac/food" className='expandItems' activeClassName="active">FOOD & PHARMA HVAC</NavLink></li>
                    </ul>
                  )}
                </li>
                <li className='relative'>
                  <button onClick={() => handleSubDropdownToggle('cold')} className='expandItems'>
                    COLD CHAIN
                  </button>
                  {activeSubDropdown === 'cold' && (
                    <ul className='lg:absolute lg:left-full lg:top-0 mt-2 lg:mt-0 xs:pl-4 md:pl-0'>
                      <li><NavLink to="/solutions/cold/coldstorage" className='expandItems' activeClassName="active">COLD STORAGE</NavLink></li>
                      <li><NavLink to="/solutions/cold/ca" className='expandItems' activeClassName="active">CA ROOM</NavLink></li>
                      <li><NavLink to="/solutions/cold/walk" className='expandItems' activeClassName="active">WALK-IN COLD ROOM</NavLink></li>
                      <li><NavLink to="/solutions/cold/move" className='expandItems' activeClassName="active">MOVABLE COLD ROOM</NavLink></li>
                    </ul>
                  )}
                </li>
                <li className='relative'>
                  <button onClick={() => handleSubDropdownToggle('dairy')} className='expandItems'>
                    DAIRY
                  </button>
                  {activeSubDropdown === 'dairy' && (
                    <ul className='lg:absolute lg:left-full lg:top-0 mt-2 lg:mt-0 xs:pl-4 md:pl-0'>
                      <li><NavLink to="/solutions/dairy/ice" className='expandItems' activeClassName="active">ICE CREAM</NavLink></li>
                      <li><NavLink to="/solutions/dairy/milk" className='expandItems' activeClassName="active">MILK</NavLink></li>
                      <li><NavLink to="/solutions/dairy/condense" className='expandItems' activeClassName="active">CONDENSE MILK</NavLink></li>
                      <li><NavLink to="/solutions/dairy/cheese" className='expandItems' activeClassName="active">CHEESE</NavLink></li>
                    </ul>
                  )}
                </li>
                <li className='relative'>
                  <button onClick={() => handleSubDropdownToggle('marine')} className='expandItems'>
                    MARINE FOOD
                  </button>
                  {activeSubDropdown === 'marine' && (
                    <ul className='lg:absolute lg:left-full lg:top-0 mt-2 lg:mt-0 xs:pl-4 md:pl-0'>
                      <li><NavLink to="/solutions/marine/fish" className='expandItems' activeClassName="active">FISH STORAGE</NavLink></li>
                      <li><NavLink to="/solutions/marine/ice" className='expandItems' activeClassName="active">ICE PLANT</NavLink></li>
                      <li><NavLink to="/solutions/marine/plate" className='expandItems' activeClassName="active">PLATE & IQF FREEZER</NavLink></li>
                      <li><NavLink to="/solutions/marine/fishproces" className='expandItems' activeClassName="active">FISH PROCESSING</NavLink></li>
                    </ul>
                  )}
                </li>
                <li className='relative'>
                  <button onClick={() => handleSubDropdownToggle('meat')} className='expandItems'>
                    MEAT INDUSTRY
                  </button>
                  {activeSubDropdown === 'meat' && (
                    <ul className='lg:absolute lg:left-full lg:top-0 mt-2 lg:mt-0 xs:pl-4 md:pl-0'>
                      <li><NavLink to="/solutions/meat/meat" className='expandItems' activeClassName="active">MEAT STORAGE</NavLink></li>
                      <li><NavLink to="/solutions/meat/slaught" className='expandItems' activeClassName="active">SLAUGHTERHOUSE</NavLink></li>
                      <li><NavLink to="/solutions/meat/blast" className='expandItems' activeClassName="active">BLAST FREEZER</NavLink></li>
                      <li><NavLink to="/solutions/meat/meatprocess" className='expandItems' activeClassName="active">MEAT PROCESSING</NavLink></li>
                    </ul>
                  )}
                </li>
                <li className='relative'>
                  <button onClick={() => handleSubDropdownToggle('grain')} className='expandItems'>
                    GRAIN STORAGE
                  </button>
                  {activeSubDropdown === 'grain' && (
                    <ul className='lg:absolute lg:left-full lg:top-0 mt-2 lg:mt-0 xs:pl-4 md:pl-0'>
                      <li><NavLink to="/solutions/grain/silo" className='expandItems' activeClassName="active">GRAIN SILOS</NavLink></li>
                      <li><NavLink to="/solutions/grain/handle" className='expandItems' activeClassName="active">IGRAIN HANDLING</NavLink></li>
                      <li><NavLink to="/solutions/grain/milling" className='expandItems' activeClassName="active">MILLING</NavLink></li>
                    </ul>
                  )}
                </li>
                <li className='relative'>
                  <button onClick={() => handleSubDropdownToggle('building')} className='expandItems'>
                    BUILDING AUTOMATION
                  </button>
                  {activeSubDropdown === 'building' && (
                    <ul className='lg:absolute lg:left-full lg:top-0 mt-2 lg:mt-0 xs:pl-4 md:pl-0'>
                      <li><NavLink to="/solutions/building/bms" className='expandItems' activeClassName="active">BMS</NavLink></li>
                      <li><NavLink to="/solutions/building/fire" className='expandItems' activeClassName="active">FIRE</NavLink></li>
                      <li><NavLink to="/solutions/building/access" className='expandItems' activeClassName="active">ACCESS CONTROL</NavLink></li>
                    </ul>
                  )}
                </li>
                
              </ul>
            )}
          </li>

          <li className='relative'>
            <button onClick={() => handleDropdownToggle('client')} className='block py-2 lg:py-0 lg:px-4 focus:outline-none'>
              CLIENT
            </button>
            {activeDropdown === 'client' && (
              <ul className='lg:absolute lg:top-full lg:left-0 mt-2 lg:mt-0  text-gray-600 hover:text-gray-800'>
                <li><NavLink to="/client/testimonials" className='expandItems' activeClassName="active">Testimonials</NavLink></li>
                <li><NavLink to="/client/case-studies" className='expandItems' activeClassName="active">Case Studies</NavLink></li>
                <li><NavLink to="/client/reviews" className='expandItems' activeClassName="active">Reviews</NavLink></li>
              </ul>
            )}
          </li>
          <li className='relative'>
            <button onClick={() => handleDropdownToggle('part')} className='block py-2 lg:py-0 lg:px-4 focus:outline-none'>
              PARTNERS
            </button>
            {activeDropdown === 'part' && (
              <ul className='lg:absolute lg:top-full lg:left-0 mt-2 lg:mt-0 text-xs text-gray-600 hover:text-gray-800'>
                <li><NavLink to="/partners/tech" className='expandItems' activeClassName="active">TECH PARTNERS</NavLink></li>
                <li><NavLink to="/partners/business" className='expandItems' activeClassName="active">BUSINESS PARTNERS</NavLink></li>
                <li><NavLink to="/partners/community" className='expandItems' activeClassName="active">COMMUNITY PARTNERS</NavLink></li>
              </ul>
            )}
          </li>
          <li className='relative'>
            <button onClick={() => handleDropdownToggle('media')} className='block py-2 lg:py-0 lg:px-4 focus:outline-none'>
              MEDIA
            </button>
            {activeDropdown === 'media' && (
              <ul className='lg:absolute lg:top-full lg:left-0 mt-2 lg:mt-0 text-xs text-gray-600 hover:text-gray-800'>
                <li><NavLink to="/media/news" className='expandItems' activeClassName="active">NEWS</NavLink></li>
                <li><NavLink to="/media/blog" className='expandItems' activeClassName="active">BLOG</NavLink></li>
                <li><NavLink to="/media/videos" className='expandItems' activeClassName="active">VIDEOS</NavLink></li>
              </ul>
            )}
          </li>
          <li className='relative'>
            <button onClick={() => handleDropdownToggle('contact')} className='block py-2 lg:py-0 lg:px-4 focus:outline-none'>
              CONTACT
            </button>
            {activeDropdown === 'contact' && (
              <ul className='lg:absolute lg:top-full lg:left-0 mt-2 lg:mt-0 text-xs text-gray-600 hover:text-gray-800'>
                <li><NavLink to="/contact/email" className='expandItems' activeClassName="active">EMAIL US</NavLink></li>
                <li><NavLink to="/contact/locations" className='expandItems' activeClassName="active">LOCATIONS</NavLink></li>
                <li><NavLink to="/contact/support" className='expandItems' activeClassName="active">SUPPORT</NavLink></li>
              </ul>
            )}
          </li>

          <li className='block py-2 lg:py-0 lg:px-4'><Search /></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
