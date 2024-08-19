import React, { useState, useEffect } from "react";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpeg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.png";

const images = [img1, img2, img3, img4];

const CarouselDefault = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 2000);

    return () => clearInterval(interval); 
  }, [currentIndex]);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative z-10 h-auto w-full object-cover">
      <div className="relative z-0 h-[calc(100vh-156px)] w-full overflow-hidden">
        <div
          className="z-0 flex h-fit w-full transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index}`}
              className="z-0 h-auto w-full object-cover"
            />
          ))}
        </div>
      </div>

      <button
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 transform bg-red-500 bg-opacity-50 p-2 text-white hover:bg-opacity-100 rounded-sm"
        onClick={goToPrevSlide}
      >
        &#8592;
      </button>
      <button
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 transform bg-red-500 bg-opacity-50 p-2 text-white hover:bg-opacity-100 rounded-sm"
        onClick={goToNextSlide}
      >
        &#8594;
      </button>

      <div className="absolute bottom-2 left-1/2 z-0 flex -translate-x-1/2 transform space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full ring-2 ring-white ${
              currentIndex === index ? "bg-red-700" : "bg-red-200 hover:bg-gray-500"
            } z-0`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default CarouselDefault;
