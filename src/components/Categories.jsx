export default function Categories({ categories = [] }) {
  return (
    <section className="w-full bg-[#111111] py-8 md:py-12 lg:py-16 px-4 sm:px-6 md:px-12 lg:px-16">
      <div className="max-w-full mx-auto">
        {/* Grid - responsive columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          {categories.map(({ id, title, description, bg, textColor, linkColor, image, align }, index) => (
            <div
              key={id}
              className={`${bg} rounded-xl md:rounded-2xl flex items-center overflow-hidden relative min-h-[80px] sm:min-h-[90px] md:min-h-[100px] group cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/30 animate-fade-in-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Food Image — left side */}
              <div className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] flex-shrink-0 relative overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className={`w-full h-full object-cover object-center absolute ${align} transition-transform duration-500 group-hover:scale-125 group-hover:rotate-6`}
                />
              </div>

              {/* Text Content */}
              <div className={`flex flex-col gap-0.5 sm:gap-1 px-2 sm:px-3 md:px-4 py-2 md:py-4 ${textColor}`}>
                <h3 className="text-base sm:text-lg md:text-xl oswald font-extrabold tracking-wide transition-transform duration-300 group-hover:translate-x-1">{title}</h3>
                <p className="text-xs sm:text-sm opacity-80 hidden sm:block transition-opacity duration-300 group-hover:opacity-100">{description}</p>
              </div>

              {/* Shine effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}