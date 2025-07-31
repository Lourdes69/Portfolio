import { useState } from "react";
import { Link } from "react-router-dom";
import { FiLinkedin, FiGithub } from "react-icons/fi";
import { BiMenuAltRight } from "react-icons/bi";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="w-full text-white flex items-center justify-between px-6 py-6 md:px-12 lg:px-24">
        <Link
          to="/"
          className="text-xl font-bold rounded-lg border border-purple-600 px-4 py-2 bg-purple-600 text-white"
        >
          LA
        </Link>

        <div className="flex items-center gap-4 relative">
          {/* Ícono de LinkedIn */}
          <a
            href="https://www.linkedin.com/in/lourdes-avalos-91a301255/"
            target="_blank"
            rel="noreferrer"
          >
            <FiLinkedin className="hover:text-purple-400 text-gray-200 text-[22px] lg:text-[26px]" />
          </a>

          <div className="w-px h-10 bg-gray-400 opacity-40" />

          {/* Ícono de GitHub */}
          <a
            href="https://github.com/Lourdes69"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub className="hover:text-purple-400 text-gray-200 text-[22px] lg:text-[26px]" />
          </a>

          <div className="w-px h-10 bg-gray-400 opacity-40 hidden lg:block" />

          {/* Botón de Contacto solo en desktop */}
          <Link
            to="/contacto"
          >
            <button className="hidden lg:block border text-gray-300 font-medium border-purple-600 px-4 py-1 rounded text-xl hover:bg-purple-600 transition">
              Contacto
            </button>
            </Link>
         
          <div className="w-px h-10 bg-gray-400 opacity-40" />

          {/* Menú móvil */}
          <div
            className="relative"
            onMouseEnter={() => setMenuOpen(true)}
            onMouseLeave={() => setMenuOpen(false)}
          >
            <button className="block" aria-label="Abrir menú">
              <BiMenuAltRight
                size={42}
                className="text-gray-200 hover:text-purple-400"
              />
            </button>
            <MobileMenu isOpen={menuOpen} />
          </div>
        </div>
      </header>
      <div className="w-full h-px bg-gray-500 opacity-40" />
    </>
  );
}
