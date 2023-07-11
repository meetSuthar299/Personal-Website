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
        <div id="home" className="h-screen w-screen flex justify-center items-center py-10 fixed top-0 inset-x-0 z-0 overflow-hidden" >

            {/* <div class ="wave overflow-y-hidden"></div> */}
            <video muted autoPlay loop class="absolute z-10 w-screen">
                <source
                    src="./BgVideo.mp4"
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>
            <h1 className="text-4xl text-white font-mono z-10 text-balance p-5 backdrop-blur rounded-lg shadow-2xl border-2 border-black">
                {"<h1> Hi I'm "}
                <span className="text-red-800">
                    <TypingText text={resumeData[0].name + "       "} />
                </span>
                {"</h1>"}
            </h1>
            {/* <div className="absolute inset-x-0 top-0 items-center justify-center overflow-hidden flex inset-y-0">
                <svg
                    viewBox="0 0 88 88"
                    className="w-full max-w-screen-xl text-"
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
            </div> */}
        </div>
    )
}

export default Home; 