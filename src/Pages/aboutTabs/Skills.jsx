import React, { useEffect, useRef } from 'react';
import { FaPaintBrush, FaCode, FaMobileAlt } from 'react-icons/fa';

function Skills() {
    const listItemRefs = useRef([]);

    useEffect(() => {
        listItemRefs.current.forEach((item, index) => {
            item.style.animationDelay = `${index * 0.2}s`;
            item.classList.add('animate-fade-in');
        });
    }, []);
    function AnimatedListItem({ icon, title, skills }) {
        return (
            <li
                ref={(el) => listItemRefs.current.push(el)}
                className="items-center mb-5 p-5 bg-[rgba(0,0,0,0.45)] border-black rounded-xl shadow-lg animate-fade-in"
            >
                <div className="flex items-center">
                    {icon}
                    <h1 className="text-xl font-semibold">{title}</h1>
                </div>
                <div className="pl-12 pt-3">
                    {skills.length > 0 && (
                        <>
                            <p>{`Proficient and adaptable in various ${title.toLowerCase()}:`}</p>
                            <ul className="text-sm list-disc pl-5">
                                {skills.map((skill) => (
                                    <li key={skill}>{skill}</li>
                                ))}
                            </ul>
                        </>
                    )}
                </div>
            </li>
        );
    }

    return (
        <div className="tab-contents active-tab">
            <ul className="">
                <AnimatedListItem
                    icon={<FaCode className="text-2xl mr-6" />}
                    title="Programming Languages"
                    skills={['JavaScript', 'TypeScript', 'PHP', 'Python']}
                />
                <AnimatedListItem
                    icon={<FaPaintBrush className="text-2xl mr-6" />}
                    title="Front-end Web"
                    skills={['CSS', 'TailwindCSS', 'Bootstrap', 'Material UI']}
                />
                <AnimatedListItem
                    icon={<FaCode className="text-2xl mr-6" />}
                    title="Back-end "
                    skills={['MongoDB', 'NodeJS', 'ExpressJS', 'Laravel', 'Firebase']}
                />
                <AnimatedListItem
                    icon={<FaMobileAlt className="text-2xl mr-6" />}
                    title="Application Development"
                    skills={['React Native', 'React JS', 'Flutter']}
                />
            </ul>
        </div>
    );
}



export default Skills;
