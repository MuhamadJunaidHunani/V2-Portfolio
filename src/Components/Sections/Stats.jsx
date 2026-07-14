import React from 'react'
import { motion } from 'framer-motion'

const stats = [
    { id: 1, name: 'Projects Delivered', value: '12+' },
    { id: 2, name: 'Years of Experience', value: '4+' },
    { id: 3, name: 'Happy Clients', value: '10+' },
    { id: 4, name: 'Success Rate', value: '90%' },
]

const Stats = () => {
    return (
        <section className='bg-accent'>
            <div className='max-w-6xl mx-auto px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 py-14 md:py-16 text-white'>
                {stats.map((stat, i) => (
                    <motion.div
                        key={stat.id}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5, delay: i * 0.08 }}
                        className='flex flex-col gap-2 items-center text-center'
                    >
                        <h2 className='text-[40px]/[40px] md:text-[50px]/[50px] font-bold'>{stat.value}</h2>
                        <p className='text-[15px] md:text-lg font-medium text-white/85'>{stat.name}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default Stats
