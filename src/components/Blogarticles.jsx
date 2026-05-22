import { Link } from "react-router-dom";
import { FiArrowRight, FiCalendar } from "react-icons/fi";

export default function BlogArticles({ heading, articles = [] }) {
  return (
    <section className="w-full bg-[#1d384e] py-10 md:py-14 lg:py-16 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col items-center gap-2 md:gap-3 mb-8 md:mb-10">
          <h2 className="text-white oswald text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-wide text-center animate-fade-in-up">
            {heading}
          </h2>
          <div className="w-24 sm:w-32 md:w-40 h-[3px] bg-[#c0d4b2] rounded-full animate-scale-x" />
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {articles.map((article, index) => (
            <Link
              key={article.id}
              to={`/blog/${article.slug}`}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 bg-white/5 rounded-xl md:rounded-2xl overflow-hidden p-4 sm:p-5 md:p-6 group cursor-pointer transition-all duration-500 hover:bg-white/10 hover:shadow-2xl hover:shadow-[#c0d4b2]/10 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative w-full sm:w-[160px] md:w-[180px] lg:w-[200px] h-[160px] sm:h-[160px] md:h-[180px] lg:h-[200px] flex-shrink-0 overflow-hidden rounded-lg md:rounded-xl">
                <img
                  src={article.img}
                  alt={article.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-125 group-hover:rotate-6"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Arrow icon */}
                <div className="absolute top-3 right-3 w-8 h-8 bg-[#c0d4b2] rounded-full flex items-center justify-center opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500">
                  <FiArrowRight size={14} className="text-black" />
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2 md:gap-3 flex-1">
                {/* Category & Date */}
                <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
                  <span className="bg-[#c0d4b2] text-black text-[10px] sm:text-xs font-semibold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full uppercase transition-all duration-300 group-hover:bg-[#c0d4b2]-300 group-hover:scale-105">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1 text-white/50 text-[10px] sm:text-xs transition-colors duration-300 group-hover:text-white/70">
                    <FiCalendar size={10} />
                    {article.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-white oswald text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-snug line-clamp-2 transition-colors duration-300 group-hover:text-[#c0d4b2]">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed line-clamp-2 md:line-clamp-3 hidden sm:block transition-colors duration-300 group-hover:text-white/90">
                  {article.excerpt}
                </p>

                {/* Read More */}
                <span className="flex items-center gap-1 sm:gap-2 text-[#c0d4b2] text-xs sm:text-sm font-semibold group-hover:gap-3 transition-all duration-300 mt-auto w-fit">
                  Read More <FiArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}