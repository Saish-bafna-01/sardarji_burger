import { useState } from "react";
import { BsFillPlayFill, BsXLg, BsCheckLg } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";
import bgVideo from "../assets/video-bg.mp4";

export default function VideoSection({
  heading,
  description,
  highlights = [],
  videoUrl,
  phone,
}) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="w-full bg-[#1d384e]">
        <div className="mx-auto">
          {/* Container */}
          <div className="relative w-full overflow-hidden min-h-[350px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px] flex items-center justify-center">
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
            <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 py-10 md:py-16 gap-3 md:gap-4 lg:gap-5 max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-2xl mx-auto">
              {/* Play Button */}
              <button
                onClick={() => setModalOpen(true)}
                className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 rounded-full bg-[#c0d4b2] hover:bg-[#c0d4b2]-300 flex items-center justify-center transition-colors duration-200 mb-1 md:mb-2"
                aria-label="Play video"
              >
                <BsFillPlayFill size={50} className="text-white ml-0.5" />
              </button>

              {/* Heading */}
              <h2 className="text-white oswald text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-wide leading-tight">
                {heading}
              </h2>

              {/* Yellow divider */}
              <div className="w-24 md:w-32 lg:w-40 h-[3px] bg-[#c0d4b2] rounded-full" />

              {/* Description */}
              <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                {description}
              </p>

              {/* Highlights */}
              {highlights.length > 0 && (
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mt-2 md:mt-4">
                  {highlights.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-1.5 sm:gap-2 bg-white/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full"
                    >
                      <BsCheckLg className="text-[#c0d4b2]" size={12} />
                      <span className="text-white text-xs sm:text-sm font-medium">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Call Now */}
              {phone && (
                <a
                  href={`tel:+1${phone.replace(/\D/g, "")}`}
                  className="mt-3 md:mt-4 flex items-center gap-2 sm:gap-3 bg-[#c0d4b2] hover:bg-[#c0d4b2]-600 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-colors duration-200"
                >
                  <FiPhone size={20} />
                  <span className="font-bold text-sm sm:text-base md:text-lg">
                    Call Now: {phone}
                  </span>
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {modalOpen && videoUrl && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video rounded-xl md:rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              className="w-full h-full"
              src={`${videoUrl}?autoplay=1&start=2&rel=0&modestbranding=1`}
              title="Video"
              frameBorder="0"
              allow="autoplay; encrypted-media; fullscreen"
              allowFullScreen
            />
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-2 right-2 md:top-3 md:right-3 w-8 h-8 md:w-9 md:h-9 rounded-full bg-black/60 hover:bg-black flex items-center justify-center text-white transition-colors duration-200"
              aria-label="Close video"
            >
              <BsXLg size={12} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}