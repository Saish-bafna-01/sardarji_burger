import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import CartIcon from "./CartIcon";
import logoImg from "../assets/images/logo4.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Menu", path: "/menu" },
  { name: "About Us", path: "/about" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#1d384e] px-4 sm:px-6 md:px-12 lg:px-20 xl:px-40 py-2 md:py-4 lg:py-2 flex items-center justify-between z-50 shadow-lg">
      {/* Logo */}
      <Link to="/" className="text-lg sm:text-xl md:text-2xl lg:text-3xl oswald font-extrabold tracking-tight select-none">
        {/* <span className="text-[#c0d4b2]">Sardarji</span>
        <span className="text-white hidden sm:inline"> Fastfood & Mudpot</span> */}
        <img src={logoImg} alt="Sardarji Logo" className="lg:h-20 h-12 w-auto" />
      </Link>

      {/* Desktop Nav Links */}
      <div className="hidden md:flex items-center gap-4 lg:gap-6">
        <ul className="flex items-center gap-4 lg:gap-8 text-sm lg:text-base font-medium">
          {navLinks.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`transition-colors duration-200 ${
                  isActive(item.path)
                    ? "text-[#c0d4b2]"
                    : "text-gray-300 hover:text-[#c0d4b2]"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Cart Icon */}
        <CartIcon />

        {/* CTA Button */}
        <Link
          to="/menu"
          className="bg-[#c0d4b2] hover:bg-[#c0d4b2]-600 text-black text-sm lg:text-base px-4 lg:px-6 py-2 lg:py-3 rounded transition-colors duration-200 font-semibold"
        >
          Order Online
        </Link>
      </div>

      {/* Mobile Right Side */}
      <div className="flex md:hidden items-center gap-4">
        <CartIcon />
        <button
          className="text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#1d384e] border-t border-white/10 flex flex-col gap-3 px-4 py-4 md:hidden">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={`text-sm font-medium transition-colors duration-200 py-2 ${
                isActive(item.path)
                  ? "text-[#c0d4b2]"
                  : "text-gray-300 hover:text-[#c0d4b2]"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/menu"
            onClick={() => setMenuOpen(false)}
            className="bg-[#c0d4b2] hover:bg-[#c0d4b2]-300 text-black text-sm font-semibold px-4 py-3 rounded text-center transition-colors duration-200 mt-2"
          >
            Order Online
          </Link>
        </div>
      )}
    </nav>
  );
}