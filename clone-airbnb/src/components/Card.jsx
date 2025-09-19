import React from 'react'
import './css/Card.css'
import { acomodacoes } from '../../backend/dados'

// Swiper 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

// Swiper css
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Card() { 
    function numRandom(min, max){
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    function animar(e){
      e.target.classList.toggle('animate')
    }

  return (
    <div style={{paddingTop:'200px', paddingBottom:'100px'}} className='container-fluid'>
        <div className="container-airbnb row">
            {
                acomodacoes.map((acomodacao, i) =>(
                    <div key={acomodacao.id} className="col-sm-6 col-md-4 col-lg-3 position-relative">
                        <div onClick={animar} className='heart position-absolute top-0 end-0'></div>
                        <Swiper navigation={true} pagination={true} modules={[Navigation, Pagination]}className='imgcontent'>
                                    {
                                      acomodacao.imagens.map((imagem, i)=>(
                                        <SwiperSlide className='swiperimg' key={i}>
                                            <img src={imagem} className='img-fluid cardimage'/>
                                        </SwiperSlide>
                                      ))
                                    }
                                  </Swiper>
                        <p className='d-flex justify-content-between mt-3 mb-0'>
                            <span style={{display:'block', maxWidth:'200px'}} className='fw-bold text-truncate'>{acomodacao.cidade}, {acomodacao.pais}</span>
                            <span><i className='bi bi-star-fill'></i>{acomodacao.nota}</span>
                        </p>
                        <p className='my-0 text-muted'>{numRandom(10, 800)} KM de distância</p>
                        <p className='text-muted'>{numRandom(1,31)} de jan - {numRandom(1, 28)} de fev</p>
                        <p className='fw-bold'>R$ {acomodacao.preco.toLocaleString('pt-br')} noite</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
