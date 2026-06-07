import React from 'react'


const services = [
  {
    name: "Website Development",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "./service1.png",

  },
  {
    name: "AI Automation",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "./service2.png",
  },
  {
    name: "Chatbot Development",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "./service3.png",
  },
]
const CompanySlider = () => {
  return (

    <div className='flex flex-col p-[40px] bg-white w-full gap-10'>

      <h1>
        <span className='text-[30px]/[40px] font-bold'>My Services</span>
        <br />
        <span className='text-[30px]/[40px] font-bold text-[#b744d8]'>What I Can Do For You</span>
      </h1>

      <div className='grid grid-cols-3 gap-7'>
        {services.map((service, index) => (
          <div className='flex flex-col justify-between relative overflow-hidden bg-accent/5 backdrop-blur-3xl  h-[300px] rounded-lg outline-[1.5px] outline-accent/30'>

            <div className="absolute bottom-0 left-[0%]  bg-[#b744d8] w-[100px] h-[100px]  blur-[70px]"></div>
            <div className="absolute bottom-0 left-[70%]  bg-[#b744d8] w-[100px] h-[100px]  blur-[70px]"></div>

            <div className='flex flex-col gap-3 p-4 pb-1 z-10'>
              <div className='flex gap-1'>
                <div className='w-[10px] h-[10px] bg-red-500 rounded-full'></div>
                <div className='w-[10px] h-[10px] bg-yellow-500 rounded-full'></div>
                <div className='w-[10px] h-[10px] bg-green-500 rounded-full'></div>
              </div>

              <h1 className='font-bold text-2xl/[24px]'>{service.name}</h1>
              <p className='text-sm/[14px] text-gray-600'>{service.description}</p>
            </div>

            <img
              src={service.image}
              alt="Website Preview"
              className="w-full z-10 object-cover object-top rounded-lg transition-transform duration-300 ease-linear"
            />
          </div>
        ))}

      </div>
    </div>
  )
}

export default CompanySlider