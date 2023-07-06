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
                className="w-8 text-deep-purple-accent-400"
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

            <span className="ml-2 text-xl font-bold tracking-wide text-white uppercase">
                Meet Suthar
            </span>
        </Link>
    )
}