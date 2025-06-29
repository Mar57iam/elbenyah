'use client';
import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';

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

  const handleUp = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handleDown = () => {
    if (currentIndex + 1 < projectsList.length - 1) setCurrentIndex(currentIndex + 1);
  };

  const handleCardClick = (slug) => {
    router.push(`/projects/${slug}`);
  };

  return (
    <section
      dir={isArabic ? 'rtl' : 'ltr'}
      className="w-full bg-[radial-gradient(ellipse_at_center,#9B7E38,_#372907)] relative px-4 md:px-10 py-16"
    >
      <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-center max-w-[1280px] mx-auto">

        {/* النصوص للموبايل */}
        <div className="lg:hidden w-full max-w-xl flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#F8D47C] to-[#927D49] bg-clip-text text-transparent text-center md:leading-[52px]">
            {t('projects.title')}
          </h2>
          <h3 className="text-white text-2xl md:text-[40px] font-semibold mt-2 leading-[34px] md:leading-[50px]">
            {t('projects.subtitle')}
          </h3>
          <p className="text-white text-base md:text-lg leading-6 md:leading-7 font-light mt-2">
            {t('projects.description')}
          </p>
          <button
            onClick={() => router.push('/projects')}
            className="w-[180px] md:w-[222px] h-[45px] mt-4 bg-[#B79031] rounded-[32px] text-white font-medium text-base md:text-[20px] flex items-center justify-center gap-2"
          >
            {t('projects.button')}
            <FontAwesomeIcon icon={faArrowUp} className="rotate-45" />
          </button>
        </div>

        {/* الكروت */}
        <div className="relative w-full max-w-[613px] h-[700px] flex flex-col items-center">
          <div className="relative w-full h-full overflow-hidden">
            {projectsList.map((card, index) => (
              <div
                key={index}
                onClick={() => handleCardClick(card.slug)}
                className={`absolute left-1/2 -translate-x-1/2 transition-all duration-700 w-[95%] cursor-pointer ${
                  index === currentIndex
                    ? 'top-[135px] z-20 opacity-100'
                    : index === currentIndex - 1
                    ? 'top-[-336px] z-10 opacity-70'
                    : index === currentIndex + 1
                    ? 'top-[606px] z-10 opacity-70'
                    : 'hidden'
                }`}
              >
                <Card card={card} />
              </div>
            ))}
          </div>

          {/* الأسهم والنقط موبايل */}
          <div className="flex lg:hidden items-center justify-center gap-4 mt-6">
            <button
              onClick={handleUp}
              className="w-[48px] h-[48px] rounded-full bg-[#B79031] flex items-center justify-center hover:bg-white/20 transition"
            >
              <FontAwesomeIcon icon={faArrowUp} className="text-white text-xl" />
            </button>

            <div className="flex items-center gap-2">
              {[0, 1, 2, 3].map((index) => (
                <span
                  key={index}
                  className={`rounded-full block transition-all duration-300 ${
                    index === currentIndex ? 'bg-white w-[5px] h-4' : 'bg-white opacity-50 w-2 h-2'
                  }`}
                ></span>
              ))}
            </div>

            <button
              onClick={handleDown}
              className="w-[48px] h-[48px] rounded-full bg-[#B79031] flex items-center justify-center hover:bg-white/20 transition"
            >
              <FontAwesomeIcon icon={faArrowDown} className="text-white text-xl" />
            </button>
          </div>

       
          <div className={`hidden lg:flex absolute ${
            isArabic ? 'left-[-20px]' : 'right-[-20px]'
          } top-1/2 -translate-y-1/2 flex-col items-center gap-4 z-30`}>
            <button
              onClick={handleUp}
              className="w-[48px] h-[48px] rounded-full bg-[#B79031] flex items-center justify-center hover:bg-white/20 transition"
            >
              <FontAwesomeIcon icon={faArrowUp} className="text-white text-xl" />
            </button>

            <div className="flex flex-col items-center gap-2 my-2">
              {[0, 1, 2, 3].map((index) => (
                <span
                  key={index}
                  className={`rounded-full block transition-all duration-300 ${
                    index === currentIndex ? 'bg-white w-[5px] h-4' : 'bg-white opacity-50 w-2 h-2'
                  }`}
                ></span>
              ))}
            </div>

            <button
              onClick={handleDown}
              className="w-[48px] h-[48px] rounded-full bg-[#B79031] flex items-center justify-center hover:bg-white/20 transition"
            >
              <FontAwesomeIcon icon={faArrowDown} className="text-white text-xl" />
            </button>
          </div>
        </div>

      
        <div className="hidden lg:flex w-full max-w-xl flex-col items-start text-start">
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#F8D47C] to-[#927D49] bg-clip-text text-transparent leading-[42px] md:leading-[52px]">
            {t('projects.title')}
          </h2>
          <h3 className="text-white text-2xl md:text-[40px] font-semibold mt-2 leading-[34px] md:leading-[50px]">
            {t('projects.subtitle')}
          </h3>
          <p className="text-white text-base md:text-lg leading-6 md:leading-7 font-light mt-2">
            {t('projects.description')}
          </p>
          <button
            onClick={() => router.push('/projects')}
            className="w-[180px] md:w-[222px] h-[45px] mt-4 bg-[#B79031] rounded-[32px] text-white font-medium text-base md:text-[20px] flex items-center justify-center gap-2"
          >
            {t('projects.button')}
            <FontAwesomeIcon icon={faArrowUp} className="rotate-45" />
          </button>
        </div>
      </div>
    </section>
  );
}
