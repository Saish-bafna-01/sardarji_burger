// Contact Page Data
import contactHeroBg from "../assets/images/Contact.jpg";


// Contact Hero Data
export const contactHeroData = {
  backgroundImage: contactHeroBg,
  heading: "Get In Touch With Us",
  description: "We'd love to hear from you! Reach out for reservations, catering, or any questions about our menu.",
};

// Contact Section Data
export const contactSectionData = {
  heading: "Get Closer",
  description: "Have questions about our menu, want to make a reservation, or need catering for your next event? We're here to help! Reach out to us and our friendly team will get back to you as soon as possible.",
  contactInfo: [
    {
      id: "location",
      icon: "map",
      title: "Location",
      detail: "2382 23 Ave NW, Edmonton, AB T6T 0R1",
    },
    {
      id: "email",
      icon: "email",
      title: "Email",
      detail: "info@sardarjifastfood.com",
    },
    {
      id: "phone",
      icon: "phone",
      title: "Phone",
      detail: "(825) 965-7973",
    },
    {
      id: "hours",
      icon: "clock",
      title: "Opening Hours",
      detail: "24/7 - We are always open to serve you!",
    },
  ],
  socialLinks: [
    { name: "Facebook", href: "https://www.facebook.com/people/Sardar-Ji-Fast-Food/61583740583407" },
    { name: "Instagram", href: "https://www.instagram.com/sardarji_fastfood_mudpot/" },
    { name: "TikTok", href: "https://www.tiktok.com/@sardarji.fast.food" },
    { name: "Pinterest", href: "https://ca.pinterest.com/sardarjifastfood/" },
    { name: "YouTube", href: "https://www.youtube.com/@SardarJiFastFoodMudpot" },
  ],
  formHeading: "Your Details",
  formFields: [
    { name: "firstName", label: "First Name", type: "text", placeholder: "Your Name", required: true },
    { name: "email", label: "Email Address", type: "email", placeholder: "email@yourmail.com", required: true },
    { name: "subject", label: "Subject", type: "text", placeholder: "Subject", required: true },
    { name: "message", label: "Comments / Questions", type: "textarea", placeholder: "Your Message", rows: 6, required: true },
  ],
  submitText: "Submit Message",
};