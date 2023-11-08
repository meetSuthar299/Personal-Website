import React, { useEffect, useRef, useState } from 'react';
import Skills from "../components/Skills";
import Education from '../components/Education';
import Experience from '../components/Experience';
import { useResumeDataContext } from "../Providers/ResumeDataProvider";
import UserImg from "../Assets/images/meetPic.jpg";
import '../styles/style.css';

const About = () => {
    const { resumeData } = useResumeDataContext();

    const aboutInfoTitleRef = useRef(null);
    const aboutTabsRef = useRef(null);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5,
        };

        const aboutInfoTitleObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    aboutInfoTitleRef.current.classList.add("opacity-100", "translate-y-0");
                }
            });
        }, observerOptions);

        const aboutTabsObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    aboutTabsRef.current.classList.add("opacity-100", "translate-y-0");
                }
            });
        }, observerOptions);

        aboutInfoTitleObserver.observe(aboutInfoTitleRef.current);
        aboutTabsObserver.observe(aboutTabsRef.current);

        return () => {
            aboutInfoTitleObserver.disconnect();
            aboutTabsObserver.disconnect();
        };
    }, []);

    const [marginTop, setMarginTop] = useState(0);
    useEffect(() => {
        const handleResize = () => {
            const screenHeight = window.innerHeight;
            setMarginTop(screenHeight);
        };

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const [activeTab, setActiveTab] = useState('');

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
        <div id="about" className="relative mx-auto threeDWrap sm:max-w-2xl md:max-w-full lg:max-w-screen md:px-26 lg:px-8 mt-screen z-10 bg-[rgba(46,46,46,0.69)] backdrop-blur border-black rounded-t-3xl text-white" style={{ marginTop }}>
            <div className="flex flex-col lg:flex-row p-10">
                <div className='flex justify-center px-10 h-96'>
                    <img src={UserImg} alt="Meet Suthar" className="object-cover w-full shadow-2xl transition-all rounded-xl hover:rounded-xl duration-700 hover:scale-105 mr-auto" />
                </div>

                <div id="aboutInfo" className="about-info rounded-3xl shadow-xl mt-8 lg:mt-0 lg:ml-8 p-8 max-w-5xl backdrop-blur bg-[rgba(0,0,0,0.53)] ">
                    <div
                        id="aboutInfoTitle"
                        className="opacity-0 transform transition-opacity duration-500 delay-500 ease-in-out"
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
                            <button
                                className={`text-lg text-white transition-all duration-200 ease-in-out hover:scale-110 ${activeTab === 'skills' ? 'bg-[rgba(255,255,255,0.21)]' : ''
                                    } pr-3 pl-3 mr-1 ml-1 rounded-xl focus:bg-[rgba(139,139,139,0.21)] hover:shadow-2xl w-28 pt-2`}
                                onClick={() => handleTabClick('skills')}
                            >
                                Skills
                            </button>
                            <button
                                className={`text-lg text-white transition-all duration-200 ease-in-out hover:scale-110 ${activeTab === 'experience' ? 'bg-[rgba(255,255,255,0.21)]' : ''
                                    } pr-3 pl-3 mr-1 ml-1 rounded-xl focus:bg-[rgba(139,139,139,0.21)] hover:shadow-2xl w-28 pt-2`}
                                onClick={() => handleTabClick('experience')}
                            >
                                Experience
                            </button>
                            <button
                                className={`text-lg text-white transition-all duration-200 ease-in-out hover:scale-110 ${activeTab === 'education' ? 'bg-[rgba(255,255,255,0.21)]' : ''
                                    } pr-3 pl-3 mr-1 ml-1 rounded-xl focus:bg-[rgba(139,139,139,0.21)] hover:shadow-2xl w-28 h-12 pt-2`}
                                onClick={() => handleTabClick('education')}
                            >
                                Education
                            </button>
                        </nav>
                    </div>
                    <div
                        id="AboutTabs"
                        className="mt-8 opacity-0 transform transition-opacity duration-500 delay-500 ease-in-out"
                        ref={aboutTabsRef}
                    >
                        {tabContent}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
