import React, { useEffect, useRef } from 'react';
import { FaBriefcase } from 'react-icons/fa';
import { useResumeDataContext } from "../Providers/ResumeDataProvider";

function Experience() {
    const { resumeData } = useResumeDataContext();
    const listItemRefs = useRef([]);

    useEffect(() => {
        listItemRefs.current.forEach((item, index) => {
            item.style.animationDelay = `${index * 0.2}s`;
            item.classList.add('animate-fade-in');
        });
    }, []);

    var message = Object.values(resumeData[0].experience[0]).map(
        (experience, index) => (
            <AnimatedListItem
                key={index}
                icon={<FaBriefcase className="text-2xl mr-4" />}
                position={experience[0].position}
                company={experience[0].company}
                startDate={experience[0].startDate}
                endDate={experience[0].endDate}
            />
        )
    );

    function AnimatedListItem({ icon, position, company, startDate, endDate }) {
        return (
            <li
                ref={(el) => listItemRefs.current.push(el)}
                className="items-center mb-5 p-5 bg-[rgba(0,0,0,0.45)] backdrop-blur border-black rounded-xl shadow-lg animate-fade-in list-none"
            >
                <div className="flex items-center">
                    {icon}
                    <h1 className="text-xl font-bold">{position}</h1>
                </div>
                <div className="pl-10 pt-3">
                    <p className="text-lg mb-2">{company}</p>
                    <p>
                        {startDate} - {endDate}
                    </p>
                </div>
            </li>
        );
    }

    return (
        <div className="tab-contents active-tab">
            <div>{message}</div>
        </div>
    );
}



export default Experience;
