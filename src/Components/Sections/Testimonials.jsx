import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import SectionLabel from "../UI/SectionLabel";

const palette = ["#b744d8", "#7c3aed", "#c026d3", "#9333ea", "#a855f7", "#d946ef"];

const Avatar = ({ initials, index }) => {
  const color = palette[index % palette.length];
  return (
    <svg viewBox="0 0 48 48" className="w-11 h-11 shrink-0">
      <circle cx="24" cy="24" r="24" fill={color} fillOpacity="0.14" />
      <circle cx="24" cy="24" r="23" fill="none" stroke={color} strokeOpacity="0.3" />
      <text x="24" y="30" textAnchor="middle" fontSize="16" fontWeight="700" fill={color}>
        {initials}
      </text>
    </svg>
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
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => {
            const initials = t.name.split(" ").map((n) => n[0]).join("");
            return (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: (index % 3) * 0.08 }}
                className="flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-6"
              >
                <div className="flex gap-1 text-accent text-sm">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                <p className="text-[15px]/[25px] text-gray-700">&ldquo;{t.quote}&rdquo;</p>

                <div className="flex items-center gap-3 mt-auto pt-2 border-t border-gray-100">
                  <Avatar initials={initials} index={index} />
                  <div className="leading-tight">
                    <p className="font-semibold text-sm text-gray-900">{t.name}</p>
                    <p className="text-[12.5px] text-gray-500">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
