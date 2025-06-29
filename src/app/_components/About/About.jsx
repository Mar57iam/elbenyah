'use client';
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); 
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  if (!isClient) return null; 

  return (
    <section className="w-full max-w-[1280px] mt-[80px] h-[600px]  mb-[100px] px-4 lg:px-0 mx-auto flex flex-col lg:flex-row gap-[40px] lg:gap-[23px]">

      <div className="flex flex-col justify-center w-full lg:w-[587px]">
        <h2 className="text-[48px]  leading-[52px] font-bold">
          <span className="bg-gradient-to-r from-[#B79031] to-[#69531E] bg-clip-text text-transparent">
            {t("about.title1")}
          </span>{" "}
          <span className="text-[#69531E]">{t("about.title2")}</span>
        </h2>

        <h3 className="text-[24px] sm:text-[32px] lg:text-[40px] font-bold text-[#2D2D2D] mb-3 sm:mb-4 leading-[1.4]">
          {t("about.subtitle")}
        </h3>

        <p className="text-[#7B7B7B] text-[16px] sm:text-[17px] lg:text-[18px] leading-[26px] lg:leading-[28px]">
          {t("about.description")}
        </p>
      </div>

      <div
  className="flex items-end gap-[10px] w-full lg:w-[670px]"
  data-aos="fade-up"
>
  <img
    src="/images/download.webp"
    alt="img1"
    className="rounded-[20px] w-1/3 h-[300px] sm:h-[400px] md:h-[448px] object-cover"
  />
  <img
    src="/images/download.webp"
    alt="img2"
    className="rounded-[20px] w-1/3 h-[350px] sm:h-[500px] md:h-[600px] object-cover"
  />
  <img
    src="/images/download.webp"
    alt="img3"
    className="rounded-[20px] w-1/3 h-[320px] sm:h-[470px] md:h-[524px] object-cover"
  />
</div>

    </section>
  );
}
