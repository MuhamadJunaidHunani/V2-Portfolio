import React from "react";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiMongodb,
  SiPython,
  SiOpenai,
  SiTypescript,
  SiPostgresql,
  SiDocker,
  SiExpress,
  SiN8N,
} from "react-icons/si";

const tools = [
  { icon: SiReact, name: "React" },
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: SiNodedotjs, name: "Node.js" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiTailwindcss, name: "Tailwind CSS" },
  { icon: SiOpenai, name: "OpenAI" },
  { icon: SiN8N, name: "n8n" },
  { icon: SiMongodb, name: "MongoDB" },
  { icon: SiPostgresql, name: "PostgreSQL" },
  { icon: SiPython, name: "Python" },
  { icon: SiExpress, name: "Express" },
  { icon: SiDocker, name: "Docker" },
];

const TechStack = () => {
  const loop = [...tools, ...tools];

  return (
    <section className="relative bg-white py-16 md:py-20 border-y border-gray-100">
      <div className="max-w-6xl mx-auto px-6 md:px-10 mb-8">
        <p className="text-center text-sm font-medium text-gray-400 tracking-wide uppercase">
          The tools behind the systems I build
        </p>
      </div>

      <div className="marquee-wrap relative overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10"></div>

        <div className="marquee-track flex w-max gap-4">
          {loop.map((tool, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 shrink-0 rounded-xl border border-gray-200 bg-gray-50/70 px-5 py-3"
            >
              <tool.icon className="text-[20px] text-gray-700" />
              <span className="text-[14.5px] font-medium text-gray-700">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
