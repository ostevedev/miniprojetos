import React from 'react'
import { useState } from 'react';

// Swiper 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

// Swiper css
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './css/Categorias.css';

import {categorias} from '../../backend/dados';

export default function Categorias() {

  const [idClidado, setIdClidado] = useState(1);

  const handleClick = (e,id) =>{
    setIdClidado(id)
  }

  return (
    <div style={{position: 'fixed', top:80, zIndex:999}} className='bg-white pt-2 container-fluid d-flex justify-content-between align-items-center'>
      <div className='container-airbnb d-flex align-items-center row'>
        <div className='col-sm-11'>
          <Swiper 
          breakpoints={{
            100: {
              slidesPerView: 3, 
              slidesPerGroup: 1, 
              spaceBetween: 1,
            },
            576: {
              slidesPerView: 4, 
              slidesPerGroup: 3, 
              spaceBetween: 4,
            },
            768: {
              slidesPerView: 6, 
              slidesPerGroup: 5, 
              spaceBetween: 7,
            },
            992: {
              slidesPerView: 8, 
              slidesPerGroup: 7, 
              spaceBetween: 7,
            },
            
            1400: {
              slidesPerView: 10, 
              slidesPerGroup: 9, 
              spaceBetween: 7,
            },
            1600: {
              slidesPerView: 14, 
              slidesPerGroup: 13, 
              spaceBetween: 7,
            }
          }}
          navigation={true} 
          modules={[Pagination, Navigation]}
          className="mySwiper">
            {
              categorias.map((dados, i)=>(
                <SwiperSlide key={dados.id} virtualIndex={i} className={dados.id === idClidado ? 'active' : ''} onClick={(e)=> handleClick(e, dados.id)}>
                  <img src={dados.imagem}/>
                  <span>{dados.titulo}</span> 
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
        <div className='col-sm-1'>
          <button className='w-100 btn btn-filtro d-flex d-lg-none float-end justify-content-center' data-bs-toggle="modal" data-bs-target="#filterModal">
            <i className="me-1 bi bi-filter"></i>
          </button>
          <button className='btn btn-filtro d-none d-lg-flex float-end ' data-bs-toggle="modal" data-bs-target="#filterModal">
            <i className="me-1 bi bi-filter"></i>Filtros
          </button>
        </div>
      </div>
    </div>
  ) 
}
