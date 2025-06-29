'use client';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import CommentModal from '../Modal/Modal';
import { useTranslation } from 'react-i18next';

export default function Reviwes() {
  const [openModal, setOpenModal] = useState(false);
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  return (
    <section
      dir={isArabic ? 'rtl' : 'ltr'}
      className="mt-10 relative w-full px-4 sm:px-6 lg:px-8 py-10 max-w-[1280px] mx-auto"
    >
      <div className="w-full max-w-2xl mx-auto text-center space-y-4 mb-10">
        <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#B79031] to-[#69531E] bg-clip-text text-transparent">
          {t('reviews.title')}
        </h2>
        <h3 className="text-[28px] md:text-[40px] font-semibold text-[#2D2D2D] leading-[1.2]">
          {t('reviews.subtitle')}
        </h3>
        <p className="text-[16px] md:text-[18px] leading-[28px] text-[#7B7B7B] font-light">
          {t('reviews.description')}
        </p>
      </div>

      <div className="text-center">
        <button
          onClick={() => setOpenModal(true)}
          className="w-full max-w-[214px] h-[54px] bg-[#B79031] rounded-[32px] text-white text-[18px] font-medium flex items-center justify-center gap-2 mx-auto"
        >
          {t('reviews.post')}
          <FontAwesomeIcon icon={faArrowUp} className="rotate-45" />
        </button>
      </div>

      <CommentModal isOpen={openModal} onClose={() => setOpenModal(false)} />
    </section>
  );
}



