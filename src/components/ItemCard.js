import { useState, useEffect } from 'react';

function ItemCard({ imgSrc, firstP, secondP }) {

    return (
        <div href="/" aria-label="View Item">
            <div className="m-2 relative overflow-hidden transition duration-200 transform rounded-3xl shadow-xl hover:-translate-y-2 hover:shadow-2xl w-96 cursor-default">
                <div>
                    <img className="object-cover w-full h-56 md:h-64 xl:h-80 " src={imgSrc} alt="" />
                </div>
                <div className="absolute inset-0 flex flex-col justify-center items-center px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-50 opacity-100 hover:opacity-0">
                    <p className="mb-4 text-lg font-bold text-gray-100">{firstP}</p>
                </div>
                <div className="absolute inset-0 flex flex-col justify-center items-center px-6 py-4 transition-opacity duration-200 bg-black bg-opacity- opacity-0 hover:opacity-100 text-center">
                    <p className="text-lg tracking-wide text-gray-300">{secondP}</p>
                </div>
            </div>
        </div>
    );
}

export default ItemCard;

