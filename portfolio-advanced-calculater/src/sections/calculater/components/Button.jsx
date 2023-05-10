import React, { useState } from "react";
import buttonItems from "./buttonList";

export const Button = (props) => {
  const [error, setErrer] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div>
      {buttonItems.map((item, index) => {
        return (
          <div
            className="items"
            key={index}
            onClick={() => {
              console.log(value + item);
              if (item === "C") {
                setValue("");
                return (props.Value(value));
              }
              if (item === "=") {
                try {
                  setErrer(false);
                  localStorage.setItem("lastValue", eval(value));
                  setValue("");
                  return (props.Value(value));
                } catch (errer) {
                  setErrer(true);
                  props.Error(error);
                  setValue("");
                  return (props.Value(value));
                }
              }
              if (item === "x") {
                setValue(value + "*");
                return (props.Value(value));
              }
              if (item === "/") {
                setValue(value + "/");
                return (props.Value(value));
              }
              console.log(value);
              setValue(value + item);
              return (props.Value(value));
            }}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default Button;
