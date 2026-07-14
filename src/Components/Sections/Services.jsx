import React from "react";
import { motion } from "framer-motion";
import SectionLabel from "../UI/SectionLabel";

const WebDevIllustration = () => (
  <svg viewBox="0 0 280 180" fill="none" className="w-full h-full">
    <rect x="20" y="16" width="240" height="148" rx="10" fill="#b744d8" fillOpacity="0.06" stroke="#b744d8" strokeOpacity="0.25" />
    <rect x="20" y="16" width="240" height="26" rx="10" fill="#b744d8" fillOpacity="0.1" />
    <circle cx="34" cy="29" r="3" fill="#b744d8" fillOpacity="0.5" />
    <circle cx="44" cy="29" r="3" fill="#b744d8" fillOpacity="0.35" />
    <circle cx="54" cy="29" r="3" fill="#b744d8" fillOpacity="0.2" />
    <rect x="36" y="58" width="90" height="10" rx="5" fill="#b744d8" fillOpacity="0.45" />
    <rect x="36" y="76" width="140" height="7" rx="3.5" fill="#b744d8" fillOpacity="0.2" />
    <rect x="36" y="88" width="120" height="7" rx="3.5" fill="#b744d8" fillOpacity="0.2" />
    <rect x="36" y="106" width="70" height="24" rx="7" fill="#b744d8" fillOpacity="0.55" />
    <rect x="160" y="58" width="84" height="72" rx="10" fill="#b744d8" fillOpacity="0.14" stroke="#b744d8" strokeOpacity="0.3" />
    <path d="M172 108L188 90L200 100L222 74" stroke="#b744d8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fillOpacity="0" />
    <circle cx="222" cy="74" r="3.5" fill="#b744d8" />
  </svg>
);

const AiAutomationIllustration = () => (
  <svg viewBox="0 0 280 180" fill="none" className="w-full h-full">
    <rect x="20" y="16" width="240" height="148" rx="10" fill="#b744d8" fillOpacity="0.06" stroke="#b744d8" strokeOpacity="0.25" />
    <circle cx="140" cy="90" r="26" fill="#b744d8" fillOpacity="0.18" stroke="#b744d8" strokeOpacity="0.4" />
    <path d="M140 78v24M129 90h22" stroke="#b744d8" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="60" cy="52" r="10" fill="#b744d8" fillOpacity="0.14" stroke="#b744d8" strokeOpacity="0.3" />
    <circle cx="220" cy="52" r="10" fill="#b744d8" fillOpacity="0.14" stroke="#b744d8" strokeOpacity="0.3" />
    <circle cx="60" cy="128" r="10" fill="#b744d8" fillOpacity="0.14" stroke="#b744d8" strokeOpacity="0.3" />
    <circle cx="220" cy="128" r="10" fill="#b744d8" fillOpacity="0.14" stroke="#b744d8" strokeOpacity="0.3" />
    <path d="M69 56L118 78M69 124L118 102M211 56L162 78M211 124L162 102" stroke="#b744d8" strokeWidth="1.5" strokeDasharray="4 4" strokeOpacity="0.5" />
  </svg>
);

const ChatbotIllustration = () => (
  <svg viewBox="0 0 280 180" fill="none" className="w-full h-full">
    <rect x="20" y="16" width="240" height="148" rx="10" fill="#b744d8" fillOpacity="0.06" stroke="#b744d8" strokeOpacity="0.25" />
    <rect x="40" y="38" width="130" height="42" rx="14" fill="#b744d8" fillOpacity="0.12" stroke="#b744d8" strokeOpacity="0.3" />
    <rect x="54" y="52" width="70" height="6" rx="3" fill="#b744d8" fillOpacity="0.4" />
    <rect x="54" y="63" width="46" height="6" rx="3" fill="#b744d8" fillOpacity="0.25" />
    <rect x="110" y="92" width="130" height="42" rx="14" fill="#b744d8" fillOpacity="0.55" />
    <circle cx="130" cy="113" r="3.5" fill="white" />
    <circle cx="142" cy="113" r="3.5" fill="white" fillOpacity="0.7" />
    <circle cx="154" cy="113" r="3.5" fill="white" fillOpacity="0.45" />
  </svg>
);

const services = [
  {
    name: "Website Development",
    description: "Fast, responsive, and pixel-perfect websites built with modern stacks — from landing pages to full web apps.",
    Illustration: WebDevIllustration,
  },
  {
    name: "AI Automation",
    description: "Custom workflows and agents that connect your tools, remove manual busywork, and run while you focus on growth.",
    Illustration: AiAutomationIllustration,
  },
  {
    name: "Chatbot Development",
    description: "Conversational AI chatbots that qualify leads, answer support questions, and book calls — around the clock.",
    Illustration: ChatbotIllustration,
  },
];

const Services = () => {
  return (
    <section id="services" className="relative bg-gray-50/60 py-24 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col gap-12">

        <div className="flex flex-col items-center text-center gap-5">
          <SectionLabel>What I Do</SectionLabel>
          <h2 className="text-[32px]/[40px] md:text-[42px]/[50px] font-bold text-gray-900 max-w-2xl">
            Experienced in a wide <span className="text-accent">range of services</span>
          </h2>
          <p className="text-[17px]/[28px] text-gray-600 max-w-xl">
            One developer, three specialties — so every part of your product speaks the same language.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
              className="flex flex-col rounded-2xl border border-gray-200 bg-white overflow-hidden hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-[190px] bg-gradient-to-b from-accent/5 to-transparent">
                <service.Illustration />
              </div>
              <div className="flex flex-col gap-2 p-6 border-t border-gray-100">
                <h3 className="font-bold text-xl text-gray-900">{service.name}</h3>
                <p className="text-[15px]/[24px] text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
