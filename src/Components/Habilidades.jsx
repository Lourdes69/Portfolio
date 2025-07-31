import React from 'react'
import { IoLogoJavascript, IoLogoCss3 } from 'react-icons/io'
import { FaHtml5, FaReact, FaBootstrap, FaNode, FaGitAlt, FaGithub } from 'react-icons/fa'
import { RiTailwindCssFill } from 'react-icons/ri'
import { SiExpress, SiVercel, SiNetlify, SiTrello } from 'react-icons/si'
import { DiMongodb } from 'react-icons/di'

const habilidadesFrontend = [
    { name: 'JavaScript', icon: <IoLogoJavascript />, color: 'bg-yellow-400 text-black' },
    { name: 'HTML5', icon: <FaHtml5 />, color: 'bg-orange-500 text-white' },
    { name: 'CSS3', icon: <IoLogoCss3 />, color: 'bg-blue-500 text-white' },
    { name: 'React', icon: <FaReact />, color: 'bg-cyan-400 text-black' },
    { name: 'Tailwind CSS', icon: <RiTailwindCssFill />, color: 'bg-sky-300 text-black' },
    { name: 'Bootstrap', icon: <FaBootstrap />, color: 'bg-purple-600 text-white' },
]

const habilidadesBackend = [
    { name: 'Node.js', icon: <FaNode />, color: 'bg-green-500 text-white' },
    { name: 'Express', icon: <SiExpress />, color: 'bg-gray-800 text-white' },
    { name: 'MongoDB', icon: <DiMongodb />, color: 'bg-green-700 text-white' },
    { name: 'MockAPI', icon: null, color: 'bg-pink-500 text-white' },
]

const tecnologiasAdicionales = [
    { name: 'Git', icon: <FaGitAlt />, color: 'bg-red-500 text-white' },
    { name: 'GitHub', icon: <FaGithub />, color: 'bg-gray-900 text-white' },
    { name: 'Trello', icon: <SiTrello />, color: 'bg-blue-400 text-white' },
    { name: 'Vercel', icon: <SiVercel />, color: 'bg-black text-white' },
    { name: 'Netlify', icon: <SiNetlify />, color: 'bg-green-400 text-black' },
]

const CardHabilidades = ({ title, habilidades }) => (
    <div className='bg-purple-700 border-b-4 border-white/20 p-4 md:p-6 rounded-2xl shadow-2xl'>
        <h2 className='text-lg md:text-xl font-bold text-center mb-4'>{title}</h2>
        <div className='flex flex-wrap gap-2 md:gap-3 justify-center'>
            {habilidades.map((tech, index) => (
                <div
                    key={index}
                    className={`flex items-center gap-1 md:gap-2 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium ${tech.color}`}
                >
                    {tech.icon && <span className='text-base md:text-lg'>{tech.icon}</span>}
                    {tech.name}
                </div>
            ))}
        </div>
    </div>
)

const Habilidades = () => {
    return (
        <section className=' px-6 py-12 text-white'>
            <div className='max-w-7xl mx-auto text-center'>
                <h1 className='text-4xl font-bold mb-4'>Habilidades Técnicas</h1>
                <p className='text-gray-300 text-xl'>
                    Tecnologías y herramientas que utilizo para crear aplicaciones web modernas
                </p>
            </div>

            <div className='max-w-6xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-12'>
                <CardHabilidades title='Desarrollo Frontend' habilidades={habilidadesFrontend} />
                <CardHabilidades title='Desarrollo Backend' habilidades={habilidadesBackend} />
            </div>

            <div className='max-w-3xl mx-auto mt-16'>
                <CardHabilidades title='Tecnologías Adicionales' habilidades={tecnologiasAdicionales} />
            </div>
        </section>
       
    )
    
}

export default Habilidades
