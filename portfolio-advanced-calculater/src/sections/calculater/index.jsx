import React, { useState } from "react";
import Button from "./components/Button";
import "./style/style.css";

const Calculater = () => {
  const [errer, setErrer] = useState(false);
  const [value, setValue] = useState("");

  if (localStorage.getItem("lastValue") === "undefined") {
    localStorage.setItem("lastValue", 0);
  }

  const result = (propValue) => {
    switch (propValue) {
      case propValue:
        if (propValue === "x") {
          setValue(value + "*");
          break;
        }
      case propValue:
        if (propValue === "C") {
          setValue("");
          break;
        }
      case propValue:
        if (propValue === "=") {
          try {
            setErrer(false);
            const Value = (eval(value)).toString().substring(0, 8)
            console.log(Value)
            localStorage.setItem("lastValue", Value);
            setValue(Value);
          } 
          catch (errer) {
            console.log(value)
            setErrer(true);
            setValue("");
          }
          break;
        }
      case propValue:
        setValue(value + `${propValue}`);
        break;
    }
  };

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
          <Button Error={setErrer} Value={result} />
        </div>
      </div>
    </section>
  );
};

export default Calculater;
