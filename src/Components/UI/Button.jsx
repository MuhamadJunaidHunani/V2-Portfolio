import { FaArrowRightLong } from 'react-icons/fa6'

const Button = () => {
    return (
        <button className="flex items-center justify-center gap-2 cursor-pointer rounded disabled:cursor-not-allowed disabled:!shadow-none text-white bg-[#3d3d3d] 
        shadow-[0_7px_32px_rgba(0,0,0,.2),0_12px_48px_-12px_rgba(0,0,0,.2),inset_0_-4px_rgba(0,0,0)] h-11 px-6 font-semibold text-[15px]/[15px]">
            Book a call <FaArrowRightLong />
        </button>
    )
}

export default Button