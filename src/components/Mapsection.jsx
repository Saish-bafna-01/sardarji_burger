export default function MapSection() {
  return (
    <section className="w-full bg-[#111111] py-6 px-6 md:px-28">
      <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden border border-white/10">
        <iframe
          title="Burgry Location - Edmonton, Alberta"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d154404.43!2d-113.6731!3d53.5461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a0224580deff23%3A0x411fa00b1a3c3b4a!2sEdmonton%2C%20AB%2C%20Canada!5e0!3m2!1sen!2sca!4v1713000000000!5m2!1sen!2sca"
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