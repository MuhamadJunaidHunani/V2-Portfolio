const OldSiteMock = ({ brand, tagline }) => (
  <div className="w-full h-full bg-[#e9e9e9] p-3 sm:p-5 font-[Georgia,serif] text-[#1a1a2e] overflow-hidden flex flex-col">
    <div className="bg-[#0a1f4d] text-white px-3 py-2 flex items-center gap-3 text-[9px] sm:text-xs rounded-sm shrink-0">
      <span className="font-bold tracking-wide">{brand}</span>
      <span className="ml-auto flex gap-2 sm:gap-3 text-[#a9c2ff]">
        <span className="underline">Home</span>
        <span className="underline hidden sm:inline">About</span>
        <span className="underline">Services</span>
        <span className="underline">Contact</span>
      </span>
    </div>

    <div className="flex-1 flex flex-col items-center justify-center text-center gap-2">
      <p
        className="text-[16px] sm:text-[24px] font-bold text-[#0a1f4d]"
        style={{ textShadow: "1px 1px 0 #fff" }}
      >
        Welcome To {brand}
      </p>
      <p className="text-[9px] sm:text-[11px] text-[#444] max-w-[80%]">{tagline}</p>
      <button className="mt-1 bg-[#c9c9c9] border border-[#888] px-3 py-1 text-[9px] sm:text-[11px] shadow-[1px_1px_0_#888]">
        Click Here
      </button>
    </div>

    <div className="grid grid-cols-3 gap-1.5 sm:gap-2 shrink-0">
      {[1, 2, 3].map((n) => (
        <div
          key={n}
          className="bg-white border border-[#bbb] p-1.5 sm:p-2 text-[7px] sm:text-[9px] text-[#555] leading-tight"
        >
          Lorem ipsum dolor sit amet consectetur adipiscing elit.
        </div>
      ))}
    </div>
  </div>
);

export default OldSiteMock;
