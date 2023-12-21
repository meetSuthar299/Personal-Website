import React from "react";
import { FaImages } from 'react-icons/fa';
import ItemCard from "../Components/ItemCard";
import portraitImg from "../Assets/images/portrait-img.jpg"
import printImg from "../Assets/images/print-img.jpg"
import autoImg from "../Assets/images/auto-img.jpg"
import editingImg from "../Assets/images/editing-img.jpg"
import eventImg from "../Assets/images/event-img.jpg"
import commercialImg from "../Assets/images/Commercia-Img.jpg"

export default function ContenCreationService() {
  return (
    <div id="ContenCreationService" className="px-4 py-16 md:px-24 lg:px-8 lg:py-20 relative z-10 bg-[rgba(44,44,44,0.21)] border-slate-800 backdrop-blur-md border-x ">
      <div className="w-fit mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">
          <h2 className="max-w-lg mb-6 font-sans text-5xl font-bold text-white sm:text-4xl">
            <span className="relative inline-block text-3xl">
              <FaImages />
            </span>{' '}
            Photography
          </h2>
          <div className="md:col-start-2">
            {/* <NavLink to="https://www.instagram.com/m.k.moments/?hl=en">Explore my portfolio on Instagram</NavLink> */}
          </div>
        </div>
      </div>
      <div className="mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <ItemCard
          imgSrc={eventImg}
          firstP="Event Photography"
          secondP="Preserve your special moments from weddings, parties, conferences, and other occasions with professional event photography services. From candid shots to capturing the ambiance, I ensure every important detail is beautifully documented."
        />
        <ItemCard
          imgSrc={portraitImg}
          firstP="Portrait Photography"
          secondP="Capture the essence and personality of individuals, families, and couples through stunning portrait sessions that create cherished memories."
        />
        <ItemCard
          imgSrc={commercialImg}
          firstP="Commercial Photography"
          secondP="Provide high-quality images for businesses, including product photography, corporate headshots, and branding visuals. Create captivating visuals that effectively represent your brand and enhance your marketing efforts."
        />
        <ItemCard
          imgSrc={autoImg}
          firstP="Automotive Photography"
          secondP="Specialize in capturing the elegance, power, and detail of performance cars. From sleek sports cars to vintage classics, I create dynamic images that showcase the unique personality of each vehicle."
        />
        <ItemCard
          imgSrc={editingImg}
          firstP="Photo Editing and Retouching"
          secondP="Provide professional photo editing and retouching services to enhance the visual appeal and quality of images. From color correction to removing imperfections, I ensure the final images meet the highest standards."
        />
        <ItemCard
          imgSrc={printImg}
          firstP="Photo Prints and Custom Framing"
          secondP="I offer high-quality prints of photographs along with custom framing options. Providing clients with a complete service, allowing them to display their favorite images as stunning pieces of art."
        />
      </div>
    </div>
  );
};
