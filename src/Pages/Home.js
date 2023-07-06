import React from "react";
import { useResumeDataContext } from "../Providers/ResumeDataProvider";
import Typed from 'react-typed';

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
            <h1 className="text-4xl font-mono z-10">
                {"<h1> Hi I'm <span>"}
                <span className="text-red-800">
                    <TypingText text={resumeData[0].name} />
                </span>
                {"</span> </h1>"}
            </h1>
            <div className="absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0">
                <svg
                    viewBox="0 0 88 88"
                    className="w-full max-w-screen-xl text-gray-800"
                >
                    <circle
                        fill="currentColor"
                        fillOpacity="0.4"
                        cx="44"
                        cy="44"
                        r="15.5"
                    />
                    <circle
                        fillOpacity="0.1"
                        fill="currentColor"
                        cx="44"
                        cy="44"
                        r="44"
                    />
                    <circle
                        fillOpacity="0.1"
                        fill="currentColor"
                        cx="44"
                        cy="44"
                        r="37.5"
                    />
                    <circle
                        fillOpacity="0.1"
                        fill="currentColor"
                        cx="44"
                        cy="44"
                        r="29.5"
                    />
                    <circle
                        fillOpacity="0.1"
                        fill="currentColor"
                        cx="44"
                        cy="44"
                        r="22.5"
                    />
                </svg>
            </div>
        </div>
    )
}

export default Home; 