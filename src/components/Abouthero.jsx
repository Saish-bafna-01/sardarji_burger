export default function AboutHero({
  backgroundImage,
  heading,
  description,
}) {
  return (
    <section
      className="relative w-full min-h-[400px] sm:min-h-[400px] md:min-h-[450px] lg:min-h-[500px] flex items-center justify-center bg-linear-to-b from-black via-black/60 to-transparent bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content — centered */}
      <div className="relative z-10 flex flex-col items-center text-center gap-3 md:gap-4 px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-24">
        {/* Heading */}
        <h1 className="text-white oswald text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold uppercase tracking-wide leading-tight">
          {heading}
        </h1>

        {/* Yellow divider */}
        <div className="w-24 sm:w-32 md:w-40 h-[3px] bg-[#c0d4b2] rounded-full" />

        {/* Description */}
        {description && (
          <p className="text-white/70 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-2xl mt-1 md:mt-2">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}