import React from "react";
import { useResumeDataContext } from "../Providers/ResumeDataProvider";
import "../styles/wave.css"
import SocualMediaLinks from "../components/SocialmediaLinks";
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
]


const Home = () => {
    const { resumeData } = useResumeDataContext();
    return (
        <div id="home" class="h-screen flex justify-center items-center bg-gradient-to-tr from-[#b8b8b8] to-[#4b3eff]">
            {/* <div class ="wave overflow-y-hidden"></div> */}
            <h1 class="text-5xl" >Hi, I'm <span class="text-red-800">{resumeData[0].name}!</span></h1>
        </div>
    )
}

export default Home; 