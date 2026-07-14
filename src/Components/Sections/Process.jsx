import React from "react";
import { motion } from "framer-motion";
import SectionLabel from "../UI/SectionLabel";

const icons = {
  discovery: (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
      <path d="M4 5h16v10H8l-4 4V5Z" stroke="#b744d8" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M8 9h8M8 12h5" stroke="#b744d8" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  ),
  plan: (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
      <path d="M4 20V6a2 2 0 0 1 2-2h9l5 5v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" stroke="#b744d8" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M15 4v5h5" stroke="#b744d8" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M8 13h8M8 17h5" stroke="#b744d8" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  ),
  build: (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
      <path d="M9 8 4.5 12 9 16M15 8l4.5 4-4.5 4" stroke="#b744d8" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 5l-2 14" stroke="#b744d8" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  ),
  launch: (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
      <path d="M12 3c2.5 2 4 5.2 4 8.5 0 2-1 4-2 5.2l-2 2.3-2-2.3c-1-1.2-2-3.2-2-5.2 0-3.3 1.5-6.5 4-8.5Z" stroke="#b744d8" strokeWidth="1.7" strokeLinejoin="round" />
      <circle cx="12" cy="10.5" r="1.6" stroke="#b744d8" strokeWidth="1.7" />
      <path d="M8.5 16.5 6 21l3.5-1.5M15.5 16.5 18 21l-3.5-1.5" stroke="#b744d8" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

const steps = [
  {
    icon: icons.discovery,
    title: "Discovery Call",
    description: "We hop on a quick call to understand your goals, users, and constraints — no jargon, just a real conversation.",
  },
  {
    icon: icons.plan,
    title: "Plan & Prototype",
    description: "I map out the architecture and share a clickable prototype before a single line of production code is written.",
  },
  {
    icon: icons.build,
    title: "Build & Iterate",
    description: "I build in focused sprints and share progress often, so you're always in the loop and can steer early.",
  },
  {
    icon: icons.launch,
    title: "Launch & Support",
    description: "I ship it, monitor how it performs, and stay on call for fixes, tweaks, and the next round of features.",
  },
];

const Process = () => {
  return (
    <section id="process" className="relative bg-white py-24 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col gap-16">

        <div className="flex flex-col items-center text-center gap-5">
          <SectionLabel>How I Work</SectionLabel>
          <h2 className="text-[32px]/[40px] md:text-[42px]/[50px] font-bold text-gray-900 max-w-2xl">
            A simple process, <span className="text-accent">built on clarity</span>
          </h2>
          <p className="text-[17px]/[28px] text-gray-600 max-w-xl">
            No layers of process, no ambiguity — just a clear path from idea to something live in production.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-10 md:gap-6 relative">
          <div className="hidden md:block absolute top-6 left-[12.5%] right-[12.5%] h-px bg-gray-200"></div>

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
              className="relative flex flex-col gap-4"
            >
              <div className="relative z-10 flex items-center gap-3">
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-white border-2 border-accent/30 text-accent font-bold text-lg">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="flex flex-col gap-2 rounded-2xl border border-gray-200 bg-gray-50/70 p-5">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent/10 mb-1">
                  {step.icon}
                </span>
                <h3 className="font-bold text-lg text-gray-900">{step.title}</h3>
                <p className="text-[14.5px]/[23px] text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Process;
