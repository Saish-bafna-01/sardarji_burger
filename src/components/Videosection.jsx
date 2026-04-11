import { useState } from "react";
import { BsFillPlayFill, BsXLg, BsCheckLg } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";
import bgVideo from "../assets/video-bg.mp4";

const highlights = [
  "Free Delivery",
  "Quick Service",
  "Fresh Food",
  "Easy Ordering",
];

export default function VideoSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="w-full bg-[#111111]">
        <div className="mx-auto">
          {/* Container */}
          <div className="relative w-full overflow-hidden min-h-[420px] md:min-h-[600px] flex items-center justify-center">
            {/* HTML5 Video Background */}
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src={bgVideo}
              autoPlay
              muted
              loop
              playsInline
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/55" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center px-6 py-16 gap-5 max-w-2xl mx-auto">
              {/* Play Button */}
              <button
                onClick={() => setModalOpen(true)}
                className="w-20 h-20 rounded-full bg-yellow-400 hover:bg-yellow-300 flex items-center justify-center transition-colors duration-200 mb-2"
                aria-label="Play video"
              >
                <BsFillPlayFill size={28} className="text-white ml-1" />
              </button>

              {/* Heading */}
              <h2 className="text-white oswald text-4xl md:text-5xl font-extrabold uppercase tracking-wide leading-tight">
                Don't Worry! You Can Order Your Food Just By Phone
              </h2>

              {/* Yellow divider */}
              <div className="w-40 h-[3px] bg-yellow-400 rounded-full" />

              {/* Description */}
              <p className="text-gray-300 text-lg leading-relaxed">
                Enjoy your favorite meals anytime, anywhere with quick and easy ordering.
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap justify-center gap-4 mt-4">
                {highlights.map((item) => (
                  <div key={item} className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                    <BsCheckLg className="text-yellow-400" size={16} />
                    <span className="text-white text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>

              {/* Call Now */}
              <a
                href="tel:+18259657973"
                className="mt-4 flex items-center gap-3 bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-full transition-colors duration-200"
              >
                <FiPhone size={20} />
                <span className="font-bold text-lg">Call Now: (825) 965-7973</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/HS24PywYlxg?autoplay=1&start=2&rel=0&modestbranding=1"
              title="Sardarji Fastfood & Mudpot"
              frameBorder="0"
              allow="autoplay; encrypted-media; fullscreen"
              allowFullScreen
            />
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/60 hover:bg-black flex items-center justify-center text-white transition-colors duration-200"
              aria-label="Close video"
            >
              <BsXLg size={14} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}