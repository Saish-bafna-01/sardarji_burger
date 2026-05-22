import { useState } from "react";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube, FaPinterest } from "react-icons/fa";
import { TbMap2, TbPhone, TbSend, TbClock } from "react-icons/tb";

const iconMap = {
  map: <TbMap2 size={30} className="text-[#c0d4b2]" />,
  email: <TbSend size={30} className="text-[#c0d4b2]" />,
  phone: <TbPhone size={30} className="text-[#c0d4b2]" />,
  clock: <TbClock size={30} className="text-[#c0d4b2]" />,
};

const socialIconMap = {
  Facebook: <FaFacebookF size={20} />,
  Instagram: <FaInstagram size={20} />,
  TikTok: <FaTiktok size={20} />,
  YouTube: <FaYoutube size={20} />,
  Pinterest: <FaPinterest size={20} />,
};

export default function ContactSection({
  heading = "Get In Touch",
  description = "",
  contactInfo = [],
  socialLinks = [],
  formHeading = "Your Details",
  formFields = [],
  submitText = "Submit",
}) {
  const [form, setForm] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({});
  };

  const defaultContactInfo = [
    { id: "location", icon: "map", title: "Location", detail: "2382 23 Ave NW, Edmonton, AB T6T 0R1" },
    { id: "email", icon: "email", title: "Email", detail: "info@sardarjifastfood.com" },
    { id: "phone", icon: "phone", title: "Phone", detail: "(825) 965-7973" },
    { id: "hours", icon: "clock", title: "Opening Hours", detail: "24/7 - We are always open to serve you!" },
  ];

  const defaultSocialLinks = [
    { name: "Facebook", href: "https://www.facebook.com/people/Sardar-Ji-Fast-Food/61583740583407" },
    { name: "Instagram", href: "https://www.instagram.com/sardarji_fastfood_mudpot/" },
    { name: "TikTok", href: "https://www.tiktok.com/@sardarji.fast.food" },
    { name: "Pinterest", href: "https://ca.pinterest.com/sardarjifastfood/" },
    { name: "YouTube", href: "https://www.youtube.com/@SardarJiFastFoodMudpot" },
  ];

  const defaultFormFields = [
    { name: "firstName", label: "First Name", type: "text", placeholder: "Your Name", required: true },
    { name: "email", label: "Email Address", type: "email", placeholder: "email@yourmail.com", required: true },
    { name: "subject", label: "Subject", type: "text", placeholder: "Subject", required: true },
    { name: "message", label: "Comments / Questions", type: "textarea", placeholder: "Your Message", rows: 6, required: true },
  ];

  const displayContactInfo = contactInfo.length > 0 ? contactInfo : defaultContactInfo;
  const displaySocialLinks = socialLinks.length > 0 ? socialLinks : defaultSocialLinks;
  const displayFormFields = formFields.length > 0 ? formFields : defaultFormFields;

  return (
    <section className="w-full bg-[#1d384e] py-10 md:py-14 lg:py-16 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">

        {/* ── Left ── */}
        <div className="flex flex-col gap-6 md:gap-8">

          {/* Heading */}
          <div className="flex flex-col gap-2 md:gap-3 text-center lg:text-left">
            <h2 className="text-white oswald text-3xl sm:text-4xl md:text-5xl font-bold uppercase">
              {heading}
            </h2>
            <div className="w-16 md:w-20 h-[3px] bg-[#c0d4b2] rounded-full mx-auto lg:mx-0" />
            {description && (
              <p className="text-white/60 text-sm sm:text-base md:text-lg leading-relaxed mt-2 max-w-lg mx-auto lg:mx-0">
                {description}
              </p>
            )}
          </div>

          {/* Contact Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 md:gap-y-8 gap-x-6">
            {displayContactInfo.map((item) => (
              <div key={item.id || item.title} className="flex items-start gap-3 md:gap-4">
                <div className="mt-0.5 md:mt-1 flex-shrink-0">
                  {iconMap[item.icon] || item.icon}
                </div>
                <div>
                  <h4 className="text-white oswald text-base sm:text-lg font-bold uppercase tracking-wide">
                    {item.title}
                  </h4>
                  <p className="text-white/60 text-sm sm:text-base leading-snug whitespace-pre-line">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/10 hidden md:block" />

          {/* Social Media */}
          <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 flex-wrap justify-center lg:justify-start">
            <h4 className="text-white oswald text-lg md:text-xl font-bold uppercase tracking-wide">
              Our Social Media
            </h4>
            <div className="flex items-center gap-4 md:gap-5">
              {displaySocialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-[#c0d4b2] hover:text-[#c0d4b2]-300 transition-colors duration-200"
                >
                  {socialIconMap[social.name] || null}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Right — Form ── */}
        <div className="flex flex-col gap-4 md:gap-6">
          <h3 className="text-white oswald text-xl md:text-2xl font-bold uppercase tracking-wide text-center lg:text-left">
            {formHeading}
          </h3>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-5">

            {/* First Name + Email Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {displayFormFields.slice(0, 2).map((field) => (
                <div key={field.name} className="flex flex-col gap-2">
                  <label className="text-white text-xs sm:text-sm font-semibold">
                    {field.label} {field.required && <span className="text-[#c0d4b2]">*</span>}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    value={form[field.name] || ""}
                    onChange={handleChange}
                    required={field.required}
                    className="bg-[#1c1c1c] text-white/70 text-sm sm:text-base px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg outline-none border border-white/10 focus:border-[#c0d4b2] transition-colors duration-200 placeholder-white/30"
                  />
                </div>
              ))}
            </div>

            {/* Remaining Fields */}
            {displayFormFields.slice(2).map((field) => (
              <div key={field.name} className="flex flex-col gap-2">
                <label className="text-white text-xs sm:text-sm font-semibold">
                  {field.label} {field.required && <span className="text-[#c0d4b2]">*</span>}
                </label>
                {field.type === "textarea" ? (
                  <textarea
                    name={field.name}
                    placeholder={field.placeholder}
                    rows={field.rows || 5}
                    value={form[field.name] || ""}
                    onChange={handleChange}
                    required={field.required}
                    className="bg-[#1c1c1c] text-white/70 text-sm sm:text-base px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg outline-none border border-white/10 focus:border-[#c0d4b2] transition-colors duration-200 placeholder-white/30 resize-y"
                  />
                ) : (
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    value={form[field.name] || ""}
                    onChange={handleChange}
                    required={field.required}
                    className="bg-[#1c1c1c] text-white/70 text-sm sm:text-base px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg outline-none border border-white/10 focus:border-[#c0d4b2] transition-colors duration-200 placeholder-white/30"
                  />
                )}
              </div>
            ))}

            {/* Success Message */}
            {submitted && (
              <div className="bg-green-500/20 border border-green-500 text-green-400 px-4 py-3 rounded-lg text-center text-sm">
                Thank you! Your message has been sent successfully.
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[#c0d4b2] hover:bg-[#c0d4b2]-300 text-black oswald text-base md:text-lg font-bold uppercase px-6 md:px-8 py-3 md:py-4 rounded-lg transition-colors duration-200 w-full md:w-auto md:self-start"
            >
              {submitText}
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}