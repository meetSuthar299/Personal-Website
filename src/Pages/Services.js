import React from "react";
import ServicesCard from "../components/ServicesCard";
import { ContenCreationService } from "./ContectCreationService";
import WebDevService from "./WebDevService";
import { ITServices } from "./ITServices";

function Services() {

    return (
        <div id="services" class=" px-4 py-12 mx-auto sm:max-w-2xl md:max-w-full lg:max-w-screen-2xl md:px-28 lg:px-8 lg:py-20 relative z-10 bg-[rgba(0,0,0,0.64)] backdrop-blur border-black">
            <hr className="w-full my-6 border-gray-300 z-50" />
            <h1 className="sub-title mb-10 font-sans text-3xl font-bold leading-none text-white sm:text-4xl md:mx-auto pt-10 pl-5">What I do:</h1>
            <WebDevService />
            <hr className="w-full my-6 border-gray-300 z-50" />
            <ContenCreationService />
            {/* <hr className="w-full my-6 border-gray-300 z-50" /> */}
            {/* <ITServices/> */}
            {/* <hr className="w-full my-6 border-gray-300" /> */}
        </div>
    );
}

export default Services;