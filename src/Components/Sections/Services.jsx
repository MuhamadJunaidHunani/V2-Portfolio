import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineGlobeAlt, HiOutlineCpuChip, HiOutlineChatBubbleLeftRight, HiCheck, HiChevronDown } from "react-icons/hi2";
import SectionLabel from "../UI/SectionLabel";

const services = [
  {
    icon: HiOutlineGlobeAlt,
    name: "Website Development",
    headline: "A site that loads fast and converts faster",
    description: "Modern, responsive builds — from landing pages to full product sites — with performance and SEO handled from day one.",
    stat: "Launch in 2–3 weeks",
    included: [
      "Responsive design for every screen size",
      "SEO-ready structure & fast load times",
      "CMS or custom backend, your choice",
      "30 days of post-launch support",
    ],
  },
  {
    icon: HiOutlineCpuChip,
    name: "AI Automation",
    headline: "Give your team back 10+ hours a week",
    description: "Custom workflows that connect your tools and handle the repetitive stuff — quotes, follow-ups, data entry — automatically.",
    stat: "Save 10+ hrs / week",
    included: [
      "Connects the tools you already use (CRM, email, sheets)",
      "Built with n8n, OpenAI, or custom scripts",
      "Error handling & monitoring included",
      "Documented so your team isn't dependent on me",
    ],
  },
  {
    icon: HiOutlineChatBubbleLeftRight,
    name: "Chatbot Development",
    headline: "Never miss a lead again, day or night",
    description: "AI chatbots trained on your business that qualify leads, answer FAQs, and book meetings — around the clock.",
    stat: "Live 24/7",
    included: [
      "Trained on your docs, FAQs, and tone of voice",
      "Books meetings straight into your calendar",
      "Handoff to a human when it matters",
      "Works on your site, WhatsApp, or Instagram",
    ],
  },
];

const PanelBackdrop = ({ active }) => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <motion.div
      animate={{ opacity: active ? 1 : 0, scale: active ? 1 : 0.7 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-white/20 blur-3xl"
    />
    <motion.div
      animate={{ opacity: active ? 1 : 0, scale: active ? 1 : 0.7 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      className="absolute -bottom-28 -left-16 w-64 h-64 rounded-full bg-purple-900/30 blur-3xl"
    />
  </div>
);

const Services = () => {
  const [active, setActive] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(0);

  return (
    <section id="services" className="relative bg-gray-50/60 py-24 md:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col gap-12">

        <div className="flex flex-col items-center text-center gap-5">
          <SectionLabel>What I Do</SectionLabel>
          <h2 className="text-[32px]/[40px] md:text-[42px]/[50px] font-bold text-gray-900 max-w-2xl">
            Experienced in a wide <span className="text-accent">range of services</span>
          </h2>
          <p className="text-[17px]/[28px] text-gray-600 max-w-xl">
            One developer, three specialties. Click a panel to open it up.
          </p>
        </div>

        {/* desktop: expanding panels */}
        <div className="hidden md:flex gap-4 h-[520px]">
          {services.map((service, index) => {
            const isActive = active === index;
            return (
              <motion.div
                key={service.name}
                onClick={() => setActive(index)}
                onMouseEnter={() => setActive(index)}
                animate={{ flexGrow: isActive ? 3.6 : 1 }}
                transition={{ type: "spring", stiffness: 210, damping: 28 }}
                className={`relative flex-1 basis-0 min-w-0 rounded-[28px] overflow-hidden cursor-pointer transition-colors duration-500 ${
                  isActive
                    ? "bg-gradient-to-br from-accent via-[#9333ea] to-[#5b21b6] text-white"
                    : "bg-white border border-gray-200 text-gray-900"
                }`}
              >
                <PanelBackdrop active={isActive} />

                <span
                  className={`absolute top-6 right-7 font-black leading-none select-none transition-colors duration-500 ${
                    isActive ? "text-white/10 text-[110px]" : "text-gray-900/[0.04] text-[90px]"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="relative h-full flex flex-col p-7">
                  <span
                    className={`flex items-center justify-center w-12 h-12 rounded-2xl text-2xl shrink-0 transition-colors duration-500 ${
                      isActive ? "bg-white/15 text-white" : "bg-accent/10 text-accent"
                    }`}
                  >
                    <service.icon />
                  </span>

                  <AnimatePresence mode="wait">
                    {isActive ? (
                      <motion.div
                        key="open"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.35, delay: 0.1 }}
                        className="flex flex-col gap-4 mt-auto"
                      >
                        <span className="w-max text-[12px] font-semibold text-white bg-white/15 px-2.5 py-1 rounded-md">
                          {service.stat}
                        </span>
                        <h3 className="font-bold text-2xl leading-snug">{service.headline}</h3>
                        <p className="text-[14.5px]/[23px] text-white/80 max-w-sm">{service.description}</p>
                        <ul className="flex flex-col gap-2 pt-3 border-t border-white/15">
                          {service.included.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-[13.5px]/[20px] text-white/85">
                              <HiCheck className="text-white text-base shrink-0 mt-0.5" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="closed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="mt-auto flex items-center gap-3"
                      >
                        <span
                          className="font-bold text-lg text-gray-900 whitespace-nowrap"
                          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                        >
                          {service.name}
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* mobile: vertical accordion */}
        <div className="md:hidden flex flex-col gap-4">
          {services.map((service, index) => {
            const isOpen = mobileOpen === index;
            return (
              <div
                key={service.name}
                className={`relative rounded-[24px] overflow-hidden transition-colors duration-500 ${
                  isOpen
                    ? "bg-gradient-to-br from-accent via-[#9333ea] to-[#5b21b6] text-white"
                    : "bg-white border border-gray-200 text-gray-900"
                }`}
              >
                <PanelBackdrop active={isOpen} />
                <span
                  className={`absolute top-4 right-5 font-black leading-none select-none text-[70px] transition-colors duration-500 ${
                    isOpen ? "text-white/10" : "text-gray-900/[0.04]"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <button
                  onClick={() => setMobileOpen(isOpen ? null : index)}
                  className="relative w-full flex items-center gap-3 p-6 text-left"
                >
                  <span
                    className={`flex items-center justify-center w-11 h-11 rounded-2xl text-xl shrink-0 transition-colors duration-500 ${
                      isOpen ? "bg-white/15 text-white" : "bg-accent/10 text-accent"
                    }`}
                  >
                    <service.icon />
                  </span>
                  <span className="font-bold text-lg flex-1">{service.name}</span>
                  <HiChevronDown className={`shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""} ${isOpen ? "text-white" : "text-gray-400"}`} />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="relative overflow-hidden"
                    >
                      <div className="flex flex-col gap-4 px-6 pb-6">
                        <span className="w-max text-[12px] font-semibold text-white bg-white/15 px-2.5 py-1 rounded-md">
                          {service.stat}
                        </span>
                        <h3 className="font-bold text-xl leading-snug">{service.headline}</h3>
                        <p className="text-[14.5px]/[23px] text-white/80">{service.description}</p>
                        <ul className="flex flex-col gap-2 pt-3 border-t border-white/15">
                          {service.included.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-[13.5px]/[20px] text-white/85">
                              <HiCheck className="text-white text-base shrink-0 mt-0.5" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;
