import { useState } from "react";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-[#111111] px-16 md:px-40 py-8 flex items-center justify-between relative z-50">
      {/* Logo */}
      <div className="text-3xl md:text-4xl oswald font-extrabold tracking-tight select-none">
        <span className="text-yellow-400">Sardarji</span>
        <span className="text-white"> Fastfood & Mudpot</span>
      </div>

      {/* Desktop Nav Links */}
      <div className="flex gap-8">
        <ul className="hidden md:flex items-center gap-8 text-lg font-medium">
          {["Home", "Menu", "About Us", "Blog", "Contact"].map((item) => (
            <li key={item}>
              <a
                href="#"
                className={`transition-colors duration-200 ${
                  item === "Home"
                    ? "text-yellow-400"
                    : "text-gray-300 hover:text-yellow-400"
                }`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a
          href="#"
          className="hidden md:inline-block bg-yellow-500 hover:bg-yellow-600 text-black text-lg px-10 py-3 rounded transition-colors duration-200 font-semibold"
        >
          Order Online
        </a>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden text-white"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#111111] border-t border-white/10 flex flex-col gap-4 px-6 py-6 md:hidden">
          {["Home", "Menu", "About Us", "Blog", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className={`text-sm font-medium transition-colors duration-200 ${
                item === "Home"
                  ? "text-yellow-400"
                  : "text-gray-300 hover:text-yellow-400"
              }`}
            >
              {item}
            </a>
          ))}
          <a
            href="#"
            className="bg-yellow-400 hover:bg-yellow-300 text-black text-sm font-semibold px-6 py-3 rounded text-center transition-colors duration-200"
          >
            Order Online
          </a>
        </div>
      )}
    </nav>
  );
}