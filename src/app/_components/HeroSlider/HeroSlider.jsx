'use client';

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useTranslation } from 'react-i18next';
import "swiper/css";
import Loading from "../../loading";

export default function HeroSlider() {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { i18n } = useTranslation();

  async function getImages() {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("https://test.albenyah.com/api/public-data/hero-sliders", {
        headers: {
          "Accept-Language": i18n.language || 'en'
        }
      });

      if (!response.ok) throw new Error("Failed to fetch");

      const data = await response.json();
      setSlides(data?.data || []);
    } catch (err) {
      console.error("Error fetching slides:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getImages();
  }, [i18n.language]);

  if (loading) {
    return <Loading/>;
  }

  if (error || slides.length === 0) {
    return <div className="text-center py-20 text-red-600 text-xl font-bold">No data found!</div>;
  }

  return (
    <div className="w-full">
      <Swiper modules={[Autoplay]} autoplay={{ delay: 2000 }} loop>
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="h-[100vh] bg-center bg-cover relative"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-12 bg-black/40">
                <h1 className="text-white font-black mb-4 text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight max-w-[90%] sm:max-w-[80%]">
                  {slide.title || "No title"}
                </h1>

                <p className="text-[#E4E4E4] font-medium text-sm sm:text-base md:text-lg lg:text-xl max-w-[85%]">
                  {slide.subtitle || "No subtitle"}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
