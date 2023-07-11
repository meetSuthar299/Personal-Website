// import React from 'react';
// import { FaPaintBrush, FaCode, FaMobileAlt } from 'react-icons/fa';

// function Skills() {
//     return (
//         <div className="tab-contents active-tab">
//             <ul className=''>
//                 <li className="items-center mb-5 p-5 bg-[rgba(0,0,0,0.45)] border-black rounded-xl shadow-md">
//                     <div className='flex items-center'>
//                         <FaCode className="text-2xl mr-6" />
//                         <h1 className="text-xl font-semibold">Programming Languages</h1>
//                     </div>
//                     <div className='pl-12 pt-3'>
//                         Proficent and adaptable in various programming languages such as:
//                         <ul className='text-sm list-disc pl-5'>
//                             <li>Java</li>
//                             <li>C++</li>
//                             <li>JavaScript</li>
//                             <li>TypeScript</li>
//                             <li>PHP</li>
//                         </ul>
//                     </div>
//                 </li>
//                 <li className="items-center mb-5 p-5  bg-[rgba(0,0,0,0.45)] backdrop-blur border-black rounded-xl shadow-lg">
//                     <div className='flex items-center'>
//                         <FaPaintBrush className="text-2xl mr-6" />
//                         <h1 className="text-xl font-semibold">Front-end Web Development</h1>
//                     </div>
//                     <div className='pl-12 pt-3'>
//                         <p>I specialize in website development, employing straightforward and minimalist
//                             design structures while implementing clean and efficient code.</p>
//                         <p className='pt-3'>Front-end languages:</p>
//                         <ul className='text-sm list-disc pl-5'>
//                             <li>ReactJS</li>
//                             <li>React Native</li>
//                             <li>HTML</li>
//                             <li>CSS</li>
//                         </ul>
//                     </div>
//                 </li>
//                 <li className="items-center mb-5 p-5  bg-[rgba(0,0,0,0.45)] backdrop-blur border-black rounded-xl shadow-lg">
//                     <div className='flex items-center'>
//                         <FaCode className="text-2xl mr-6" />
//                         <h1 className="text-xl font-semibold">Back-end Development</h1>
//                     </div>
//                     <div className='pl-12 pt-3'>
//                         <p>With a strong grasp of Object-Oriented Programming, Big Data, and ORM concepts, I bring a solid foundation in software development. I have hands-on experience in database modeling and data management, and I have successfully developed and implemented REST APIs for various applications and course projects.</p>
//                         <p className='pt-3'>Back-end technologies:</p>
//                         <ul className='text-sm list-disc pl-5'>
//                             <li>MySQL</li>
//                             <li>SQL Server</li>
//                             <li>MongoDB</li>
//                         </ul>
//                     </div>
//                 </li>
//                 <li className="items-center mb-5 p-5  bg-[rgba(0,0,0,0.45)] backdrop-blur border-black rounded-xl shadow-lg">
//                     <div className='flex items-center'>
//                         <FaMobileAlt className="text-2xl mr-6" />
//                         <h1 className="text-xl font-semibold">Application Development</h1>
//                     </div>
//                     <div className='pl-12 pt-3'>
//                         <p>Experienced in React Native app development, I have a strong grasp of its component-based architecture and UI design. I specialize in creating intuitive, high-performing applications that seamlessly integrate with RESTful APIs.</p>
//                     </div>
//                 </li>
//             </ul>
//         </div>
//     )
// }

// export default Skills;
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
                    skills={['Java', 'C++', 'JavaScript', 'TypeScript', 'PHP']}
                />
                <AnimatedListItem
                    icon={<FaPaintBrush className="text-2xl mr-6" />}
                    title="Front-end Web Development"
                    skills={['ReactJS', 'React Native', 'HTML', 'CSS']}
                />
                <AnimatedListItem
                    icon={<FaCode className="text-2xl mr-6" />}
                    title="Back-end Development"
                    skills={['MySQL', 'SQL Server', 'MongoDB']}
                />
                <AnimatedListItem
                    icon={<FaMobileAlt className="text-2xl mr-6" />}
                    title="Application Development"
                    skills={['React Native']}
                />
            </ul>
        </div>
    );
}



export default Skills;
