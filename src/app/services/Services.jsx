'use client'

import { ServicesContext } from '@/Context/servicesContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

export default function Services() {
  const { servicesArr } = useContext(ServicesContext);
  const { t } = useTranslation();

  return (
    <div className='max-w-[1280px] w-full mx-auto px-4 mt-[80px]'>

      <h2 className='text-[28px] sm:text-[36px] lg:text-[40px] text-[#091106] text-center font-semibold leading-[44px] mb-10'>
        {t("services.section_title")}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[64px]">
        {servicesArr.map((service, i) => (
          <Link
            href={`/services/${service.slug}`}
            key={i}
            className="relative group block"       
          >
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-[300px] sm:h-[340px] lg:h-[396px] object-cover rounded-[32px]"
            />

            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-[90%] bg-white rounded-[24px] px-4 py-5 shadow-lg text-center z-10 transition duration-300 group-hover:shadow-xl">
              <h3 className="text-[18px] md:text-[20px] font-semibold text-[#2D2D2D] mb-2">
                {service.name}
              </h3>
              <p className="text-[14px] text-[#7B7B7B] mb-3 leading-[20px]">
                {service.short_description || t("services.no_description")}
              </p>

              <span className="text-[#B79031] text-[14px] font-medium flex items-center justify-center gap-2">
                {t("services.learn_more")}
                <FontAwesomeIcon icon={faArrowUp} className="rotate-45 text-[16px]" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}


