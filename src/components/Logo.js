import React from "react";

export default function Logo() {
    return (
        <a
            href
            aria-label="Go home"
            title="Meet Suthar"
            className="inline-flex items-center lg:mx-auto"
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
        </a>
    )
}