import React from "react";
import { logo } from "../assets";

const NavBar = () => {
  return (
    <nav className="flex border-b-[1px] border-black mb-[10px] object-contain h-[100px] items-center">
      <h1 className="text-[30px] text-black font-semibold flex">Sanidhya <span className=" text-red-700 ">.</span></h1>
      <ul className="flex ml-40 justify-center w-[60%] font-medium text-[18px] cursor-pointer">
        <li className="mx-[20px]">Home</li>
        <li className="mx-[20px]">About</li>
        <li className="mx-[20px]">Works</li>
        <li className="mx-[20px]">Projects</li>
        <li className="mx-[20px]">Services</li>
      </ul>
      <div className=" border-black border-[2px] px-[10px] text-[18px] ml-[10%] font-semibold cursor-pointer hover:bg-black hover:text-white">Let's Chat</div>
    </nav>
  );
};

export default NavBar;
