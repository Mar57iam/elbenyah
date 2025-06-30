'use client';

import { ServicesContext } from '@/Context/servicesContext';
import {
  faArrowUp,
  faToolbox,
  faGear,
  faHouse,
  faWrench,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

export default function OurServices() {
  const { servicesArr } = useContext(ServicesContext);
  const { t, i18n } = useTranslation();

  const icons = [faToolbox, faGear, faHouse, faWrench];

  return (
    <div
      className="w-full max-w-[1297px] px-4 mx-auto mt-[40px]"
      dir={i18n.dir()}
    >
      {/* العناوين */}
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

     
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-[40px]">
        {servicesArr.slice(0, 4).map((service, index) => (
          <Link href={`/services/${service.slug}`} key={index}>
            <div className="relative group w-full h-[244px] overflow-hidden cursor-pointer rounded-xl mx-auto max-w-[280px]">
             
              <div className="absolute inset-0 z-0 rounded-xl overflow-hidden">
                <img
                  src="/images/Rectangle.png"
                  alt="service background"
                  className="w-full h-full object-cover rounded-xl transition-all duration-500 ease-in-out group-hover:scale-110"
                />
              </div>

            
              <div className="absolute top-[10px] left-[18%] transform -translate-x-1/2 w-[56px] h-[56px] bg-[#F7DB95] rounded-full flex items-center justify-center shadow-md z-10 transition-transform duration-300 group-hover:scale-125">
  <FontAwesomeIcon
    icon={icons[index % icons.length]}
    className="text-black text-lg"
  />
</div>


            
              <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 pt-10 text-center">
                <h3 className="text-[#2D2D2D] text-[18px] sm:text-[20px] font-semibold mb-2">
                  {service.name}
                </h3>
                <p className="text-[#7B7B7B] text-[14px] sm:text-[15px] leading-[20px]">
                  {service.short_description || t('services.no_description')}
                </p>
              </div>
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





