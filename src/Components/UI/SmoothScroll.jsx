// components/SmoothScroll.js
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const SmoothScroll = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth easing
      smooth: true,
      prevent: (node) => node.closest("[data-lenis-prevent]") !== null,
    });

    window.lenis = lenis;

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      window.lenis = null;
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;
