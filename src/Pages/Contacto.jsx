import React from 'react'
import { FiMessageCircle, FiMapPin, FiSend } from 'react-icons/fi'
import { FaPhone, FaRegClock } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'

const contactInfo = [
  {
    icon: MdOutlineEmail,
    title: 'Email',
    value: 'lourdesdev7@gmail.com',
    description: 'Envíame un email'
  },
  {
    icon: FaPhone,
    title: 'Teléfono',
    value: '+541163366048',
    description: 'Llamada o WhatsApp'
  },
  {
    icon: FiMapPin,
    title: 'Ubicación',
    value: 'Quilmes - Buenos Aires',
    description: 'Argentina'
  }
]

const Contacto = () => {
  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-5xl mx-auto">
        <div data-aos="zoom-in-down">
          <div className="mb-16"></div>

          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Contáctame{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              💜
            </span>
          </h1>

          <p className="text-xl text-gray-400 mb-16">
            ¿Tienes un proyecto en mente? ¡Hablemos y hagámoslo realidad!
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Info de contacto */}
          <div div data-aos="zoom-in-right">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <FiMessageCircle className="h-8 w-8 text-blue-400 mr-3" />
                  Hablemos
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  Estoy disponible para nuevos proyectos y oportunidades de colaboración.
                  Ya sea que necesites desarrollar una aplicación web desde cero o mejorar
                  una existente, estoy aquí para ayudarte.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-lg">
                    <info.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">{info.title}</h4>
                    <p className="text-blue-400 font-medium">{info.value}</p>
                    <p className="text-gray-400 text-sm">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 backdrop-blur-sm rounded-xl border border-green-500/20 p-6">
              <div className="flex items-center mb-3">
                <FaRegClock className="h-6 w-6 text-green-400 mr-3" />
                <h4 className="text-white font-semibold text-lg">Disponibilidad</h4>
              </div>
              <p className="text-gray-300">
                <span className="inline-block w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                Disponible para nuevos proyectos
              </p>
            </div>
          </div>

          {/* Formulario de contacto con Formspree */}
          <div
            data-aos="zoom-out-down"
            className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Envíame un mensaje</h3>

            <form
              action="https://formspree.io/f/xdoqwnly" // ← poné tu endpoint real
              method="POST"
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
                  Nombre *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Tu nombre"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all duration-300"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="tu@email.com"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all duration-300"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-300 font-medium mb-2">
                  Asunto *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  placeholder="Asunto del mensaje"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all duration-300"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Cuéntame sobre tu proyecto..."
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all duration-300 resize-none"
                ></textarea>
              </div>

              {/* Opcional: redireccionar después del envío */}
              <input type="hidden" name="_next" value="https://tusitio.com/gracias" />

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <FiSend className="h-5 w-5" />
                <span>Enviar Mensaje</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacto
