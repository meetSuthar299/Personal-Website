import React from "react";
import { useResumeDataContext } from "../Providers/ResumeDataProvider";
import { FaGraduationCap, FaCertificate } from 'react-icons/fa';

const Education = () => {
    const { resumeData } = useResumeDataContext();

    return (
        <div className="tab-contents active-tab">
            <div>
                {resumeData[0].education.map((education, index) => (
                    <div
                        key={index}
                        className="bg-white bg-opacity-90 p-4 rounded-lg flex items-start"
                    >
                        <FaGraduationCap className="text-2xl mr-4 mt-1" />
                        <div>
                            <h3 className="text-xl font-semibold mb-2">{education.degree}</h3>
                            <p className="text-lg mb-2">{education.university}</p>
                            <p className="text-gray-600 mb-1">Completion Date: {education.completionDate}</p>
                            <p className="text-gray-600 mb-1">Grade: {education.grade}</p>
                        </div>
                    </div>
                ))}
                <div className="bg-white bg-opacity-90 p-4 rounded-lg flex items-start">
                    <FaCertificate className="text-2xl mr-4 mt-1" />
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Certifications:</h3>
                        <ul className="mb-2">
                            {Object.values(resumeData[0].certifications[0]).map(
                                (certification, index) => (
                                    <li key={index} className="text-gray-600 mb-1">
                                        {certification[0].name} | Completion Date: {certification[0].completionDate}
                                    </li>
                                )
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;
