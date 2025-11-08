import { useState } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

export default function StackedImageCarousel({
  images = [
    'https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1600',
    'https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1600',
    'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600',
  ],
  className = '',
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(images.length - 1);

  const next = () => {
    setPrevIndex(activeIndex);
    setActiveIndex((current) => (current + 1) % images.length);
  };

  // Precompute indices for the stacked effect
  const nextIdx = (activeIndex + 1) % images.length;
  const lastIdx = (activeIndex + 2) % images.length;

  return (
    <div className={`relative w-full h-64 ${className}`} style={{ overflow: 'visible' }}>
      {/* MAIN STAGE (absolute) */}
      <div className="absolute inset-0 w-[88%] z-[99] h-full rounded-3xl shadow-md overflow-hidden">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt=""
            style={{
              opacity: index === activeIndex ? 1 : 0,
              transform: `translateX(${index === activeIndex ? '0' : index === prevIndex ? '-100%' : '100%'})`,
            }}
            className="absolute inset-0 w-full h-full object-cover rounded-3xl outline outline-[10px] outline-offset-[-5px] outline-bg-alternative transition-all duration-500 ease-in-out"
          />
        ))}
      </div>
      <div className="absolute inset-0 w-[94%] z-[95] h-60 my-auto rounded-3xl shadow-md overflow-hidden">
        {images.map((image, index) => {
          const adjustedIndex = (index + 1) % images.length;
          return (
            <img
              key={index}
              src={image}
              alt=""
              style={{
                opacity: adjustedIndex === activeIndex ? 1 : 0,
                transform: `translateX(${adjustedIndex === activeIndex ? '0' : adjustedIndex === prevIndex ? '-100%' : '100%'})`,
              }}
              className="absolute inset-0 w-full h-full object-cover rounded-3xl outline outline-[10px] outline-offset-[-5px] outline-bg-alternative transition-all duration-500 ease-in-out"
            />
          );
        })}
      </div>
      <div className="absolute inset-0 w-full z-[90] h-52 my-auto rounded-3xl shadow-md overflow-hidden">
        {images.map((image, index) => {
          const adjustedIndex = (index + 2) % images.length;
          return (
            <img
              key={index}
              src={image}
              alt=""
              style={{
                opacity: adjustedIndex === activeIndex ? 1 : 0,
                transform: `translateX(${adjustedIndex === activeIndex ? '0' : adjustedIndex === prevIndex ? '-100%' : '100%'})`,
              }}
              className="absolute inset-0 w-full h-full object-cover rounded-3xl outline outline-[10px] outline-offset-[-5px] outline-bg-alternative transition-all duration-500 ease-in-out"
            />
          );
        })}
      </div>
      {/* Right edge round button */}
      <button
        onClick={next}
        className="absolute right-16 z-[100] top-1/2 -translate-y-1/2 h-10 w-10 px-2.5 py-[5px] 
                     rounded-xl bg-white/80 border border-gray-200 shadow-md grid place-items-center
                     hover:shadow-lg hover:scale-105 active:scale-95 transition"
        aria-label="Next"
      >
        <FaArrowRightLong />
      </button>
    </div>
  );
}
