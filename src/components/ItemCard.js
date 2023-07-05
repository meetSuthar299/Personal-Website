import { useState, useEffect } from 'react';

function ItemCard({ imgSrc, firstP, secondP }) {
  const [scrollX, setScrollX] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollX(window.scrollX);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <a href="/" aria-label="View Item">
      <div className="m-2 relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl w-96">
        <div
          className="parallax-image"
          style={{ transform: `translateX(-${scrollX / 5}px)` }}
        >
          <img className="object-cover w-full h-56 md:h-64 xl:h-80" src={imgSrc} alt="" />
        </div>
        <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
          <p className="mb-4 text-lg font-bold text-gray-100">{firstP}</p>
          <p className="text-sm tracking-wide text-gray-300">{secondP}</p>
        </div>
      </div>
    </a>
  );
}

export default ItemCard;

