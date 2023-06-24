import React from "react";
import { useResumeDataContext } from "../Providers/ResumeDataProvider";

const AboutHeader = () => {
    const {resumeData} = useResumeDataContext();
    return (
        <div className="about-header">
            <h1>Hi, I'm <span>{resumeData[0].name}!</span></h1>
        </div>
    )
}

export default AboutHeader;