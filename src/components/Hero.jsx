import { CiForkAndKnife } from "react-icons/ci";
import { SlDrop } from "react-icons/sl";
import { LuLeaf } from "react-icons/lu";
import homeHeroImg from "../assets/images/home_hero.jpg";
import { Link } from "react-router-dom";

const features = [
  {
    icon: <CiForkAndKnife size={32} className="text-[#c0d4b2] md:size-10" />,
    label: "Delicious",
  },
  {
    icon: <SlDrop size={32} className="text-[#c0d4b2] md:size-10" />,
    label: "Fresh",
  },
  {
    icon: <LuLeaf size={32} className="text-[#c0d4b2] md:size-10" />,
    label: "Organic",
  },
];

export default function Hero() {
  return (
    <section
      className="w-full flex items-center px-4 sm:px-6 md:px-12 lg:px-20 xl:px-48 py-16 md:py-24 lg:py-32 overflow-hidden min-h-[600px] md:min-h-[700px] lg:min-h-[450px]"
      style={{
        backgroundImage: `url(${homeHeroImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12">
        {/* Left — Empty space for background image */}
        <div className="hidden md:block order-1"></div>

        {/* Right — Content */}
        <div className="flex flex-col gap-4 md:gap-5 lg:gap-6 order-2 text-center md:text-left">
          {/* Heading */}
          <h1 className="text-[#254220] oswald text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[42px] font-bold leading-tight uppercase animate-fade-in-up">
            Pure Desi Taste, Fresh Every Day in <span className="text-[#57a440]">Edmonton</span>
          </h1>

          {/* Divider */}
          <div className="w-16 sm:w-20 md:w-24 h-[3px] bg-[#c0d4b2] rounded-full mx-auto md:mx-0 animate-scale-x" />

          {/* Description */}
          <p className="text-[#496242] text-base sm:text-lg md:text-lg lg:text-xl leading-relaxed max-w-xl lg:max-w-3xl mx-auto md:mx-0 animate-fade-in-up animation-delay-200">
            Enjoy our delicious Veg Thali with flavorful rice, soft rotis, any three authentic sabji choices, fresh raita, and salad a complete desi meal full of taste and satisfaction.
          </p>

          {/* Feature Icons */}
          <div className="flex items-center justify-center md:justify-start gap-8 sm:gap-12 md:gap-16 lg:gap-20 mt-2 animate-fade-in-up animation-delay-400">
            {/* {features.map(({ icon, label }, index) => (
              <div key={label} className="flex flex-col items-center md:items-start gap-2 animate-bounce-in" style={{ animationDelay: `${index * 150}ms` }}>
                {icon}
                <span className="text-white text-base sm:text-lg md:text-xl font-semibold">
                  {label}
                </span>
              </div>
            ))} */}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 sm:gap-4 mt-2 animate-fade-in-up animation-delay-600">
            <Link
              to="/menu"
              className="inline-block text-white text-sm md:text-base font-semibold px-6 sm:px-8 py-3 md:py-4 rounded transition-all duration-300 hover:scale-105 hover:shadow-lg w-full sm:w-auto text-center"
              style={{ backgroundColor: '#447241' }}
            >
              Order Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}