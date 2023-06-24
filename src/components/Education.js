import React from "react";
import { useResumeDataContext } from "../Providers/ResumeDataProvider";

const Education = () => {
    const {resumeData} = useResumeDataContext();
    return (
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
    );
}
export default Education;