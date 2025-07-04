'use client';

import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Swal from 'sweetalert2';
import { useTranslation } from 'react-i18next';

export default function CommentModal({ isOpen, onClose }) {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  const [rating, setRating] = useState(0);

  const handleReviewSubmission = async (values, { resetForm }) => {
    const payload = {
      name: values.name,
      role: values.job,
      comment: values.comment,
      rating: rating,
      review_date: new Date().toISOString().split('T')[0],
    };

    try {
      const response = await fetch('https://test.albenyah.com/api/reviews', {
        method: 'POST',
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        Swal.fire({
          title: t('comment.successTitle'),
          text: t('comment.successText'),
          icon: 'success',
          confirmButtonColor: '#B79031',
        });
        resetForm();
        setRating(0);
        onClose();
      } else {
        const text = await response.text();
        console.error('Error:', text);
        Swal.fire({
          icon: 'error',
          title: t('comment.errorTitle'),
          text: t('comment.errorText'),
        });
      }
    } catch (error) {
      console.error('Request failed:', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: t('comment.networkError'),
      });
    }
  };

  const validationSchema = yup.object().shape({
    name: yup.string().required(t('comment.requiredFields')),
    job: yup.string().required(t('comment.requiredFields')),
    comment: yup.string().required(t('comment.requiredFields')),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      job: '',
      comment: '',
    },
    validationSchema,
    onSubmit: handleReviewSubmission,
  });

  useEffect(() => {
    if (!isOpen) {
      formik.resetForm();
      setRating(0);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/30 flex items-center justify-center z-50"
      onClick={onClose}
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      <div
        className="bg-white rounded-2xl p-6 w-[397px] h-auto shadow-lg relative"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-[40px] font-semibold mb-[48px] text-center">
          {t('comment.title')}
        </h2>

        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder={t('comment.namePlaceholder')}
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
            dir={isArabic ? 'rtl' : 'ltr'}
            className="w-full border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none"
          />
          {formik.touched.name && formik.errors.name && (
            <p className="text-xs text-red-600 mt-1">{formik.errors.name}</p>
          )}

          <input
            type="text"
            name="job"
            placeholder={t('comment.jobPlaceholder')}
            onChange={formik.handleChange}
            value={formik.values.job}
            onBlur={formik.handleBlur}
            dir={isArabic ? 'rtl' : 'ltr'}
            className="w-full border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none"
          />
          {formik.touched.job && formik.errors.job && (
            <p className="text-xs text-red-600 mt-1">{formik.errors.job}</p>
          )}

          <textarea
            name="comment"
            placeholder={t('comment.commentPlaceholder')}
            onChange={formik.handleChange}
            value={formik.values.comment}
            onBlur={formik.handleBlur}
            rows="4"
            dir={isArabic ? 'rtl' : 'ltr'}
            className="w-full border border-gray-300 rounded-xl px-4 py-2 text-sm focus:outline-none resize-none"
          ></textarea>
          {formik.touched.comment && formik.errors.comment && (
            <p className="text-xs text-red-600 mt-1">{formik.errors.comment}</p>
          )}

          <div className="mt-4 flex justify-between items-center">
            <label className="block mb-1 font-medium">
              {t('comment.ratingLabel') || 'Rating'}
            </label>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  onClick={() => setRating(star)}
                  xmlns="http://www.w3.org/2000/svg"
                  fill={star <= rating ? '#FACC15' : 'none'}
                  viewBox="0 0 24 24"
                  stroke="#FACC15"
                  strokeWidth="2"
                  className="w-6 h-6 cursor-pointer transition-transform duration-200 hover:scale-110"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499l2.265 4.588 5.057.735-3.661 3.567.865 5.04-4.526-2.38-4.526 2.38.865-5.04-3.661-3.567 5.057-.735 2.265-4.588z"
                  />
                </svg>
              ))}
            </div>
          </div>

          <div className="flex justify-between mt-6">
            <button
              type="button"
              onClick={onClose}
              className="border border-[#B79031] text-[#B79031] px-6 py-2 rounded-full"
            >
              {t('comment.cancel')}
            </button>
            <button
              type="submit"
              className="bg-[#B79031] text-white px-6 py-2 rounded-full"
            >
              {t('comment.submit')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}


