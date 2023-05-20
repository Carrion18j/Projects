import React from "react";
import "./css/hero.css";
import bgPattern from "../pics/bgPattern.jpg";

const Hero = () => {
  return (
    <section className="min-h-[90vh] bg-[#222831] w-[100%] flex flex-wrap">
      <div className="h-[90vh] w-[60%] flex flex-col justify-center ">
        <div className="ml-[10%] flex flex-col">
          <h1 className="w-[230px] -mb-[24px] bg-gradient-to-r from-[#e85353] via-[#ff8f8f] to-[#d91010] text-transparent bg-clip-text text-[80px] inline-block font-cursive">
            HELLO!
          </h1>
          <h1 className="text-[46px] text-[#ddcdcd]">I'AM SANIDHYA</h1>
          <p className="text-[26px] text-white">
            100% Html Css React Tamplates Made By Sanidhya
          </p>
          <button className="hireMeButton font-semibold opacity-[60%] mt-[30px] text-[26px] w-[120px] rounded-[8px] bg-red-100">
            Hire Me
          </button>
        </div>
      </div>
      <div className="boxShadow" />
      <div className="h-[100%] w-[40%] border-[#1f1f1f] border-[10px]">
        <img
          src={bgPattern}
          alt="pattern"
          className="h-[90vh] w-[40vw] opacity-[40%]"
        />
      </div>
    </section>
  );
};

export default Hero;
