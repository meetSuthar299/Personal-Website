import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Skills from "../components/Skills";
import Education from '../components/Education';
import Experience from '../components/Experience';
import { useResumeDataContext } from "../Providers/ResumeDataProvider";
import UserImg from "../Assets/images/meetPic.jpg"

const About = () => {
    const {resumeData} = useResumeDataContext();
    return ( 
        <div id="about" class="relative py-10"> 
                <div className="about-content"> 
                    <img src={UserImg} alt="Meet Suthar" class = "max-w-4xl"/>
                    <div className="about-info">
                        <div className="about-info-title">
                            <h1 className="sub-title">About Me</h1>
                            <p>{resumeData[0].aboutMe}</p>
                        </div>
                        <div>
                            <nav className='tab-titles'>
                                <Link to="/" className="tab-links" >Skills</Link>
                                <Link to="/experience" className="tab-links" >Experience</Link>
                                <Link to="/education" className="tab-links" >Education</Link>
                            </nav>
                        </div>
                        <div>
                            <Routes>
                                <Route path="/" element={<Skills />}> </Route>
                                <Route path="/experience" element={<Experience />}> </Route>
                                <Route path="/education" element={<Education />} > </Route>
                            </Routes> 
                        </div>
                    </div>
                </div>
        </div>
    );

};

export default About; 