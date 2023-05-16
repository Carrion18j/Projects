import React, { useEffect, useState } from "react";
import foodList from "../data/foodList";
import { motion } from "framer-motion";

const Items = (props) => {
  const [orderedItems, setOrderedItems] = useState([]);

  useEffect(() => {
    props.cartArray(orderedItems)
  }, [orderedItems]);

  return (
    <div className="flex flex-col justify-center absolute left-[50%] transform -translate-x-1/2 top-[80vh] ">
      {foodList.map((items, id) => {
        const [amount, setAmount] = useState(0);

        const ReturningItem = {
          item: items.name,
          price: items.price,
          about: items.about,
          amount: amount,
          ItemId: id,
        };

        const AddOnClickHandeler = () => {
          amount === 20 ? () => {} : setAmount((e) => e + 1);
          let newItem;
          let exsistingArray = orderedItems;
          const itemIndex = orderedItems.findIndex(
            (value) => value.item === items.name
          );
          if (itemIndex === -1) {
            newItem = {
              quantity: 1,
              ItemId: id,
              item: items.name,
              price: items.price,
              about: items.about,
            };
            exsistingArray.push(newItem);
          } else {
            const newItem = orderedItems[itemIndex];
            newItem.quantity = newItem.quantity + 1;
            exsistingArray.splice(itemIndex, 1);
            exsistingArray.push(newItem);
          }

          return setOrderedItems(() => [...exsistingArray]);
        };

        const DeleteOnClickHandeler = () => {
          amount === 0 ? () => {} : setAmount((e) => e - 1);

          let newItem;
          let exsistingArray = orderedItems;
          const itemIndex = orderedItems.findIndex(
            (value) => value.item === items.name
          );
          if (itemIndex === -1) {
            newItem = {
              item: items.name,
              price: items.price,
              about: items.about,
              quantity: 1,
              ItemId: id,
            };
            exsistingArray.push(newItem);
          } else {
            const newItem = orderedItems[itemIndex];
            newItem.quantity = newItem.quantity - 1;
            exsistingArray.splice(itemIndex, 1);
            exsistingArray.push(newItem);
          }

          orderedItems.forEach((e) => {
            if (e.quantity === 0) {
              exsistingArray.splice(orderedItems.indexOf(e),1)
            }
          });

          return setOrderedItems(() => [...exsistingArray]);
        };

        return (
          <motion.div
            whileHover={{ scale: [null, 1.1], duration: 0.3 }}
            key={id}
            className=" bg-slate-400 p-[20px] flex min-w-[600px] justify-between px-[48px] mb-[20px] rounded-[16px]"
          >
            <div>
              <h2 className=" font-extrabold text-[18px]">{items.name}</h2>
              <p className=" font-medium">{items.about}</p>
              <p className=" text-red-800 text-[18px] font-medium">
                Price: {items.price}
              </p>
            </div>
            <div>
              <div className="flex">
                <label htmlFor="foodAmount" className=" font-semibold">
                  Amount
                </label>
                <input
                  type="text"
                  id="foodAmount"
                  disabled
                  value={amount}
                  className=" text-center w-[38px] bg-white border-[0px] rounded-[8px] ml-[10px]"
                />
              </div>
              <motion.button
                whileTap={{ scale: [null, 0.8], duration: 0.4 }}
                onClick={AddOnClickHandeler}
                className=" bg-slate-500 m-[16px] ml-[0px] p-[4px] text-red-900 rounded-[8px] font-medium"
              >
                + Add
              </motion.button>
              <motion.button
                whileTap={{ scale: [null, 0.8], duration: 0.4 }}
                onClick={DeleteOnClickHandeler}
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
