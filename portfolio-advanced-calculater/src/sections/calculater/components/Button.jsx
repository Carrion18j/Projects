import React from "react";
import buttonItems from "./buttonList";

export const Button = (props) => {
  return (
    <div>
      {buttonItems.map((item, index) => {
        return (
          <div
            className="items"
            key={index}
            onClick={() => {
              return (props.Value(item));
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
