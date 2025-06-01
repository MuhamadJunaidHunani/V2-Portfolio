import React from 'react'

const Button = () => {
    return (
        <button className="inline-flex  items-center justify-center gap-2 rounded disabled:cursor-not-allowed disabled:!shadow-none sm:rounded-md text-white bg-[#383838] shadow-[0_7px_32px_rgba(0,0,0,.2),0_12px_48px_-12px_rgba(0,0,0,.2),inset_0_-3px_rgba(0,0,0)] duration-300 focus-visible:ring-foreground disabled:bg-foreground/[.24] disabled:text-white/80 h-11 px-6 text-sm/[14px] font-semibold sm:text-[15px]/[15px] md:h-11 !duration-0 max-sm:h-10 max-sm:!px-3 md:mt-0">
            Book a call <FaArrowRightLong />
        </button>
    )
}

export default Button