import { FaStar } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import Button from "../UI/Button";
import bg from '../../assets/BrandingBackground.png';
import { HiArrowUpRight } from "react-icons/hi2";
import { RxArrowTopRight } from "react-icons/rx";
import { FiArrowDownLeft } from "react-icons/fi";

const Hero = () => {
  return (
    <div className="bg-white h-screen max-w-screen pt-16 overflow-hidden bgHero bg-cover   flex items-center text-center relative">
      <div className="absolute top-[500px] left-[50%] -translate-x-1/2  bg-[#b744d8] w-[300px] h-[300px] opacity-50 blur-[160px]"></div>
      {/* <div className="absolute top-[200px] left-[90%] -translate-x-1/2  bg-[#b744d8] w-[300px] h-[300px] opacity-40 blur-[150px]"></div> */}
      <div className="flex flex-col gap-5 w-full items-center justify-center">
        <div className="flex items-center gap-1 text-sm py-1 bg-white rounded-full px-4 border border-gray-200 text-gray-600">
          <img src="/linkedin.png" alt="linkdin" className="w-[18px]" />
          Trusted by 2k+ on linkedin
        </div>
        <h1 className="text-center max-w-[900px]">
          <span className="text-[65px]/[75px] font-bold ">Turn your Software & Funnels </span>
          <span className="text-[65px]/[75px] font-bold text-[#b744d8]">Into AI-Powered System</span>
        </h1>

        <p className="text-lg text-gray-600 max-w-[900px]">
          I help businesses and entrepreneurs leverage the power of AI to automate their software and funnels, saving them time and money while increasing efficiency and profitability.
        </p>

        <button className="flex items-center cursor-pointer group justify-center gap-2 bg-linear-to-b rounded-full to-accent from-accent/70 text-white font-medium pl-4 pr-1 py-1 ">
          Book a 30-min Call
          <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-white text-black/60 text-[22px] leading-none">
            <RxArrowTopRight className="absolute transition-all duration-300 group-hover:-top-full group-hover:-right-full top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2" strokeWidth={0.4} />
            <RxArrowTopRight className="absolute transition-all duration-300 top-full right-full group-hover:top-1/2 group-hover:right-1/2 group-hover:translate-x-1/2 group-hover:-translate-y-1/2" strokeWidth={0.4} />
          </span>
        </button>
      </div>
      
    </div>
  );
};

export default Hero;
