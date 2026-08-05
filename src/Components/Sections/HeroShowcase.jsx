const heroDesigns = [
  "/hero-sections/hero-1.png",
  "/hero-sections/hero-2.png",
  "/hero-sections/hero-3.png",
  "/hero-sections/hero-4.png",
  "/hero-sections/hero-5.png",
  "/hero-sections/hero-6.png",
  "/hero-sections/hero-7.png",
];

const HeroShowcase = () => {
  const loop = [...heroDesigns, ...heroDesigns];

  return (
    <section className="relative bg-white py-14 md:py-16 border-b border-gray-100 overflow-hidden">
      <p className="text-center text-sm font-medium text-gray-400 tracking-wide uppercase mb-8">
        A few hero sections I&rsquo;ve designed
      </p>

      <div className="marquee-wrap relative">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10"></div>

        <div className="marquee-track flex w-max gap-3">
          {loop.map((src, i) => (
            <div
              key={i}
              className="shrink-0 rounded-2xl overflow-hidden border border-gray-200 shadow-[0_8px_24px_rgba(0,0,0,0.06)] aspect-[3/2]"
              style={{ width: "min(calc((100vw - 36px) / 3.5), 420px)" }}
            >
              <img
                src={src}
                alt={`Hero section design ${(i % heroDesigns.length) + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroShowcase;
