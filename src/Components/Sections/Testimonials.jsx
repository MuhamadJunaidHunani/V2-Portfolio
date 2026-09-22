import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";
import SectionLabel from "../UI/SectionLabel";

const palette = ["#b744d8", "#7c3aed", "#c026d3", "#9333ea", "#a855f7", "#d946ef"];

const Avatar = ({ initials, index, light }) => {
  const color = light ? "#ffffff" : palette[index % palette.length];
  return (
    <div
      className="relative w-11 h-11 shrink-0 rounded-full p-[2px]"
      style={{ background: light ? "rgba(255,255,255,0.5)" : `linear-gradient(135deg, ${color}, ${color}22)` }}
    >
      <div className={`w-full h-full rounded-full flex items-center justify-center ${light ? "bg-white/15" : "bg-white"}`}>
        <span className="text-[13px] font-bold" style={{ color: light ? "#ffffff" : color }}>
          {initials}
        </span>
      </div>
    </div>
  );
};

const testimonials = [
  {
    quote: "Junaid took a vague idea and turned it into a working product in weeks. He thinks like a founder, not just a developer.",
    name: "Sarah Mitchell",
    role: "Founder, Abstrax",
  },
  {
    quote: "The AI chatbot he built now handles 70% of our support tickets. Setup took days, not months — and it just works.",
    name: "David Chen",
    role: "Ops Lead, Hannan Fabrics",
    featured: true,
  },
  {
    quote: "Best part of working with Junaid is that there's no middleman. You talk to the person actually writing the code.",
    name: "Amelia Rossi",
    role: "Marketing Director, Fiztees",
  },
  {
    quote: "He automated our entire lead qualification funnel with n8n and OpenAI. We now close deals we used to miss completely.",
    name: "Michael Turner",
    role: "CEO, Evolvens",
  },
  {
    quote: "Communication was clear from day one, timelines were realistic, and the final product exceeded what we asked for.",
    name: "Priya Nair",
    role: "Product Manager, NimbusLabs",
  },
  {
    quote: "Fast, reliable, and genuinely invested in our success. Junaid feels like an in-house engineer, not a freelancer.",
    name: "Omar Farouk",
    role: "Founder, PulseFit",
  },
];

const Card = ({ t, index }) => {
  const initials = t.name.split(" ").map((n) => n[0]).join("");
  const featured = !!t.featured;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: (index % 3) * 0.08 }}
      className={`group relative mb-6 break-inside-avoid flex flex-col gap-5 rounded-3xl p-7 overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
        featured
          ? "bg-accent text-white shadow-xl shadow-accent/25 hover:shadow-2xl hover:shadow-accent/30"
          : "border border-gray-200 bg-white hover:border-accent/30 hover:shadow-xl hover:shadow-accent/10"
      }`}
    >
      <svg
        viewBox="0 0 32 32"
        className={`absolute -top-2 -right-2 w-24 h-24 transition-colors duration-300 ${
          featured ? "text-white/10" : "text-accent/[0.06] group-hover:text-accent/10"
        }`}
        fill="currentColor"
      >
        <path d="M10 8C5.6 8 2 11.6 2 16s3.6 8 8 8c.7 0 1-.6.6-1.2C9 20.7 8 18.5 8 16c0-3.3 2.7-6 6-6 .6 0 1-.4 1-1V9c0-.6-.4-1-1-1h-4Zm14 0c-4.4 0-8 3.6-8 8s3.6 8 8 8c.7 0 1-.6.6-1.2-1.6-2.1-2.6-4.3-2.6-6.8 0-3.3 2.7-6 6-6 .6 0 1-.4 1-1V9c0-.6-.4-1-1-1h-4Z" />
      </svg>

      {featured && (
        <span className="relative w-max flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold tracking-wide uppercase">
          <HiSparkles className="text-xs" />
          Client favorite
        </span>
      )}

      <div className={`relative flex gap-1 text-sm ${featured ? "text-white" : "text-accent"}`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <FaStar key={i} />
        ))}
      </div>

      <p className={`relative text-[15px]/[25px] ${featured ? "text-white/95" : "text-gray-700"}`}>
        &ldquo;{t.quote}&rdquo;
      </p>

      <div className={`relative flex items-center gap-3 mt-auto pt-5 border-t ${featured ? "border-white/20" : "border-gray-100"}`}>
        <Avatar initials={initials} index={index} light={featured} />
        <div className="leading-tight">
          <p className={`font-semibold text-sm ${featured ? "text-white" : "text-gray-900"}`}>{t.name}</p>
          <p className={`text-[12.5px] ${featured ? "text-white/70" : "text-gray-500"}`}>{t.role}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative bg-gray-50/60 py-24 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col gap-12">

        <div className="flex flex-col items-center text-center gap-5">
          <SectionLabel>Client Testimonials</SectionLabel>
          <h2 className="text-[34px]/[42px] md:text-[48px]/[56px] font-bold text-gray-900 max-w-2xl">
            Trusted by founders <span className="text-accent">who need results</span>
          </h2>
          <p className="text-[17px]/[28px] text-gray-600 max-w-xl">
            A few words from the people I&rsquo;ve built for — before you take my word for it.
          </p>

          <div className="flex items-center gap-2 mt-1 rounded-full border border-accent/20 bg-accent/5 px-4 py-2">
            <div className="flex text-accent text-xs">
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <span className="text-sm font-semibold text-gray-900">4.9/5</span>
            <span className="text-sm text-gray-500">average across 30+ projects</span>
          </div>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
          {testimonials.map((t, index) => (
            <Card key={t.name} t={t} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
