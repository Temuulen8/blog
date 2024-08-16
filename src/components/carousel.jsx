import React from "react";

const Cariousel = ({ slides, currentIndex }) => {
  return (
    <div
      className="flex h-full transition-all duration-150"
      style={{ transform: `translateX(-${currentIndex * 100}%)` }}
    >
      {slides.map((slide) => (
        <div className={`min-w-full h-full `}>
          <img src={slide.image} alt="" />
          <p>{slide.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Cariousel;
