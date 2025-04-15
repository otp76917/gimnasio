import logo from './logo.svg'
import './App.css'
import GimnasioMenu from './components/GimnasioMenu'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GymProvider } from './GymProvider'
import Registro from './components/Registro'
import Maquinas from './components/Maquinas'
import Clases from './components/Clases'

function App() {
  return (
    <GymProvider>
      <BrowserRouter>
        <GimnasioMenu/>
        <Routes>
          <Route path="/" element={<Registro/>} />
          
          <Route path="/maquinas" element={<Maquinas/>} />
          <Route path="/clases" element={<Clases/>} />
        </Routes>
      </BrowserRouter>
    </GymProvider>
  )
}

export default App
