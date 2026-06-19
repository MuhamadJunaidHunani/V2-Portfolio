import React, { useEffect, useRef, useState } from "react";
import { PiMouseScrollLight } from "react-icons/pi";

export default function LaptopWebsiteMockup() {
    const screenRef = useRef(null);
    const imageRef = useRef(null);
    const scrollYRef = useRef(0);
    const maxScrollRef = useRef(0);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const screen = screenRef.current;
        if (!screen) return;

        const handleWheel = (e) => {
            e.preventDefault(); // always called, even at boundaries

            const next = Math.min(
                Math.max(scrollYRef.current + e.deltaY, 0),
                maxScrollRef.current
            );

            scrollYRef.current = next;
            setScrollY(next);
        };

        screen.addEventListener("wheel", handleWheel, { passive: false });
        return () => screen.removeEventListener("wheel", handleWheel);
    }, []); // ✅ empty deps — registers once, never re-registers

    return (
        <div className="flex flex-col gap-2 items-center justify-center group ">
            <div className=" border-accent px-2 bg-accent/80 flex text-white text-sm border rounded-lg z-30  items-center gap-1">
                <PiMouseScrollLight />
                <p>scrollable</p>
            </div>
            <div className="relative w-full max-w-5xl">
                <div className="relative">
                    <div
                        ref={screenRef}
                        data-lenis-prevent
                        className="absolute overflow-hidden z-20"
                        style={{
                            left: "6.2%",
                            top: "1%",
                            width: "87.4%",
                            height: "86.5%",
                            borderRadius: "10px",
                        }}
                    >
                        <img
                            ref={imageRef}
                            src="/evolvens.com_.png"
                            alt="Website preview"
                            onLoad={() => {
                                const screen = screenRef.current;
                                const img = imageRef.current;
                                if (screen && img) {
                                    maxScrollRef.current = Math.max(
                                        0,
                                        img.scrollHeight - screen.clientHeight
                                    );
                                }
                            }}
                            className="absolute top-0 left-0 w-full h-auto max-w-none block"
                            style={{
                                transform: `translateY(-${scrollY}px)`,
                                transition: "transform 0.08s linear",
                            }}
                        />
                    </div>

                    <img
                        src="/frame.png"
                        alt="Laptop frame"
                        className="w-full h-auto block relative z-10 pointer-events-none select-none"
                    />
                </div>
            </div>
        </div>
    );
}