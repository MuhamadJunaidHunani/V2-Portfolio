import { FaStar } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import Button from "../UI/Button";

const Hero = () => {
  return (
    <div className="bg-primary h-[calc(100dvh_-_0px)]  flex items-end text-center relative">
        <div className="fixed top-[200px] left-1/2 -translate-x-1/2  bg-accent w-[600px] h-[100px] z-[0] blur-[100px]"></div>

      <div className="relative z-10 mx-auto flex flex-col justify-center items-center h-full pt-[80px]">
        <h1 className="text-[100px]  leading-[110px] tracking-[2.4px] uppercase font-[Anton]">
          <span className="text-transparent  bg-clip-text HeadlineTextGradient">I BUILD</span>
          <span className="text-accent CustomShadow font-light  px-[20px] italic ">Pixel-Perfect</span>
          <br />
          <span className="text-transparent  bg-clip-text HeadlineTextGradient">CUSTOM WEB SITES</span>
        </h1>
        <p className="text-lText font-medium mt-8 text-xl">
          High-quality <span className="text-secondary">React</span>, <span className="text-secondary">Next</span> and <span className="text-secondary">Angular JS</span> websites built with care and skill.
        </p>
        <div className="flex items-center justify-center mt-6 space-x-4">
          <a href="https:\\www.linkedin.com/in/m-junaid-hunani-9756972a6" target="_blank" className="flex items-center cursor-pointer hover:opacity-85  transition ">
            <img src="./linkedin.png" alt="" className="w-[40px]" />
            <div className="flex flex-col items-start justify-start gap-1">
              <span className="text-black -mt-1 text-[18px]/[18px] font-medium ">M.Junaid Hunani</span>
              <span className="text-[#007AB5] text-[13px]/[13px]">1900+ Followers</span>
            </div>
          </a>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Hero;
