import { BsCheckLg } from "react-icons/bs";

export default function AboutSection({
  image,
  title,
  description,
  features = [],
  ctaText,
  ctaLink = "#",
}) {
  return (
    <section className="w-full bg-[#111111] py-10 md:py-14 lg:py-16 px-4 sm:px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
        {/* Left — Image */}
        <div className="rounded-xl md:rounded-2xl overflow-hidden w-full aspect-[4/3] md:aspect-[4.5/3] group animate-slide-in-left">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Right — Content */}
        <div className="flex flex-col gap-4 md:gap-5 lg:gap-6 text-center lg:text-left animate-slide-in-right">
          {/* Heading */}
          <h2 className="text-white oswald text-2xl sm:text-3xl md:text-4xl lg:text-[45px] font-extrabold uppercase leading-tight transition-transform duration-300 hover:scale-[1.02]">
            {title}
          </h2>

          {/* Yellow divider */}
          <div className="w-16 md:w-20 h-[3px] bg-yellow-400 rounded-full mx-auto lg:mx-0 animate-scale-x" />

          {/* Description */}
          <p className="text-white/80 text-base md:text-lg leading-relaxed transition-colors duration-300 hover:text-white">
            {description}
          </p>

          {/* Feature checklist */}
          {features.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 md:gap-x-8 gap-y-2 md:gap-y-3">
              {features.map((item, index) => (
                <div key={item} className="flex items-center gap-2 justify-center sm:justify-start transition-all duration-300 hover:translate-x-2 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <BsCheckLg className="text-yellow-400 font-extrabold flex-shrink-0 transition-transform duration-300 hover:scale-125" size={18} />
                  <span className="text-white text-sm md:text-base lg:text-lg font-medium">{item}</span>
                </div>
              ))}
            </div>
          )}

          {/* CTA */}
          {ctaText && (
            <div className="mt-2">
              <a
                href={ctaLink}
                className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black text-sm md:text-base font-semibold px-6 md:px-8 py-3 md:py-4 rounded transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/30"
              >
                {ctaText}
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}