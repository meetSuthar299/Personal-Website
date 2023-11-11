import React from "react";
import ContenCreationService from "./ContectCreationService";
import Projects from "./Projects";

export default function Services() {

    return (
        <div id="services" className="px-4 py-12 mx-auto sm:max-w-2xl md:max-w-full lg:max-w-screen md:px-8 lg:px-8 lg:py-20 relative z-10 bg-[rgba(46,46,46,0.69)] backdrop-blur border-black">
            <hr className="w-full my-6 border-gray-300 z-50" />
            <h1 className="sub-title mb-10 font-sans text-3xl font-bold leading-none text-white sm:text-4xl md:mx-auto">Dig into my universe</h1>
            <Projects/>
            <hr className="w-full my-6 border-gray-300 z-50" />
            <ContenCreationService/>
            <hr className="w-full my-6 border-gray-300" />       
        </div>
    );
}