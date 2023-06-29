import React, { useEffect, useRef } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Skills from "../components/Skills";
import Education from '../components/Education';
import Experience from '../components/Experience';
import { useResumeDataContext } from "../Providers/ResumeDataProvider";
import UserImg from "../Assets/images/meetPic.jpg"

const About = () => {
    const {resumeData} = useResumeDataContext();

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

    return ( 
        <div id="about" className="relative"> 
        <div className="flex flex-col lg:flex-row p-10">
          <img src={UserImg} alt="Meet Suthar" className="max-w-sm rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105" />
          <div id="aboutInfo" className="about-info bg-white rounded-lg shadow-lg mt-8 lg:mt-0 lg:ml-8 p-6 border border-gray-300">
            <div
              id="aboutInfoTitle"
              className="opacity-0 transform transition-opacity duration-500 delay-500 ease-in-out"
              ref={aboutInfoTitleRef}
            >
              <h1 className="sub-title">About Me</h1>
              <p>{resumeData[0].aboutMe}</p>
            </div>
            <div>
              <nav id="AboutTabTitles" className="flex justify-center mt-4">
                <Link to="/" className="tab-links rounded-lg px-4 py-2 shadow mr-2 transition-colors duration-200 ease-in-out bg-blue-500 text-white hover:bg-blue-600">Skills</Link>
                <Link to="/experience" className="tab-links rounded-lg px-4 py-2 shadow mr-2 transition-colors duration-200 ease-in-out bg-blue-500 text-white hover:bg-blue-600">Experience</Link>
                <Link to="/education" className="tab-links rounded-lg px-4 py-2 shadow mr-2 transition-colors duration-200 ease-in-out bg-blue-500 text-white hover:bg-blue-600">Education</Link>
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
