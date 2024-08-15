import React from "react";

const Cariousel = ({ slides, currentIndex }) => {
  return (
    <div
      className="flex h-full transition-all duration-150"
      style={{ transform: `translateX(-${currentIndex * 100}%)` }}
    >
      {slides.map((color, i) => (
        <div className={`min-w-full h-full ${color}`}></div>
      ))}
    </div>
  );
};

export default Cariousel;