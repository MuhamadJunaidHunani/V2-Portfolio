import React from 'react'
import ScrollPreview from '../UI/ScrollPreview'

const AboutMe = () => {
    return (
        <div className='relative min-h-[calc(100dvh_-_65px)] bg-white -z-2 overflow-hidden  py-[50px]'>
        <div className="HeroBgGrid top-0 left-0 absolute w-full h-screen"></div>

            {/* <img src="./dot-pattern.webp" alt="backgrond pattern" class="absolute w-full left-1/2 top-0 -z-1 -translate-x-1/2 rotate-180"></img> */}
            <div className='w-full flex flex-col items-center'>

                <h1 className="text-[60px]/[85px] text-transparent LiftedText bg-clip-text HeadlineTextGradient text-center max-w-2xl bg-clip-text text-(--txtc) spa  tracking-[2.4px] uppercase font-[Anton] my-[20px]">
                    View the highlights of my
                    <span className="text-(--pric) bg-(--txtc) !leading-[80px] px-[10px] ml-[10px]">best project </span>

                </h1>

                <div className='grid grid-cols-2 w-full'>
                    <ScrollPreview />
                </div>
            </div>
        </div>
    )
}

export default AboutMe