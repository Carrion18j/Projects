import React, { useState } from "react";
import Calculater from "./sections/calculater";
import OtherApp from "./sections/otherApps/index";
import calculaterSvg from "./sections/assets/calculator.png";
import "./App.css";

const App = () => {
  const [renderedItem, setRenderedItem] = useState(<OtherApp />);

  return (
    <section className="app_section">
      <div className="app_renderItems">
        <button
          className="header_button"
          onClick={() => setRenderedItem(<Calculater />)}
        >
          <img className="calculater" src={calculaterSvg} alt="calculater" />
        </button>
        <button
          className="header_button"
          onClick={() => setRenderedItem(<OtherApp />)}
        >
         OtherApp
        </button>
      </div>
      <div className="app_renderer">{renderedItem}</div>
    </section>
  );
};

export default App;
