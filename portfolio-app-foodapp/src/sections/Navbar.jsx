import React, { useState } from "react";
import { motion } from "framer-motion";
import Cart from "../assets/cart.svg";
import cartItems from "../context/cart-list";

const Navbar = ({ cartState }) => {
  const [cartAvtive, setCartAvtive] = useState(true);
  const cart = React.useContext(cartItems);

  const cartStateHandler = () => {
    setCartAvtive(!cartAvtive);
    return cartState(cartAvtive);
  };

  return (
    <nav className=" bg-red-600 min-h-[76px] flex justify-around items-center">
      <h1 className=" text-yellow-50 text-[26px] font-extrabold cursor-pointer">
        ReactMeals
      </h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        whileHover={{ scale: [null, 1.2, 1.2] }}
        whileTap={{ scale: [null, 0.95], duration: 0.3 }}
        className=" bg-red-800 flex h-[46px] min-w-[200px] p-[16px] rounded-[26px] justify-evenly items-center gap-[10px]"
        onClick={cartStateHandler}
      >
        <img
          src={Cart}
          alt="Cart"
          className=" h-[26px] cursor-pointer"
          itemType="button"
        />
        <button className=" text-yellow-50  font-extrabold" itemType="button">
          Your Cart
        </button>
        <p className=" min-w-[36px] bg-red-600 p-[4px] text-yellow-50  font-extrabold  flex justify-center items-center rounded-[8px]">
          {cart.cartItems.length}
        </p>
      </motion.div>
    </nav>
  );
};

export default Navbar;
