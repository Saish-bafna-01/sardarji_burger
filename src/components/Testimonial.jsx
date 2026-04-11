import { FaQuoteRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import person1 from "../assets/images/testimonial.jpg";

const reviews = [
  {
    id: 1,
    text: "Absolutely delicious food! The taste reminds me of home.",
    name: "Happy Customer",
    designation: "Edmonton",
    avatar: person1,
  },
  {
    id: 2,
    text: "Best Indian food in Edmonton. Highly recommended!",
    name: "Food Lover",
    designation: "Alberta",
    avatar: person1,
  },
  {
    id: 3,
    text: "Affordable, fresh, and super tasty!",
    name: "Regular Visitor",
    designation: "Canada",
    avatar: person1,
  },
  {
    id: 4,
    text: "The chana bhature is amazing! Just like what I had in Delhi.",
    name: "Indian Food Fan",
    designation: "Edmonton",
    avatar: person1,
  },
  {
    id: 5,
    text: "Great service and authentic flavors. Will definitely come back!",
    name: "Satisfied Diner",
    designation: "Alberta",
    avatar: person1,
  },
];

export default function Testimonials() {
  return (
    <section className="w-full bg-[#111111] py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="flex flex-col items-center gap-5 mb-4">
          <h2 className="text-white oswald text-4xl md:text-5xl font-bold uppercase tracking-wide">
            What Our Customers Say
          </h2>
          <div className="w-50 h-[3px] bg-yellow-400 rounded-full" />
          <p className="text-white/70 text-lg text-center max-w-xl mt-2 leading-relaxed">
            Hear from our valued customers about their experience at Sardarji Fastfood & Mudpot.
          </p>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mt-10"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id} className="flex h-auto">
              <div className="bg-[#1c1c1c] rounded-2xl p-7 flex flex-col justify-between gap-6 w-full h-full min-h-[200px] md:min-h-[200px] transition-transform duration-300 hover:-translate-y-1">

                {/* Text */}
                <p className="text-white/70 text-lg leading-relaxed italic flex-grow">
                  "{review.text}"
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-white oswald text-sm md:text-base font-bold uppercase tracking-wide">
                        {review.name}
                      </p>
                      <p className="text-gray-400 text-xs md:text-sm">
                        {review.designation}
                      </p>
                    </div>
                  </div>

                  <FaQuoteRight size={32} className="text-yellow-400 flex-shrink-0" />
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}