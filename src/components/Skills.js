import React from 'react';
import { FaPaintBrush, FaCode, FaMobileAlt } from 'react-icons/fa';

function Skills() {
    return (
        <div className="tab-contents active-tab">
            <ul>
                <li className="flex items-center mb-6">
                    <FaPaintBrush className="text-2xl mr-6" />
                    <div>
                        <span className="text-xl font-semibold">UI/UX</span>
                        <br />
                        Designing Web Apps interface
                    </div>
                </li>
                <li className="flex items-center mb-6">
                    <FaCode className="text-2xl mr-6" />
                    <div>
                        <span className="text-xl font-semibold">Web Development</span>
                        <br />
                        Web App Development
                    </div>
                </li>
                <li className="flex items-center mb-4">
                    <FaMobileAlt className="text-2xl mr-6" />
                    <div>
                        <span className="text-xl font-semibold">Application Development</span>
                        <br />
                        Design and Building Android/iOS Apps
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Skills;
