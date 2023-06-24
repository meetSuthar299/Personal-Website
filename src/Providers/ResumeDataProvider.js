import React from "react";

const ResumeDataContext = React.createContext();

const data = [
    {
      name: "Meet Suthar",
      email: "meetsuthar299@gmail.com",
      aboutMe: "Highly motivated recent graduate of Computer Information Systems with over 3 years of corporate work experience as an Application Development and Support Intern and IT Operations Lead Systems Administrator. Passionate software developer with a strong interest in web development. Seeking Developer Opportunities to leverage my proficiency in JavaScript/ES6, and React.",
      address: [{
        city: "Calgary",
        country: "Canada",
      }],
      summaryOfQualification: [{
        1: "Achieved a position of IT Systems Admin Lead in a leading Cyber Security company while successfully completing a University Diploma as a full-time student, demonstrating an excellent work ethic.",
        2: "Displayed exceptional teamwork and communication skills, effectively collaborating with cross-functional teams and conveying technical concepts to non-technical stakeholders.",
        3: "Contributed to the creation of numerous internal company webpages and web forms at CNOOC Inc. using HTML, CSS, and JavaScript.",
        4: "Independently developed various web-based applications from scratch for personal projects and university assignments, utilizing Javascript and React libraries.",
        5: "Possess strong familiarity with version control tools like Git and project management tools like JIRA, utilized for project development and administrative tasks within engineering teams.",
        6: "Demonstrated familiarity with testing frameworks and methodologies, including unit testing and integration testing."
      }],
      education: [{
        degree: "Bachelor of Computer Information Systems - Minor in Business Management",
        completionDate: "June 2022",
        university: "Mount Royal University",
        grade: "3.1"
      }],
      certifications: [{
        1: [{
          name: "Programming with JavaScript",
          completionDate: "June 2023"
        }],
        2: [{
          name: "React Basics",
          completionDate: "June 2023"
        }],
        3: [{
          name: "React Native ",
          completionDate: "June 2023"
        }]
      }],
      technicalSkills: [{
        1: "HTML",
        2: "CSS3",
        3: "JSX",
        4: "JavaScript",
        5: "React Native",
        6: "Python",
        7: "Java",
        8: "PHP",
        9: "Node.JS",
        10: "SQL",
        11: "MongoDB",
        12: "GitHub",
        13: "Jira",
        14: "FireBase"
      }],
      experience: [{
        1: [{
          position: "IT Operations Systems Admin",
          startDate: "July 2021",
          endDate: "May 2023",
          company: "HYAS Infosec Inc. - Cyber Security Software",
        }],
        2: [{
          position: "Business Application Development and Support (Internship) ",
          startDate: "July 2021",
          endDate: "May 2023",
          company: "CNOOC Inc.",
        }]
      }]
    }
  ];


const ResumeDataProvider = ({children}) => {
    const [resumeData] = React.useState(data);

    return(
        <ResumeDataContext.Provider value={{resumeData}} >
            {children}
        </ResumeDataContext.Provider>
    )
}

export const useResumeDataContext = () => React.useContext(ResumeDataContext);

export default ResumeDataProvider; 