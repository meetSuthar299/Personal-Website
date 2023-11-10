import React from "react";
import Logo from "./Logo";
import SocualMediaLinks from "./SocialmediaLinks";

export default function Footer() {
    return (
        <div className="text-center px-4 mx-auto sm:max-w-2xl md:max-w-full lg:max-w-screen md:px-8 lg:px-8 pt-20 relative z-10 bg-[rgba(46,46,46,0.69)] backdrop-blur border-black text-white">
             <hr className="w-full my-6 border-gray-300 z-50" />
            <Logo />
            <div className="text-center pb-5 lg:flex-row">
                <div className="flex justify-center pb-10">
                    <SocualMediaLinks />
                </div>
                <p className="text-sm pb-3"> Loosely designed in Figma and coded in Visual Studio Code by yours truly. Built with React and Tailwind CSS</p>
                {/* <p className="text-sm">
                    © Copyright 2023 Meet Suthar. All rights reserved.
                </p> */}
            </div>
        </div>
    );
};