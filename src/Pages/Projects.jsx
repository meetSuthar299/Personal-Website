import React, { useState } from "react";
import { FaImages, FaReact, FaReacteurope, FaStripe } from 'react-icons/fa';
import { SiFirebase, SiRedux } from 'react-icons/si';

const projectsData = [
    {
        id: 1,
        title: 'Project 1',
        description: 'This is the description of Project 1.',
        image: 'project1.jpg',
        technologies: ['JavaScript', 'ReactJS', 'TailwindCSS'],
    },
    {
        id: 2,
        title: 'Project 2',
        description: 'This is the description of Project 2.',
        image: 'project2.jpg',
        technologies: ['JavaScript', 'React Native', 'Firebase'],
    },
    {
        id: 3,
        title: 'Project 3',
        description: 'This is the description of Project 3.',
        image: 'project3.jpg',
        technologies: ['JavaScript', 'Stripe', 'ReactJS', 'Redux'],
    },
    {
        id: 4,
        title: 'Project 4',
        description: 'This is the description of Project 4.',
        image: 'project4.jpg',
        technologies: ['JavaScript', 'Stripe', 'ReactJS', 'Redux', 'Firebase'],
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
    <div className="max-w-md mx-auto overflow-hidden backdrop-filter backdrop-blur-lg text-center text-white hover:shadow-lg  bg-[rgba(0,0,0,0.32)] border-black rounded-xl shadow-md animate-fade-in">
        <img className="w-full h-48 object-cover rounded-t-lg" src={project.image} alt={project.title} />
        <div className="p-4">
            <h2 className="font-bold text-xl">{project.title}</h2>
            <p className="text-sm">{project.description}</p>
            <div className="mt-4 space-x-2 flex justify-center">
                {project.technologies.map((tech, index) => (
                    <TechIcon key={index} tech={tech} />
                ))}
            </div>
        </div>
    </div>
);

const ProjectList = ({ projects }) => (
    <div className="pt-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
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