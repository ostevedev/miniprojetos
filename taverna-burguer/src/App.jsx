import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import Navbar from './components/Navbar'
import Menu from './components/Menu'
import './css/App.css'

function App() {
  return (
      <div>
        <Navbar/>
        <Menu/>
      </div>
  )
}

export default App
