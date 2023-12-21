import React, { useState } from "react";
import { FaImages, FaReact, FaStripe, FaGithub, FaExternalLinkAlt, FaFigma, FaNode } from 'react-icons/fa';
import { RiJavascriptLine } from "react-icons/ri";
import { SiFirebase, SiRedux, SiTailwindcss } from 'react-icons/si';
import netflixClone from '../Assets/images/NetflixClone.jpg';
import homeWard from '../Assets/images/Homeward.jpg';
import rockPaperScissors from '../Assets/images/rockPaperSc.jpg';
import shopMIT from "../Assets/images/shopMIT.png"

const projectsData = [
    {
        id: 1,
        title: 'ShopMIT E-Commerce App',
        description: 'A full stack ecommerce website built using the MERN stack for MIT Infosys for customer facing store to order products for local delivery, and internal  inventory management/tracking. (under development)',
        image: shopMIT,
        technologies: ['JavaScript', 'ReactJS', "NodeJS", 'Redux', 'Mongo DB', 'Express'],
        projectLink: "https://shopmit.vercel.app/",
    },
    {
        id: 2,
        title: 'Netflix Clone',
        description: 'The Netflix clone is a web application built with ReactJS, featuring Firebase authentication, Firestore integration for storing user preferences, Redux for state management, and Stripe for simulated payment processing. It uses the TMDB API to provide a dynamic selection of movies and related videos.',
        image: netflixClone,
        technologies: ['JavaScript', 'ReactJS', 'Redux', 'Firebase', 'Stripe'],
        github: "https://github.com/meetSuthar299/netflix-build",
        projectLink: "https://meetsuthar299.github.io/netflix-build/#/",
    },
    {
        id: 3,
        title: 'Homeward-App',
        description: 'Homeward is a React Native expo-managed mobile application for finding lost pets. Users may create posts to spread the word and get help from the community in reuniting with their pets.',
        image: homeWard,
        technologies: ['JavaScript', 'React Native', 'Firebase', "NodeJS"],
        github: "https://github.com/meetSuthar299/homeward-App",
        figma: "https://www.figma.com/file/ngq0iER7f3X3sTdhsYz2IK/Homeward-Main"
    },
    {
        id: 4,
        title: 'Rock Paper Scissors Game',
        description: 'A simple Rock Paper Scissors game made using ReactJS and tailwindCSS. The game can be played against the computer, or have the computers battle themselves.',
        image: rockPaperScissors,
        technologies: ['JavaScript', 'ReactJS', "TailwindCSS"],
        projectLink: "https://meetsuthar299.github.io/Rock-Paper-Scissors/",
        github: "https://github.com/meetSuthar299/Rock-Paper-Scissors"
    },
];

const LinkIcon = ({ href, icon, tooltip }) => (
    <a href={href} target="_blank" rel="noopener noreferrer">
        {icon &&
            React.cloneElement(icon, {
                className:
                    "h-6 w-6 text-gray-400 hover:text-gray-500 transition-all duration-200 hover:scale-110",
                title: tooltip,
            })}
    </a>
);

const ProjectCard = ({ project }) => (
    <div className="max-w-md mx-auto overflow-hidden backdrop-filter backdrop-blur-lg text-center text-white hover:shadow-lg  shadow-md animate-fade-in rounded-lg bg-[rgba(0,0,0,0.8)] border-slate-700 border">
        <img
            className="w-full h-52 object-cover rounded-t-lg"
            src={project.image}
            alt={project.title}
        />
        <div className="p-4">
            <h2 className="font-bold text-xl">{project.title}</h2>
            <div className="flex justify-center mt-4 space-x-4">
                {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <FaGithub className="h-6 w-6 text-gray-400 hover:text-gray-500 transition-all duration-200 hover:scale-110" />
                    </a>
                )}
                {project.projectLink && (
                    <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt className="h-6 w-6 text-gray-400 hover:text-gray-500 transition-all duration-200 hover:scale-110" />
                    </a>
                )}
                {project.figma && (
                    <a href={project.figma} target="_blank" rel="noopener noreferrer">
                        <FaFigma className="h-6 w-6 text-gray-400 hover:text-gray-500 transition-all duration-200 hover:scale-110" />
                    </a>
                )}
            </div>
            <hr className="w-full my-6 border-gray-300" />
            <p className="text-sm">{project.description}</p>
            <div className="mt-4 space-x-2 flex justify-center">
                {project.technologies.map((tech, index) => (
                    <div key={index} className="relative inline-block" title={tech}>
                        {tech === "JavaScript" && <RiJavascriptLine />}
                        {tech === "ReactJS" && <FaReact />}
                        {tech === "React Native" && <FaReact />}
                        {tech === "TailwindCSS" && <SiTailwindcss />}
                        {tech === "Stripe" && <FaStripe />}
                        {tech === "Firebase" && <SiFirebase />}
                        {tech === "Redux" && <SiRedux />}
                        {tech === "NodeJS" && <FaNode />}
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const ProjectList = ({ projects }) => (
    <div className="pt-5 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 text-xl">
        {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
        ))}
    </div>
);

const ProjectFilter = ({ technologies, onFilterChange }) => (
    <div className="flex flex-wrap justify-center gap-2 mt-8 p-4">
        {technologies.map((tech) => (
            <button
                key={tech}
                onClick={() => onFilterChange(tech)}
                className="text-lg text-white transition-all duration-200 ease-in-out hover:scale-110 bg-[rgba(42,42,42,0.16)] px-4 py-2 m-1 rounded-xl focus:bg-[rgba(139,139,139,0.21)] hover:shadow-2xl"
            >
                {tech}
            </button>
        ))}
    </div>
);

export default function Projects() {
    const [filteredProjects, setFilteredProjects] = useState(projectsData);
    const allTechnologies = Array.from(
        new Set(projectsData.flatMap((project) => project.technologies))
    );
    const [technologies] = useState(["All", ...allTechnologies]);

    const handleFilterChange = (tech) => {
        setFilteredProjects(
            tech === "All"
                ? projectsData
                : projectsData.filter((project) =>
                    project.technologies.includes(tech)
                )
        );
    };

    return (
        <div id="project" className="px-4 py-16 md:px-8 lg:px-24 lg:py-20 relative z-10 bg-[rgba(44,44,44,0.21)] border-slate-800 backdrop-blur-md border-x">
            <div className="w-full mb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <h2 className="max-w-lg mb-6 font-sans text-5xl font-bold text-white sm:text-4xl">
                        <span className="relative inline-block text-3xl">
                            <FaImages />
                        </span>{" "}
                        Projects
                    </h2>
                </div>
                <div className="container mx-auto">
                    <ProjectFilter
                        technologies={technologies}
                        onFilterChange={handleFilterChange}
                    />
                    <ProjectList projects={filteredProjects} />
                </div>
            </div>
        </div>
    );
}