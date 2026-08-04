import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RxArrowTopRight } from "react-icons/rx";
import ScreenPreview from "../UI/ScreenPreview";
import SectionLabel from "../UI/SectionLabel";

const projects = [
  {
    name: "Abstrax",
    tagline: "Flavor Drink — Ecommerce",
    tags: ["Next JS", "Ecommerce"],
    description: "A bold DTC storefront for a terpene supplement brand — animated product showcases, a custom cart flow, and a wholesale funnel built to convert.",
    src: "/projects/abstrax.png",
  },
  {
    name: "Truckin Digital",
    tagline: "Fleet Management SaaS",
    tags: ["SaaS", "Logistics"],
    description: "A cloud platform that runs an entire trucking operation — dispatch, accounting, compliance, and driver/manager companion apps in one system.",
    src: "/projects/truckin-digital.png",
  },
  {
    name: "Porter & York",
    tagline: "Premium Meat, Delivered",
    tags: ["Ecommerce", "DTC Brand"],
    description: "An editorial-grade storefront for a butcher-direct meat brand — heavy on photography, built for a premium unboxing experience online.",
    src: "/projects/porter-and-york.png",
  },
  {
    name: "Hannan Fabrics",
    tagline: "Luxury Textile Store",
    tags: ["Ecommerce", "Shopify"],
    description: "Where tradition meets modernity — a bilingual luxury fabric store with collections, a swatch library, and a checkout built for repeat buyers.",
    src: "/projects/hannan-fabrics.png",
  },
  {
    name: "Finsol",
    tagline: "Treasury Analytics Dashboard",
    tags: ["SaaS", "Dashboard"],
    description: "A dark-mode financial dashboard tracking revenue, sales predictions, and team activity in real time — built for daily operational use.",
    src: "/projects/finsol.png",
  },
  {
    name: "Fiction Genie",
    tagline: "AI Storytelling for Kids",
    tags: ["AI Product", "EdTech"],
    description: "An AI-powered platform that writes and illustrates personalized bedtime stories, with multi-language support and reading-progress insights for parents.",
    src: "/projects/fiction-genie.png",
  },
];

const Projects = () => {
  const [active, setActive] = useState(0);
  const project = projects[active];

  return (
    <section id="projects" className="relative bg-white py-24 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col gap-12">

        <div className="flex flex-col items-center text-center gap-5">
          <SectionLabel>Selected Work</SectionLabel>
          <h2 className="text-[32px]/[40px] md:text-[42px]/[50px] font-bold text-gray-900 max-w-2xl">
            Real-world projects <span className="text-accent">I&rsquo;ve worked on</span>
          </h2>
          <p className="text-[17px]/[28px] text-gray-600 max-w-xl">
            Six clients, six different problems — pick one and scroll inside to explore the live build.
          </p>
        </div>

        <div className="grid md:grid-cols-[300px_1fr] gap-6 md:gap-8">

          {/* project list */}
          <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0">
            {projects.map((p, i) => {
              const isActive = i === active;
              return (
                <button
                  key={p.name}
                  onClick={() => setActive(i)}
                  className={`text-left shrink-0 w-[220px] md:w-auto rounded-xl border px-4 py-3 transition-all duration-200 ${
                    isActive
                      ? "border-accent/40 bg-accent/[0.06]"
                      : "border-transparent hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                        isActive ? "bg-accent text-white" : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0">
                      <p className={`font-semibold text-[15px] truncate ${isActive ? "text-gray-900" : "text-gray-700"}`}>
                        {p.name}
                      </p>
                      <p className="text-[12.5px] text-gray-500 truncate">{p.tagline}</p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* preview */}
          <div className="flex flex-col gap-5">
            <div className="h-[340px] sm:h-[420px] md:h-[460px] rounded-2xl overflow-hidden border border-gray-200 bg-gray-50/70 p-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={project.src}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="w-full h-full"
                >
                  <ScreenPreview src={project.src} alt={project.name} />
                </motion.div>
              </AnimatePresence>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col gap-3"
              >
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <h3 className="font-bold text-2xl text-gray-900">{project.name}</h3>
                    <div className="flex gap-2 mt-2 flex-wrap">
                      {project.tags.map((tag) => (
                        <span key={tag} className="font-semibold text-accent bg-accent/10 text-xs px-2.5 py-1 rounded-md">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <RxArrowTopRight className="text-accent text-2xl shrink-0 mt-1" />
                </div>
                <p className="text-[15.5px]/[26px] text-gray-600 max-w-2xl">{project.description}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
