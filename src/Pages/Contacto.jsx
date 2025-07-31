import React, { useState } from 'react'
import { FiMessageCircle, FiMapPin, FiSend  } from 'react-icons/fi'
import { FaPhone, FaRegClock } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'




const Contacto = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario
  };

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
  ];

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 ">
      <div className="max-w-5xl mx-auto">
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

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
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
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-lg">
                    <info.icon className="h-6 w-6 text-white" /> {/* ← así sí funciona */}
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

          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Envíame un mensaje</h3>

            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
                  Nombre *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={handleInputChange}
                  value={formData.name}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all duration-300"
                  placeholder="Tu nombre"
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
                  onChange={handleInputChange}
                  value={formData.email}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all duration-300"
                  placeholder="tu@email.com"
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
                  onChange={handleInputChange}
                  value={formData.subject}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all duration-300"
                  placeholder="Asunto del mensaje"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  onChange={handleInputChange}
                  value={formData.message}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all duration-300 resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                ></textarea>
              </div>
              <button
                type="submit"
                onClick={handleSubmit}
                disabled={!formData.name || !formData.email || !formData.subject || !formData.message}

                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
              >
                <FiSend  className="h-5 w-5" />
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
