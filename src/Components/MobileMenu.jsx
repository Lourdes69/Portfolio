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
    <div className="absolute left-1/2 -translate-x-1/2 w-max text-gray-200 py-2  z-50 top-19">
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
  );
}
