import React from "react";
import ServicesCard from "../components/ServicesCard";
import { ContenCreationService } from "./ContectCreationService";
import WEbDevService from "./WebDevService";
import { ITServices } from "./ITServices";

function Services() {

    return (
        <div id="services" class="px-4 py-16 mx-auto sm:max-w-2xl md:max-w-full lg:max-w-screen-2xl md:px-26 lg:px-8 lg:py-20">
            <hr className="w-full my-6 border-gray-300" />
            <h1 className="sub-title">What I do:</h1>
            <ContenCreationService />
            <hr className="w-full my-6 border-gray-300" />
            <WEbDevService/>
            <hr className="w-full my-6 border-gray-300" />
            <ITServices/>
            <hr className="w-full my-6 border-gray-300" />
        </div>
    );
}

export default Services;