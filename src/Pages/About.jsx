import React, { useRef, useState } from 'react';
import Skills from './aboutTabs/Skills';
import Education from './aboutTabs/Education';
import Experience from './aboutTabs/Experience';
import { useResumeDataContext } from '../Providers/ResumeDataProvider';
import UserImg from '../Assets/images/meetPic.jpg';
import '../styles/style.css';
import { FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-scroll';

export default function About() {
    const { resumeData } = useResumeDataContext();
    const aboutInfoTitleRef = useRef(null);
    const [marginTop] = useState(window.innerHeight);
    const [activeTab, setActiveTab] = useState('skills');

    const handleTabClick = (tab) => {
        setActiveTab((prevTab) => (prevTab === tab ? '' : tab));
    };
    const tabContentMap = {
        skills: <Skills />,
        experience: <Experience />,
        education: <Education />,
    };

    const tabContent = tabContentMap[activeTab];

    return (
        <div id="about" className="relative p-4 mx-auto threeDWrap sm:max-w-2xl md:max-w-full lg:max-w-screen md:px-8 lg:px-12 mt-screen z-10 bg-[rgba(44,44,44,0.21)] backdrop-blur-md rounded-t-3xl text-white border-slate-800 border-t border-x" style={{ marginTop }}>

            <div className="flex flex-col lg:flex-row p-1 lg:p-12 ">
                <div id="aboutInfo" className="lg:w-1/2 lg:mr-8 lg:ml-4 p-8 max-w-5xl">
                    <div id="aboutInfoTitle" className="opacity-1 transform transition-opacity duration-500 ease-in-out" ref={aboutInfoTitleRef}>
                        <h1 className="text-4xl pb-4">About</h1>
                        <p className='pb-4 text-lg'>{resumeData[0].aboutMe}</p>
                    </div>

                    <div>
                        <nav id="AboutTabTitles" className="flex justify-center mt-4 text-center">
                            {['skills', 'experience', 'education'].map((tab) => (
                                <button
                                    key={tab}
                                    className={`text-lg text-white transition-all duration-200 ease-in-out hover:scale-105 bg-[rgba(27,27,27,0.54)] ${activeTab === tab ? 'bg-[rgba(255,255,255,0.21)]' : 'bg-[rgba(0,0,0,0.53)]'} pr-3 pl-3 mr-1 ml-1 focus:bg-[rgba(139,139,139,0.21)] hover:shadow-2xl w-full py-2  bg-[rgba(0,0,0,0.53)] rounded-xl border-slate-800 border`}
                                    onClick={() => handleTabClick(tab)}
                                >
                                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                </button>
                            ))}
                        </nav>
                    </div>
                    <div id="AboutTabs" className="mt-8 opacity-1 transform transition-opacity duration-500 ease-in-out ">
                        {tabContent}
                    </div>
                </div>
                <div className="lg:w-1/2">
                    <img src={UserImg} alt="Meet Suthar" className="object-cover w-full h-auto shadow-2xl transition-all rounded-md" />
                </div>

            </div>
        </div>
    );
};
