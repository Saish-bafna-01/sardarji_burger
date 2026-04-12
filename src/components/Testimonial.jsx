import { FaQuoteRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function Testimonials({ heading, subtitle, reviews = [] }) {
  return (
    <section className="w-full bg-[#111111] py-10 md:py-14 lg:py-16 px-4 sm:px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="flex flex-col items-center gap-3 md:gap-4 lg:gap-5 mb-4">
          <h2 className="text-white oswald text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-wide text-center animate-fade-in-up">
            {heading}
          </h2>
          <div className="w-16 sm:w-20 md:w-24 lg:w-32 h-[3px] bg-yellow-400 rounded-full animate-scale-x" />
          {subtitle && (
            <p className="text-white/70 text-sm sm:text-base md:text-lg text-center max-w-sm md:max-w-xl mt-1 md:mt-2 leading-relaxed animate-fade-in-up animation-delay-200">
              {subtitle}
            </p>
          )}
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={16}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            480: { slidesPerView: 1, spaceBetween: 16 },
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
          }}
          className="mt-6 md:mt-8 lg:mt-10"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={review.id} className="flex h-auto">
              <div className="bg-[#1c1c1c] rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-7 flex flex-col justify-between gap-4 md:gap-6 w-full h-full min-h-[180px] md:min-h-[200px] transition-all duration-500 hover:bg-[#252525] hover:shadow-2xl hover:shadow-yellow-500/10 hover:-translate-y-3 group animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                {/* Text */}
                <p className="text-white/70 text-sm sm:text-base md:text-lg leading-relaxed italic flex-grow transition-colors duration-300 group-hover:text-white/90">
                  "{review.text}"
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 md:gap-3">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover transition-transform duration-300 group-hover:scale-110 ring-2 ring-transparent group-hover:ring-yellow-400"
                    />
                    <div>
                      <p className="text-white oswald text-xs sm:text-sm md:text-base font-bold uppercase tracking-wide transition-colors duration-300 group-hover:text-yellow-400">
                        {review.name}
                      </p>
                      <p className="text-gray-400 text-xs md:text-sm transition-colors duration-300 group-hover:text-gray-300">
                        {review.designation}
                      </p>
                    </div>
                  </div>

                  <FaQuoteRight size={10} className="text-yellow-400 flex-shrink-0 md:size-10 transition-all duration-300 group-hover:scale-110 group-hover:text-yellow-300" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}