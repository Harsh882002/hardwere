import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const images = [
    '/images/p0.png',
  '/images/p1.png',
  '/images/p2.png',
  '/images/p3.png',
]

export default function Slider() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Swiper modules={[Navigation, Pagination, Autoplay]} spaceBetween={20} slidesPerView={1} loop navigation pagination={{ clickable: true }} autoplay={{ delay: 3500 }}>
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <div className="h-64 md:h-96 rounded-lg overflow-hidden">
              <img src={`${src}?auto=format&fit=crop&w=1200&q=60`} alt={`slide-${i}`} className="w-full h-full object-cover" loading="lazy"/>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
