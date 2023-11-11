import React, { useState } from "react";
import { FaImages, FaReact, FaReacteurope, FaStripe, FaGithub, FaExternalLinkAlt, FaFigma } from 'react-icons/fa';
import { SiFirebase, SiRedux } from 'react-icons/si';
import netflixClone from '../Assets/images/NetflixClone.jpg';
import homeWard from '../Assets/images/Homeward.jpg';
import rockPaperScissors from '../Assets/images/rockPaperSc.jpg';

const projectsData = [
    {
        id: 1,
        title: 'Netflix Clone',
        description: 'The Netflix clone is a web application built with ReactJS, featuring Firebase authentication, Firestore integration for storing user preferences, Redux for state management, and Stripe for simulated payment processing. It uses the TMDB API to provide a dynamic selection of movies, offering a realistic user experience similar to the actual Netflix platform.',
        image: netflixClone,
        technologies: ['JavaScript', 'ReactJS', 'Redux', 'Firebase', 'Stripe'],
        github:"https://github.com/meetSuthar299/netflix-build",
        projectLink:"https://meetsuthar299.github.io/netflix-build/#/",
    },
    {
        id: 2,
        title: 'Homeward-App',
        description: 'Homeward is a React Native expo-managed mobile application for finding lost pets. Users may create posts to spread the word and get help from the community in reuniting with their pets.',
        image: homeWard,
        technologies: ['JavaScript', 'React Native', 'Firebase'],
        github:"https://github.com/meetSuthar299/homeward-App",
        figma:"https://www.figma.com/file/ngq0iER7f3X3sTdhsYz2IK/Homeward-Main"
    },
    {
        id: 3,
        title: 'Rock Paper Scissors Game',
        description: 'A simple Rock Paper Scissors game made using ReactJS and tailwindCSS. The game can be played against the computer, or have the computers battle themselves.',
        image: rockPaperScissors,
        technologies: ['JavaScript', 'ReactJS', "tailwindCSS"],
        projectLink:"https://meetsuthar299.github.io/Rock-Paper-Scissors/",
        github:"https://github.com/meetSuthar299/Rock-Paper-Scissors"
    },
];

const TechIcon = ({ tech }) => {
    switch (tech) {
        case 'JavaScript':
            return <FaReact />;
        case 'ReactJS':
            return <FaReact />;
        case 'React Native':
            return <FaReacteurope />;
        case 'TailwindCSS':
            return <FaReact />;
        case 'Stripe':
            return <FaStripe />;
        case 'Firebase':
            return <SiFirebase />;
        case 'Redux':
            return <SiRedux />;
        default:
            return null;
    }
};


const ProjectCard = ({ project }) => (
    <div
        className="max-w-md mx-auto overflow-hidden backdrop-filter backdrop-blur-lg text-center text-white hover:shadow-lg  bg-[rgba(0,0,0,0.32)] border-black rounded-xl shadow-md animate-fade-in"
        //onClick={() => window.open(project.github)}
    >
        <img
            className="w-full h-48 object-cover rounded-t-lg"
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
                    <TechIcon key={index} tech={tech} alt={tech} />
                ))}
            </div>
            
        </div>
    </div>
);

const ProjectList = ({ projects }) => (
    <div className="pt-5 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 text-xl">
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

    // Extracting unique technologies from all projects
    const allTechnologies = Array.from(new Set(projectsData.flatMap((project) => project.technologies)));

    const [technologies, setTechnologies] = useState(['All', ...allTechnologies]);

    const handleFilterChange = (tech) => {
        if (tech === 'All') {
            setFilteredProjects(projectsData);
        } else {
            const filtered = projectsData.filter((project) => project.technologies.includes(tech));
            setFilteredProjects(filtered);
        }
    };

    return (
        <div className="px-4 py-16 md:px-8 lg:px-24 lg:py-20 relative z-50 backdrop-blur rounded-3xl bg-[rgba(0,0,0,0.53)]">
            <div className="w-full mb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <h2 className="max-w-lg mb-6 font-sans text-5xl font-bold text-white sm:text-4xl">
                        <span className="relative inline-block text-3xl">
                            <FaImages />
                        </span>{' '}
                        Projects
                    </h2>
                </div>
                <div className="container mx-auto">
                    <ProjectFilter technologies={technologies} onFilterChange={handleFilterChange} />
                    <ProjectList projects={filteredProjects} />
                </div>
            </div>
        </div>
    );
}