import React from "react";
import { useResumeDataContext } from "../Providers/ResumeDataProvider";
import "../styles/wave.css"
const Home = () => {
    const {resumeData} = useResumeDataContext();
    return (
        <div id="home" class="h-screen w-screen flex justify-center items-center bg-slate-100">
            {/* <div class ="wave overflow-y-hidden"></div> */}
            <h1 class="text-5xl" >Hi, I'm <span class="text-red-800">{resumeData[0].name}!</span></h1>
        </div>
    )
}

export default Home;