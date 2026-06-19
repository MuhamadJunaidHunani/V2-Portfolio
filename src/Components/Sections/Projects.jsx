import React from 'react'
import LaptopWebsiteMockup from '../UI/LaptopWebsiteMockup'

const Projects = () => {
    return (
        <div className='flex flex-col p-[40px]  bg-white w-full gap-10'>

            <h1>
                <span className='text-[30px]/[40px] font-bold'>Real-World Projects</span>
                <br />
                <span className='text-[30px]/[40px] font-bold text-[#b744d8]'>I’ve Worked On</span>
            </h1>

            <div className='flex flex-col items-center'>
                <div className='bgHero w-[90%] grid grid-cols-2 p-6 gap-6 rounded-2xl'>
                    <LaptopWebsiteMockup />
                    <div className='flex flex-col gap-3'>
                        <p className='font-bold text-[30px]'>Abstrax — Flavor Drink</p>
                        <div className='flex gap-2'>
                            <p className='font-semibold text-accent bg-accent/20 backdrop-blur-md w-max text-sm px-3 py-1 rounded-lg'>● Next JS</p>
                            <p className='font-semibold text-accent bg-accent/20 backdrop-blur-md w-max text-sm px-3 py-1 rounded-lg'>● Ecommerce</p>
                        </div>
                        <p className='text-lg leading-normal'>A high-converting ecommerce store for a terpene supplement brand. Built with animated product showcases and a custom cart experience.</p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Projects