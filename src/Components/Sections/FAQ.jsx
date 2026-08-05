import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiPlus } from "react-icons/hi";
import SectionLabel from "../UI/SectionLabel";

const faqs = [
  {
    q: "What kind of projects do you take on?",
    a: "Mostly web apps, AI automations, and chatbots for founders and small teams — anything from a landing page to a full product build or an internal automation that saves your team hours every week.",
  },
  {
    q: "Do I work with you directly, or a team?",
    a: "Directly with me, start to finish. No account managers, no hand-offs. I scope it, build it, and I'm the one you message when something needs to change.",
  },
  {
    q: "How much does a project usually cost?",
    a: "It depends on scope — a landing page and a full AI-powered platform aren't the same investment. Book a call and I'll give you a clear, honest estimate before any work begins.",
  },
  {
    q: "How long does a typical project take?",
    a: "Small builds (landing pages, single automations) usually take 1-2 weeks. Larger products or multi-feature apps run 4-8 weeks, broken into visible milestones so you always know where things stand.",
  },
  {
    q: "Do you offer support after launch?",
    a: "Yes. Every project includes a post-launch window for fixes, and most clients keep me on retainer for ongoing features and improvements after that.",
  },
  {
    q: "What's the best way to get started?",
    a: "Book a free 30-minute call. We'll talk through what you need, I'll tell you honestly if I'm the right fit, and if so, you'll get a proposal within a couple of days.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="relative bg-white py-24 md:py-28">
      <div className="max-w-3xl mx-auto px-6 md:px-10 flex flex-col gap-12">

        <div className="flex flex-col items-center text-center gap-5">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="text-[34px]/[42px] md:text-[48px]/[56px] font-bold text-gray-900 max-w-xl">
            Questions you might <span className="text-accent">be thinking</span>
          </h2>
        </div>

        <div className="flex flex-col divide-y divide-gray-200 border-t border-b border-gray-200">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.q}>
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left cursor-pointer"
                >
                  <span className="font-semibold text-[16px] md:text-[17px] text-gray-900">{faq.q}</span>
                  <span
                    className={`flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 text-accent shrink-0 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                  >
                    <HiPlus />
                  </span>
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
                      <p className="text-[15px]/[26px] text-gray-600 pb-5 pr-10">{faq.a}</p>
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

export default FAQ;
