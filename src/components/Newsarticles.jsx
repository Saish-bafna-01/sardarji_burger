import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

export default function NewsArticles({ heading, subtitle, articles = [] }) {
  return (
    <section className="w-full bg-[#111111] py-10 md:py-14 lg:py-16 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28">
      <div className="flex flex-col items-center gap-3 mb-4">
        <h2 className="text-white oswald text-4xl md:text-5xl font-bold uppercase tracking-wide">
          {heading}
        </h2>
        <div className="w-40 h-[3px] bg-yellow-500 rounded-full" />
        {subtitle && (
          <p className="text-gray-400 text-xl text-center max-w-2xl mt-2 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
      <div className="max-w-7xl mx-auto">
        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-6 md:mt-10">
          {articles.map((article, index) => (
            <Link
              key={article.id}
              to={article.slug ? `/blog/${article.slug}` : "/blog"}
              className="flex flex-col group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image with category badge */}
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm group/img">
                <img
                  src={article.img}
                  alt={article.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover/img:scale-110 group-hover/img:rotate-2"
                />
                {/* Dark overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/20 transition-colors duration-500" />
                {/* Category badge — bottom left */}
                <span className="absolute bottom-0 left-0 bg-yellow-500 text-black text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1 transition-all duration-300 group-hover/img:bg-yellow-400 group-hover/img:px-5">
                  {article.category}
                </span>
                {/* Arrow icon on hover */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center opacity-0 translate-x-4 group-hover/img:opacity-100 group-hover/img:translate-x-0 transition-all duration-500">
                  <FiArrowRight size={16} className="text-black" />
                </div>
              </div>

              {/* Text content */}
              <div className="flex flex-col gap-2 md:gap-3 pt-4 md:pt-5">
                <h3 className="text-white oswald text-lg sm:text-xl md:text-2xl font-bold uppercase leading-snug line-clamp-2 transition-colors duration-300 group-hover:text-yellow-500">
                  {article.title}
                </h3>
                <p className="text-white/70 text-sm sm:text-base md:text-lg leading-relaxed line-clamp-2 transition-colors duration-300 group-hover:text-white/90">
                  {article.desc}
                </p>
                <span className="flex items-center gap-1 text-yellow-500 text-sm md:text-base font-semibold group-hover:gap-3 transition-all duration-300 mt-1 w-fit">
                  Read More{" "}
                  <FiArrowRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
