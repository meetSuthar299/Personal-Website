import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Skills from "./Skills";
import Education from './Education';
import Experience from './Experience';
import ResumeDataProvider from '../Providers/ResumeDataProvider';
import AboutHeader from './AboutHeader';

const About = () => {
    return (
        <div id="about">
            <ResumeDataProvider>
                <AboutHeader />
                <div className="about-content">
                    <img src="images/meetPic.jpg" alt="Meet Suthar" />
                    <div className="about-info">
                        <div className="about-info-title">
                            <h1 className="sub-title">About Me</h1>
                            <div>

                                {
                                    //resumeData[0].aboutMe
                                }
                            </div>
                        </div>
                        <div>
                            <nav className='tab-titles'>
                                <Link to="/skills" className="tab-links" >Skills</Link>
                                <Link to="/experience" className="tab-links" >Experience</Link>
                                <Link to="/education" className="tab-links" >Education</Link>
                            </nav>

                            <Routes>
                                <Route path="/skills" element={<Skills />}> </Route>
                                <Route path="/experience" element={<Experience />}> </Route>
                                <Route path="/education" element={<Education />} > </Route>
                            </Routes>
                        </div>
                    </div>
                </div>
            </ResumeDataProvider>

        </div>
    );

};

export default About; 