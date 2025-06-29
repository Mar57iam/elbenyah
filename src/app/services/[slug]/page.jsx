'use client';

import { ServicesContext } from '@/Context/servicesContext';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';

export default function Slug() {
  const { slug } = useParams();
  const { servicesArr } = useContext(ServicesContext);
  const { t } = useTranslation();

  const service = servicesArr.find(item => item.slug === slug);

  if (!service) {
    return (
      <h2 className="text-center py-10 text-red-600 font-semibold">
        {t('services.not_found')}
      </h2>
    );
  }

  return (
    <>
      <div className="w-full max-w-[1280px] mx-auto px-4">

        <div className="w-full max-w-[1110px] mt-[32px] mx-auto">
          <h2 className="text-center leading-[58px] mb-[15px] font-semibold text-[32px] md:text-[40px] text-[#091106]">
            {service.name}
          </h2>
          <p className="text-center leading-[32px] md:leading-[44px] font-normal text-[18px] md:text-[24px] text-[#646464]">
            {service.content}
          </p>
        </div>

        <div className="w-full flex justify-center mt-[40px]">
          <div className="w-full max-w-[632px] h-[300px] md:h-[421px] rounded-[32px] overflow-hidden">
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {service.related_services?.length > 0 && (
          <div className="w-full max-w-[1440px] mt-[32px]  px-4 py-6 rounded-[16px]">
            <h3 className="text-[28px] md:text-[40px] font-semibold text-[#091106] mb-6">
              {t('services.related_title')}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.related_services.map((related, idx) => (
                <div key={idx} className="bg-white rounded-[5px] border-[#2D2D2D] border-2 shadow-sm p-4">
                  <h4 className="text-[18px] md:text-[20px] font-semibold text-[#2D2D2D] mb-2">
                    {related.name}
                  </h4>
                  <p className="text-[14px] text-[#7B7B7B]">
                    {related.content?.slice(0, 120)}
                    <Link
                      href={`/services`}
                      className="text-[#B79031] text-[14px] md:text-[18px] font-medium flex items-center gap-2 mt-2"
                    >
                      {t('services.learn_more')}
                      <FontAwesomeIcon icon={faArrowUp} className="rotate-45 text-[18px]" />
                    </Link>
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="w-full max-w-[748px] mx-auto mt-[40px] px-4">
        <h3 className="text-center leading-[36px] md:leading-[44px] mb-3 font-semibold text-[24px] md:text-[32px]">
          {t('services.call_to_action_title')}
        </h3>
        <p className="text-[#3F3E3E] text-center leading-[32px] md:leading-[48px] font-medium text-[18px] md:text-[24px]">
          {t('services.call_to_action_text')}
        </p>
        <div className="flex justify-center">
          <button className="w-[160px] md:w-[180px] h-[45px] mt-[24px] md:mt-[40px] bg-[#B79031] rounded-[32px] text-white font-medium text-sm md:text-[20px] flex items-center justify-center gap-2">
            {t('services.get_in_touch')}
            <FontAwesomeIcon icon={faArrowUp} className="rotate-45" />
          </button>
        </div>
      </div>
    </>
  );
}
