import { FaStar } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import Button from "../UI/Button";

const Hero = () => {
  return (
    <div className="bg-(--secc) h-[calc(100dvh_-_65px)]  flex items-end text-center relative">
      <div>
        <img src="./me.png" className="HeroImageDropShadow w-[350px]  object-top" alt="" />
      </div>
      <div className="relative z-10 mx-auto flex flex-col justify-center items-center h-full">
        <h1 className="text-[96px]  leading-[130px] tracking-[2.4px] uppercase font-[Anton]">
          <span className="text-transparent LiftedText bg-clip-text HeadlineTextGradient"> I BUILD Pixel-Perfect</span>
          <br />
          <span className="text-(--pric) CustomShadow bg-(--txtc) px-[20px] ">CUSTOM WEB SITES</span>
        </h1>
        <p className="text-gray-500 font-semibold mt-8 text-xl">
          High-quality <span className="text-gray-900">React</span> , <span className="text-gray-900">Next</span> and <span className="text-gray-900">Angular JS</span> websites built with care and skill.
        </p>
        <div className="flex items-center justify-center mt-6 space-x-4">
          <a href="https:\\www.linkedin.com/in/m-junaid-hunani-9756972a6" target="_blank" className="flex items-center cursor-pointer hover:opacity-85  transition ">
            <img src="./linkedin.png" alt="" className="w-[40px]" />
            <div className="flex flex-col items-start justify-start gap-1">
              <span className="text-black -mt-1 text-[18px]/[18px] font-medium ">M.Junaid Hunani</span>
              <span className="text-[#007AB5] text-[13px]/[13px]">1700+ Followers</span>
            </div>
          </a>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Hero;
