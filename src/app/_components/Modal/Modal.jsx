import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

export default function CommentModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    job: "",
    comment: "",
  });

  function handleChange(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

  
    if (!formData.name || !formData.job || !formData.comment) {
      alert("Please fill in all fields.");
      return;
    }

    fetch("https://test.albenyah.com/api/reviews", {
      method: "POST",
    })
      .then((response) => {
        if (response.ok) {
            Swal.fire({
                title: "Succsess!",
                icon: "success",
                draggable: true
              });
          onClose();
        } else {
          return response.text().then((text) => {
            console.error("Error:", text);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                footer: '<a href="#">Why do I have this issue?</a>'
              });
          });
        }
      })
      .catch((error) => {
        console.error("Request failed:", error);
        alert("Network error. Please try again later.");
      });
  }

  useEffect(() => {
    if (!isOpen) {
      setFormData({ name: "", job: "", comment: "" });  
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/30 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl p-6 w-[397px] h-[470px] shadow-lg relative"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-[40px] font-semibold h-[48px] mb-[48px] leading-[48px] text-center">
          Add a Comment
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Write your name"
            onChange={handleChange}
            value={formData.name}
            className="w-full border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none"
          />
          <input
            type="text"
            name="job"
            placeholder="Write your job"
            onChange={handleChange}
            value={formData.job}
            className="w-full border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none"
          />
          <textarea
            name="comment"
            placeholder="Write a comment..."
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
              Cancel
            </button>
            <button
              type="submit"
              className="bg-[#B79031] text-white px-6 py-2 rounded-full"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
