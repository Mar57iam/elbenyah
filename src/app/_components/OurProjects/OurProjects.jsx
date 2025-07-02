'use client';

import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

export default function OurProjects() {
  const [projectsList, setProjectsList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(1); 
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  const router = useRouter();

  async function fetchProjects() {
    try {
      const res = await fetch(`https://test.albenyah.com/api/public-data/projects`);
      const data = await res.json();
      setProjectsList(data.data);
    } catch (error) {
      console.log('projects error', error);
    }
  }

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleBack = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handleNext = () => {
    if (currentIndex < projectsList.length - 1) setCurrentIndex(currentIndex + 1);
  };

  const handleCardClick = (slug) => {
    router.push(`/projects/${slug}`);
  };

  return (
    <section
      dir={isArabic ? 'rtl' : 'ltr'}
      className="w-full bg-[radial-gradient(ellipse_at_center,#9B7E38,_#372907)] py-8 px-4 md:px-0 overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6">

        {/* Mobile Layout */}
        <div className="md:hidden w-full max-w-[514px] flex flex-col items-center gap-6">
          
          <div className="text-center block md:hidden">   
            <h2 className="text-3xl font-bold bg-gradient-to-r from-[#F8D47C] to-[#927D49] bg-clip-text text-transparent">
              {t('projects.title')}
            </h2>
            <h3 className="text-white text-2xl font-semibold mt-2">
              {t('projects.subtitle')}
            </h3>
            <p className="text-white text-base font-light mt-2">
              {t('projects.description')}
            </p>
            <button
              onClick={() => router.push('/projects')}
              className="w-[180px] h-[45px] mt-4 mx-auto bg-[#B79031] rounded-[32px] text-white font-medium text-base flex items-center justify-center gap-2"
            >
              {t('projects.button')}
              <FontAwesomeIcon icon={faArrowRight} className="rtl:rotate-180" />
            </button>
          </div>

     
          <div className="relative w-full h-[350px] overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projectsList.map((card, index) => (
                <div
                  key={card.id || index}
                  className="w-full flex-shrink-0 px-2"
                  onClick={() => handleCardClick(card.slug)}
                >
                  <Card card={card} />
                </div>
              ))}
            </div>
          </div>

         
          <div className="flex justify-between items-center w-full px-4 mt-4">
            <button
              onClick={handleBack}
              disabled={currentIndex === 0}
              className="w-10 h-10 rounded-full bg-[#B79031] text-white disabled:opacity-40 flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>

            <div className="flex items-center gap-2">
              {projectsList.map((_, index) => {
                const active = index === currentIndex;
                return (
                  <span
                    key={index}
                    className={`rounded-full transition-all duration-300 ${
                      active
                        ? 'bg-[#B79031] w-[6px] h-[18px]'
                        : 'bg-[#D0D0D0] opacity-50 w-[6px] h-[6px]'
                    }`}
                  ></span>
                );
              })}
            </div>

            <button
              onClick={handleNext}
              disabled={currentIndex === projectsList.length - 1}
              className="w-10 h-10 rounded-full bg-[#B79031] text-white disabled:opacity-40 flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex flex-col lg:flex-row items-center justify-center w-[613px] h-[701px] gap-4">
          <div className="relative w-[514px] h-[413px] flex items-center justify-center">
            {projectsList.map((card, index) => {
              const position = index - currentIndex;
              let classes =
                'absolute transition-all duration-1000 ease-in-out left-1/2 -translate-x-1/2';

              if (position === 0) {
                classes += ' z-30 opacity-100 scale-100 top-1/2 -translate-y-1/2 w-[514px] h-[431px]';
              } else if (position === 1) {
                // ✅ الصورة التالية تظهر فوق
                classes += ' z-20 opacity-60 scale-[0.9] -top-[450px] w-[514px]';
              } else if (position === -1) {
                // ✅ الصورة السابقة تظهر تحت
                classes += ' z-20 opacity-60 scale-[0.9] top-[calc(50%+250px)] w-[514px] h-[40px]';
              } else {
                classes += ' opacity-0 pointer-events-none scale-0 h-0 top-0';
              }

              return (
                <div
                  key={card.id || index}
                  className={classes}
                  onClick={() => handleCardClick(card.slug)}
                >
                  <Card card={card} />
                </div>
              );
            })}
          </div>

          {/* Controls */}
          <div className="hidden md:flex flex-col items-center gap-4 z-50">
            <button
              onClick={handleBack}
              className="w-12 h-12 rounded-full bg-[#B79031] text-white hover:bg-white/20 transition"
            >
              <FontAwesomeIcon icon={faArrowUp} />
            </button>

            <div className="flex flex-col items-center gap-2 my-2">
              {[...Array(4)].map((_, index) => {
                const active = index === (currentIndex % 4);
                return (
                  <span
                    key={index}
                    className={`rounded-full transition-all duration-300 ${
                      active
                        ? 'bg-[#B79031] w-[6px] h-[18px]'
                        : 'bg-[#D0D0D0] opacity-50 w-[6px] h-[6px]'
                    }`}
                  ></span>
                );
              })}
            </div>

            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-[#B79031] text-white hover:bg-white/20 transition"
            >
              <FontAwesomeIcon icon={faArrowDown} />
            </button>
          </div>
        </div>

        {/* Text Content (Desktop فقط) */}
        <div className="hidden md:block w-full lg:w-[40%] text-center lg:text-start mt-6 lg:mt-0">
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#F8D47C] to-[#927D49] bg-clip-text text-transparent leading-[1.2]">
            {t('projects.title')}
          </h2>
          <h3 className="text-white text-2xl md:text-[40px] font-semibold mt-2 leading-[1.3]">
            {t('projects.subtitle')}
          </h3>
          <p className="text-white text-base md:text-lg font-light mt-2">
            {t('projects.description')}
          </p>
          <button
            onClick={() => router.push('/projects')}
            className="w-[180px] md:w-[222px] h-[45px] mt-4 bg-[#B79031] rounded-[32px] text-white font-medium text-base md:text-[20px] flex items-center justify-center gap-2"
          >
            {t('projects.button')}
            <FontAwesomeIcon icon={faArrowRight} className="rtl:rotate-180" />
          </button>
        </div>

      </div>
    </section>
  );
}







