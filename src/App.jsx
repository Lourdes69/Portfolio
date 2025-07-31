import React from 'react'
import Header from './Components/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Proyectos from './Pages/Proyectos'
import Educacion from './Pages/Educacion'
import SobreMi from './Pages/SobreMi'
import Contacto from './Pages/Contacto'



import './App.css'



function App() {
  

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/educacion" element={<Educacion />} />
        <Route path="/sobre-mi" element={<SobreMi />} />
        <Route path="/contacto" element={<Contacto />} />
        {/* Puedes agregar más rutas aquí */}
       
      </Routes>
    </Router>
  )
}

export default App
