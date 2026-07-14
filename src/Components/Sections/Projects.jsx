import React from "react";
import { motion } from "framer-motion";
import { RxArrowTopRight } from "react-icons/rx";
import LaptopWebsiteMockup from "../UI/LaptopWebsiteMockup";
import SectionLabel from "../UI/SectionLabel";

const DashboardMockup = () => (
  <svg viewBox="0 0 400 260" fill="none" className="w-full h-full">
    <rect x="0" y="0" width="400" height="260" fill="#fbf7fc" />
    <rect x="0" y="0" width="96" height="260" fill="#b744d8" fillOpacity="0.08" />
    <rect x="20" y="24" width="56" height="8" rx="4" fill="#b744d8" fillOpacity="0.5" />
    <rect x="20" y="52" width="40" height="6" rx="3" fill="#b744d8" fillOpacity="0.3" />
    <rect x="20" y="70" width="48" height="6" rx="3" fill="#b744d8" fillOpacity="0.3" />
    <rect x="20" y="88" width="36" height="6" rx="3" fill="#b744d8" fillOpacity="0.3" />

    <rect x="120" y="24" width="90" height="50" rx="10" fill="white" stroke="#b744d8" strokeOpacity="0.2" />
    <rect x="134" y="38" width="40" height="6" rx="3" fill="#b744d8" fillOpacity="0.35" />
    <rect x="134" y="52" width="26" height="10" rx="4" fill="#b744d8" fillOpacity="0.6" />

    <rect x="222" y="24" width="90" height="50" rx="10" fill="white" stroke="#b744d8" strokeOpacity="0.2" />
    <rect x="236" y="38" width="40" height="6" rx="3" fill="#b744d8" fillOpacity="0.35" />
    <rect x="236" y="52" width="26" height="10" rx="4" fill="#b744d8" fillOpacity="0.6" />

    <rect x="120" y="88" width="192" height="130" rx="10" fill="white" stroke="#b744d8" strokeOpacity="0.2" />
    <polyline points="136,190 160,160 184,175 208,130 232,150 256,110 280,140 296,120" fill="none" stroke="#b744d8" strokeOpacity="0.6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="136" y="198" width="160" height="4" rx="2" fill="#b744d8" fillOpacity="0.15" />
  </svg>
);

const ChatWidgetMockup = () => (
  <svg viewBox="0 0 400 260" fill="none" className="w-full h-full">
    <rect x="0" y="0" width="400" height="260" fill="#fbf7fc" />
    <rect x="40" y="30" width="200" height="46" rx="16" fill="white" stroke="#b744d8" strokeOpacity="0.25" />
    <rect x="58" y="46" width="90" height="6" rx="3" fill="#b744d8" fillOpacity="0.4" />
    <rect x="58" y="58" width="60" height="6" rx="3" fill="#b744d8" fillOpacity="0.25" />

    <rect x="120" y="90" width="220" height="46" rx="16" fill="#b744d8" fillOpacity="0.85" />
    <circle cx="144" cy="113" r="3.5" fill="white" />
    <circle cx="156" cy="113" r="3.5" fill="white" fillOpacity="0.7" />
    <circle cx="168" cy="113" r="3.5" fill="white" fillOpacity="0.45" />

    <rect x="40" y="150" width="170" height="46" rx="16" fill="white" stroke="#b744d8" strokeOpacity="0.25" />
    <rect x="58" y="166" width="70" height="6" rx="3" fill="#b744d8" fillOpacity="0.4" />
    <rect x="58" y="178" width="100" height="6" rx="3" fill="#b744d8" fillOpacity="0.25" />

    <rect x="40" y="212" width="320" height="30" rx="15" fill="white" stroke="#b744d8" strokeOpacity="0.3" />
    <circle cx="342" cy="227" r="10" fill="#b744d8" />
    <path d="M338 227h8M342 223v8" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const MobileMockup = () => (
  <svg viewBox="0 0 400 260" fill="none" className="w-full h-full">
    <rect x="0" y="0" width="400" height="260" fill="#fbf7fc" />
    <rect x="150" y="14" width="100" height="232" rx="20" fill="white" stroke="#b744d8" strokeOpacity="0.3" strokeWidth="2" />
    <rect x="162" y="30" width="76" height="14" rx="4" fill="#b744d8" fillOpacity="0.15" />
    <circle cx="200" cy="90" r="30" fill="none" stroke="#b744d8" strokeOpacity="0.25" strokeWidth="8" />
    <circle cx="200" cy="90" r="30" fill="none" stroke="#b744d8" strokeOpacity="0.7" strokeWidth="8" strokeDasharray="140 200" strokeLinecap="round" />
    <rect x="168" y="134" width="64" height="8" rx="4" fill="#b744d8" fillOpacity="0.35" />
    <rect x="168" y="150" width="44" height="6" rx="3" fill="#b744d8" fillOpacity="0.2" />
    <rect x="162" y="170" width="76" height="26" rx="8" fill="#b744d8" fillOpacity="0.55" />
    <rect x="162" y="204" width="76" height="26" rx="8" fill="white" stroke="#b744d8" strokeOpacity="0.3" />
  </svg>
);

const otherProjects = [
  {
    name: "Nexus — Analytics Dashboard",
    tags: ["Next JS", "SaaS"],
    description: "A real-time analytics dashboard for subscription businesses — revenue charts, churn tracking, and cohort insights in one clean view.",
    Mockup: DashboardMockup,
  },
  {
    name: "LeadFlow — AI Sales Chatbot",
    tags: ["AI Automation", "Chatbot"],
    description: "An AI chatbot embedded on client websites that qualifies leads, answers FAQs, and books meetings straight into their calendar.",
    Mockup: ChatWidgetMockup,
  },
  {
    name: "PulseFit — Coaching App",
    tags: ["React Native", "Mobile"],
    description: "A mobile companion app for a fitness coaching brand — tracks workouts, streaks, and progress rings for daily accountability.",
    Mockup: MobileMockup,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative bg-white py-24 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col gap-12">

        <div className="flex flex-col items-center text-center gap-5">
          <SectionLabel>Selected Work</SectionLabel>
          <h2 className="text-[32px]/[40px] md:text-[42px]/[50px] font-bold text-gray-900 max-w-2xl">
            Real-world projects <span className="text-accent">I&rsquo;ve worked on</span>
          </h2>
          <p className="text-[17px]/[28px] text-gray-600 max-w-xl">
            A mix of client work and independent builds — every one shipped, deployed, and used by real people.
          </p>
        </div>

        {/* Featured project */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bgHero w-full grid grid-cols-1 md:grid-cols-2 p-6 md:p-8 gap-8 rounded-2xl border border-gray-200"
        >
          <LaptopWebsiteMockup />
          <div className="flex flex-col justify-center gap-3">
            <p className="font-bold text-[28px] md:text-[30px] text-gray-900">Abstrax — Flavor Drink</p>
            <div className="flex gap-2 flex-wrap">
              <p className="font-semibold text-accent bg-accent/10 backdrop-blur-md w-max text-sm px-3 py-1 rounded-lg">● Next JS</p>
              <p className="font-semibold text-accent bg-accent/10 backdrop-blur-md w-max text-sm px-3 py-1 rounded-lg">● Ecommerce</p>
            </div>
            <p className="text-[16px]/[26px] text-gray-600">
              A high-converting ecommerce store for a terpene supplement brand. Built with animated product
              showcases and a custom cart experience.
            </p>
            <span className="text-xs text-gray-400 md:hidden">Scroll inside the laptop screen to explore ↑</span>
          </div>
        </motion.div>

        {/* Other projects grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
              className="group flex flex-col rounded-2xl border border-gray-200 bg-white overflow-hidden hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-[190px] overflow-hidden">
                <project.Mockup />
              </div>
              <div className="flex flex-col gap-2.5 p-6 border-t border-gray-100">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-bold text-lg text-gray-900">{project.name}</h3>
                  <RxArrowTopRight className="text-accent text-xl shrink-0 mt-0.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag) => (
                    <span key={tag} className="font-semibold text-accent bg-accent/10 text-xs px-2.5 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-[14.5px]/[23px] text-gray-600">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
