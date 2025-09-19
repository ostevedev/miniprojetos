import React from 'react'
import './css/Navbar.css'
import logo from '../assets/airbnb.svg'

export default function Navbar() {
    return (
        <div >
            <nav style={{position: 'fixed', top:0, zIndex:999}} className='nav-topo'>
                <div className='m-auto container-airbnb'>
                    <div className='d-flex col-12 col-sm-6 justify-content-center justify-content-sm-start'>
                        <img className='logo' src={logo} alt="Logo airbnb" />
                    </div>
                    <div className='justify-content-end d-none d-sm-flex col-sm-6 navbtn'>
                        <a className='navlink' href="">Seja um anfitrião</a>
                        <a className='globo navlink mx-2' href=""><i className="bi bi-globe"></i></a>
                        <div className="dropdown d-flex ">
                            <a className="btn-login" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="bi bi-list fs-5 ps-2 me-1"></i>
                                <i className="bi bi-person-circle position-relative fs-2 pe-2"><span className="position-absolute top-0 start-50 badge border border-light rounded-circle bg-danger p-2"><span className="visually-hidden"></span></span></i>
                            </a>

                            <ul className="dropdown-menu mt-2 py-3 border-0 shadow">
                                <li><a className="dropdown-item px-3 p-2 fw-bold" href="#">Cadastre-se</a></li>
                                <li><a className="dropdown-item px-3 p-2 " href="#">Entrar</a></li>
                                <li><hr className='dropdown-divider' /></li>
                                <li><a className="dropdown-item px-3 p-2 " href="#">Hospede em sua acomodação</a></li>
                                <li><a className="dropdown-item px-3 p-2 " href="#">Hospede uma experiência</a></li>
                                <li><a className="dropdown-item px-3 p-2 " href="#">Ajuda</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <nav id='mobile' className='d-sm-none fixed-bottom bg-white d-flex align-items-center justify-content-between'>
                <a href="#" className='d-flex flex-column text-center navmicon active'>
                    <i className='fs-3 bi bi-compass-fill'></i>
                    <span>Explorar</span>
                </a>
                <a href="#" className='d-flex flex-column text-center navmicon navmicom'>
                    <i className='fs-3 bi bi-heart-fill'></i>
                    <span>Favoritos</span>
                </a>
                <a href="#" className='d-flex flex-column text-center navmicon navmicom'>
                    <i className='fs-3 bi bi-person-circle'></i>
                    <span>Usuário</span>
                </a>
            </nav>
        </div>
    )
}
