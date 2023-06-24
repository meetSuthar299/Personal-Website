import React from "react";
import { useResumeDataContext } from "../Providers/ResumeDataProvider";

const Experience = () => {
    const {resumeData} = useResumeDataContext();

    var message =  Object.values(resumeData[0].experience[0]).map((experience, index) => (
            <div key={index}>
                <h3>{experience[0].position}</h3>
                <p>{experience[0].company}</p>
                <p>
                    {experience[0].startDate} - {experience[0].endDate}
                </p>
            </div>
        ));

    return (
        <div className="tab-contents active-tab" id="experience">
            <div>
                {message}
            </div>
        </div>
    );
}

export default Experience;