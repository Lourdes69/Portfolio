import { useEffect, useState } from "react";
import { FaCode, FaGraduationCap, FaFileAlt, FaEnvelope } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const items = [
  { icon: <FaFileAlt />, label: "Sobre mi", to: "/sobre-mi" },
  { icon: <FaCode />, label: "Proyectos", to: "/proyectos" },
  { icon: <FaGraduationCap />, label: "Educación", to: "/educacion" },
  { icon: <FaEnvelope />, label: "Contacto", to: "/contacto" },
];

export default function MobileMenu({ isOpen }) {
  const [visibleItems, setVisibleItems] = useState([false, false, false, false, false]);

  useEffect(() => {
    if (isOpen) {
      items.forEach((_, i) => {
        setTimeout(() => {
          setVisibleItems((prev) => {
            const copy = [...prev];
            copy[i] = true;
            return copy;
          });
        }, 100 * i);
      });
    } else {
      setVisibleItems([false, false, false, false, false]);
    }
  }, [isOpen]);

  if (!isOpen) return null;

 return (
    <>
      {/* ✅ Menú para desktop (no se toca) */}
      <div className="absolute left-1/2 -translate-x-1/2 md:-translate-x-1/2 w-max text-gray-200 py-2 z-50 top-19 hidden md:block">
        <nav className="flex flex-col gap-2 px-2">
          {items.map((item, i) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) => `
                flex items-center gap-3 py-2 text-left hover:text-purple-400 transition-opacity duration-500
                ${i < items.length - 1 ? 'border-b border-gray-700' : ''}
                ${isActive ? 'text-purple-400 font-semibold' : ''}
              `}
              style={{
                opacity: visibleItems[i] ? 1 : 0,
                transitionDelay: `${100 * i}ms`
              }}
            >
              <span className="text-xl md:text-2xl">{item.icon}</span>
              <span className="text-base md:text-lg">{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      {/* ✅ Menú exclusivo para mobile y tablet */}
      {isOpen && (
        <div className="fixed top-0 right-0 h-screen w-2/3 z-50 px-6 py-10 bg-purple-700/70 border-l border-purple-400 shadow-2xl backdrop-blur-md rounded-l-2xl md:hidden">
          <nav className="flex flex-col gap-6">
            {items.map((item, i) => (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) => `
                  flex items-center gap-3 py-3 px-2 text-left
                  hover:text-purple-400
                  ${isActive ? 'text-purple-200 font-semibold' : 'text-white'}
                  ${i < items.length - 1 ? 'border-b border-purple-300/20' : ''}
                `}
                style={{
                  opacity: visibleItems[i] ? 1 : 0,
                  transitionDelay: `${100 * i}ms`
                }}
              >
                <span className="text-xl">{item.icon}</span>
                <span className="text-base">{item.label}</span>
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
