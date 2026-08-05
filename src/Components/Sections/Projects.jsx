import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RxArrowTopRight } from "react-icons/rx";
import { HiXMark } from "react-icons/hi2";
import ScreenPreview from "../UI/ScreenPreview";
import SectionLabel from "../UI/SectionLabel";

const projects = [
  {
    name: "Akurai",
    tagline: "Data Analytics SaaS",
    tags: ["SaaS", "Analytics"],
    description: "A dark, enterprise-grade landing page for a data intelligence platform — bold typography, animated gradient visuals, and social proof built to convert data teams.",
    src: "/hero-sections/hero-1.png",
  },
  {
    name: "AI Travel Assistant",
    tagline: "Chatbot + Booking Automation",
    tags: ["Chatbot", "Automation"],
    description: "A WhatsApp-style travel concierge on the surface — behind it, an n8n workflow detects intent, checks live availability, builds a personalized itinerary, and books flights, hotels, and activities automatically once approved.",
    views: [
      { label: "Chat Interface", src: "/projects/ai-travel-assistant.png" },
      { label: "Automation Engine", src: "/projects/itinerai-automation.png" },
    ],
  },
  {
    name: "Nexora",
    tagline: "AI Workflow Platform",
    tags: ["SaaS", "AI Product"],
    description: "A high-energy product page for an AI automation platform — glowing 3D visuals, live product stats, and a gradient-driven design system built to feel cutting-edge.",
    src: "/hero-sections/hero-2.png",
  },
  {
    name: "Catalog Sync AI",
    tagline: "E-commerce Data Enrichment Pipeline",
    tags: ["Automation", "n8n"],
    description: "Feed it a product URL and this pipeline scrapes the page, pulls structured data with AI, generates SEO copy and tags, embeds it for search, and pushes it straight into the catalog — no manual entry.",
    src: "/projects/catalog-sync-ai.png",
  },
  {
    name: "Vorax Motors",
    tagline: "Performance Motorcycle Brand",
    tags: ["Automotive", "Cinematic"],
    description: "A cinematic showcase for a high-performance motorcycle brand — moody studio lighting, spec callouts, and an interactive 3D viewer built to sell the thrill.",
    src: "/hero-sections/hero-3.png",
  },
  {
    name: "Flowint",
    tagline: "AI Automation Agency",
    tags: ["Agency", "AI Product"],
    description: "An agency landing page that visualizes automation itself — live workflow cards animate into an AI core, turning an abstract service into something you can watch happen.",
    src: "/hero-sections/hero-4.png",
  },
  {
    name: "Stay & Work",
    tagline: "Modular Living Spaces",
    tags: ["Real Estate", "Product"],
    description: "A premium landing page for a modular housing company — a split-frame product render, editorial typography, and spec cards that sell craftsmanship at a glance.",
    src: "/hero-sections/hero-5.png",
  },
  {
    name: "Playtek",
    tagline: "RC & Electronics Store",
    tags: ["Ecommerce", "DTC Brand"],
    description: "A product-first storefront for a premium RC and electronics brand — hero-lit product photography and a feature strip built to move units.",
    src: "/hero-sections/hero-6.png",
  },
  {
    name: "Hyre",
    tagline: "Hiring Platform for Startups",
    tags: ["SaaS", "HR Tech"],
    description: "A recruiting platform landing page built around trust — vetted-candidate cards with live ratings, social proof, and a single clear call to hire.",
    src: "/hero-sections/hero-7.png",
  },
];

const Projects = () => {
  const [selected, setSelected] = useState(null);
  const [modalView, setModalView] = useState(0);
  const selectedProject = selected !== null ? projects[selected] : null;
  const modalSrc = selectedProject
    ? selectedProject.views
      ? selectedProject.views[modalView].src
      : selectedProject.src
    : null;

  const openProject = (i) => {
    setModalView(0);
    setSelected(i);
  };

  useEffect(() => {
    document.body.classList.toggle("no-scroll", selected !== null);
    return () => document.body.classList.remove("no-scroll");
  }, [selected]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="projects" className="relative bg-white py-24 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col gap-12">

        <div className="flex flex-col items-center text-center gap-5">
          <SectionLabel>Selected Work</SectionLabel>
          <h2 className="text-[34px]/[42px] md:text-[48px]/[56px] font-bold text-gray-900 max-w-2xl">
            Real-world projects <span className="text-accent">I&rsquo;ve worked on</span>
          </h2>
          <p className="text-[17px]/[28px] text-gray-600 max-w-xl">
            Nine builds, nine different problems — see them all in one glance, dig into the one that fits yours.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => {
            const thumb = p.views ? p.views[0].src : p.src;
            return (
              <motion.button
                key={p.name}
                onClick={() => openProject(i)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="group w-full text-left rounded-2xl border border-gray-200 bg-white overflow-hidden hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <div className="relative aspect-[3/2] overflow-hidden bg-gray-50">
                  <img
                    src={thumb}
                    alt={p.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  {p.views && (
                    <span className="absolute bottom-3 right-3 text-[10px] font-semibold bg-black/60 text-white px-2 py-1 rounded-full backdrop-blur-sm">
                      {p.views.length} views
                    </span>
                  )}
                </div>

                <div className="p-5 flex flex-col gap-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-bold text-lg text-gray-900">{p.name}</h3>
                    <RxArrowTopRight className="text-accent text-lg opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                  </div>
                  <p className="text-[13.5px] text-gray-500">{p.tagline}</p>
                  <div className="flex gap-2 flex-wrap mt-0.5">
                    {p.tags.map((tag) => (
                      <span key={tag} className="text-[11px] font-semibold text-accent bg-accent/10 px-2 py-1 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>

      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              data-lenis-prevent
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl md:rounded-3xl p-5 md:p-8 flex flex-col gap-5"
            >
              <button
                onClick={() => setSelected(null)}
                aria-label="Close"
                className="absolute top-4 right-4 z-10 flex items-center justify-center w-9 h-9 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-900 transition-colors"
              >
                <HiXMark />
              </button>

              {selectedProject.views && (
                <div className="flex items-center gap-2">
                  {selectedProject.views.map((v, i) => (
                    <button
                      key={v.label}
                      onClick={() => setModalView(i)}
                      className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-colors ${
                        i === modalView
                          ? "bg-accent text-white border-accent"
                          : "text-gray-500 border-gray-200 hover:border-gray-300 hover:text-gray-700"
                      }`}
                    >
                      {v.label}
                    </button>
                  ))}
                </div>
              )}

              <div className="h-[340px] sm:h-[420px] rounded-2xl overflow-hidden border border-gray-200 bg-gray-50/70 p-2">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={modalSrc}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-full h-full"
                  >
                    <ScreenPreview src={modalSrc} alt={selectedProject.name} />
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="flex flex-col gap-3">
                <div>
                  <h3 className="font-bold text-2xl text-gray-900">{selectedProject.name}</h3>
                  <div className="flex gap-2 mt-2 flex-wrap">
                    {selectedProject.tags.map((tag) => (
                      <span key={tag} className="font-semibold text-accent bg-accent/10 text-xs px-2.5 py-1 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-[15.5px]/[26px] text-gray-600">{selectedProject.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
