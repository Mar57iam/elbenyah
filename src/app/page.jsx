'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function MySlider() {
  return (

    
    <div className="relative p-6">
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={1}
      >
        <SwiperSlide>
          <div className="bg-red-300 h-40 flex items-center justify-center text-white text-xl">
            Slide 1
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-blue-300 h-40 flex items-center justify-center text-white text-xl">
            Slide 2
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-green-300 h-40 flex items-center justify-center text-white text-xl">
            Slide 3
          </div>
        </SwiperSlide>
      </Swiper>

      <div data-aos="fade-up">
  <h2 className=" font-hacen">مرحبا بك في الموقع</h2>
  <h2 className=" ">مرحبا بك في الموقع</h2>
</div>




    </div>
    
  );
}

