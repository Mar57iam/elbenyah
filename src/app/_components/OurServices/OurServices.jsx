'use client';

import { ServicesContext } from '@/Context/servicesContext';
import { faArrowUp, faToolbox, faGear, faHouse, faWrench } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

export default function OurServices() {
  const { servicesArr } = useContext(ServicesContext);
  const { t } = useTranslation();

 
  const icons = [faToolbox, faGear, faHouse, faWrench];

  return (
    <div className="w-full max-w-[1297px] px-4 mx-auto mt-[40px]">
      
     
      <div className="w-full max-w-[580px] mb-[32px] mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#B79031] to-[#69531E] bg-clip-text text-transparent">
          {t('services.Our_Services')}
        </h2>

        <h3 className="font-semibold text-[#2D2D2D] text-[28px] md:text-[40px] mb-3 leading-[40px] md:leading-[48px] mt-4">
          {t('services.section_subtitle')}
        </h3>

        <p className="font-light text-[16px] md:text-[18px] text-[#7B7B7B]">
          {t('services.section_description')}
        </p>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-[40px]">
        {servicesArr.slice(0, 4).map((service, index) => (
          <Link href={`/services/${service.slug}`} key={index}>
            <div className="relative bg-white rounded-[32px] shadow-[0_8px_24px_rgba(0,0,0,0.08)] px-4 sm:px-6 pt-12 pb-6 w-full h-[260px] flex flex-col justify-start items-start text-start transition-all duration-300 hover:shadow-lg">
              
              
              <div className="absolute -top-[25px] left-[16px] w-[56px] h-[56px] bg-[#F7DB95] rounded-full flex items-center justify-center shadow-md z-10">
                <FontAwesomeIcon icon={icons[index % icons.length]} className="text-black text-lg" />
              </div>

            
              <h3 className="text-[#2D2D2D] text-[18px] sm:text-[20px] font-semibold mb-2 mt-4">
                {service.name}
              </h3>

              <p className="text-[#7B7B7B] text-[14px] sm:text-[15px] leading-[20px] pr-1 sm:pr-2">
                {service.short_description || t("services.no_description")}
              </p>
            </div>
          </Link>
        ))}
      </div>

     
      <div className="flex justify-center mb-[40px]">
        <Link href="/services">
          <button className="w-[182px] h-[54px] bg-[#B79031] rounded-[32px] text-white text-[16px] font-medium flex items-center justify-center gap-2 hover:bg-[#9e7c28] transition">
            {t('services.learn_more')}
            <FontAwesomeIcon icon={faArrowUp} className="rotate-45" />
          </button>
        </Link>
      </div>
    </div>
  );
}




