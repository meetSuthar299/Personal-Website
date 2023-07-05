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
        <p className="text-white lg:text-sm lg:max-w-2xl p-4">
          Welcome to MK Moments, where I offer a range of professional photography services. From capturing timeless portraits and breathtaking landscapes to showcasing architectural wonders and stunning automotive shots, I bring your vision to life through captivating imagery. Explore my portfolio and discover the artistry behind MK Moments on Instagram: @M.k.moments. Let's create unforgettable moments together.
        </p>
      </div>
      <ItemCardList />
      {/* <div className="mb-8 overflow-x-auto">
        <div className="flex flex-nowrap justify-start">
          <ItemCard
            imgSrc="https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
            firstP="Event Photography"
            secondP="Preserve the special moments of weddings, parties, conferences, and other occasions with professional event photography services. From candid shots to capturing the ambiance, I ensure every important detail is beautifully documented."
          />
          <ItemCard
            imgSrc="https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
            firstP="Portrait Photography"
            secondP="Capture the essence and personality of individuals, families, and couples through stunning portrait sessions that create cherished memories."
          />
          <ItemCard
            imgSrc="https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
            firstP="Commercial Photography"
            secondP="Provide high-quality images for businesses, including product photography, corporate headshots, and branding visuals. Create captivating visuals that effectively represent your brand and enhance your marketing efforts."
          />
          <ItemCard
            imgSrc="https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
            firstP="Automotive Photography"
            secondP="Specialize in capturing the elegance, power, and detail of performance cars. From sleek sports cars to vintage classics, I create dynamic images that showcase the unique personality of each vehicle."
          />
          <ItemCard
            imgSrc="https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
            firstP="Photo Editing and Retouching"
            secondP="Provide professional photo editing and retouching services to enhance the visual appeal and quality of images. From color correction to removing imperfections, I ensure the final images meet the highest standards."
          />
          <ItemCard
            imgSrc="https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
            firstP="Photo Prints and Custom Framing"
            secondP="Offer high-quality prints of photographs along with custom framing options. Provide clients with a complete service, allowing them to display their favorite images as stunning pieces of art."
          />
        </div>
      </div> */}
      <div className="text-center">
        <a
          href="/"
          aria-label=""
          className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800 text-white"
        >
          View gallery
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