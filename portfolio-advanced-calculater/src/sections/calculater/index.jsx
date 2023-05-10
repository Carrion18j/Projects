import React, { useState } from "react";
import Button from "./components/Button";
import "./style/style.css";

const Calculater = () => {
  const [errer, setErrer] = useState(false);
  const [value, setValue] = useState(0);
  
  if (localStorage.getItem("lastValue") === "undefined") {
    localStorage.setItem("lastValue", 0);
  }
  
  return (
    <section>
      <div className="calculater_container">
        <div className="calculater_upper_div">
          <div>
            <p>Last Calclation</p>
            <p>{errer ? "Invalid value" : localStorage.getItem("lastValue")}</p>
          </div>
          <input placeholder="0" disabled value={value} />
        </div>
        <div className="calculater_lower_div">
          <Button Error={setErrer} Value={setValue} />
        </div>
      </div>
    </section>
  );
};

export default Calculater;
