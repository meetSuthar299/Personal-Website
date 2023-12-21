import React from "react";
import Logo from "../Components/Logo";
import SocualMediaLinks from "../Components/SocialmediaLinks";

export default function Footer() {
    return (
        <div className="text-center px-4 mx-auto sm:max-w-2xl md:max-w-full lg:max-w-screen md:px-8 lg:px-8 pt-20 relative z-10 bg-[rgba(44,44,44,0.21)] backdrop-blur-md text-white border-slate-800 border-x border-b">
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