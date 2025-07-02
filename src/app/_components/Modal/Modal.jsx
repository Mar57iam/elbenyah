'use client';

import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { useTranslation } from 'react-i18next';

export default function CommentModal({ isOpen, onClose }) {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  const [formData, setFormData] = useState({
    name: '',
    job: '',
    comment: '',
  });

  function handleChange(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const payload = {
      name: formData.name,
      role: formData.job,
      comment: formData.comment,
      rating: 5,
      review_date: new Date().toISOString().split('T')[0],
    };

    if (!payload.name || !payload.role || !payload.comment) {
      alert(t('comment.requiredFields'));
      return;
    }

    fetch('https://test.albenyah.com/api/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        if (response.ok) {
          Swal.fire({
            title: t('comment.successTitle'),
            text: t('comment.successText'),
            icon: 'success',
            confirmButtonColor: '#B79031',
          });
          onClose();
        } else {
          return response.text().then((text) => {
            console.error('Error:', text);
            Swal.fire({
              icon: 'error',
              title: t('comment.errorTitle'),
              text: t('comment.errorText'),
            });
          });
        }
      })
      .catch((error) => {
        console.error('Request failed:', error);
        alert(t('comment.networkError'));
      });
  }

  useEffect(() => {
    if (!isOpen) {
      setFormData({ name: '', job: '', comment: '' });
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
        className="bg-white rounded-2xl p-6 w-[397px] h-[470px] shadow-lg relative"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-[40px] font-semibold h-[48px] mb-[48px] leading-[48px] text-center">
          {t('comment.title')}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder={t('comment.namePlaceholder')}
            onChange={handleChange}
            value={formData.name}
            className="w-full border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none"
          />
          <input
            type="text"
            name="job"
            placeholder={t('comment.jobPlaceholder')}
            onChange={handleChange}
            value={formData.job}
            className="w-full border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none"
          />
          <textarea
            name="comment"
            placeholder={t('comment.commentPlaceholder')}
            onChange={handleChange}
            value={formData.comment}
            rows="4"
            className="w-full border border-gray-300 rounded-xl px-4 py-2 text-sm focus:outline-none resize-none"
          ></textarea>

          <div className="flex justify-between mt-4">
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
