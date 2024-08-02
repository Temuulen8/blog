import React from "react";
import { IoIosSearch } from "react-icons/io";

const Header = () => {
  return (
    <header className="flex justify-between py-8 px-80	items-center">
      <img src="./imgs/Logo.png" alt="" className="w-[158px] h-[36px]" />
      <div className="flex gap-x-10">
        <p>Home</p>
        <p>Blog</p>
        <p>Contact</p>
      </div>
      <button className="flex bg-[#F4F4F5] items-center rounded-lg p-2">
        <input
          type="search"
          className="border rounded-lg bg-[#F4F4F5] border-none focus:outline-none"
          placeholder="search"
        />
        <IoIosSearch />
      </button>
    </header>
  );
};

export default Header;
