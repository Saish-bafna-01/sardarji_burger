export default function SpecialOffer({
  backgroundImage,
  heading,
  description,
  ctaText,
  ctaLink = "#",
}) {
  return (
    <section
      className="relative w-full min-h-[350px] sm:min-h-[400px] md:min-h-[450px] lg:min-h-[500px] flex items-center bg-cover bg-center px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 overflow-hidden group"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-700" />

      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl animate-pulse animation-delay-500" />
      </div>

      {/* Content — left aligned */}
      <div className="relative z-10 px-4 sm:px-6 md:px-12 lg:px-16 py-8 md:py-12 lg:py-16 max-w-full md:max-w-4xl lg:max-w-5xl flex flex-col gap-3 md:gap-4 lg:gap-5">
        {/* Heading */}
        <h2 className="text-white oswald text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold uppercase leading-tight animate-fade-in-up">
          {heading}
        </h2>

        {/* Yellow divider */}
        <div className="w-16 sm:w-20 md:w-20 h-[3px] bg-yellow-400 rounded-full animate-scale-x" />

        {/* Description */}
        <p className="text-gray-300 max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed animate-fade-in-up animation-delay-200">
          {description}
        </p>

        {/* CTA Button */}
        {ctaText && (
          <div className="mt-2 md:mt-3 animate-fade-in-up animation-delay-400">
            <a
              href={ctaLink}
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black text-sm md:text-base lg:text-lg font-semibold px-8 md:px-10 lg:px-12 py-3 md:py-4 rounded transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/30"
            >
              {ctaText}
            </a>
          </div>
        )}
      </div>

      {/* Shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
    </section>
  );
}