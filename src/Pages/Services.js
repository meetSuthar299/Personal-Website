import React from "react";
import ServicesCard from "../components/ServicesCard";

function Services() {

    return (
        <div id="services" class="relative">
            <div className="container">
                <h1 className="sub-title">Services</h1>
                <div className="services-list">
                    <ServicesCard cardTitle="Photography and Videography" cardDisc="Checkout my Instagram!"/>
                    <ServicesCard cardTitle="Web Design" cardDisc="I design websites"/>
                    <ServicesCard cardTitle="IT Services" cardDisc="IT Support, Hardware / Software installation"/>
                </div>
            </div>
        </div>
    );
}

export default Services;