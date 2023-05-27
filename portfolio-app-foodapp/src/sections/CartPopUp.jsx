import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import cartItems from "../context/cart-list";

const CartPopUp = () => {
  const [showPlaceOrder, setShowPlaceOrder] = useState(false);
  const cart = useContext(cartItems);

  useEffect(() => {
    console.log(loadedDishes);
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
      {cart.cartItems.map((item, id) => {
        return (
          <motion.div
            whileHover={{ scale: [null, 1.1], duration: 0.3 }}
            key={id}
            className=" bg-slate-400 p-[20px] flex justify-between px-[16px] mb-[20px] rounded-[16px] min-w-[300px]"
          >
            <div>
              <h2 className=" font-extrabold text-[18px]">{item.item}</h2>
              <p className=" font-medium">{item.about}</p>
              <p className=" text-red-800 text-[18px] font-medium">
                Price: {item.price}
              </p>
            </div>
            <div>
              <div className="flex flex-col">
                <label
                  htmlFor="foodAmount"
                  className="font-semibold text-[18px]"
                >
                  Price:
                </label>
                <input
                  type="text"
                  disabled
                  value={item.price}
                  className=" text-center w-[86px] bg-white border-[0px] rounded-[8px] ml-[10px] px-[8px] py-[2px]"
                />

                <label
                  htmlFor="foodAmount"
                  className="font-semibold text-[18px]"
                >
                  Quantity:
                </label>
                <input
                  type="text"
                  disabled
                  value={item.quantity}
                  className=" text-center w-[86px] bg-white border-[0px] rounded-[8px] ml-[10px] px-[8px] py-[2px]"
                />
              </div>
            </div>
          </motion.div>
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
