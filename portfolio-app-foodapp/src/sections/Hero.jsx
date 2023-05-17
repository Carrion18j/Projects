import React, { useEffect, useState } from "react";
import FoodImg from "../assets/food.jpg";
import { motion } from "framer-motion";
import Items from "./Items";

const Hero = (props) => {
  const [cartArray, setCartArray] = useState([]);

  useEffect(() => {
    props.cartArray(cartArray);
  }, [cartArray]);

  return (
    <section>
      <div>
        <img src={FoodImg} alt="FoodImg" className=" opacity-[0.8] absolute" /  >
      </div>
      <motion.div
        whileHover={{ scale: [null, 1.1], duration: 0.3 }}
        className=" bg-slate-800 p-[40px] rounded-[16px] absolute top-[25%] left-[31.5%]  "
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
      </motion.div>
      <Items cartArray={(e) => setCartArray(e)} />
    </section>
  );
};

export default Hero;
