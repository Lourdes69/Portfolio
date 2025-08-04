import React from 'react';
import huellitasImg from '../../public/huellitas.png';
import { FaEye, FaGithub } from 'react-icons/fa';
import ProyectoExtra from '../Components/ProyectoExtra';
import ProjectInvitation from '../Components/ProjectInvitation';


const Proyectos = () => {
  return (
    <>
      <section

        className=" bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-10 px-6 text-white mb-10">
        <div className="max-w-7xl mx-auto">
          <div data-aos="zoom-in">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Proyectos Destacados</h2>
          <p className="text-center text-lg mb-16">Explora mis últimas creaciones digitales, donde la innovación se encuentra con el diseño excepcional.</p>
          </div>
          <div
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="1000"
            className="flex flex-col md:flex-row items-center justify-between gap-10 bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 md:p-12 shadow-lg">
            {/* Texto a la izquierda */}
            <div
              className="md:w-1/2">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-sm font-semibold text-white px-4 py-2 rounded-full mb-4 inline-block">
                Proyecto Destacado
              </span>
              <h3 className="text-3xl font-bold mb-4">Huellitas Shop</h3>
              <p className="text-gray-200 mb-6">
                Tienda online completa para productos de mascotas con panel administrativo avanzado. Diseño moderno, UX optimizada y funcionalidades intuitivas.
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-blue-50/20 text-blue-400  px-3 py-1 rounded-lg text-sm font-bold">React</span>
                <span className="bg-orange-500/20 text-orange-300  px-3 py-1 rounded-lg text-sm font-bold">Tailwind</span>
                <span className="bg-green-500/20 text-green-300  px-3 py-1 rounded-lg text-sm font-bold">JavaScript</span>
                <span className="bg-purple-500/20 text-purple-300  px-3 py-1 rounded-lg text-sm font-bold">Mockapi</span>
                <span className="bg-gray-500/20 text-gray-300  px-3 py-1 rounded-lg text-sm font-bold">Netlify</span>
              </div>

              {/* Botones */}
              <div className="flex gap-4">

                <a href="https://huellitasshop.netlify.app" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-400 to-purple-500 transition px-8 py-3 rounded-xl text-white font-semibold shadow">
                  <FaEye size={19} className="inline-block mr-2  " />
                  Ver Demo
                </a>
                <a href="https://github.com/tuusuario/petstore" target="_blank" rel="noopener noreferrer" className=" border-white/30 border bg-white/10 hover:bg-white/10 transition px-8 py-3 rounded-xl text-white font-semibold shadow">
                  <FaGithub size={16} className="inline-block mr-2" />
                  Código
                </a>
              </div>
            </div>

            {/* Imagen a la derecha */}
            <div className="bg-gradient-to-br from-blue-400 to-purple-600 p-[3px] rounded-2xl w-full md:w-1/2">
              <img
                src={huellitasImg}
                alt="Proyecto"
                className="rounded-2xl w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <ProyectoExtra />

        <ProjectInvitation />
      </section>

    </>
  );
};

export default Proyectos;
