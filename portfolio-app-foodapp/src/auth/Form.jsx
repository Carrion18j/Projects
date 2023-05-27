import React, { useState } from "react";

const Form = (e) => {
  const [formIsValid, setFormIsValid] = useState(false);
  e.formState(formIsValid);

  const formSubmitButtonHandler = (event) => {
    event.preventDefault();

    setFormIsValid((e) => {
      !e;
    });
  };

  return (
    <form action="">
      <div className="Inputs">
        <div className="userName"></div>
        <div className="password"></div>
      </div>
      <div className="submit-div">
        <button className="formSubmitButtion" onClick={formSubmitButtonHandler}>
          Button
        </button>
      </div>
    </form>
  );
};

export default Form;
