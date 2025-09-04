import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

// Componentes
import Navbar from './components/Navbar'
import Categorias from './components/Categorias'

function App() {

  return (
    <div>
      <Navbar/>
      <Categorias/>
    </div>
  )
}

export default App
