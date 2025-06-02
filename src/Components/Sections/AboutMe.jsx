import React from 'react'

const AboutMe = () => {
    return (
        <div className='relative min-h-[calc(100dvh_-_65px)] b-white bg-(--txtc) overflow-hidden -z-2 py-[50px]'>
            <img src="./dot-pattern.webp" alt="backgrond pattern" class="absolute min-w-[120%] left-1/2 top-0 -z-1 -translate-x-1/2 rotate-180"></img>
            <div className='w-full flex flex-col items-center'>

                <h1 className="text-[55px]/[74px] text-center max-w-2xl LiftedText bg-clip-text text-(--ltxtc)   tracking-[2.4px] uppercase font-[Anton]">
                    View the highlights of my
                    <span className="text-(--pric)">  best project </span>

                </h1>
            </div>
        </div>
    )
}

export default AboutMe