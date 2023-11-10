import React, { Suspense, useMemo } from "react";
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
    const name = useMemo(() => resumeData[0].name + "                           ", [resumeData]);

    return (
        <div id="home" className="h-screen w-screen flex justify-center items-center fixed top-0 z-0 overflow-hidden" >
            <video muted autoPlay loop className="absolute w-screen h-screen object-cover overflow-hidden">
                <source
                    src="./BgVideo.mp4"
                    type="video/mp4"
                />
            </video>
            <h1 className="text-3xl text-white font-mono z-10 text-balance p-5 backdrop-blur rounded-lg shadow-2xl border-2 border-black m-5">
                {"<h1> Hi I'm "}
                <span className="font-semibold">
                    <Suspense fallback={<div>Loading...</div>}>
                        <TypingText text={name} />
                    </Suspense>
                </span>
                {"</h1>"}
            </h1>
        </div>
    );
}

export default Home; 