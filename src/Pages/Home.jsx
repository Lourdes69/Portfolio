import React from 'react'
import { Link } from 'react-router-dom'
import ImagePerfil from '../../public/perfil.png'
import { FaDownload } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import CV from '../../public/CV-Lourdes.pdf'
import '../../src/App.css'

const Home = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-800 to-purple-900 text-white relative overflow-hidden px-4 sm:px-6">
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 max-w-6xl w-full mb-10  mt-10">
        {/* Texto */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left z-10">
          <span className='text-4xl sm:text-5xl md:text-6xl mb-4 font-press'>Hola, </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 font-press">
            Soy Lourdes
          </h1>
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 font-press">
            Frontend Developer
          </h2>
          <p className="text-base sm:text-lg mb-6 text-gray-200 leading-relaxed sm:leading-8 px-2 sm:px-4 md:px-0">
            Codificando ideas con creatividad y color. Amo el diseño y disfruto transformar ideas en interfaces atractivas, modernas y funcionales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center md:justify-start">
            <a
              href={CV}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] text-lg hover:opacity-90 transition px-8 py-3 rounded-full text-white font-medium flex items-center justify-center gap-2"
            >
              <FaDownload className="text-white" />
              Descargar CV
            </a>
            <Link
              to="/contacto"
              className="border border-purple-500 px-8 py-3 rounded-full text-purple-500 font-bold text-lg hover:bg-purple-500 hover:text-white transition-all flex items-center justify-center gap-2"
            >
              <MdEmail className="text-xl" />
              Contactar
            </Link>
          </div>
        </div>

        {/* Imagen */}
        <div className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 to-indigo-500 p-1">
          <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
            <img
              src={ImagePerfil}
              alt="Lourdes Avalos"
              className="w-full h-full object-cover rounded-full border-4 border-slate-900"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
