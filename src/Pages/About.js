import React, { useEffect, useRef, useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Skills from "../components/Skills";
import Education from '../components/Education';
import Experience from '../components/Experience';
import { useResumeDataContext } from "../Providers/ResumeDataProvider";
import UserImg from "../Assets/images/meetPic.jpg"

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



    return (
        <div id="about" className=" relative mx-auto sm:max-w-2xl md:max-w-full lg:max-w-screen-2xl md:px-26 lg:px-8 mt-screen z-10 bg-[rgba(0,0,0,0.64)] backdrop-blur border-black rounded-t-3xl text-white" style={{ marginTop }}>
            <div className="flex flex-col lg:flex-row p-10">
                <div className='flex justify-center p-6 rounded-3xl'>
                    <img src={UserImg} alt="Meet Suthar" className="max-h-96 max-w-fit rounded-xl shadow-2xl transition-transform duration-500 ease-in-out transform hover:scale-105" />
                </div>

                <div id="aboutInfo" className="about-info rounded-2xl shadow-2xl mt-8 lg:mt-0 lg:ml-8 p-8 max-w-5xl backdrop-blur border-black">
                    <div
                        id="aboutInfoTitle"
                        className="opacity-0 transform transition-opacity duration-500 delay-500 ease-in-out"
                        ref={aboutInfoTitleRef}
                    >
                        <h1 className="text-4xl pb-4">About Me</h1>
                        <p className='pb-4 text-lg'>{resumeData[0].aboutMe}</p>
                    </div>
                    <hr className="w-full my-6 border-gray-300" />
                    <div>
                        <nav id="AboutTabTitles" className="flex justify-center mt-4">
                            <Link to="/" className="tab-links flex items-center justify-center w-32 h-12 rounded-md mx-1 bg-stone-300 text-gray-900 hover:text-xl px-3 py-2 transition-all duration-300 border-b-2 border-transparent hover:border-slate-800 focus:outline-none active:bg-slate-800 active:text-white">Skills</Link>
                            <Link to="/experience" className="tab-links flex items-center justify-center w-32 h-12 text-center rounded-md mx-1 bg-stone-300 text-gray-900 hover:text-xl px-3 py-2 transition-all duration-300 border-b-2 border-transparent hover:border-slate-800 focus:outline-none  active:bg-slate-800 active:text-white">Experience</Link>
                            <Link to="/education" className="tab-links flex items-center justify-center w-32 h-12 tab-links rounded-md mx-1 bg-stone-300 text-gray-900 hover:text-xl px-3 py-2 transition-all duration-300 border-b-2 border-transparent hover:border-slate-800 focus:outline-none  active:bg-slate-800 active:text-white">Education</Link>
                        </nav>
                    </div>
                    <div
                        id="AboutTabs"
                        className="mt-8 opacity-0 transform transition-opacity duration-500 delay-500 ease-in-out"
                        ref={aboutTabsRef}
                    >
                        <Routes>
                            <Route path="/" element={<Skills />} />
                            <Route path="/experience" element={<Experience />} />
                            <Route path="/education" element={<Education />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
