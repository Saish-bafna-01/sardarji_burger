export default function Categories({ categories = [] }) {
  return (
    <section className="w-full bg-[#1d384e] py-8 md:py-12 px-4 sm:px-6 md:px-12 lg:px-16">
      <div className="max-w-full mx-auto">
        {/* Grid - responsive columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          {categories.map(({ id, title, description, bg, textColor, linkColor, image, align }, index) => (
            <div
              key={id}
              className={`${bg} rounded-xl md:rounded-2xl flex items-end overflow-visible relative group cursor-pointer transition-transform duration-300 hover:scale-105 animate-fade-in-up h-[50px] md:h-[80px]`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Food Image — left side, bottom touches box, top extends above */}
              <div className="w-[80px] sm:w-[90px] md:w-[100px] h-[90px] sm:h-[130px] md:h-[120px] relative -mt-[40px] sm:-mt-[50px] md:-mt-[40px]">
                <img
                  src={image}
                  alt={title}
                  className={`w-full h-full object-cover object-center ${align}`}
                />
              </div>

              {/* Text Content */}
              <div className={`flex flex-col self-center px-2 sm:px-3 md:px-4 ${textColor}`}>
                <h3 className="text-xs sm:text-sm md:text-lg font-bold tracking-wide">{title}</h3>
                <p className="text-[11px] opacity-80">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}