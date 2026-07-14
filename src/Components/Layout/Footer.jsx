import React from "react";
import { FaLinkedinIn, FaGithub, FaXTwitter } from "react-icons/fa6";
import { scrollToId } from "../UI/scrollTo";
import Profileimage from "../../assets/ProfileImage.png";

const links = [
  { label: "About", id: "#about" },
  { label: "Services", id: "#services" },
  { label: "Work", id: "#projects" },
  { label: "Testimonials", id: "#testimonials" },
  { label: "FAQ", id: "#faq" },
  { label: "Contact", id: "#contact" },
];

const socials = [
  { icon: <FaLinkedinIn />, href: "https://linkedin.com/in/", label: "LinkedIn" },
  { icon: <FaGithub />, href: "https://github.com/", label: "GitHub" },
  { icon: <FaXTwitter />, href: "https://x.com/", label: "X (Twitter)" },
];

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-12 flex flex-col gap-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="flex items-center gap-3">
            <img src={Profileimage} alt="Junaid Hunani" className="w-11 h-11 rounded-full object-cover border border-gray-200" />
            <div className="leading-tight">
              <p className="font-semibold text-gray-900">Junaid Hunani</p>
              <p className="text-[13px] text-gray-500">AI Software Developer</p>
            </div>
          </div>

          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[14px] text-gray-600">
            {links.map((link) => (
              <a
                key={link.id}
                href={link.id}
                onClick={(e) => { e.preventDefault(); scrollToId(link.id); }}
                className="hover:text-gray-900 transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex items-center justify-center w-9 h-9 rounded-full border border-gray-200 text-gray-500 hover:text-gray-900 hover:border-gray-300 transition-colors"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-4 pt-6 border-t border-gray-100 text-[13px] text-gray-400">
          <p>© {new Date().getFullYear()} Junaid Hunani. All rights reserved.</p>
          <button
            onClick={() => scrollToId("#top")}
            className="hover:text-gray-700 transition-colors font-medium"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
