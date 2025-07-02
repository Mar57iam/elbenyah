'use client';

import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="w-full bg-[#242424] py-[40px]">
    <div className="mx-auto max-w-[1280px] border-t border-gray-600 px-4">
     
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 mt-[40px]">
        
      <Link href= '/'>
      
      <div className="flex items-center justify-center w-[150px] h-[150px] rounded-full bg-white">
          <img src="/images/logo.webp" alt="Al-Benyah" className="w-[113px] h-[113px]" />
        </div>
      </Link>
  
      
        <div className="text-sm text-gray-300 space-y-4 text-center md:text-left w-full md:w-auto">
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
          <i class="fa-solid fa-location-dot"></i>
            <p>{t('footer.address')}</p>
          </div>
  
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <div className="flex items-center gap-2">
            <i class="fa-solid fa-phone"></i>
              <p>{t('footer.phone')}</p>
            </div>
            <div className="flex items-center gap-2">
              <span>📠</span>
              <p>{t('footer.fax')}</p>
            </div>
          </div>
  
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <p className="whitespace-nowrap">{t('footer.social')}</p>
            <div className="flex gap-4 text-lg">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-linkedin-in"></i>
              <i className="fab fa-youtube"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-google-plus-g"></i>
              <i className="fab fa-pinterest-p"></i>
              <i className="fas fa-rss"></i>
            </div>
          </div>
        </div>
      </div>
  
    
      <div className="mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-4">
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <a href="#">{t('footer.about')}</a>
          <a href="#">{t('footer.contact')}</a>
          <a href="#">{t('footer.help')}</a>
          <a href="#">{t('footer.privacy')}</a>
          <a href="#">{t('footer.disclaimer')}</a>
        </div>
        <p className="text-center">{t('footer.copyright')}</p>
      </div>
    </div>
  </footer>
  
  );
}

