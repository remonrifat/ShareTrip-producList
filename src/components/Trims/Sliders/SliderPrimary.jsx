import React, { useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const SliderPrimary = ({slides}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % slides.length);
    }, 3000); // Change slide every 5 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, [currentSlide]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-96 overflow-hidden">
      <div className="flex transition-transform duration-500 ease-in-out"
           style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide) => (
          <div key={slide.id} className="w-full h-full flex-shrink-0">
            <img src={slide.image} alt={slide.caption} className="w-full h-full object-cover" />
            <div className="absolute top-0 left-0 right-0 p-1 bg-secondary-900 bg-opacity-20 text-secondary-100">
              <h2 className="text-4xl text-center font-semibold">{slide.caption}</h2>
            </div>
          </div>
        ))}
      </div>
      <button className="absolute top-1/2 left-4 transform -translate-y-1/2 text-secondary-900 bg-primary-100 px-1 py-1 rounded-full" onClick={prevSlide}>
      <FaChevronLeft size={35} />
      </button>
      <button className="absolute top-1/2 right-4 transform -translate-y-1/2 text-secondary-900 bg-primary-100 px-1 py-1 rounded-full" onClick={nextSlide}>
      <FaChevronRight size={35} />
      </button>
      

      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((item, index) => (
          <div
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-24 h-24  object-cover ${index === currentSlide ? 'bg-success-500' : 'bg-gray-400'}`}
          ><img src={item.image} alt="" /></div>
        ))}
      </div>

    </div>
  )
}

export default SliderPrimary