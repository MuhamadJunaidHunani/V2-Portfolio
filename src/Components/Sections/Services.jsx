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
      "Documented so your team isn&rsquo;t dependent on me",
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

const Services = () => {
  const [openIndex, setOpenIndex] = useState(null);

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
          {services.map((service, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={service.name}
                className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-shadow duration-300"
              >
                <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-accent/10 text-accent text-2xl mb-5">
                  <service.icon />
                </span>

                <span className="w-max text-[12px] font-semibold text-accent bg-accent/10 px-2.5 py-1 rounded-md mb-3">
                  {service.stat}
                </span>

                <h3 className="font-bold text-xl text-gray-900 leading-snug mb-2">{service.headline}</h3>
                <p className="text-[14.5px]/[23px] text-gray-600 mb-4">{service.description}</p>

                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="mt-auto flex items-center justify-between gap-2 text-[14px] font-semibold text-gray-900 border-t border-gray-100 pt-4 cursor-pointer"
                >
                  What&rsquo;s included
                  <HiChevronDown className={`text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <ul className="flex flex-col gap-2.5 pt-4">
                        {service.included.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-[13.5px]/[20px] text-gray-600">
                            <HiCheck className="text-accent text-base shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
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
