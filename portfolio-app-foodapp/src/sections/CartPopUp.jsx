import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import CartPopUpItems from "./components/CartPopUpItems";
import cartItems from "../context/cart-list";

const CartPopUp = () => {
  const [showPlaceOrder, setShowPlaceOrder] = useState(false);
  const cart = useContext(cartItems);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const loadedDishes = [];
  const disches = cart.cartItems;

  for (const key in disches) {
    loadedDishes.push({
      id: key,
      name: disches[key].name,
      price: disches[key].price,
      description: disches[key].description,
    });
  }

  useEffect(() => {
    if (cart.length < 1 || cart == undefined) {
      setShowPlaceOrder(false);
    } else {
      setShowPlaceOrder(true);
    }
  }, [cart]);

  return (
    <div className="flex flex-col items-center p-[16px] bg-slate-500 rounded-[16px]">
      <h1 className="my-[8px] text-[22px] font-bold">My Cart</h1>
      {loadedDishes.map((item, id) => {
        // console.log(item);
        return (
          <div key={id}>
            <CartPopUpItems item={item} />
          </div>
        );
      })}
      {showPlaceOrder ? (
        <motion.button
          whileHover={{ scale: 1.1, duration: 0.4 }}
          whileTap={{ scale: 0.85, duration: 0.4 }}
          className="my-[8px] text-[22px] font-bold bg-red-800 rounded-[16px] px-[10px] p-[4px]"
        >
          Place Order
        </motion.button>
      ) : (
        ""
      )}
    </div>
  );
};

export default CartPopUp;
