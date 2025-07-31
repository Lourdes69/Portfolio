import React from 'react'
import aboutImage from '../../public/about.png';
import { FaDownload } from 'react-icons/fa';
import Valores from '../Components/Valores';
import CV from '../../public/CV-Lourdes.pdf';


const SobreMi = () => {
  return (
    <>
      <div className="min-h-screen px-4 py-20  text-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 ">
            <h1 className="text-5xl lg:text-6xl font-bold mb-3">
              Sobre{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Mí
              </span>
            </h1>
             <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-600 "></div>
            
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col items-start space-y-4">
              <div className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed space-y-6 font-mono">
                <p>
                  Me gusta dar vida y color a las páginas web, combinando diseño y código para crear experiencias visuales atractivas y funcionales.
                </p>
                <p>
                  Empecé mi camino en la programación hace dos años, y desde entonces no he dejado de aprender. Participé en simulaciones laborales que me permitieron aplicar mis conocimientos en situaciones reales, colaborar en equipo y seguir creciendo profesionalmente.
                </p>
                <p>
                  Programar mientras escucho música es uno de mis momentos favoritos: me relaja y me desconecta del mundo exterior. Y cuando no estoy en la compu, disfruto salir a caminar, andar en bici, y sobre todo, ser mamá. Mi hijo es mi mayor inspiración 💙
                </p>
                <p>
                  Me entusiasma seguir aprendiendo porque el mundo de la programación es tan amplio como fascinante, y siempre hay algo nuevo que descubrir.
                </p>
              </div>
              <div className="pt-6 mb-6 w-full md:w-auto"> {/* margen inferior y ancho responsivo */}
                <a
                  href={CV}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] text-base md:text-lg hover:opacity-90 transition px-6 md:px-8 py-3 rounded-full text-white font-medium flex items-center justify-center gap-2 w-full md:w-auto"
                >
                  <FaDownload className="text-white" />
                  Descargar CV
                </a>
              </div>

            </div>
            <div className="flex flex-col items-center space-y-10 md:space-y-0 md:space-x-10">
              <div className="relative  md:mt-0"> {/* margen negativo para subir la imagen */}
                <div className="w-80 h-80 mb-6 rounded-3xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 p-4">
                  <div className="w-full h-full rounded-2xl overflow-hidden ">
                    <img
                      src={aboutImage}
                      alt="Lourdes trabajando"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -top-8 w-32 h-32 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-20 animate-bounce"></div>
              </div>
              <div className="w-full md:w-auto mt-8 md:mt-0"> {/* margen superior solo en móvil */}
                <Valores />
              </div>
            </div>
          </div>
        </div>
      </div >

    </>
  )
}



export default SobreMi
