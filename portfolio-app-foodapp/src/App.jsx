import React, { useState } from "react";
import { Hero, Navbar, CartPopUp } from "./sections";

const App = () => {
  const [cartState,setCartState] = useState(false)
  const [cartArray,setCartArray] = useState([])

  return (
    <section>
      <Navbar cartState={(e) => {setCartState(e)}} />
      <Hero />
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
  );
};

export default App;
