import React from 'react'
// Swiper 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Swiper css
import 'swiper/css';
import 'swiper/css/pagination';

import './css/Categorias.css'

export default function Categorias() {
  return (
    <div className='container-fluid'>
      <div className='container-airbnb row'>
        <div className='col-sm-11'>
          <Swiper slidesPerView={3} spaceBetween={30} pagination={{clickable: true,}} modules={[Pagination]}className="mySwiper">
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
          </Swiper>
        </div>
        <div className='col-sm-1'></div>
      </div>
    </div>
  ) 
}
