import React, { useState } from "react";
import "./style/style.css";

const Calculater = () => {
  const [inputValue, setInputValue] = useState(0);
  const [value,setValue] = useState("")
  return (
    <section>
      <div className="calculater_container">
        <div className="calculater_upper_div">
          <input type="number" disabled value={inputValue} />
        </div>
        <div className="calculater_lower_div">
          <div className="item-1 items">2nd</div>
          <div className="item-2 items">deg</div>
          <div className="item-3 items">sin</div>
          <div className="item-4 items">cos</div>
          <div className="item-5 items">tan</div>
          <div className="item-6 items">
            X<sup>y</sup>
          </div>
          <div className="item-7 items">lg</div>
          <div className="item-8 items">In</div>
          <div className="item-9 items"> &#40;</div>
          <div className="item-10 items">&#41;</div>
          <div className="item-11 items">
            <math>
              <msqrt>
                <mi>x</mi>
              </msqrt>
            </math>
          </div>
          <div className="item-12 items">AC</div>
          <div className="item-13 items"></div>
          <div className="item-14 items"></div>
          <div className="item-15 items"></div>
          <div className="item-16 items"></div>
          <div className="item-17 items"></div>
          <div className="item-18 items"></div>
          <div className="item-19 items"></div>
          <div className="item-20 items"></div>
          <div className="item-21 items"></div>
          <div className="item-22 items"></div>
          <div className="item-23 items"></div>
          <div className="item-24 items"></div>
          <div className="item-25 items"></div>
          <div className="item-26 items"></div>
          <div className="item-27 items"></div>
          <div className="item-28 items"></div>
          <div className="item-29 items"></div>
          <div className="item-30 items"></div>
          <div className="item-31 items"></div>
          <div className="item-32 items"></div>
          <div className="item-33 items"></div>
          <div className="item-34 items"></div>
          <div className="item-35 items"></div>
        </div>
      </div>
    </section>
  );
};

export default Calculater;
