import { motion } from "framer-motion";
import {
  HiOutlineChatBubbleLeftRight,
  HiOutlineCpuChip,
  HiOutlineCalendarDays,
} from "react-icons/hi2";

const steps = [
  {
    icon: HiOutlineChatBubbleLeftRight,
    title: "Customer reaches out",
    desc: "Via website, WhatsApp, or Instagram",
  },
  {
    icon: HiOutlineCpuChip,
    title: "AI responds instantly",
    desc: "Understands intent, answers 24/7",
    core: true,
  },
  {
    icon: HiOutlineCalendarDays,
    title: "Meeting gets booked",
    desc: "Straight into your calendar",
  },
];

const Node = ({ step, index }) => (
  <div className="flex flex-col items-center text-center gap-4 md:w-[160px]">
    <div className="relative">
      {step.core && (
        <motion.span
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.05, 0.4] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 -m-3 rounded-full bg-accent"
        />
      )}
      <span
        className={`relative flex items-center justify-center w-16 h-16 rounded-2xl text-2xl ${
          step.core
            ? "bg-linear-to-b from-accent to-accent/60 text-white shadow-[0_10px_30px_rgba(183,68,216,0.35)]"
            : "bg-[#2b272d] border border-white/10 text-accent/80"
        }`}
      >
        <step.icon />
      </span>
      <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#0d0d0d] border border-white/10 text-[10px] font-semibold text-white/40 flex items-center justify-center z-20">
        {String(index + 1).padStart(2, "0")}
      </span>
    </div>

    <div>
      <p className="text-[14px] font-semibold text-white/90">{step.title}</p>
      <p className="text-[12.5px] text-white/40 mt-1 max-w-[160px] mx-auto">{step.desc}</p>
    </div>
  </div>
);

const HorizontalComet = ({ delay = 0 }) => (
  <motion.div
    className="absolute top-1/2 -translate-y-1/2 flex items-center"
    style={{ marginLeft: "-28px" }}
    animate={{ left: ["0%", "100%"] }}
    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.5, delay }}
  >
    <span className="h-px w-7 bg-gradient-to-r from-transparent to-accent"></span>
    <span className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_10px_3px_rgba(183,68,216,0.7)] -ml-0.5"></span>
  </motion.div>
);

const VerticalComet = ({ delay = 0 }) => (
  <motion.div
    className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center"
    style={{ marginTop: "-28px" }}
    animate={{ top: ["0%", "100%"] }}
    transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.5, delay }}
  >
    <span className="w-px h-7 bg-gradient-to-b from-transparent to-accent"></span>
    <span className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_10px_3px_rgba(183,68,216,0.7)] -mt-0.5"></span>
  </motion.div>
);

const AutomationFlow = () => (
  <div className="w-full rounded-3xl px-6 py-8 md:px-10 md:py-10">
    {/* <div className="flex items-center gap-1.5 text-[11px] font-semibold text-accent/90 uppercase tracking-wide mb-9 justify-center md:justify-start">
      <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
      Automated in real-time
    </div> */}

    {/* Mobile: vertical stack, connector line runs through icon centers */}
    <div className="md:hidden flex flex-col items-center">
      {steps.map((step, i) => (
        <div key={step.title} className="flex flex-col items-center w-full">
          <Node step={step} index={i} />
          {i < steps.length - 1 && (
            <div className="relative w-px h-10 bg-white/10 my-1">
              <VerticalComet delay={i * 0.35} />
            </div>
          )}
        </div>
      ))}
    </div>

    {/* Desktop: straight horizontal line pinned exactly to icon-center height (32px = half of the 64px icon) */}
    <div className="hidden md:grid grid-cols-3 relative">
      <div className="absolute left-[16.6667%] right-[16.6667%] h-px bg-white/10" style={{ top: "32px" }}>
        <HorizontalComet delay={0} />
        <HorizontalComet delay={1.2} />
      </div>
      {steps.map((step, i) => (
        <div key={step.title} className="flex justify-center">
          <Node step={step} index={i} />
        </div>
      ))}
    </div>
  </div>
);

export default AutomationFlow;
