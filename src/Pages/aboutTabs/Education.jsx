import React, { useEffect, useRef } from 'react';
import { FaGraduationCap, FaCertificate } from 'react-icons/fa';
import { useResumeDataContext } from "../../Providers/ResumeDataProvider";

function Education() {
    const { resumeData } = useResumeDataContext();
    const listItemRefs = useRef([]);

    useEffect(() => {
        listItemRefs.current.forEach((item, index) => {
            item.style.animationDelay = `${index * 0.2}s`;
            item.classList.add('animate-fade-in');
        });
    }, []);

    function AnimatedListItem({
        icon,
        degree,
        university,
        completionDate,
        grade,
    }) {
        return (
            <div
                ref={(el) => listItemRefs.current.push(el)}
                className="items-center mb-5 p-5 bg-[rgba(0,0,0,0.45)] border-black rounded-xl shadow-md animate-fade-in"
            >
                <div className="flex items-center">
                    {icon}
                    <h1 className="text-xl font-semibold">{degree}</h1>
                </div>
                <div className="pl-12 pt-3">
                    <p className="text-lg mb-2">{university}</p>
                    <p className="mb-1">Completion Date: {completionDate}</p>
                    <p className="mb-1">Grade: {grade}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="tab-contents active-tab">
            {resumeData[0].education.map((education, index) => (
                <AnimatedListItem
                    key={index}
                    icon={<FaGraduationCap className="text-3xl mr-4 mt-1" />}
                    degree={education.degree}
                    university={education.university}
                    completionDate={education.completionDate}
                    grade={education.grade}
                />
            ))}
            <div
                ref={(el) => listItemRefs.current.push(el)}
                className="items-center mb-5 p-5 bg-[rgba(0,0,0,0.45)] border-black rounded-xl shadow-md animate-fade-in"
            >
                <div className="flex items-center">
                    <FaCertificate className="text-2xl mr-4 mt-1" />
                    <h3 className="text-xl font-semibold mb-2">Certifications:</h3>
                </div>
                <div className="pl-12 pt-3">
                    <ul className="mb-2">
                        {Object.values(resumeData[0].certifications[0]).map(
                            (certification, index) => (
                                <li key={index} className="mb-1">
                                    {certification[0].name} | Completion Date:{' '}
                                    {certification[0].completionDate}
                                </li>
                            )
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}



export default Education;
