import React, { useState } from 'react';
import { Link } from 'react-scroll';
import logo from "../Assets/images/Meet.logo.png";
import Logo from './Logo';
import SocualMediaLinks from './SocialmediaLinks';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLinkClick = () => {
    setIsDropdownOpen(false);
  };

  const NavLink = ({ to, children }) => (
    <Link
      to={to}
      smooth={true}
      duration={1000}
      offset={-100}
      className="text-sm font-semibold leading-6 text-gray-900"
      onClick={handleLinkClick}
    >
      {children}
    </Link>
  );

  const MenuLinks = () => (
    <>
      <NavLink to="about">About</NavLink>
      <NavLink to="services">Services</NavLink>
      <NavLink to="contact">Contact Me</NavLink>
    </>
  );

  const MobileMenu = () => (
    <div className="md:hidden">
      <button
        className="focus:outline-none text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out"
        onClick={toggleDropdown}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isDropdownOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          )}
        </svg>
      </button>
    </div>
  );

  return (
    <header className="fixed top-0 left-0 w-full z-50 shadow-md bg-[rgba(0,0,0,0.48)] backdrop-blur">
      <nav className="flex items-center justify-between px-6 py-4">

        <div className="flex items-center">
          <Logo />
        </div>


        <div className="flex items-center">
          <div className="hidden lg:flex lg:gap-x-12">
            <SocualMediaLinks />
            <MenuLinks />
          </div>
          <MobileMenu />
        </div>
      </nav>
      {isDropdownOpen && (
        <div className="md:hidden shadow-md">
          <SocualMediaLinks />
          <MenuLinks />
        </div>
      )}
    </header>


  );
};

export default Header;