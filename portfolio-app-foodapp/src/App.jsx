import React, { useState } from "react";
import { Hero, Navbar, CartPopUp } from "./sections";
import CartList from "./context/cart-list";

const App = () => {
  const [cartState, setCartState] = useState(false);
  const [cartArray, setCartArray] = useState([]);

  return (
    <CartList.Provider value={{ cartItems: cartArray }}>
      <section>
        <Navbar
          cartState={(e) => {
            setCartState(e);
          }}
        />
        <Hero cartArray={(e) => setCartArray(e)} />
        <div
          className={`${
            cartState
              ? "absolute right-[2%] top-[20vh] bg-transparent"
              : " hidden"
          }`}
        >
          <CartPopUp />
        </div>
      </section>
    </CartList.Provider>
  );
};

export default App;
