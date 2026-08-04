import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { HiCheck, HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi2";
import SectionLabel from "../UI/SectionLabel";

const icons = {
  discovery: (
    <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
      <path d="M4 5h16v10H8l-4 4V5Z" stroke="#b744d8" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M8 9h8M8 12h5" stroke="#b744d8" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  ),
  plan: (
    <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
      <path d="M4 20V6a2 2 0 0 1 2-2h9l5 5v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" stroke="#b744d8" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M15 4v5h5" stroke="#b744d8" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M8 13h8M8 17h5" stroke="#b744d8" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  ),
  build: (
    <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
      <path d="M9 8 4.5 12 9 16M15 8l4.5 4-4.5 4" stroke="#b744d8" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 5l-2 14" stroke="#b744d8" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  ),
  launch: (
    <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
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
    highlights: ["30-45 min video call", "No obligation, no sales pitch"],
  },
  {
    icon: icons.plan,
    title: "Plan & Prototype",
    description: "I map out the architecture and share a clickable prototype before a single line of production code is written.",
    highlights: ["Clickable Figma prototype", "Clear scope & timeline upfront"],
  },
  {
    icon: icons.build,
    title: "Build & Iterate",
    description: "I build in focused sprints and share progress often, so you're always in the loop and can steer early.",
    highlights: ["Weekly progress updates", "Request changes anytime"],
  },
  {
    icon: icons.launch,
    title: "Launch & Support",
    description: "I ship it, monitor how it performs, and stay on call for fixes, tweaks, and the next round of features.",
    highlights: ["Deployed straight to production", "30 days of free bug fixes"],
  },
];

const SWIPE_THRESHOLD = 60;

const Process = () => {
  const containerRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new ResizeObserver((entries) => {
      setWidth(entries[0].contentRect.width);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const goTo = (index) => setActive(Math.min(Math.max(index, 0), steps.length - 1));

  const handleDragEnd = (_, info) => {
    if (info.offset.x < -SWIPE_THRESHOLD) goTo(active + 1);
    else if (info.offset.x > SWIPE_THRESHOLD) goTo(active - 1);
  };

  return (
    <section id="process" className="relative bg-white py-24 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col gap-12">

        <div className="flex flex-col items-center text-center gap-5">
          <SectionLabel>How I Work</SectionLabel>
          <h2 className="text-[32px]/[40px] md:text-[42px]/[50px] font-bold text-gray-900 max-w-2xl">
            A simple process, <span className="text-accent">built on clarity</span>
          </h2>
          <p className="text-[17px]/[28px] text-gray-600 max-w-xl">
            No layers of process, no ambiguity — drag or click through to see how it works.
          </p>
        </div>

        <div className="max-w-3xl mx-auto w-full flex flex-col gap-6">
          <div ref={containerRef} className="relative overflow-hidden rounded-3xl border border-gray-200 bg-gray-50/60">
            <motion.div
              className="flex cursor-grab active:cursor-grabbing"
              drag="x"
              dragConstraints={{ left: -(width * (steps.length - 1)), right: 0 }}
              dragElastic={0.12}
              onDragEnd={handleDragEnd}
              animate={{ x: -active * width }}
              transition={{ type: "spring", stiffness: 300, damping: 32 }}
            >
              {steps.map((step, index) => (
                <div key={step.title} className="shrink-0 p-8 md:p-12" style={{ width: width || "100%" }}>
                  <div className="relative flex flex-col gap-4 select-none">
                    <span className="absolute -top-4 -left-1 text-[110px] leading-none font-bold text-accent/[0.06] select-none">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="relative flex items-center justify-center w-14 h-14 rounded-2xl bg-white border border-accent/20">
                      {step.icon}
                    </span>

                    <h3 className="relative font-bold text-2xl text-gray-900">{step.title}</h3>
                    <p className="relative text-[15.5px]/[26px] text-gray-600 max-w-md">{step.description}</p>

                    <div className="relative flex flex-col gap-2 mt-1">
                      {step.highlights.map((h) => (
                        <div key={h} className="flex items-center gap-2 text-[14px] text-gray-700">
                          <HiCheck className="text-accent text-base shrink-0" />
                          {h}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* controls */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => goTo(active - 1)}
              disabled={active === 0}
              className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 text-gray-500 hover:text-gray-900 hover:border-gray-300 disabled:opacity-30 disabled:pointer-events-none transition-colors"
              aria-label="Previous step"
            >
              <HiOutlineArrowLeft />
            </button>

            <div className="flex items-center gap-2">
              {steps.map((step, index) => (
                <button
                  key={step.title}
                  onClick={() => goTo(index)}
                  aria-label={`Go to step ${index + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === active ? "w-7 bg-accent" : "w-2 bg-gray-200 hover:bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => goTo(active + 1)}
              disabled={active === steps.length - 1}
              className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 text-gray-500 hover:text-gray-900 hover:border-gray-300 disabled:opacity-30 disabled:pointer-events-none transition-colors"
              aria-label="Next step"
            >
              <HiOutlineArrowRight />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Process;
