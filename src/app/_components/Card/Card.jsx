'use client';
import Link from 'next/link';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Card({ card, size = "large" }) {
  const isSmall = size === "small";

  return (
    <div className={`relative mx-auto transition-all duration-500 ease-in-out ${
      isSmall ? "w-[420px] h-[280px]" : "w-full max-w-[580px] h-[350px] sm:h-[431px]"
    }`}>
      <Link
        href={``}
        className={`block h-full rounded-[30px] sm:rounded-[40px] overflow-hidden shadow-md relative mx-auto ${
          isSmall ? "w-full max-w-[420px]" : "w-full max-w-[514px]"
        }`}
      >
        <img
          src={card.featured_image}
          className="w-full h-full object-cover"
          alt={card.title}
        />
        <div className="absolute bottom-0 left-0 w-full h-[160px] sm:h-[196px] bg-[#FFFFFF17] backdrop-blur-[30px] sm:backdrop-blur-[40px] rounded-t-[30px] sm:rounded-t-[40px] p-4 sm:p-6 flex flex-col justify-center">
          <h2 className="text-white font-semibold text-lg sm:text-xl">{card.title}</h2>
          <div className="flex items-center justify-between mt-2">
            <p className="text-white text-xs sm:text-sm">{card.meta_title}</p>
            <button className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition">
              <FontAwesomeIcon icon={faArrowRight} className="text-[#464141] text-base sm:text-lg" />
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}
