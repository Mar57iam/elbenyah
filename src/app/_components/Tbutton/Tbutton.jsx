'use client';

import React, { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import i18next from "i18next";

export default function Tbutton() {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(null); 

  const changeLanguage = (lang) => {
    if (lang !== currentLang) {
      i18next.changeLanguage(lang).then(() => {
        setCurrentLang(lang);
        localStorage.setItem("i18nextLng", lang);
        document.dir = lang === "ar" ? "rtl" : "ltr";
      });
    }
  };

  useEffect(() => {
    const lang = localStorage.getItem("i18nextLng") || "en";
    i18next.changeLanguage(lang);
    setCurrentLang(lang);
    document.dir = lang === "ar" ? "rtl" : "ltr";
  }, []);

  if (!currentLang) return null;

  return (
    <div className="flex items-center justify-center -blur rounded-[40px] w-20 h-10">
      <button
        onClick={() => changeLanguage('en')}
        className={`w-[40px] h-[40px] rounded-full text-[16px] font-bold transition ${
          currentLang === 'en' ? 'bg-[#F2C455F0] text-white' : 'text-white'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage('ar')}
        className={`w-[40px] h-[40px] rounded-full text-[16px] font-bold transition ${
          currentLang === 'ar' ? 'bg-[#F2C455F0] text-white' : 'text-white'
        }`}
      >
        ع
      </button>
    </div>
  );
}
