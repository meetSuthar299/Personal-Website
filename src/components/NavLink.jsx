import React from "react";
import { Link } from 'react-scroll';

const NavLink = ({ to, children }) => (
    <Link
        to={to}
        smooth={true}
        duration={1000}
        offset={-100}
        className="text-base text-white transition-all duration-200 ease-in-out hover:text-teal-accent-400 hover:pb-1 hover:scale-105 hover:shadow-lg cursor-pointer hover:border-b-2"
        >
        {children}
    </Link>
);

export default NavLink;