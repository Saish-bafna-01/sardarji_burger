import offerBg from "../assets/images/offer.jpg";

export default function SpecialOffer() {
  return (
    <section
      className="relative w-full min-h-[420px] flex items-center bg-cover bg-center px-6 md:px-28"
      style={{ backgroundImage: `url(${offerBg})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content — left aligned */}
      <div className="relative z-10 px-6 md:px-16 py-16 max-w-5xl flex flex-col gap-5">
        {/* Heading */}
        <h2 className="text-white oswald text-4xl md:text-6xl font-bold uppercase leading-tight">
          Get A Special Offer For Your Special Occasion
        </h2>

        {/* Yellow divider */}
        <div className="w-20 h-[3px] bg-yellow-400 rounded-full" />

        {/* Description */}
        <p className="text-gray-300 max-w-2xl text-xl leading-relaxed">
          Celebrate your events with authentic Indian flavors and customized food options.
          Whether it's a birthday, anniversary, or corporate event, we've got you covered.
        </p>

        {/* CTA Button */}
        <div className="mt-2">
          <a
            href="#"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black text-lg font-semibold px-12 py-4 rounded transition-colors duration-200"
          >
            Book a Reservation
          </a>
        </div>
      </div>
    </section>
  );
}