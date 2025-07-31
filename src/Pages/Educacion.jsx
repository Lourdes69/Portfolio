import { FaGraduationCap } from "react-icons/fa";
import Habilidades from "../Components/Habilidades";

const educationData = [
  {
    year: "2022",
    title: " Introducción a la Programación",
    institution: "Argentina Programa",
    description: "Fundamentos de programación, HTML, CSS y JavaScript",
    iconColor: "from-pink-500 to-purple-500",
  },
  {
    year: "2023",
    title: " Desarrollo Frontend & Skills Avanzadas",
    institution: " Oracle Next Education / Alura Latam",
    description: "Habilidades avanzadas en React, Bootstrap y Figma",
    iconColor: "from-blue-500 to-purple-500",
  },
  {
    year: "2024",
    title: " Desarrollo Web con React JS ",
    institution: "Universidad Nacional Tecnológica / Argentina Programa ",
    description: "Creación de aplicaciones web con React.js, hooks y gestión de estado",
    iconColor: "from-green-500 to-blue-500",
  },
  {
    year: "2025",
    title: " React JS ",
    institution: "Talento Tech",
    description: "Desarrollo de página web con React, CRUD y manejo global de estado con Context API",
    iconColor: "from-yellow-500 to-orange-500",
  },
];

const EducationSection = () => {
  return (
    <section className="px-4 py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900  text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
          Mi{' '}
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Educación
          </span>
        </h1>
        <p className="text-xl text-gray-400 mb-12">Mi trayectoria académica y profesional</p>
        <div className="space-y-10">
          {educationData.map((item, index) => (
            <div key={index} className="flex items-start gap-6 bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-lg">
              {/* Ícono */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${item.iconColor} flex items-center justify-center`}>
                <FaGraduationCap className="text-white w-8 h-8" />
              </div>

              {/* Contenido */}
              <div>
                <div className="flex items-center gap-3">
                  <span className="bg-slate-700 text-gray-300 px-4 py-2 text-lg rounded-xl mb-3" >{item.year}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-purple-300 mb-4 text-lg">{item.institution}</p>
                <p className="text-gray-400 text-lg">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Habilidades />
    </section>
  );
};

export default EducationSection;
