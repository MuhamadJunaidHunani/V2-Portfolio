import React, { useEffect, useRef, useState } from "react";

export default function LaptopWebsiteMockup() {
    const screenRef = useRef(null);
    const imageRef = useRef(null);
    const [scrollY, setScrollY] = useState(0);
    const [maxScroll, setMaxScroll] = useState(0);

    useEffect(() => {
        const screen = screenRef.current;
        if (!screen) return;

        const handleWheel = (e) => {
            e.preventDefault();

            setScrollY((prev) => {
                const next = prev + e.deltaY;
                return Math.min(Math.max(next, 0), maxScroll);
            });
        };

        screen.addEventListener("wheel", handleWheel, { passive: false });

        return () => {
            screen.removeEventListener("wheel", handleWheel);
        };
    }, [maxScroll]);

    const handleWheel = (e) => {
        e.preventDefault();
        setScrollY((prev) => {
            const next = prev + e.deltaY;
            return Math.min(Math.max(next, 0), maxScroll);
        });
    };

    return (
        <div className="flex items-center justify-center p-6">
            <div className="relative w-[400px] max-w-5xl">
                <div className="relative">
                    <div
                        ref={screenRef}
                        // onWheel={handleWheel}
                        className="absolute overflow-hidden z-20"
                        style={{
                            left: "6.3%",
                            top: "1%",
                            width: "87.4%",
                            height: "86.5%",
                            borderRadius: "10px",
                        }}
                    >
                        <img
                            ref={imageRef}
                            src="/project.png"
                            alt="Website preview"
                            onLoad={() => {
                                const screen = screenRef.current;
                                const img = imageRef.current;
                                if (screen && img) {
                                    setMaxScroll(Math.max(0, img.scrollHeight - screen.clientHeight));
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