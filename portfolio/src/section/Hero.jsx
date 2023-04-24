import React from "react";
import { heroBg, heroBg2 } from "../pics";

const Hero = () => {
  return (
    <section className="w-[1800px] aspect-[1.68/1]">
      <div className="mt-[80px]">
        <img
          src={heroBg}
          alt=""
          className="w-[1800px] aspect-[1.68/1] brightness-75 absolute left-[50%] top-[0%] translate-x-[-50%]"
        />
        <div className="relative z-[1] ml-[100px]">
          <img
            src={heroBg2}
            alt=""
            className="h-[900px] aspect-[1.2/1.8] z-[10] opacity-80"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
