import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HiCheck } from "react-icons/hi2";
import SectionLabel from "../UI/SectionLabel";

const icons = {
  discovery: (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
      <path d="M4 5h16v10H8l-4 4V5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M8 9h8M8 12h5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  ),
  plan: (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
      <path d="M4 20V6a2 2 0 0 1 2-2h9l5 5v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M15 4v5h5" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M8 13h8M8 17h5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  ),
  build: (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
      <path d="M9 8 4.5 12 9 16M15 8l4.5 4-4.5 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 5l-2 14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  ),
  launch: (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
      <path d="M12 3c2.5 2 4 5.2 4 8.5 0 2-1 4-2 5.2l-2 2.3-2-2.3c-1-1.2-2-3.2-2-5.2 0-3.3 1.5-6.5 4-8.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <circle cx="12" cy="10.5" r="1.6" stroke="currentColor" strokeWidth="1.7" />
      <path d="M8.5 16.5 6 21l3.5-1.5M15.5 16.5 18 21l-3.5-1.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

const steps = [
  {
    icon: icons.discovery,
    title: "Discovery Call",
    description: "We talk it through on a quick call — your goal, your users, no jargon.",
  },
  {
    icon: icons.plan,
    title: "Plan & Prototype",
    description: "I map it out and show you a clickable preview before any real code.",
  },
  {
    icon: icons.build,
    title: "Build & Iterate",
    description: "I build in small pieces and share progress often, so you stay in the loop.",
  },
  {
    icon: icons.launch,
    title: "Launch & Support",
    description: "I ship it live, watch how it performs, and stick around for fixes.",
  },
];

const STEP_DURATION = 3200;

const Process = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % steps.length);
    }, STEP_DURATION);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="process" className="relative bg-white py-24 md:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col gap-16">

        <div className="flex flex-col items-center text-center gap-5">
          <SectionLabel>How I Work</SectionLabel>
          <h2 className="text-[32px]/[40px] md:text-[42px]/[50px] font-bold text-gray-900 max-w-2xl">
            A simple process, <span className="text-accent">built on clarity</span>
          </h2>
          <p className="text-[17px]/[28px] text-gray-600 max-w-xl">
            Four steps, no confusion. Here's exactly what happens when we work together.
          </p>
        </div>

        {/* desktop / tablet: horizontal timeline, all steps visible */}
        <div className="hidden md:block relative">
          <div className="absolute top-7 left-0 right-0 grid grid-cols-4 pointer-events-none">
            {steps.map((_, index) => (
              index < steps.length - 1 && (
                <div key={index} className="relative col-span-1">
                  <div className="absolute top-0 left-1/2 w-full h-[2px] bg-gray-200" />
                  <motion.div
                    className="absolute top-0 left-1/2 h-[2px] bg-accent origin-left"
                    initial={false}
                    animate={{ scaleX: active > index ? 1 : 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    style={{ width: "100%" }}
                  />
                </div>
              )
            ))}
          </div>

          <div className="grid grid-cols-4 gap-6">
            {steps.map((step, index) => {
              const isActive = index === active;
              const isDone = index < active;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex flex-col items-center text-center gap-4 px-2"
                >
                  <motion.span
                    animate={{
                      scale: isActive ? 1.12 : 1,
                      borderColor: isActive || isDone ? "var(--accent)" : "#e5e7eb",
                      backgroundColor: isActive ? "var(--accent)" : "#ffffff",
                      color: isActive ? "#ffffff" : "var(--accent)",
                    }}
                    transition={{ duration: 0.4 }}
                    className="relative z-10 flex items-center justify-center w-14 h-14 rounded-2xl border-2 shadow-sm"
                  >
                    {isDone ? <HiCheck className="w-6 h-6" /> : step.icon}
                    {isActive && (
                      <motion.span
                        className="absolute inset-0 rounded-2xl border-2 border-accent"
                        initial={{ opacity: 0.6, scale: 1 }}
                        animate={{ opacity: 0, scale: 1.4 }}
                        transition={{ duration: 1.4, repeat: Infinity, ease: "easeOut" }}
                      />
                    )}
                  </motion.span>

                  <span className={`text-xs font-bold tracking-wide ${isActive ? "text-accent" : "text-gray-400"}`}>
                    STEP {index + 1}
                  </span>
                  <h3 className="font-bold text-lg text-gray-900">{step.title}</h3>
                  <p className="text-[14.5px]/[24px] text-gray-600">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* mobile: vertical timeline, all steps visible */}
        <div className="md:hidden flex flex-col">
          {steps.map((step, index) => {
            const isActive = index === active;
            const isDone = index < active;
            const isLast = index === steps.length - 1;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="relative flex gap-4 pb-8 last:pb-0"
              >
                {!isLast && (
                  <div className="absolute left-6 top-12 bottom-0 w-[2px] bg-gray-200 overflow-hidden">
                    <motion.div
                      className="w-full bg-accent origin-top"
                      style={{ height: "100%" }}
                      initial={false}
                      animate={{ scaleY: isDone ? 1 : 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    />
                  </div>
                )}

                <motion.span
                  animate={{
                    borderColor: isActive || isDone ? "var(--accent)" : "#e5e7eb",
                    backgroundColor: isActive ? "var(--accent)" : "#ffffff",
                    color: isActive ? "#ffffff" : "var(--accent)",
                  }}
                  transition={{ duration: 0.4 }}
                  className="relative z-10 shrink-0 flex items-center justify-center w-12 h-12 rounded-2xl border-2 shadow-sm"
                >
                  {isDone ? <HiCheck className="w-5 h-5" /> : step.icon}
                  {isActive && (
                    <motion.span
                      className="absolute inset-0 rounded-2xl border-2 border-accent"
                      initial={{ opacity: 0.6, scale: 1 }}
                      animate={{ opacity: 0, scale: 1.4 }}
                      transition={{ duration: 1.4, repeat: Infinity, ease: "easeOut" }}
                    />
                  )}
                </motion.span>

                <div className="flex flex-col gap-1 pt-1.5">
                  <span className={`text-xs font-bold tracking-wide ${isActive ? "text-accent" : "text-gray-400"}`}>
                    STEP {index + 1}
                  </span>
                  <h3 className="font-bold text-lg text-gray-900">{step.title}</h3>
                  <p className="text-[14.5px]/[24px] text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* progress dots */}
        <div className="flex items-center justify-center gap-2">
          {steps.map((step, index) => (
            <button
              key={step.title}
              onClick={() => setActive(index)}
              aria-label={`Highlight step ${index + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === active ? "w-7 bg-accent" : "w-2 bg-gray-200 hover:bg-gray-300"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Process;
