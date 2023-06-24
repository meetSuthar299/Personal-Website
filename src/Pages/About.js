import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Skills from "../components/Skills";
import Education from '../components/Education';
import Experience from '../components/Experience';

const About = () => {
    return ( 
        <div id="about"> 
                <div className="about-content"> 
                    <img src="images/meetPic.jpg" alt="Meet Suthar" />
                    <div className="about-info">
                        <div className="about-info-title">
                            <h1 className="sub-title">About Me</h1>
                            <p>a lil about me</p>
                        </div>
                        <div>
                            <nav className='tab-titles'>
                                <Link to="/skills" className="tab-links" >Skills</Link>
                                <Link to="/experience" className="tab-links" >Experience</Link>
                                <Link to="/education" className="tab-links" >Education</Link>
                            </nav>
                        </div>
                        <div>
                            <Routes>
                                <Route path="/skills" element={<Skills />}> </Route>
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