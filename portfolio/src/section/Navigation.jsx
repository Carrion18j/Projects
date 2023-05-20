import React from "react";
import './css/navigation.css'
import logo from "../pics/logo.jpg";

const navigation = () => {
  return (
    <nav className="bg-[#e5e7e6] h-[10vh] w-[100%] flex">
      <div className="w-[60%] h-[100%]">
        <ul className="h-[100%] flex justify-around items-center cursor-pointer">
          <img src={logo} alt="logo" className="logo w-[56px] aspect-square" />
          <li className="links rounded cursor-pointer px-[16px] py-[8px] text-[#393E46] font-bold">
            Home
          </li>
          <li className="links rounded cursor-pointer px-[16px] py-[8px] text-[#393E46] font-bold">
            About
          </li>
          <li className="links rounded cursor-pointer px-[16px] py-[8px] text-[#393E46] font-bold">
            Portfolio
          </li>
          <li className="links rounded cursor-pointer px-[16px] py-[8px] text-[#393E46] font-bold">
            Contact
          </li>
        </ul>
      </div>
      <div className="w-[40%] h-[100%]"></div>
    </nav>
  );
};

export default navigation;
