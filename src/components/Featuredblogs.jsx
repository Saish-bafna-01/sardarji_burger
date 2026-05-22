import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

export default function FeaturedBlogs({ heading, blogs = [] }) {
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

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {blogs.map((blog, index) => (
            <Link
              key={blog.id}
              to={`/blog/${blog.slug}`}
              className="flex flex-col group cursor-pointer bg-white/5 rounded-xl md:rounded-2xl overflow-hidden transition-all duration-500 hover:bg-white/10 hover:shadow-2xl hover:shadow-[#c0d4b2]/10 hover:-translate-y-3 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative w-full aspect-square overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-125 group-hover:rotate-6"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Category badge */}
                <span className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 bg-[#c0d4b2] text-black text-[10px] sm:text-xs font-semibold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full uppercase transition-all duration-300 group-hover:bg-[#c0d4b2]-300 group-hover:scale-105">
                  {blog.category}
                </span>
                {/* Arrow icon on hover */}
                <div className="absolute top-3 right-3 w-8 h-8 bg-[#c0d4b2] rounded-full flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <FiArrowRight size={14} className="text-black" />
                </div>
              </div>

              {/* Text content */}
              <div className="flex flex-col gap-2 md:gap-3 p-3 sm:p-4 md:p-5">
                <h3 className="text-white oswald text-sm sm:text-base md:text-lg font-bold leading-snug line-clamp-2 transition-colors duration-300 group-hover:text-[#c0d4b2]">
                  {blog.title}
                </h3>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed line-clamp-2 hidden sm:block transition-colors duration-300 group-hover:text-white/90">
                  {blog.excerpt}
                </p>
                <span className="flex items-center gap-1 sm:gap-2 text-[#c0d4b2] text-xs sm:text-sm font-semibold group-hover:gap-3 transition-all duration-300 mt-auto">
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