import React from 'react'


const stats = [
    {
        id: 1,
        name: 'Projects Delivered',
        value: '12+',
    },
    {
        id: 2,
        name: 'Years of Experience',
        value: '4+',
    },
    {
        id: 3,
        name: 'Happy Clients',
        value: '10+',
    },
    {
        id: 4,
        name: 'Success Rate',
        value: '90%',
    }
]
const Stats = () => {
    return (
        <div className='grid grid-cols-4 justify-center gap-10 py-[40px] bg-accent text-white'>
            {stats.map((stat) => (
                <div className='flex flex-col gap-2 items-center' key={stat.id}>
                    <h2 className='text-[50px]/[50px] font-bold'>{stat.value}</h2>
                    <p className='text-lg/[18px] font-medium'>{stat.name}</p>
                </div>
            ))}
        </div>
    )
}

export default Stats