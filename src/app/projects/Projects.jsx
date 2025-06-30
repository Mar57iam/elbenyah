'use client';

import React, { useContext } from 'react';
import HeroSlider from '../_components/HeroSlider/HeroSlider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../_components/Navbar/Navbar';
import Link from 'next/link';
import { DataContext } from '@/Context/dataContext';
import { useTranslation } from 'react-i18next';

export default function Projects() {
  const { projects } = useContext(DataContext);
  const { t } = useTranslation();

  return (
    <>
      <div className="max-w-[1280px] mx-auto mt-[80px] p-[40px] rounded-[32px]">
        <h2
          className="text-center mb-[40px] text-black text-[40px] leading-[44px] font-semibold"
          suppressHydrationWarning
        >
          {t('projects.subtitle')}
        </h2>

        <div className="flex flex-wrap -mx-4">
          {projects.map((project, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <Link href={`/projects/${project.slug}`}>
                <div className="relative h-[396px] rounded-[32px] overflow-hidden">
                  <img
                    src={project.featured_image}
                    className="w-full h-full object-cover"
                    alt={project.title}
                  />

               
                  <div className="absolute bottom-0 w-full h-[152px] backdrop-blur-[40px] bg-white/10 px-6 py-4 flex flex-col justify-end">
                    <h3 className="text-white font-semibold text-lg mb-3">
                      {project.title}
                    </h3>
                    <p className="text-white text-sm opacity-80 mb-3">
                      {t('projects.description')}
                    </p>
                  </div>

                  <div className="absolute bottom-1 right-5 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="text-[#464141] text-lg"
                    />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
