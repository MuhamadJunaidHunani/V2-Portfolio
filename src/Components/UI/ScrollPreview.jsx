import { useState } from "react";

export default function ScrollPreview() {
    const [scroll, setScroll] = useState(0); // 0 to 100

    const handleScrollChange = (e) => {
        console.log(e.target.value);

        setScroll(e.target.value);
    };

    return (
        <div className="flex items-center gap-4 bg-[#272626] rounded-lg p-[20px]">
            <div className="w-full h-[300px] overflow-hidden relative CustomShadow bg-white rounded-lg">
                <img
                    src="./project.png"
                    alt="Website Preview"
                    className="w-full transition-transform duration-300 ease-linear"
                    style={{
                        transform: `translateY(-${scroll}%)`,
                    }}
                />
            </div>
            <input
                type="range"
                min="0"
                max="100"
                onChange={(e) => setScroll(Number(e.target.value))}
                value={scroll}
                style={{
                    writingMode: "vertical-lr", // modern vertical orientation
                    direction: "rtl",           // puts 0 at bottom, 100 at top
                    height: "300px",
                }}
                className="accent-blue-500 w-[20px]"
            />

            <input type="range" value={scroll}  onChange={(e) => setScroll(Number(e.target.value))}/>

        </div>
    );
}
