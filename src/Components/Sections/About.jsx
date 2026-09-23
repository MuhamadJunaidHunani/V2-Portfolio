import React from "react";
import { motion } from "framer-motion";
import SectionLabel from "../UI/SectionLabel";
import ProfileImage from "../../assets/ProfileImage.png";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { PiBriefcaseLight } from "react-icons/pi";
import { LuSparkles } from "react-icons/lu";

const facts = [
  { icon: <HiOutlineLocationMarker />, label: "Based in", value: "Pakistan · Remote" },
  { icon: <PiBriefcaseLight />, label: "Experience", value: "4+ years" },
  { icon: <LuSparkles />, label: "Focus", value: "AI Automation & Web Apps" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <section id="about" className="relative bgHero bg-white py-24 md:py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-12 md:gap-16 items-center">

          {/* Visual card */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative w-full max-w-[420px] mx-auto md:mx-0"
          >

            <div className="relative rounded-[28px] border border-gray-200 bg-white p-3 ">
              <div className=" absolute inset-0 rounded-[28px]"></div>

              <div className="relative rounded-[22px] overflow-hidden aspect-[4/4]">
                <img
                  src={ProfileImage}
                  alt="Junaid Hunani — AI Software Developer"
                  className="w-full h-full object-cover"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div> */}

                {/* <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 bg-white/95 backdrop-blur rounded-full px-3.5 py-2 border border-white/60 shadow-sm w-max">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                  </span>
                  <span className="text-[13px] font-semibold text-gray-800">Available for new projects</span>
                </div> */}
              </div>
            </div>

            {/* floating chip */}
            {/* <div className="absolute -right-6 top-8 hidden md:flex items-center gap-2 bg-white rounded-2xl border border-gray-200 shadow-[0_8px_24px_rgba(0,0,0,0.08)] px-4 py-3">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <rect width="28" height="28" rx="8" fill="#b744d8" fillOpacity="0.12" />
                <path d="M9 14L12.5 17.5L19 10" stroke="#b744d8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="leading-tight">
                <p className="text-sm font-bold text-gray-900">12+ Projects</p>
                <p className="text-[11px] text-gray-500">Shipped &amp; live</p>
              </div>
            </div> */}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="flex flex-col gap-5"
          >
            {/* <SectionLabel>About Me</SectionLabel> */}

            <h2 className="text-[32px]/[40px] md:text-[42px]/[50px] font-bold text-gray-900 max-w-xl">
              The developer behind the screen, <span className="text-accent">not an agency.</span>
            </h2>

            <p className="text-[17px]/[28px] text-gray-600 max-w-xl">
              I&rsquo;m Junaid — a solo AI software developer who partners directly with founders and small teams.
              No account managers, no hand-offs between departments. You brief me once, and I design, build,
              and ship the whole thing myself, powered by AI-driven workflows that let one person move like a small team.
            </p>

            {/* <p className="text-[17px]/[28px] text-gray-600 max-w-xl">
              Over the last 4+ years I&rsquo;ve helped businesses turn slow manual processes and outdated funnels
              into fast, automated systems — from AI chatbots that qualify leads while you sleep, to full-stack
              web apps that just work.
            </p> */}

            <div className="grid sm:grid-cols-3 gap-3 mt-2">
              {facts.map((fact, i) => (
                <div key={i} className="flex flex-col gap-2 rounded-2xl border border-gray-200 bg-gray-50/70 p-4">
                  <span className="text-accent text-xl">{fact.icon}</span>
                  <p className="text-[13px] text-gray-500">{fact.label}</p>
                  <p className="text-[14px] font-semibold text-gray-900 -mt-1">{fact.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
