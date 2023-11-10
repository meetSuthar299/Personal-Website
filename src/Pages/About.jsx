import React, { useEffect, useRef, useState } from 'react';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Experience from '../components/Experience';
import { useResumeDataContext } from '../Providers/ResumeDataProvider';
import UserImg from '../Assets/images/meetPic.jpg';
import '../styles/style.css';
import { FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-scroll';


const About = () => {
    const { resumeData } = useResumeDataContext();
    const aboutInfoTitleRef = useRef(null);
    const [marginTop, setMarginTop] = useState(0);
    const [activeTab, setActiveTab] = useState('');

    useEffect(() => {   
        const handleResize = () => {
            const screenHeight = window.innerHeight;
            setMarginTop(screenHeight);
        };

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    let tabContent;
    if (activeTab === 'skills') {
        tabContent = <Skills />;
    } else if (activeTab === 'experience') {
        tabContent = <Experience />;
    } else if (activeTab === 'education') {
        tabContent = <Education />;
    }

    return (
        <div id="about" className="relative mx-auto threeDWrap sm:max-w-2xl md:max-w-full lg:max-w-screen md:px-8 lg:px-12 mt-screen z-10 bg-[rgba(46,46,46,0.69)] backdrop-blur border-black rounded-t-3xl text-white" style={{ marginTop }}>
            <div id="scrollIcon" className="fixed pb-24 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-white">
                <Link
                    to={"about"}
                    smooth={true}
                    duration={1000}
                    offset={-100}
                >
                    <FaChevronDown className="text-3xl animate-bounce" />
                </Link>
            </div>
            <div className="flex flex-col lg:flex-row p-1 lg:p-12">

                <div id="aboutInfo" className="lg:w-1/2 lg:mr-8 lg:ml-4 p-8 max-w-5xl backdrop-blur bg-[rgba(0,0,0,0.53)] rounded-xl">
                    <div
                        id="aboutInfoTitle"
                        className="opacity-1 transform transition-opacity duration-500 ease-in-out"
                        ref={aboutInfoTitleRef}
                    >
                        <h1 className="text-4xl pb-4">About Me</h1>
                        <p className='pb-4 text-lg'>{resumeData[0].aboutMe}</p>
                        <a href="./MeetSutharResume2023.pdf" className="mt-5 w-60 text-lg text-white text-center transition-all duration-200 ease-in-out hover:scale-110 bg-[rgba(255,255,255,0.21)] px-3 py-2 rounded-xl focus:bg-[rgba(139,139,139,0.21)] hover:shadow-2xl p-5" download>
                            Download Resume
                        </a>
                    </div>
                    <hr className="w-full my-6 border-gray-300" />
                    <div>
                        <nav id="AboutTabTitles" className="flex justify-center mt-4 text-center">
                            {['skills', 'experience', 'education'].map((tab) => (
                                <button
                                    key={tab}
                                    className={`text-lg text-white transition-all duration-200 ease-in-out hover:scale-110 ${activeTab === tab ? 'bg-[rgba(255,255,255,0.21)]' : ''
                                        } pr-3 pl-3 mr-1 ml-1 rounded-xl focus:bg-[rgba(139,139,139,0.21)] hover:shadow-2xl w-28 pt-2`}
                                    onClick={() => handleTabClick(tab)}
                                >
                                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                </button>
                            ))}
                        </nav>
                    </div>
                    <div
                        id="AboutTabs"
                        className="mt-8 opacity-1 transform transition-opacity duration-500 ease-in-out"
                    >
                        {tabContent}
                    </div>
                </div>
                <div className="lg:w-1/2">
                    <img src={UserImg} alt="Meet Suthar" className="object-cover w-full h-96 lg:h-auto lg:w-full shadow-2xl transition-all rounded-xl" />
                </div>

            </div>
        </div>
    );
};

export default About;
