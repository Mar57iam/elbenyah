'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <>
      <footer className='h-[543px] w-full bg-[#242424]'>
        <br />
        <div className="mx-auto w-[1280px] h-[343px] mt-[100px] border-t border-gray-600 flex items-center justify-center">
          <div className="w-full px-4">
            <div className="flex flex-col m-12 md:flex-row justify-between items-center md:items-start gap-10">
              
             
              <div className="flex items-center justify-center w-[150px] h-[150px] rounded-full bg-white gap-4">
                <img src="/images/logo.webp" alt="Al-Benyah" className="w-[113px] h-[113px]" />
              </div>

            
              <div className="text-sm text-gray-300 space-y-2 text-center md:text-left">
                <div className="flex items-center gap-4 mb-4">
                  <span>📍</span>
                  <p>{t('footer.address')}</p>
                </div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <span>📞</span>
                    <p>{t('footer.phone')}</p>
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <span>📠</span>
                    <p>{t('footer.fax')}</p>
                  </div>
                </div>

                <div className="flex items-center gap-5 text-white">
                  <p className="text-sm whitespace-nowrap">{t('footer.social')}</p>
                  <div className="flex gap-5 text-lg">
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

            <div className="mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a href="#">{t('footer.about')}</a>
                <a href="#">{t('footer.contact')}</a>
                <a href="#">{t('footer.help')}</a>
                <a href="#">{t('footer.privacy')}</a>
                <a href="#">{t('footer.disclaimer')}</a>
              </div>
              <p className="mt-4 md:mt-0">{t('footer.copyright')}</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
