import { useState } from "react";
import { Link } from "react-router-dom";
import { FiSend } from "react-icons/fi";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";
import {
  MdOutlinePhoneInTalk,
  MdOutlineEmail,
  MdOutlineLocationOn,
} from "react-icons/md";
import logoImg from "../assets/images/logo4.png";

const socialIcons = {
  TikTok: <FaTiktok size={16} />,
  Facebook: <FaFacebookF size={16} />,
  Instagram: <FaInstagram size={16} />,
  Pinterest: <FaPinterest size={16} />,
  YouTube: <FaYoutube size={16} />,
};

export default function Footer({
  newsletter = {},
  brand = {},
  supportLinks = [],
  quickLinks = [],
  contact = {},
  address = "",
  socialLinks = [],
  copyright = "",
  credits = "",
}) {
  const [email, setEmail] = useState("");

  return (
    <footer className="w-full">
      {/* Newsletter Banner */}
      <div className="w-full bg-[#c0d4b2] px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 py-8 md:py-10 lg:py-12">
        <div className="mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
          {/* Left text */}
          <div className="flex flex-col gap-1 md:gap-2 text-center md:text-left">
            <h2 className="text-black oswald text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase leading-tight">
              {newsletter.heading}
            </h2>
            <p className="text-black/70 text-sm sm:text-base md:text-lg">
              {newsletter.description}
            </p>
          </div>

          {/* Email + Button */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
              className="flex-1 sm:w-[280px] md:w-[320px] lg:w-[380px] bg-white text-gray-700 text-sm sm:text-base md:text-lg px-4 sm:px-6 py-3 sm:py-4 rounded-full outline-none placeholder-gray-400 w-full"
            />
            <button className="flex items-center justify-center gap-2 bg-black hover:bg-gray-900 text-white text-sm sm:text-base md:text-lg font-semibold px-5 sm:px-7 py-3 sm:py-4 rounded-full transition-colors duration-200 whitespace-nowrap w-full sm:w-auto">
              <FiSend size={16} />
              Subscribe Now
            </button>
          </div>
        </div>
      </div>

      {/* Footer Body */}
      <div className="w-full bg-[#1d384e] px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 py-10 md:py-14 lg:py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-13">
          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-3 md:gap-4 col-span-2 sm:col-span-2 md:col-span-1 lg:col-span-2">
            <Link
              to="/"
              className="text-lg sm:text-xl md:text-2xl font-extrabold tracking-tight text-white hover:text-[#c0d4b2] transition-colors"
            >
              <img src={logoImg} alt="Sardarji Logo" className="h-16 w-auto" />
            </Link>
            <p className="text-white/60 text-sm sm:text-base leading-relaxed hidden sm:block">
              {brand.description}
            </p>
          </div>

          {/* Col 2 — Quick Links */}
          {quickLinks && quickLinks.length > 0 && (
            <div className="flex flex-col gap-3 md:gap-4">
              <h4 className="text-white oswald text-base sm:text-lg md:text-xl font-bold uppercase tracking-wide">
                Quick Links
              </h4>
              <ul className="flex flex-col gap-2 md:gap-3">
                {quickLinks.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className="text-white/70 text-sm sm:text-base hover:text-[#c0d4b2] transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Col 3 — Support */}
          <div className="flex flex-col gap-3 md:gap-4">
            <h4 className="text-white oswald text-base sm:text-lg md:text-xl font-bold uppercase tracking-wide">
              Support
            </h4>
            <ul className="flex flex-col gap-2 md:gap-3">
              {supportLinks.map((item) => (
                <li key={item}>
                  <Link
                    to="/contact"
                    className="text-white/70 text-sm sm:text-base hover:text-[#c0d4b2] transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="hidden lg:block flex-col gap-2 md:gap-3">
              <h4 className="text-white oswald text-base sm:text-lg md:text-xl font-bold uppercase tracking-wide">
                Follow Us
              </h4>
              <div className="flex items-center gap-3 md:gap-4 mt-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-[#c0d4b2] hover:text-[#c0d4b2]-300 transition-colors duration-200"
                  >
                    {socialIcons[social.name] || null}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Col 4 — Contact Info */}
          <div className="flex flex-col gap-4 md:gap-6">
            {/* Phone */}
            <div className="flex flex-col gap-2 md:gap-3">
              <h4 className="text-white oswald text-base sm:text-lg md:text-xl font-bold uppercase tracking-wide">
                Contact
              </h4>
              {contact.phone && (
                <a
                  href={`tel:+1${contact.phone.replace(/\D/g, "")}`}
                  className="flex items-center gap-2 text-white/70 text-sm sm:text-base hover:text-[#c0d4b2] transition-colors"
                >
                  <MdOutlinePhoneInTalk className="text-[#c0d4b2]" size={18} />
                  <span className="text-xs sm:text-sm md:text-base">
                    {contact.phone}
                  </span>
                </a>
              )}
              {contact.email && (
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center text-white/70 gap-2 text-sm sm:text-base hover:text-[#c0d4b2] transition-colors"
                >
                  <MdOutlineEmail className="text-[#c0d4b2]" size={18} />
                  <span className="text-xs sm:text-sm md:text-base break-all">
                    {contact.email}
                  </span>
                </a>
              )}
            </div>
            {/* Address */}
            <div className="flex flex-col gap-2 md:gap-3 lg:mt-16">
              <h4 className="text-white oswald text-base sm:text-lg md:text-xl font-bold uppercase tracking-wide">
                Address
              </h4>
              {address && (
                <div className="flex items-start gap-2 text-white/70 text-sm sm:text-base">
                  <MdOutlineLocationOn
                    className="text-[#c0d4b2] mt-0.5 flex-shrink-0"
                    size={18}
                  />
                  <span className="text-xs sm:text-sm md:text-base">
                    {address}
                  </span>
                </div>
              )}
            </div>
            {/* Social Links */}
            <div className="lg:hidden flex flex-col gap-2 md:gap-3">
              <h4 className="text-white oswald text-base sm:text-lg md:text-xl font-bold uppercase tracking-wide">
                Follow Us
              </h4>
              <div className="flex items-center gap-3 md:gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-[#c0d4b2] hover:text-[#c0d4b2]-300 transition-colors duration-200"
                  >
                    {socialIcons[social.name] || null}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full bg-[#1d384e] border-t border-white/10 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 py-4 md:py-5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-white/50 text-xs sm:text-sm text-center md:text-left">
            {copyright}
          </p>
          <a
            href="https://itbs.ca/"
            target="_blank"
            className="text-white/50 text-xs sm:text-sm"
          >
            {credits}
          </a>
        </div>
      </div>
    </footer>
  );
}
