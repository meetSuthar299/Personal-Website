import React from "react";
import ServicesCard from "../components/ServicesCard";
import { ContenCreationService } from "./ContectCreationService";
import WEbDevService from "./WebDevService";
import { ITServices } from "./ITServices";

function Services() {

    return (
        <div id="services" class="relative">
            <h1 className="sub-title">What I do:</h1>
            <ContenCreationService />
            <WEbDevService/>
            <ITServices/>
        </div>
    );
}

export default Services;