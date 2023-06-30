import React from "react";
import ServicesCard from "../components/ServicesCard";
import { ContenCreationService } from "./ContectCreationService";
import WEbDevService from "./WebDevService";
import { ITServices } from "./ITServices";

function Services() {

    return (
        <div id="services" class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <h1 className="sub-title">What I do:</h1>
            <ContenCreationService />
            <WEbDevService/>
            <ITServices/>
        </div>
    );
}

export default Services;