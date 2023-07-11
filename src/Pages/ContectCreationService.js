import React from "react";
import ItemCardList from "../components/ItemCardList";
import { FaImages } from 'react-icons/fa';


export const ContenCreationService = () => {
  return (
    <div className="px-4 py-16 md:px-24 lg:px-8 lg:py-20 relative z-50 backdrop-blur rounded-3xl">
      <div className="w-fit mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">
          <h2 className="max-w-lg mb-6 font-sans text-5xl font-bold text-white sm:text-4xl">
            <span className="relative inline-block text-3xl">
              <FaImages />
            </span>{' '}
            Photography
          </h2>
          <div className="md:col-start-2 ">
            <p className="text-white text-center text-lg">
              Welcome to MK Moments, where I offer a range of professional photography services.
              From capturing timeless portraits and breathtaking landscapes to showcasing architectural wonders
              and stunning automotive shots, I bring your vision to life through captivating imagery.
            </p>
          </div>
        </div>
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