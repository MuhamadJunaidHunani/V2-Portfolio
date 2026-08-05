import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi2";
import SectionLabel from "../UI/SectionLabel";
import BeforeAfterSlider from "../UI/BeforeAfterSlider";
import OldSiteMock from "../UI/OldSiteMock";

const pairs = [
  {
    brand: "Bright Leaf Co.",
    tagline: "Your trusted partner since 2004. We do it all!",
    after: "/hero-sections/hero-2.png",
    result: "From a static table of links to a product page that actually sells.",
  },
  {
    brand: "Metro Fix Services",
    tagline: "Quality service you can count on. Call us today!",
    after: "/hero-sections/hero-4.png",
    result: "The service itself, visualized — visitors see the value before they scroll.",
  },
  {
    brand: "Urban Cart",
    tagline: "Best prices in town on all your favorite items.",
    after: "/hero-sections/hero-6.png",
    result: "Same products, an experience built to actually convert browsers into buyers.",
  },
];

const Transformation = () => {
  const [active, setActive] = useState(0);
  const pair = pairs[active];

  const goTo = (i) => setActive((i + pairs.length) % pairs.length);

  return (
    <section id="transformation" className="relative bg-gray-50/60 py-24 md:py-28">
      <div className="max-w-3xl mx-auto px-6 md:px-10 flex flex-col gap-12">

        <div className="flex flex-col items-center text-center gap-5">
          <SectionLabel>The Difference</SectionLabel>
          <h2 className="text-[34px]/[42px] md:text-[48px]/[56px] font-bold text-gray-900 max-w-2xl">
            See the transformation <span className="text-accent">before your eyes</span>
          </h2>
          {/* <p className="text-[17px]/[28px] text-gray-600 max-w-xl">
            Drag the slider to see what a real redesign looks like — not just prettier, built to convert.
          </p> */}
        </div>

        <div className="flex flex-col gap-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={pair.brand}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <BeforeAfterSlider
                before={<OldSiteMock brand={pair.brand} tagline={pair.tagline} />}
                after={
                  <img
                    src={pair.after}
                    alt={`${pair.brand} redesigned`}
                    className="w-full h-full object-cover object-top"
                  />
                }
              />
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-between gap-4 flex-wrap">
            <AnimatePresence mode="wait">
              <motion.p
                key={pair.result}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="text-[14.5px] text-gray-500 max-w-md"
              >
                {pair.result}
              </motion.p>
            </AnimatePresence>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                {pairs.map((p, i) => (
                  <button
                    key={p.brand}
                    onClick={() => setActive(i)}
                    aria-label={`Show comparison ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === active ? "w-7 bg-accent" : "w-2 bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2 ml-2">
                <button
                  onClick={() => goTo(active - 1)}
                  className="flex items-center justify-center w-9 h-9 rounded-full border border-gray-200 bg-white text-gray-500 hover:text-gray-900 hover:border-gray-300 transition-colors"
                  aria-label="Previous comparison"
                >
                  <HiOutlineArrowLeft className="text-sm" />
                </button>
                <button
                  onClick={() => goTo(active + 1)}
                  className="flex items-center justify-center w-9 h-9 rounded-full border border-gray-200 bg-white text-gray-500 hover:text-gray-900 hover:border-gray-300 transition-colors"
                  aria-label="Next comparison"
                >
                  <HiOutlineArrowRight className="text-sm" />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Transformation;
