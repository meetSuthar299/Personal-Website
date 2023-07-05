import React from "react";
import ServicesCard from "../components/ServicesCard";
import { ContenCreationService } from "./ContectCreationService";
import WebDevService from "./WebDevService";
import { ITServices } from "./ITServices";

function Services() {

    return (
        <div id="services" class="px-4 py-12 mx-auto sm:max-w-2xl md:max-w-full lg:max-w-screen md:px-26 lg:px-8 lg:py-20 relative z-10 bg-gray-700">
            <hr className="w-full my-6 border-gray-300 z-50" />
            <h1 className="sub-title">What I do:</h1>
            <WebDevService/>
            <hr className="w-full my-6 border-gray-300 z-50" />
            <ContenCreationService />
            <hr className="w-full my-6 border-gray-300 z-50" />
            {/* <ITServices/> */}
            {/* <hr className="w-full my-6 border-gray-300" /> */}
        </div>
    );
}

export default Services;