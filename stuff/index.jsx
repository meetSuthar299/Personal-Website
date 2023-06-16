import React from 'react';
import './style.css';

const Header = () => {
  return (
    <div className="nav-bar">
        <img src="images/Meet.logo.png" alt="logo" className="logo" />
        <input className="menu-icon" type="checkbox" id="menu-icon" name="menu-icon" />
        <label htmlFor="menu-icon"></label>
        <nav className="nav">
            <ul className="pt-5">
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Portfolio</a></li>
                <li>
                    <a href="#">Contact</a>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/profile.php?id=100008195223641"><i className="fab fa-facebook"></i></a>
                        <a href="https://www.instagram.com/meetsuthar/"><i className="fab fa-instagram"></i></a>
                        <a href="https://www.linkedin.com/in/meetsuthar/"><i className="fab fa-linkedin"></i></a>
                        <a href="https://www.linkedin.com/in/meetsuthar/"><i className="fab fa-github"></i></a>
                    </div>
                </li>
            </ul>
        </nav>
    </div>
  );
};

const About = () => {
  return (
    <div id="about">
        <div className="about-header">
            <h1>Hi, I'm <span>Meet Suthar!</span></h1>
        </div>
        <div className="about-content">
            <img src="images/meetPic.jpg" alt="Meet Suthar" />
            <div className="about-info">
                <div className="about-info-title">
                    <h1 className="sub-title">About Me</h1>
                    <p>This section is about me!</p>
                </div>
                <div className="tab-titles">
                    <p className="tab-links active-link" onClick={() => opentab('skills')}>Skills</p>
                    <p className="tab-links" onClick={() => opentab('experience')}>Experience</p>
                    <p className="tab-links" onClick={() => opentab('education')}>Education</p>
                </div>
                <div className="tab-contents active-tab" id="skills">
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
                    <ul>
                        <li>
                            <span>Systems Admin - HYAS Infisec.</span><br />Inscharg of day to day IT Department
                            projects, device configs, software suport...
                        </li>
                        <li>
                            <span>Application Support/Development - CNOOC International</span><br />I did Stuff!
                        </li>
                        <li>
                            <span>Customer Service Rep - TD Canada Trust</span><br />Money and stuff
                        </li>
                    </ul>
                </div>
                <div className="tab-contents" id="education">
                    <ul>
                        <li>
                            <span>BCIT - Computer Systems Technology</span><br />Diploma in Computer Systems Technology
                        </li>
                        <li>
                            <span>UBC - Computer Science</span><br />Bachelors in Computer Science
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  );
};

const HTMLPage = () => {
  return (
    <div>
      <Header />
      <About />
    </div>
  );
};

export default HTMLPage;
