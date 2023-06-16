
const About = () => {
    const opentab = (tabname) => {
        const tablinks = document.getElementsByClassName("tab-links");
        const tabcontents = document.getElementsByClassName("tab-contents");
      
        for (let tablink of tablinks) {
          tablink.classList.remove("active-link");
        }
        for (let tabcontent of tabcontents) {
          tabcontent.classList.remove("active-tab");
        }
        Event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
      }
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
                        <p className="tab-links active-link" onClick={opentab}>Skills</p>
                        <p className="tab-links" onClick={opentab}>Experience</p>
                        <p className="tab-links" onClick={opentab}>Education</p>
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

export default About; 