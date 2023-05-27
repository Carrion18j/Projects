import React, { useEffect, useState } from "react";
import FoodImg from "../assets/food.jpg";
import Items from "./Items";

const Hero = (props) => {
  const [cartArray, setCartArray] = useState([]);

  useEffect(() => {
    props.cartArray(cartArray);
  }, [cartArray]);

  return (
    <section className="flex flex-col justify-center items-center gap-[26px]">
      <div>
        {/* <img src={FoodImg} alt="FoodImg" className=" opacity-[0.8] absolute" /> */}
      </div>
      <div
        className=" bg-slate-800 p-[40px] rounded-[16px] max-w-[400px]"
      >
        <h1 className=" text-white font-bold text-[26px] text-center">
          Delicious Food, Dilivered To You
        </h1>
        <p className=" text-white my-[16px] text-center">
          Choos your favrite meal from aur broad selection of available meals{" "}
          <br />
          and enjoy a delicious lunch or dinner at home
        </p>
        <p className=" text-white text-center">
          All our meals are cookedwith high quality ingridients, just in time of{" "}
          <br />
          course byexperienced chefs!
        </p>
      </div>
      <Items cartArray={(e) => setCartArray(e)} />
    </section>
  );
};

export default Hero;
