import React from 'react'
import '../css/Navbar.css'

export default function Navbar() {
  return (
      <nav className="navbar navbar-expand-md navbar-dark px-4 fixed-top bg-dark">
        <div className="container-fluid ">
          <a className="navbar-brand fontp" href="#">Taverna Burguer</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ms-auto px-5 mb-2 mb-md-0 d-flex justify-content-evenly fonts">
              <li className="nav-item">
                <a className="" aria-current="page" href="#">Início</a>
              </li>
              <li className="nav-item">
                <a className="" href="#">Cardápio</a>
              </li>
              <li className="nav-item">
                <a className="" href='#' >Contato</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  )
}
