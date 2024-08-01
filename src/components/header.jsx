import React from "react";
import { IoIosSearch } from "react-icons/io";

const Header = () => {
  return (
    <header className="flex justify-between py-8 px-80	">
      <img src="./imgs/Logo.png" alt="" className="w-[158px] h-[36px]" />
      <div className="flex gap-x-10">
        <p>Home</p>
        <p>Blog</p>
        <p>Contact</p>
      </div>
      <input type="search" className="border rounded-lg bg-[#F4F4F5]" />
    </header>
  );
};

export default Header;
