import React, { useEffect, useRef, useState } from "react";
import { PiMouseScrollLight } from "react-icons/pi";

const ScreenPreview = ({ src, alt = "Project preview" }) => {
  const viewportRef = useRef(null);
  const imageRef = useRef(null);
  const scrollYRef = useRef(0);
  const maxScrollRef = useRef(0);
  const dragRef = useRef({ dragging: false, startY: 0, startScroll: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [loaded, setLoaded] = useState(false);

  // reset scroll position whenever the active project changes
  useEffect(() => {
    scrollYRef.current = 0;
    setScrollY(0);
    setLoaded(false);
  }, [src]);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const clamp = (next) => Math.min(Math.max(next, 0), maxScrollRef.current);

    const handleWheel = (e) => {
      e.preventDefault();
      const next = clamp(scrollYRef.current + e.deltaY);
      scrollYRef.current = next;
      setScrollY(next);
    };

    const handlePointerDown = (e) => {
      dragRef.current = { dragging: true, startY: e.clientY, startScroll: scrollYRef.current };
    };
    const handlePointerMove = (e) => {
      if (!dragRef.current.dragging) return;
      const delta = dragRef.current.startY - e.clientY;
      const next = clamp(dragRef.current.startScroll + delta);
      scrollYRef.current = next;
      setScrollY(next);
    };
    const handlePointerUp = () => {
      dragRef.current.dragging = false;
    };

    viewport.addEventListener("wheel", handleWheel, { passive: false });
    viewport.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);

    return () => {
      viewport.removeEventListener("wheel", handleWheel);
      viewport.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, [src]);

  return (
    <div className="relative w-full h-full rounded-xl overflow-hidden border border-gray-200 bg-white select-none">
      {/* chrome bar */}
      <div className="h-9 flex items-center gap-1.5 px-4 border-b border-gray-100 bg-gray-50/80 shrink-0">
        <span className="w-2.5 h-2.5 rounded-full bg-[#f87171]"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-[#fbbf24]"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-[#34d399]"></span>
        <div className="ml-3 h-4 flex-1 max-w-[220px] rounded-full bg-gray-200/70"></div>
      </div>

      {/* scrollable viewport */}
      <div
        ref={viewportRef}
        data-lenis-prevent
        className="relative overflow-hidden cursor-grab active:cursor-grabbing"
        style={{ height: "calc(100% - 36px)" }}
      >
        <img
          ref={imageRef}
          src={src}
          alt={alt}
          draggable={false}
          onLoad={() => {
            const viewport = viewportRef.current;
            const img = imageRef.current;
            if (viewport && img) {
              maxScrollRef.current = Math.max(0, img.scrollHeight - viewport.clientHeight);
              setLoaded(true);
            }
          }}
          className="absolute top-0 left-0 w-full h-auto max-w-none block"
          style={{ transform: `translateY(-${scrollY}px)`, transition: "transform 0.06s linear" }}
        />

        {loaded && (
          <div className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-black/70 backdrop-blur text-white text-xs px-3 py-1.5 rounded-full">
            <PiMouseScrollLight />
            Scroll to explore
          </div>
        )}
      </div>
    </div>
  );
};

export default ScreenPreview;
