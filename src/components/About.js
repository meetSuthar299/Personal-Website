import React from 'react';


const About = ({ resumeData }) => {
    return (
        <div id="about">
            <div className="about-header">
                <h1>Hi, I'm <span>{resumeData[0].name}!</span></h1>
            </div>
            <div className="about-content">
                <img src="images/meetPic.jpg" alt="Meet Suthar" />
                <div className="about-info">
                    <div className="about-info-title">
                        <h1 className="sub-title">About Me</h1>
                        <div>
                            {
                                resumeData[0].aboutMe
                            }
                        </div>
                    </div>
                    <div className="tab-titles">
                        <p className="tab-links" onClick={""}>Skills</p>
                        <p className="tab-links active-link" onClick={""}>Experience</p>
                        <p className="tab-links" onClick={""}>Education</p>
                    </div>
                    <div className="tab-contents" id="skills">
                        <ul>
                            <li>
                                <span>UI?UX</span><br />Designing Web Apps interface
                            </li>
                            <li>
                                <span>Web Development</span><br />Web App Development
                            </li>
                            <li>
                                <span>Application Development</span><br />Design and Building Android/iOS Apps
                            </li>
                        </ul>
                    </div>
                    <div className="tab-contents" id="experience">
                        <div>
                            {Object.values(resumeData[0].enperience[0]).map((experience, index) => (
                                <div key={index}>
                                    <h3>{experience[0].position}</h3>
                                    <p>{experience[0].company}</p>
                                    <p>
                                        {experience[0].startDate} - {experience[0].endDate}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="tab-contents active-tab" id="education">
                        <div>
                            {resumeData[0].education.map((education, index) => (
                                <div key={index}>
                                    <h3>{education.degree}</h3>
                                    <p>{education.university}</p>
                                    <p>Completion Date: {education.completionDate}</p>
                                    <p>Grade: {education.grade}</p>
                                </div>
                            ))}
                            <h3>Certifications:</h3>
                            <ul>
                                {Object.values(resumeData[0].certifications[0]).map(
                                    (certification, index) => (
                                        <li key={index}>{certification[0].name} | Completion Date: {certification[0].completionDate}</li>
                                    )
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ); 

};

export default About; 