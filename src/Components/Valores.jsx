import { FaLightbulb, FaCheckCircle, FaUsers, FaBookOpen } from "react-icons/fa";

const Valores = () => {
  return (
    <div
      className="grid grid-cols-2 gap-6 w-full max-w-sm">
      {/* Card 1 */}
      <div className="bg-gradient-to-r from-purple-500/20 border  to-pink-500/20 border-purple-500/30 rounded-2xl p-4">
        <FaLightbulb size={20} className="mx-auto mb-2 text-yellow-300" />
        <h3 className="text-lg font-bold text-purple-300 text-center mb-2">Creatividad</h3>
        <p className="text-gray-400 text-sm text-center">Soluciones únicas e innovadoras</p>
      </div>

      {/* Card 2 */}
      <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-500/30 border rounded-xl p-4 text-center shadow-2xl text-white">
        <FaCheckCircle size={20} className="mx-auto mb-2 text-green-300" />
        <h3 className="text-lg font-bold text-blue-300 mb-2">Calidad</h3>
        <p className="text-sm text-gray-400">Cada línea de código importa</p>
      </div>

      {/* Card 3 */}
      <div className="bg-gradient-to-r from-pink-500/20 to-orange-500/20 border-pink-500/30 border rounded-xl p-4 text-center shadow-md text-white">
        <FaUsers size={20} className="mx-auto mb-2 text-blue-300" />
        <h3 className="text-base font-bold text-pink-300 mb-2">Colaboración</h3>
        <p className="text-sm text-gray-400">Trabajar en equipo es clave</p>
      </div>

      {/* Card 4 */}
      <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border-green-500/30 border rounded-xl p-4 text-center shadow-md text-white">
        <FaBookOpen size={20} className="mx-auto mb-2 text-orange-300" />
        <h3 className="text-base font-bold text-green-300 mb-2">Aprendizaje</h3>
        <p className="text-sm text-gray-400">Siempre hay algo nuevo por descubrir</p>
      </div>
    </div>
  );
};

export default Valores;
