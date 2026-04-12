import { BsCheckLg } from "react-icons/bs";

export default function Promos({ promos = [] }) {
  return (
    <section className="w-full bg-[#111111] py-8 md:py-12 px-4 sm:px-6 md:px-12 lg:px-16">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        {promos.map(({ id, tag, title, description, features, image, alt, cta }, index) => (
          <div
            key={id}
            className="bg-[#1c1c1c] rounded-xl md:rounded-2xl flex flex-col md:flex-row items-center justify-between overflow-hidden px-4 sm:px-6 md:px-8 py-6 md:py-8 gap-4 md:gap-6 group min-h-[280px] md:min-h-[300px] transition-all duration-500 hover:bg-[#252525] hover:shadow-2xl hover:shadow-yellow-500/10 hover:-translate-y-2 animate-fade-in-up"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            {/* Left — Text */}
            <div className="flex flex-col gap-2 md:gap-3 flex-1 text-center md:text-left">
              <span className="text-yellow-500 text-sm sm:text-base md:text-lg font-semibold transition-colors duration-300 group-hover:text-yellow-400">{tag}</span>
              <h3 className="text-white oswald text-xl sm:text-2xl md:text-3xl font-bold uppercase leading-tight transition-transform duration-300 group-hover:scale-[1.02]">
                {title}
              </h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed transition-colors duration-300 group-hover:text-gray-300">
                {description}
              </p>

              {/* Features */}
              <div className="flex flex-col gap-1.5 md:gap-2 mt-1 md:mt-2">
                {features.slice(0, 3).map((item, i) => (
                  <div key={item} className="flex items-center gap-2 justify-center md:justify-start transition-transform duration-300 hover:translate-x-1" style={{ transitionDelay: `${i * 50}ms` }}>
                    <BsCheckLg className="text-yellow-400 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" size={14} />
                    <span className="text-white/80 text-xs sm:text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <a
                href="#"
                className="mt-2 text-yellow-400 text-sm md:text-base font-semibold hover:underline transition-all duration-300 hover:text-yellow-300 hover:translate-x-1 w-fit mx-auto md:mx-0 flex items-center gap-1 group/link"
              >
                {cta}
                <span className="transition-transform duration-300 group-hover/link:translate-x-1">→</span>
              </a>
            </div>

            {/* Right — Image */}
            <div className="flex-shrink-0 w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] md:w-[220px] md:h-[220px] lg:w-[280px] lg:h-[280px] flex items-center justify-center">
              <img
                src={image}
                alt={alt}
                className="burger-img w-full h-full object-contain drop-shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
              />
            </div>

            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        ))}
      </div>
    </section>
  );
}