import { CiForkAndKnife } from "react-icons/ci";
import { SlDrop } from "react-icons/sl";
import { LuLeaf } from "react-icons/lu";
import burgerImg from "../assets/images/burger.png";
import { Link } from "react-router-dom";

const features = [
  {
    icon: <CiForkAndKnife size={32} className="text-yellow-400 md:size-10" />,
    label: "Delicious",
  },
  {
    icon: <SlDrop size={32} className="text-yellow-400 md:size-10" />,
    label: "Fresh",
  },
  {
    icon: <LuLeaf size={32} className="text-yellow-400 md:size-10" />,
    label: "Organic",
  },
];

export default function Hero() {
  return (
    <section className="w-full bg-[#111111] flex items-center px-4 sm:px-6 md:px-12 lg:px-20 xl:px-48 py-8 overflow-hidden">
      <div className="mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12">
        {/* Left — Burger Image */}
        <div className="flex justify-center md:justify-start order-1 md:order-1">
          <img
            src={burgerImg}
            alt="Sardarji Fastfood"
            className="burger-img w-[200px] sm:w-[280px] md:w-[350px] lg:w-[450px] xl:w-[550px] object-contain drop-shadow-2xl select-none animate-float"
          />
        </div>

        {/* Right — Content */}
        <div className="flex flex-col gap-4 md:gap-5 lg:gap-6 order-2 md:order-2 text-center md:text-left">
          {/* Heading */}
          <h1 className="text-white oswald text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[42px] font-bold leading-tight uppercase animate-fade-in-up">
            Authentic North & South Indian Food in Edmonton
          </h1>

          {/* Divider */}
          <div className="w-16 sm:w-20 md:w-24 h-[3px] bg-yellow-400 rounded-full mx-auto md:mx-0 animate-scale-x" />

          {/* Description */}
          <p className="text-white/70 text-base sm:text-lg md:text-lg lg:text-xl leading-relaxed max-w-xl lg:max-w-3xl mx-auto md:mx-0 animate-fade-in-up animation-delay-200">
            Authentic North & South Indian food in Edmonton, made with fresh
            ingredients and traditional flavors. Enjoy rich curries, crispy
            dosas, and aromatic biryanis, served hot and delicious.
          </p>

          {/* Feature Icons */}
          <div className="flex items-center justify-center md:justify-start gap-8 sm:gap-12 md:gap-16 lg:gap-20 mt-2 animate-fade-in-up animation-delay-400">
            {features.map(({ icon, label }, index) => (
              <div key={label} className="flex flex-col items-center md:items-start gap-2 animate-bounce-in" style={{ animationDelay: `${index * 150}ms` }}>
                {icon}
                <span className="text-white text-base sm:text-lg md:text-xl font-semibold">
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 sm:gap-4 mt-2 animate-fade-in-up animation-delay-600">
            <Link
              to="/menu"
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black text-sm md:text-base font-semibold px-6 sm:px-8 py-3 md:py-4 rounded transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/20 w-full sm:w-auto text-center"
            >
              Order Now
            </Link>
            {/* <a
              href="/menu"
              className="inline-block border-2 border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black text-sm md:text-base font-semibold px-6 sm:px-8 py-3 md:py-4 rounded transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/20 w-full sm:w-auto text-center"
            >
              View Menu
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
}