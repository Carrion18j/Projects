import React from "react";
import { motion } from "framer-motion";

const CartPopUpItems = ({ item }) => {
  return (
    <motion.div
      whileHover={{ scale: [null, 1.1], duration: 0.3 }}
      className=" bg-slate-400 p-[20px] flex justify-between px-[16px] mb-[20px] rounded-[16px] min-w-[300px]"
    >
      <div>
        <h2 className=" font-extrabold text-[18px]">{item.name}</h2>
        <p className=" font-medium">{item.description}</p>
        <p className=" text-red-800 text-[18px] font-medium">
          Price: {item.price}
        </p>
      </div>
      <div>
        <div className="flex flex-col">
          <label htmlFor="foodAmount" className="font-semibold text-[18px]">
            Price:
          </label>
          <input
            type="text"
            disabled
            value={item.price}
            className=" text-center w-[86px] bg-white border-[0px] rounded-[8px] ml-[10px] px-[8px] py-[2px]"
          />

          <label htmlFor="foodAmount" className="font-semibold text-[18px]">
            Quantity: {item.quantity}
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
};

export default CartPopUpItems;
