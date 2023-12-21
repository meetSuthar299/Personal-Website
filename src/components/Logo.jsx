import React from "react";
import { Link } from "react-scroll";

export default function Logo() {
    return (
        <Link
            to={"top"}
            smooth={true}
            duration={1000}
            offset={-100}
            className="inline-flex items-center lg:mx-auto cursor-pointer"
        >
            <svg
                className="w-8"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                stroke="currentColor"
                fill="none"
            >
                <rect x="3" y="1" width="5" height="18" className="text-white" />
                <rect x="8" y="7" width="5" height="12" className="text-white" />
                <rect x="13" y="1" width="5" height="18" className="text-white" />
            </svg>
            <h1 className="text-white text-2xl font-bold text-neutrals-50">Meet Suthar</h1>
        </Link>
    )
}