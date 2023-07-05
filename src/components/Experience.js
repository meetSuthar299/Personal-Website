import React from "react";
import { useResumeDataContext } from "../Providers/ResumeDataProvider";
import { FaBriefcase } from 'react-icons/fa';

const Experience = () => {
    const { resumeData } = useResumeDataContext();

    var message = Object.values(resumeData[0].experience[0]).map((experience, index) => (
        <div key={index} className="bg-opacity-90 p-4 rounded-lg mb-4 flex">
            <FaBriefcase className="text-black text-2xl mr-4" />
            <div>
                <h3 className="text-xl font-semibold mb-2">{experience[0].position}</h3>
                <p className="text-lg mb-2">{experience[0].company}</p>
                <p>
                    {experience[0].startDate} - {experience[0].endDate}
                </p>
            </div>
        </div>
    ));

    return (
        <div className="tab-contents active-tab">
            <div>
                {message}
            </div>
        </div>
    );
}

export default Experience;
