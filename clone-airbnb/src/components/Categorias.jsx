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
    <div className='pt-2 container-fluid d-flex justify-content-between align-items-center'>
      <div className='container-airbnb d-flex align-items-center row'>
        <div className='col-sm-11'>
          <Swiper slidesPerView={14} slidesPerGroup={13} spaceBetween={7} navigation={true} modules={[Pagination, Navigation]}className="mySwiper">
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
          Filtros
        </div>
      </div>
    </div>
  ) 
}
