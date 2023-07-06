import React from "react";
import ItemCard from "../components/ItemCard";
import ItemCardList from "../components/ItemCardList";


export const ContenCreationService = () => {
  return (
    <div className="px-4 py-16 md:px-24 lg:px-8 lg:py-20 relative z-50 backdrop-blur rounded-3xl">
      <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8 relative">
        <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none md:mb-6 group">
          <span className="inline-block mb-1 sm:mb-4 text-4xl">
            Photography and Videography Services
          </span>
          <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
        </h2>
        <p className="text-white lg:text-lg lg:max-w-2xl p-4">
          Welcome to MK Moments, where I offer a range of professional photography services. From capturing timeless portraits and breathtaking landscapes to showcasing architectural wonders and stunning automotive shots, I bring your vision to life through captivating imagery.
        </p>
      </div>
      <ItemCardList />
      <div className="text-center">
        <a
          href="https://www.instagram.com/m.k.moments/?hl=en"
          aria-label=""
          className="text-lg text-white transition-all duration-200 ease-in-out hover:text-teal-accent-400 hover:pb-1 hover:scale-105 hover:shadow-lg cursor-pointer hover:border-b-2"
        >
          Explore my portfolio Instagram
          <svg
            className="inline-block w-3 ml-2"
            fill="currentColor"
            viewBox="0 0 12 12"
          >
            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
          </svg>
        </a>
      </div>
    </div>
  );
};