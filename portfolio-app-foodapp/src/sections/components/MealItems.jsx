import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const MealItems = ({ foodList, items }) => {
  const [orderedItems, setOrderedItems] = useState([]);
  const [amount, setAmount] = useState(0);

  const AddOnClickHandeler = () => {
    amount === 20 ? () => {} : setAmount((e) => e + 1);
    let newItem;
    let exsistingArray = orderedItems;

    const itemIndex = orderedItems.findIndex(
      (value) => value.item === items.name
    );
    if (itemIndex === -1) {
      newItem = {
        quantity: amount + 1,
        name: items.name,
        price: items.price,
        description: items.description,
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
        quantity: amount - 1,
        name: items.name,
        price: items.price,
        description: items.description,
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
        exsistingArray.splice(orderedItems.indexOf(e), 1);
      }
    });

    return setOrderedItems(() => [...exsistingArray]);
  };

  useEffect(() => {
    foodList(orderedItems);
  }, [orderedItems]);

  return (
    <motion.div
      whileHover={{ scale: [null, 1.1], duration: 0.3 }}
      className="cursor-pointer bg-slate-400 p-[20px] flex min-w-[600px] justify-between px-[48px] mb-[20px] rounded-[16px]"
    >
      <div>
        <h2 className=" font-extrabold text-[18px]">{items.name}</h2>
        <p className=" font-medium">{items.description}</p>
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
};

export default MealItems;

// const AddOnClickHandeler = () => {
//   amount === 20 ? () => {} : setAmount((e) => e + 1);
//   let newItem;
//   let exsistingArray = orderedItems;
//   const itemIndex = orderedItems.findIndex(
//     (value) => value.item === items.name
//   );
//   if (itemIndex === -1) {
//     newItem = {
//       quantity: 1,
//       name: items.name,
//       price: items.price,
//       description: items.description,
//     };
//     exsistingArray.push(newItem);
//   } else {
//     const newItem = orderedItems[itemIndex];
//     newItem.quantity = newItem.quantity + 1;
//     exsistingArray.splice(itemIndex, 1);
//     exsistingArray.push(newItem);
//   }

//   return setOrderedItems(() => [...exsistingArray]);
// };

// const DeleteOnClickHandeler = () => {
//   amount === 0 ? () => {} : setAmount((e) => e - 1);

//   let newItem;
//   let exsistingArray = orderedItems;
//   const itemIndex = orderedItems.findIndex(
//     (value) => value.item === items.name
//   );
//   if (itemIndex === -1) {
//     newItem = {
//       quantity: 1,
//       name: items.name,
//       price: items.price,
//       description: items.description,
//     };
//     exsistingArray.push(newItem);
//   } else {
//     const newItem = orderedItems[itemIndex];
//     newItem.quantity = newItem.quantity - 1;
//     exsistingArray.splice(itemIndex, 1);
//     exsistingArray.push(newItem);
//   }

//   orderedItems.forEach((e) => {
//     if (e.quantity === 0) {
//       exsistingArray.splice(orderedItems.indexOf(e), 1);
//     }
//   });

//   return setOrderedItems(() => [...exsistingArray]);
// };
