import { BsCheckLg } from "react-icons/bs";
import aboutImg from "../assets/images/about.jpg";

const features = [
  "Freshly prepared meals daily",
  "Authentic Punjabi & South Indian taste",
  "Affordable pricing",
  "Fast service & takeaway options",
];

export default function About() {
  return (
    <section className="w-full bg-[#111111] py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left — Image */}
        <div className="rounded-2xl overflow-hidden w-full aspect-[4.5/3]">
          <img
            src={aboutImg}
            alt="Authentic Indian cuisine"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right — Content */}
        <div className="flex flex-col gap-6">
          {/* Heading */}
          <h2 className="text-white oswald text-4xl md:text-[45px] font-extrabold uppercase">
            Taste the Real Flavors of India
          </h2>

          {/* Yellow divider */}
          <div className="w-20 h-[3px] bg-yellow-400 rounded-full" />

          {/* Description */}
          <p className="text-white/80 text-lg leading-relaxed">
            Experience authentic recipes made with fresh ingredients and traditional spices.
            We bring the taste of Punjab and South India to Edmonton with love and passion.
          </p>

          {/* Feature checklist */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-3">
            {features.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <BsCheckLg className="text-yellow-400 font-extrabold flex-shrink-0" size={24} />
                <span className="text-white text-lg font-medium">{item}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-2">
            <a
              href="#"
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black text-sm font-semibold px-8 py-4 rounded transition-colors duration-200"
            >
              About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}