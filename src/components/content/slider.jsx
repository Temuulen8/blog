import React, { useState } from "react";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import Cariousel from "../carousel";
``;

const slides = [
  { image: "./images/content.png", text: "" },
  { image: "./images/content.png", text: "" },
  { image: "./images/content.png", text: "" },
  { image: "./images/content.png", text: "" },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <>
      <div className="container m-auto flex justify-between flex-col items-center p-5">
        <div className=" bg-violet-50 overflow-hidden">
          <Cariousel currentIndex={currentIndex} slides={slides} />
        </div>
        <div className="flex gap-2 container m-auto justify-end mt-3">
          <button
            className="border border-black p-4 rounded"
            onClick={() => {
              if (currentIndex <= 0) {
                setCurrentIndex(slides.length - 1);
              } else {
                setCurrentIndex(currentIndex - 1);
              }
            }}
          >
            <GrPrevious />
          </button>
          <button
            className="border border-black p-4 rounded"
            onClick={() => {
              if (currentIndex >= slides.length - 1) {
                setCurrentIndex(0);
              } else {
                setCurrentIndex(currentIndex + 1);
              }
            }}
          >
            <GrNext />
          </button>
        </div>
      </div>
    </>
  );
};

export default Slider;
