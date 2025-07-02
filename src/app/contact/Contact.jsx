'use client';

import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';
import React from 'react';

export default function Contact() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  async function handleContactSubmission(values) {
    try {
      const res = await fetch(`https://test.albenyah.com/api/contact-submissions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      const result = await res.json();
      console.log(result);
    } catch (error) {
      console.log('error:', error);
    }
  }

  const validationSchema = yup.object().shape({
    name: yup.string().min(3).required(),
    email: yup.string().email().required(),
    phone: yup.string().matches(/^01[0125][0-9]{8}$/, t('contact.phone')).required(),
    subject: yup.string().min(5).required(),
    message: yup.string().min(10).required(),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
    validationSchema,
    onSubmit: handleContactSubmission,
  });

  return (
    <section
 
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4 sm:px-6 lg:px-8 py-10"
      style={{ backgroundImage: "url('/images/Contact.jpg')" }}
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      <div className="bg-white w-full max-w-[469px] p-6 sm:p-8 rounded-[40px] shadow-lg">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#F8D47C] to-[#927D49] bg-clip-text text-transparent text-center">
          {t('contact.title')}
        </h2>
        <p className="text-[#7B7B7B] mb-6 text-center text-[18px] md:text-[24px]">
          {t('contact.subtitle')}
        </p>

        <form onSubmit={formik.handleSubmit} className="space-y-4">
  {/* Name */}
  <div>
    <div className="flex items-center border border-gray-300 rounded-full h-[50px] px-4">
      <span className="text-gray-500">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
        </svg>
      </span>
      <input
        name="name"
        type="text"
        placeholder={t('contact.name')}
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        dir={isArabic ? 'rtl' : 'ltr'}
        className="w-full text-sm border-0 focus:ring-0 focus:outline-none bg-transparent ps-3"
      />
    </div>
    {formik.touched.name && formik.errors.name && (
      <p className="text-xs text-red-600 mt-1">{formik.errors.name}</p>
    )}
  </div>

  {/* Email */}
  <div>
    <div className="flex items-center border border-gray-300 rounded-full h-[50px] px-4">
      <span className="text-gray-500">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M2.01 6.41A2 2 0 0 1 4 5h16a2 2 0 0 1 1.99 1.41L12 13.5 2.01 6.41ZM2 8.9V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.9l-9.29 6.59a1 1 0 0 1-1.42 0L2 8.9Z" />
        </svg>
      </span>
      <input
        name="email"
        type="email"
        placeholder={t('contact.email')}
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        dir={isArabic ? 'rtl' : 'ltr'}
        className="w-full text-sm border-0 focus:ring-0 focus:outline-none bg-transparent ps-3"
      />
    </div>
    {formik.touched.email && formik.errors.email && (
      <p className="text-xs text-red-600 mt-1">{formik.errors.email}</p>
    )}
  </div>

  {/* Phone */}
  <div>
    <div className="flex items-center border border-gray-300 rounded-full h-[50px] px-4 gap-2">
      <span className="flex items-center text-sm text-gray-600">
        <img src="https://flagcdn.com/w40/eg.png" alt="EG" className="w-5 h-5 rounded-full me-1" /> +20
      </span>
      <input
        name="phone"
        type="tel"
        placeholder={t('contact.phone')}
        value={formik.values.phone}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        dir={isArabic ? 'rtl' : 'ltr'}
        className="w-full text-sm border-0 focus:ring-0 focus:outline-none bg-transparent"
      />
    </div>
    {formik.touched.phone && formik.errors.phone && (
      <p className="text-xs text-red-600 mt-1">{formik.errors.phone}</p>
    )}
  </div>

  {/* Subject */}
  <div>
    <input
      name="subject"
      type="text"
      placeholder={t('contact.subject')}
      value={formik.values.subject}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      dir={isArabic ? 'rtl' : 'ltr'}
      className="w-full h-[50px] px-4 border border-gray-300 rounded-full text-sm"
    />
    {formik.touched.subject && formik.errors.subject && (
      <p className="text-xs text-red-600 mt-1">{formik.errors.subject}</p>
    )}
  </div>

  {/* Message */}
  <div>
    <textarea
      name="message"
      rows="4"
      placeholder={t('contact.message')}
      value={formik.values.message}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      dir={isArabic ? 'rtl' : 'ltr'}
      className="w-full h-[140px] border border-gray-300 rounded-2xl px-4 py-2 text-sm resize-none"
    />
    {formik.touched.message && formik.errors.message && (
      <p className="text-xs text-red-600 mt-1">{formik.errors.message}</p>
    )}
  </div>

  {/* Submit */}
  <button
    type="submit"
    className="w-full bg-[#B79031] text-white py-2 rounded-full font-semibold hover:bg-yellow-700 transition"
  >
    {t('contact.send')}
  </button>
</form>


        <div className="w-full mt-6 text-center text-sm text-gray-500">
          {t('contact.terms')}{' '}
          <span className="font-semibold underline cursor-pointer">{t('contact.tos')}</span>{' '}
          {isArabic ? 'و' : 'and'}{' '}
          <span className="font-semibold underline cursor-pointer text-black">
            {t('contact.privacy')}
          </span>
        </div>
      </div>
    </section>
  );
}

