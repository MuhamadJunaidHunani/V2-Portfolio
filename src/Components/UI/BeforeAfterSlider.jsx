import { useEffect, useRef, useState } from "react";
import { HiOutlineArrowsRightLeft } from "react-icons/hi2";

const BeforeAfterSlider = ({ before, after, beforeLabel = "Before", afterLabel = "After" }) => {
  const containerRef = useRef(null);
  const draggingRef = useRef(false);
  const [pct, setPct] = useState(50);
  const [interacted, setInteracted] = useState(false);

  const updateFromClientX = (clientX) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = Math.min(Math.max(clientX - rect.left, 0), rect.width);
    setPct((x / rect.width) * 100);
  };

  const startDrag = (clientX) => {
    draggingRef.current = true;
    setInteracted(true);
    updateFromClientX(clientX);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!draggingRef.current) return;
      updateFromClientX(e.clientX);
    };
    const handleTouchMove = (e) => {
      if (!draggingRef.current) return;
      updateFromClientX(e.touches[0].clientX);
    };
    const stopDrag = () => {
      draggingRef.current = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", stopDrag);
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", stopDrag);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", stopDrag);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", stopDrag);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="group relative w-full aspect-[3/2] rounded-2xl md:rounded-3xl overflow-hidden border border-gray-200 select-none cursor-ew-resize shadow-[0_20px_60px_rgba(0,0,0,0.08)] bg-gray-100"
      onMouseDown={(e) => startDrag(e.clientX)}
      onTouchStart={(e) => startDrag(e.touches[0].clientX)}
    >
      {/* base layer: after */}
      <div className="absolute inset-0 pointer-events-none">{after}</div>

      {/* clipped overlay: before */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - pct}% 0 0)` }}
      >
        {before}
      </div>

      {/* labels */}
      <span className="absolute top-3 left-3 md:top-4 md:left-4 z-20 text-[11px] font-semibold tracking-wide uppercase bg-black/60 text-white px-2.5 py-1 rounded-full backdrop-blur-sm">
        {beforeLabel}
      </span>
      <span className="absolute top-3 right-3 md:top-4 md:right-4 z-20 text-[11px] font-semibold tracking-wide uppercase bg-accent text-white px-2.5 py-1 rounded-full">
        {afterLabel}
      </span>

      {/* drag handle */}
      <div
        className="absolute top-0 bottom-0 z-20 flex items-center justify-center"
        style={{ left: `${pct}%`, transform: "translateX(-50%)" }}
      >
        <div className="w-0.5 h-full bg-white/90 shadow-[0_0_8px_rgba(0,0,0,0.25)]"></div>
        <div className="absolute w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-[0_4px_16px_rgba(0,0,0,0.25)] flex items-center justify-center text-accent text-lg md:text-xl">
          <HiOutlineArrowsRightLeft />
        </div>
      </div>

      {/* hint */}
      {!interacted && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 bg-black/60 text-white text-[12px] font-medium px-3 py-1.5 rounded-full backdrop-blur-sm pointer-events-none animate-pulse">
          <HiOutlineArrowsRightLeft className="text-sm" />
          Drag to compare
        </div>
      )}
    </div>
  );
};

export default BeforeAfterSlider;
