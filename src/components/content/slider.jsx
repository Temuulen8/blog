import React, { useState } from "react";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import Cariousel from "../carousel";

const slides = ["bg-blue-400", "bg-teal-400", "bg-violet-400", "bg-orange-400"];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <>
      <div className="my-[100px]">
        <div className="m-auto h-[600px] w-[1550px] bg-violet-50 overflow-hidden">
          <Cariousel currentIndex={currentIndex} slides={slides} />
        </div>
        <div className="flex gap-2 container m-auto justify-end mt-3">
          <button
            className="border border-black p-4 rounded"
            onClick={() => {
              setCurrentIndex(currentIndex - 1);
            }}
          >
            <GrPrevious />
          </button>
          <button
            className="border border-black p-4 rounded"
            onClick={() => {
              setCurrentIndex(currentIndex + 1);
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
