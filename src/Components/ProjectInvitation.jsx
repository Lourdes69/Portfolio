import { FaPaperPlane } from "react-icons/fa";
import { LuCode } from "react-icons/lu";

const ProjectInvitation = () => {
    return (
        <div 
     data-aos="zoom-in-down"
        className="text-center mx-auto my-16   ">
            <div className="bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 
                      border border-pink-400/50 shadow-lg hover:shadow-2xl transition-shadow duration-500 
                      backdrop-blur-xl p-10 max-w-3xl mx-auto rounded-3xl">
                <div className="space-y-8">
                    {/* Ícono grande dentro del círculo con efecto */}
                    <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 
                          rounded-full flex items-center justify-center mx-auto shadow-md hover:scale-105 transition-transform duration-300">
                        <LuCode className="text-white w-10 h-10" />
                    </div>

                    {/* Título */}
                    <h3 className="text-3xl font-bold text-white">
                        ¿Tienes un proyecto en mente?
                    </h3>

                    {/* Texto */}
                    <p className="text-lg text-gray-300 max-w-lg mx-auto">
                        Si estás buscando a alguien que combine diseño, código y pasión por la experiencia de usuario,
                        ¡acá estoy! Hablemos de tu proyecto.
                    </p>

                    {/* Botón */}
                    <div className="flex items-center justify-center space-x-4">
                        <a
                            href="mailto:lourdesdev7@gmail.com?subject=Hola%20Lourdes&body=Me%20gustaría%20hablar%20sobre%20un%20proyecto..."
                            className="flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 
             hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 text-lg 
             rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
                        >
                            <FaPaperPlane size={15} className="mr-2" />
                            Iniciar Conversación
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectInvitation;
