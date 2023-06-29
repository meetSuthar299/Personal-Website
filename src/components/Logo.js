import React from "react";

export default function Logo() {
    return (
        <div className="sm:col-span-2" >
            <a
                href
                aria-label="Go home"
                title="Meet Suthar"
                className="inline-flex items-center"
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
                    <rect x="3" y="1" width="7" height="12" className="text-white"/>
                    <rect x="3" y="17" width="7" height="6" className="text-white"/>
                    <rect x="14" y="1" width="7" height="6" className="text-white"/>
                    <rect x="14" y="11" width="7" height="12" className="text-white"/>
                </svg>
                <span className="ml-2 text-xl font-bold tracking-wide text-white uppercase">
                    Meet Suthar
                </span>
            </a>

        </div>
    )
}