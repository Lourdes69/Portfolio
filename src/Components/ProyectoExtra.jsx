import React from 'react'
import auraImage from '../../public/aura.png'
import greenImage from '../../public/green.png'
import fastlabImage from '../../public/fastlab.png'
import frutoImage from '../../public/frutos.png'
import { HiOutlineExternalLink } from "react-icons/hi";
import { FaReact, FaBootstrap, FaGithub, FaHtml5,  FaCss3Alt, FaJs } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";

const ProyectoExtra = () => {
    const proyectos = [
        {
            titulo: "Aura Bella",
            descripcion: "Sitio web para un salón de belleza, desarrollado como proyecto final con React y Bootstrap. Presenta servicios, contacto y diseño responsivo.",
            estado: "Completado",
            imagen: auraImage,
            url: "https://salon-de-belleza-psi.vercel.app",
            tecnologias: [FaReact, RiTailwindCssFill, IoLogoVercel, FaGithub]
        },
        {
            titulo: "GreenIX",
            descripcion: "Proyecto desarrollado en simulación laboral con No Country. Página de productos solares usando React, Tailwind CSS y metodología Scrum.",
            imagen: greenImage,
            url: "https://greenix.vercel.app/",
            tecnologias: [FaReact, RiTailwindCssFill, IoLogoVercel, FaGithub]
        },
        {
            titulo: "FastLab",
            descripcion: "Landing page para un laboratorio de análisis clínicos, creada con React y Tailwind CSS. Incluye servicios, contacto y diseño responsivo.",
            imagen: fastlabImage,
            url: "https://fastlab.vercel.app/",
            tecnologias: [FaReact, RiTailwindCssFill, IoLogoVercel, FaGithub]
        },
        {
            titulo: "Fruta & Fruto",
            descripcion: "Blogs de recetas saludables con React y Tailwind CSS. Incluye recetas, consejos nutricionales y diseño responsivo.",
            imagen: frutoImage,
            url: "https://fruta-y-fruto.vercel.app/",
            tecnologias: [FaHtml5, FaCss3Alt, FaJs, FaGithub]
        }
    ];


    return (
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto max-w-6xl mt-16 cursor-pointer ">
            {proyectos.map((proyecto, index) => (
                <div
                    key={index}
                    className="group bg-white/10 border border-white/20 rounded-3xl overflow-hidden backdrop-blur-lg transition-transform duration-300 hover:scale-[1.03]"
                >
                    <img
                        src={proyecto.imagen}
                        alt={proyecto.titulo}
                        className="object-cover w-full h-48 transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="p-6 space-y-4">
                        <h3 className="text-white text-lg font-bold">{proyecto.titulo}</h3>
                        <p className="text-gray-300 text-sm mb-2">{proyecto.descripcion}</p>

                        <div className="flex justify-between items-center">
                            <div className="flex space-x-2 text-white">
                                {proyecto.tecnologias.map((Icon, i) => (
                                    <Icon key={i} size={20} />
                                ))}
                            </div>
                            {proyecto.url && (
                                <a
                                    href={proyecto.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-blue-500 transition-colors duration-200"
                                >
                                    <HiOutlineExternalLink size={20} />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProyectoExtra;
