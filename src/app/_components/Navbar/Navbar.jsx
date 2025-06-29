'use client';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import Tbutton from '../Tbutton/Tbutton';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

  const toggleLanguage = () => {
    const newLang = i18next.language === 'ar' ? 'en' : 'ar';
    i18next.changeLanguage(newLang);
    document.dir = newLang === 'ar' ? 'rtl' : 'ltr';
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const linkClasses = (path) =>
    `px-3 py-1 rounded-full font-semibold transition hover:bg-[#D6A84E] hover:text-white ${
      pathName === path ? 'bg-[#F2C455F0] text-white' : 'text-white'
    }`;

  return (
    <nav
      className={`fixed z-50 w-full  px-4 transition-all duration-300 ${
        isScrolled ? 'top-0' : 'top-12'
      }`}
    >
      <div
        className={`flex flex-wrap items-center justify-between w-full p-4 mx-auto max-w-[1280px] h-[88px] rounded-[100px] transition-all duration-300 ${
          isScrolled ? 'bg-black' : 'bg-[#F5F5F552] backdrop-blur-md'
        }`}
      >
       
        <div className="flex items-center h-full">
          <Link
            href="/"
            className="w-[70px] h-[70px] bg-white rounded-full flex items-center justify-center"
          >
            <Image
              src="/images/logo.webp"
              alt="Logo"
              width={52}
              height={52}
              className="h-[52px] w-[52px] object-contain"
            />
          </Link>
        </div>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Tbutton />
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

       
        <div
          id="navbar-sticky"
          className={`transition-all duration-300 ease-in-out ${
            isOpen ? 'block' : 'hidden'
          } md:flex w-full md:w-auto md:order-1`}
        >
          <ul
            className={`flex flex-col gap-8 md:p-0 mt-4 font-medium border rounded-lg md:bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 
            rtl:text-right ltr:text-left rtl:items-end ltr:items-start`}
          >
            <li>
              <Link href="/" className={linkClasses('/')}>
                {t('home')}
              </Link>
            </li>
            <li>
              <Link href="/projects" className={linkClasses('/projects')}>
                {t('projects_title')}
              </Link>
            </li>
            <li>
              <Link href="/services" className={linkClasses('/services')}>
                {t('services_title')}
              </Link>
            </li>
            <li>
              <Link href="/contact" className={linkClasses('/contact')}>
                {t('contact_title')}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}


   