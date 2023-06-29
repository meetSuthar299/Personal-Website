import React from "react";

const ServicesCard = ({ cardTitle, cardDisc }) => {
    return (
        <div>
            <h2>{cardTitle}</h2>
            <p>{cardDisc}</p>
        </div>

    );
}

export default ServicesCard