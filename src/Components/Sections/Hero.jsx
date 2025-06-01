import { FaStar } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import Button from "../UI/Button";

const Hero = () => {
  return (
    <div className="bg-(--secc) h-[calc(100dvh_-_50px)]  flex items-end text-center relative">
      <div>
        <img src="./me.png" className="HeroImageDropShadow w-[350px]  object-top" alt="" />
      </div>
      <div className="relative z-10 mx-auto flex flex-col justify-center items-center h-full">
        <h1 className="text-[96px]  leading-[120px] tracking-[2.4px] uppercase font-[Anton]">
          <span className="text-transparent LiftedText bg-clip-text HeadlineTextGradient"> I BUILD TOP-NOTCH</span>
          <br />
          <span className="text-(--pric) CustomShadow bg-(--txtc) px-[20px] ">CUSTOM WEB SITES</span>
        </h1>
        <p className="text-gray-500 font-semibold mt-8 text-xl">
          Top-tier React JS, Next JS web apps, engineered with dedication and expertise.
        </p>
        <div className="flex items-center justify-center mt-6 space-x-4">
          <div className="flex items-center text-lg">
            <span className="font-bold text-black">fiverr.</span>
            <span className="ml-2 text flex gap-0.5 text-(--pric) LiftedText"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
            <span className="ml-2 text-(--ltxtc) font-semibold">5.0</span>
            <span className="ml-1  text-(--ltxtc)">(243)</span>
          </div>
         {/* <Button/>  */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
