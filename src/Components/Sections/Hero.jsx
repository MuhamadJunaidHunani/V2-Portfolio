import { motion } from "framer-motion";
import { RxArrowTopRight } from "react-icons/rx";
import AutomationFlow from "../UI/AutomationFlow";

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Hero = () => {
  return (
    <div className="relative bgHero w-full min-h-screen  pt-36 pb-20 md:pt-36 flex items-center overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] bg-white opacity-100 blur-[40px] rounded-full"></div>
      {/* <div className="absolute top-[80px] right-[6%] w-[300px] h-[300px] bg-accent opacity-20 blur-[150px] rounded-full"></div> */}
      {/* <div className="absolute bottom-[-140px] left-1/2 -translate-x-1/2 w-[520px] h-[300px] bg-accent opacity-15 blur-[170px] rounded-full"></div> */}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 w-full flex flex-col items-center text-center gap-6"
      >
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-1.5 text-sm py-1.5 bg-white rounded-full px-4 border border-gray-200 text-gray-600"
        >
          <img src="/linkedin.png" alt="linkedin" className="w-[18px]" />
          Trusted by 2k+ on LinkedIn
        </motion.div>

        <motion.h1 variants={itemVariants} className="max-w-[1000px]">
          <span className="text-[38px]/[46px] sm:text-[52px]/[60px] md:text-[62px]/[70px] font-bold text-gray-900">
            Turn your Software & Funnels{" "}
          </span>
          <span className="text-[38px]/[46px] sm:text-[52px]/[60px] md:text-[62px]/[70px] font-bold text-accent">
            Into AI-Powered Systems
          </span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-lg text-gray-600 max-w-[800px]">
          I help businesses and entrepreneurs leverage the power of AI to automate their software and funnels, saving them time and money while increasing efficiency and profitability.
        </motion.p>

        <motion.div variants={itemVariants}>
          <button className="flex items-center cursor-pointer group justify-center gap-2 bg-linear-to-b rounded-full to-accent from-accent/70 text-white font-medium pl-4 pr-1 py-1">
            Book a 30-min Call
            <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-white text-black/60 text-[22px] leading-none">
              <RxArrowTopRight
                className="absolute transition-all duration-300 group-hover:-top-full group-hover:-right-full top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2"
                strokeWidth={0.4}
              />
              <RxArrowTopRight
                className="absolute transition-all duration-300 top-full right-full group-hover:top-1/2 group-hover:right-1/2 group-hover:translate-x-1/2 group-hover:-translate-y-1/2"
                strokeWidth={0.4}
              />
            </span>
          </button>
        </motion.div>

        <motion.div variants={itemVariants} className="flex items-center gap-4 text-sm text-gray-500">
          <span>
            <strong className="text-gray-900 font-bold">12+</strong> Projects Delivered
          </span>
          <span className="w-1 h-1 rounded-full bg-gray-300"></span>
          <span>
            <strong className="text-gray-900 font-bold">90%</strong> Success Rate
          </span>
        </motion.div>

        <motion.div variants={itemVariants} className="w-full max-w-4xl">
          <AutomationFlow />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
