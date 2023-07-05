import React from "react";
import { useResumeDataContext } from "../Providers/ResumeDataProvider";
import "../styles/wave.css"
import Typed from 'react-typed';
import backgroundImage from '../Assets/images/homeBG2.jpg';

const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
]
const TypingText = ({ text }) => (
    <Typed
        strings={[text]}
        typeSpeed={150}
        backSpeed={200}
        loop={true}
    />
);

const Home = () => {
    const { resumeData } = useResumeDataContext();
    return (
        <div id="home" class="h-screen flex justify-center items-center p-10 fixed top-0 inset-x-0 z-0">
            {/* <div class ="wave overflow-y-hidden"></div> */}
            <h1 className="text-4xl font-mono">
                {"<h1> Hi I'm <span>"}
                <span className="text-red-800">
                    <TypingText text={resumeData[0].name} />
                </span>
                {"</span> </h1>"}
            </h1>

        </div>
    )
}

export default Home; 