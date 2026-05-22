export default function MapSection() {
  return (
    <section className="w-full bg-[#1d384e] py-6 px-6 md:px-28">
      <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden border border-white/10">
        <iframe
          title="Sardarji Fastfood & Mudpot - 2382 23 Ave NW, Edmonton, AB T6T 0R1"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192827.5!2d-113.27!3d53.52!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5387f60a84f7c8d1%3A0x9c5c7c8c8c8c8c8c!2s2382%2023%20Ave%20NW%2C%20Edmonton%2C%20AB%20T6T%200R1!5e0!3m2!1sen!2sca!4v1713000000000!5m2!1sen!2sca"
          width="100%"
          height="500"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}