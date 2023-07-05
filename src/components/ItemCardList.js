import { useState, useEffect, useRef } from 'react';
import ItemCard from './ItemCard';

function ItemCardList() {
  const scrollContainerRef = useRef(null);
  const [scrollX, setScrollX] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollX(scrollContainerRef.current.scrollLeft);
    };

    scrollContainerRef.current.addEventListener('scroll', handleScroll);

    return () => {
      scrollContainerRef.current.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="mb-8 overflow-x-auto relative">
      <div className="flex flex-nowrap justify-start shadow-inner">
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
          <button
            className="px-2 py-1 bg-gray-200 text-gray-500 rounded-l focus:outline-none"
            onClick={() => {
              scrollContainerRef.current.scrollBy({
                left: -200,
                behavior: 'smooth',
              });
            }}
          >
            &lt;
          </button>
        </div>
        <div className="relative flex" id="scrollContainer" ref={scrollContainerRef}>
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
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
          <button
            className="px-2 py-1 bg-gray-200 text-gray-500 rounded-r focus:outline-none"
            onClick={() => {
              scrollContainerRef.current.scrollBy({
                left: 200,
                behavior: 'smooth',
              });
            }}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemCardList;
