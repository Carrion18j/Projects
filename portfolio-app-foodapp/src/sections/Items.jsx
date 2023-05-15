import React, { useState } from "react";
import foodList from "../data/foodList";
import { motion } from "framer-motion";

const Items = ({ cartArray }) => {
  return (
    <div className="flex flex-col justify-center absolute left-[50%] transform -translate-x-1/2 top-[80vh] ">
      {foodList.map(({ name, about, price }, id) => {
        const [amount, setAmount] = useState(0);

        return (
          <motion.div
            whileHover={{ scale: [null, 1.1], duration: 0.3 }}
            key={id}
            className=" bg-slate-400 p-[20px] flex min-w-[600px] justify-between px-[48px] mb-[20px] rounded-[16px]"
          >
            <div>
              <h2 className=" font-extrabold text-[18px]">{name}</h2>
              <p className=" font-medium">{about}</p>
              <p className=" text-red-800 text-[18px] font-medium">Price: {price}</p>
            </div>
            <div>
              <div className="flex">
                <label htmlFor="foodAmount" className=" font-semibold">
                  Amount
                </label>
                <input
                  type="text"
                  id="foodAmount"
                  value={amount}
                  className=" text-center w-[38px] bg-white border-[0px] rounded-[8px] ml-[10px]"
                />
              </div>
              <motion.button
                whileTap={{ scale: [null, 0.8], duration: 0.4 }}
                onClick={() => {
                  amount === 20 ? () => {} : setAmount(amount + 1);
                }}
                className=" bg-slate-500 m-[16px] ml-[0px] p-[4px] text-red-900 rounded-[8px] font-medium"
              >
                + Add
              </motion.button>
              <motion.button
                whileTap={{ scale: [null, 0.8], duration: 0.4 }}
                onClick={() => {
                  amount === 0 ? () => {} : setAmount(amount - 1);
                }}
                className=" bg-slate-500 m-[16px] ml-[0px] p-[4px] text-red-900 rounded-[8px] font-medium"
              >
                - Add
              </motion.button>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Items;
