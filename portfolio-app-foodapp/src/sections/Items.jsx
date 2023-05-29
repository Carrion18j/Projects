import React, { useEffect, useState, useCallback } from "react";
import MealItems from "./components/MealItems";
const Items = ({ cartArray }) => {
  const [orderedItems, setOrderedItems] = useState([]);
  const [dishesList, setDishesList] = useState([]);

  useEffect(() => {
    cartArray(orderedItems);
  }, [orderedItems]);

  useEffect(() => {
    featchingDishes();
  }, []);

  const featchingDishes = useCallback(async () => {
    const response = await fetch(
      "https://foodapp-984a7-default-rtdb.firebaseio.com/meals.json"
    );
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }

    const data = await response.json();

    const loadedDishes = [];

    for (const key in data) {
      loadedDishes.push({
        id: key,
        name: data[key].name,
        price: data[key].price,
        description: data[key].description,
      });
    }
    return setDishesList(loadedDishes);
  }, []);

  const updatingOrderedItems = (e) => {
    setOrderedItems(e);
  };

  return (
    <div className="flex flex-col justify-center max-w-[600px]">
      {dishesList.map((items, id) => {
        return (
          <div key={id}>
            <MealItems items={items} foodList={updatingOrderedItems} />;
          </div>
        );
      })}
    </div>
  );
};

export default Items;
