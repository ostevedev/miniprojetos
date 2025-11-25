import React from 'react'

export default function Menu() {
  return (
    <div className=''>
      <div className='inicio '></div>
      <div className='container row cardapio mt-4'>
        <div class="card">
          <img src="/img/bcheese.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to make up the bulk of the card’s content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <div class="card">
          <img src="/img/bcheese.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to make up the bulk of the card’s content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
  )
}
