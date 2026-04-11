import { CiForkAndKnife } from "react-icons/ci";
import { SlDrop } from "react-icons/sl";
import { LuLeaf } from "react-icons/lu";
import burgerImg from "../assets/images/burger.png";

const features = [
  {
    icon: <CiForkAndKnife size={40} className="text-yellow-400" />,
    label: "Delicious",
  },
  {
    icon: <SlDrop size={40} className="text-yellow-400" />,
    label: "Fresh",
  },
  {
    icon: <LuLeaf size={40} className="text-yellow-400" />,
    label: "Organic",
  },
];

export default function Hero() {
  return (
    <section className="w-full min-h-[calc(100vh-72px)] bg-[#111111] flex items-center px-6 md:px-48 py-15 overflow-hidden">
      <div className="mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-center">
        {/* Left — Burger Image */}
        <div className="flex justify-center md:justify-start">
          <img
            src={burgerImg}
            alt="Sardarji Fastfood"
            className="burger-img w-[320px] md:w-[480px] lg:w-[550px] object-contain drop-shadow-2xl select-none"
          />
        </div>

        {/* Right — Content */}
        <div className="flex flex-col gap-6">
          {/* Heading */}
          <h1 className="text-white oswald text-3xl md:text-5xl lg:text-[42px] font-bold leading-tight uppercase">
            Authentic North & South Indian Food in Edmonton
          </h1>

          {/* Divider */}
          <div className="w-24 h-[3px] bg-yellow-400 rounded-full" />

          {/* Description */}
          <p className="text-white/70 text-lg leading-relaxed max-w-3xl">
            Authentic North & South Indian food in Edmonton, made with fresh
            ingredients and traditional flavors. Enjoy rich curries, crispy
            dosas, and aromatic biryanis, served hot and delicious.
          </p>

          {/* Feature Icons */}
          <div className="flex items-start gap-20 mt-2">
            {features.map(({ icon, label }) => (
              <div key={label} className="flex flex-col items-start gap-2">
                {icon}
                <span className="text-white text-xl text-semibold">
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4 mt-2">
            <a
              href="#"
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black text-sm font-semibold px-8 py-4 rounded transition-colors duration-200"
            >
              Order Now
            </a>
            <a
              href="#"
              className="inline-block border-2 border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black text-sm font-semibold px-8 py-4 rounded transition-colors duration-200"
            >
              View Menu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
