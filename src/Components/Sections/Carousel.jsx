import React, { useEffect, useRef, useState } from 'react';
import './style.css';
import Slider1 from '../../assets/slider1.jpg';
import Slider2 from '../../assets/slider2.jpg';
import Slider3 from '../../assets/slider3.jpg';
import Slider4 from '../../assets/slider4.jpg';
import Slider5 from '../../assets/slider5.png';

const Carousel = () => {
  const [radius, setRadius] = useState({ x: 0, y: 0 });
  const wrapperRef = useRef(null);
  const intervalRef = useRef(null);

  const Data = [
    {
      image: Slider1,
      title: 'SEO',
      text: null,
      icon: null,
    },
    {
      image: null,
      title: null,
      text: 'grow your traffic with our <span style="color:white">expert SEO</span> services.',
      icon: '📌',
    },
    {
      image: Slider2,
      title: 'Content Marketing',
      text: null,
      icon: null,
    },
    {
      image: null,
      text: 'reach more customers with our smart SEO.',
      icon: '📌',
    },
    {
      image: Slider4,
      title: 'PPC Marketing',
      text: null,
      icon: null,
    },
    {
      image: Slider5,
      title: 'Custom Software Development',
      text: null,
      icon: null,
    },
    {
      image: Slider3,
      title: 'Social Media Marketing',
      text: null,
      icon: null,
    },
    {
      image: null,
      title: null,
      text: 'reach more customers with our  <span style="color:white">smart SEO</span>.',
      icon: null,
    },
  ];

  let filledData = [...Data];
  while (filledData.length < 16) {
    filledData = [...filledData, ...Data];
  }
  filledData = filledData.slice(0, 16);

  useEffect(() => {
    const updateRadius = () => {
      const vw = window.innerWidth;
      if (vw > 768) {
        setRadius({ x: 70, y: 70 });
      } else {
        const fixed = 0.4 * 1400;
        setRadius({ x: (fixed / vw) * 100, y: (fixed / vw) * 100 });
      }
    };

    updateRadius();
    window.addEventListener('resize', updateRadius);
    return () => window.removeEventListener('resize', updateRadius);
  }, []);

  const angleStep = 360 / filledData.length;

  const rotateCarousel = (angle) => {
    const wrapper = wrapperRef.current;
    const match = wrapper.style.transform.match(/rotate\(([-\d.]+)deg\)/);
    const currentRotation = match ? parseFloat(match[1]) : 0;
    wrapper.style.transform = `rotate(${currentRotation + angle}deg)`;
    wrapper.style.transition = 'transform 0.5s ease';
  };

  const startContinuousRotation = (angle) => {
    if (intervalRef.current) return;
    rotateCarousel(angle);
    intervalRef.current = setInterval(() => rotateCarousel(angle), 300);
  };

  const stopContinuousRotation = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  return (
    <div className="container relative ">
      <div ref={wrapperRef} className="wrapper absolute top-[60vh] md:top-[90vh] rotate-90 scale-[0.]" data-rotation="0">
        <div className="content">
          {filledData.map((item, i) => {
            const angleDeg = i * angleStep - 90;
            const angleRad = (angleDeg * Math.PI) / 180;
            const x = Math.cos(angleRad) * radius.x;
            const y = Math.sin(angleRad) * radius.y;
            const rotate = angleDeg + 90;

            return (
              <div
                key={i}
                className="item"
                style={{
                  transform: `translate(-50%, -50%) translate(${x}vw, ${y}vw) rotate(${rotate}deg)`
                }}
              >
                <div
                  className="child w-full h-full !bg-no-repeat !bg-cover object-cover rounded-[20px] md:rounded-[23px]"
                  style={{
                    transform: `rotate(0deg)`,
                    background: item.image ? `url(${item.image})` : '#112042'
                  }}
                >
                  <div
                    style={{
                      backgroundImage: 'linear-gradient(to bottom, transparent 60%, black 100%)'
                    }}
                    className={`relative rounded-[20px] md:rounded-[23px] flex flex-col items-start w-full h-full 
                      px-[20px] py-[20px] md:px-[2vw] md:py-[2vw] 
                      ${item.text ? 'justify-start' : 'justify-end'}`}
                  >
                    {item.title && (
                      <p className="text-white text-[18px] leading-[22px] font-light md:text-[2vw] md:leading-[2vw]">
                        {item.title}
                      </p>
                    )}

                    {item.text && (
                      <p
                        className="text-gray-400 text-[16px] leading-[22px] mt-[12px] md:text-[2vw] md:leading-[2.8vw] md:mt-[2vw]"
                        dangerouslySetInnerHTML={{ __html: item.text }}
                      ></p>
                    )}

                    {item.icon && (
                      <i className="absolute top-[-5px] right-[-5px] text-[16px] md:text-[2vw]">
                        {item.icon}
                      </i>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 flex gap-4">
        <button
          onMouseDown={() => startContinuousRotation(angleStep)}
          onMouseUp={stopContinuousRotation}
          onMouseLeave={stopContinuousRotation}
          onTouchStart={() => startContinuousRotation(angleStep)}
          onTouchEnd={stopContinuousRotation}
          className="bg-white text-black w-[50px] h-[50px] flex justify-center items-center text-[20px] rounded-full shadow-md hover:bg-gray-200 transition"
        >
          ← 
        </button>

        <button
          onMouseDown={() => startContinuousRotation(-angleStep)}
          onMouseUp={stopContinuousRotation}
          onMouseLeave={stopContinuousRotation}
          onTouchStart={() => startContinuousRotation(-angleStep)}
          onTouchEnd={stopContinuousRotation}
          className="bg-white text-black w-[50px] h-[50px] flex justify-center items-center text-[20px] rounded-full shadow-md hover:bg-gray-200 transition"
        >
           →
        </button>
      </div>
    </div>
  );
};

export default Carousel;