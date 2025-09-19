import React from 'react'
import PriceSlider from './PriceSlider';

import './css/ModalFilter.css';
import ButtonGroup from './ButtonGroup';
import CardGroup from './CardGroup';

export default function ModalFilter() {
    return (
        <div className="modal fade" id="filterModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header text-center">
                        <button type="button" className="btn-close opacity-100" data-bs-dismiss="modal" aria-label="Close"></button>
                        <h1 className="modal-title w-100 fs-5 fw-bold" id="exampleModalLabel">Filtros</h1>
                    </div>
                    <div className="modal-body">
                        <section className='px-2 mb-4 border-bottom'>
                            <span className='fw-bold fs-4'>Faixa de Preço</span>
                            <p className='text-muted'>O preço médio por noite é de R$ 730</p>
                            <PriceSlider min={50} max={2000} step={1} />
                        </section>
                        <section className='px-2 mb-4 border-bottom'>
                            <span className='fw-bold fs-4'>Tipo de Lugar</span>
                            <div className='row mt-4'>
                                <div className='col-md-6 mb-4'>
                                    <div className="ms-3 form-check">
                                        <input className="fs-4 form-check-input" type="checkbox" value="" id="inteiro"/>
                                        <label className="ps-2 form-check-label" htmlFor="inteiro">
                                            Espaço Inteiro <br/>
                                            <small className='text-muted'>Um lugar só para você</small>
                                        </label>
                                    </div>
                                </div>
                                <div className='col-md-6 mb-4'>
                                    <div className="ms-3 px-4 form-check">
                                        <input className="fs-4 form-check-input" type="checkbox" value="" id="quarto"/>
                                        <label className="ps-2 form-check-label" htmlFor="quarto">
                                            Quarto Inteiro<br/>
                                            <small className='text-muted'>Seu próprio quarto em uma casa ou hotel, além de alguns espaços comuns compartilhados</small>
                                        </label>
                                    </div>
                                </div>
                                <div className='col-md-6 mb-5'>
                                    <div className="ms-3 form-check">
                                        <input className="fs-4 form-check-input" type="checkbox" value="" id="compartilhado"/>
                                        <label className="ps-2 form-check-label" htmlFor="compartilhado">
                                            Quarto Compartilhado <br/>
                                            <small className='text-muted'>Um espaço para dormir e áreas comuns que podem ser compartilhadas com outras pessoas</small>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className='px-2 pb-4 mb-4 border-bottom'>
                            <span className='fs-4 fw-bold'>Quartos e camas</span>
                            <p className='px-1 mt-3'>Quartos</p>
                            <ButtonGroup buttons={["Qualquer um", "1", "2", "3", "4", "5", "6", "7", "8+"]}/>
                            <p className='px-1 mt-3'>Camas</p>
                            <ButtonGroup buttons={["Qualquer um", "1", "2", "3", "4", "5", "6", "7", "8+"]}/>
                            <p className='px-1 mt-3'>Banheiros</p>
                            <ButtonGroup buttons={["Qualquer um", "1", "2", "3", "4", "5", "6", "7", "8+"]}/>
                        </section>
                        <section className='px-2 mb-4 border-bottom'>
                            <span className='fs-4 fw-bold'>Tipo de Propriedade</span>
                            <CardGroup options={[
                                {
                                    icon: "bi bi-house-door",
                                    text: "Casa"
                                },
                                {
                                    icon: "bi bi-buildings",
                                    text: "Apartamento"
                                },
                                {
                                    icon: "bi bi-house-add",
                                    text: "Casa de hóspedes"
                                },
                                {
                                    icon: "bi bi-building",
                                    text: "Hotel"
                                }
                            ]}/>
                        </section>
                    </div>
                    <div className="d-flex justify-content-between modal-footer">
                        <a href="#" className='ps-2 link-dark fw-bold'>Remover filtros</a>
                        <button type="button" className="btn btn-dark fw-bold px-4 py-3" data-bs-dismiss="modal">Mostrar X acomodações</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
