import React, { useState } from "react";
import Form from "./auth/Form";
import { Hero, Navbar, CartPopUp } from "./sections";
import CartList from "./context/cart-list";

const App = () => {
  const [showContent, setShowContent] = useState(false);
  const [cartState, setCartState] = useState(false);
  const [cartArray, setCartArray] = useState([]);

  const cartArrayUpdater = (e) => {
    setCartArray(e);
  };

  const formStateChangeHandler = (e) => {
    setShowContent(e);
  };

  return showContent ? (
    <Form formState={formStateChangeHandler} />
  ) : (
    <CartList.Provider value={{ cartItems: cartArray }}>
      <section>
        <Navbar
          cartState={(e) => {
            setCartState(e);
          }}
        />
        <Hero cartArray={cartArrayUpdater} />
        <div
          className={`${
            cartState
              ? "absolute right-[2%] top-[20vh] bg-transparent"
              : "hidden"
          }`}
        >
          <CartPopUp />
        </div>
      </section>
    </CartList.Provider>
  );
};

export default App;
