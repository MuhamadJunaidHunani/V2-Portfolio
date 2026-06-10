import React from 'react'
import LaptopWebsiteMockup from '../UI/LaptopWebsiteMockup'

const Projects = () => {
    return (
        <div className='flex flex-col p-[40px] bgHero object-cover bg-white w-full gap-10'>

            <h1>
                <span className='text-[30px]/[40px] font-bold'>Real-World Projects</span>
                <br />
                <span className='text-[30px]/[40px] font-bold text-[#b744d8]'>I’ve Worked On</span>
            </h1>
            <LaptopWebsiteMockup />

        </div>
    )
}

export default Projects