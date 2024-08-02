import React from "react";

const Hero = () => {
  return (
    <div className="m-auto">
      <div className="w-full relative">
        <div>
          <img src="./imgs/Image.png" alt="zurag" className="w-full" />
        </div>
        <div className="bg-white w-[598px] h-[252px] rounded-xl absolute">
          <p>Technology</p>
          <h1>Grid system for better Design User Interface</h1>
          <p>August 20, 2022</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
