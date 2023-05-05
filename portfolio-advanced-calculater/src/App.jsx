import React, { useState } from "react";
import Calculater from "./sections/calculater";
import Agecalculater from "./sections/agecalculater";
import "./App.css";

const App = () => {
  const [renderedItem, setRenderedItem] = useState(<Calculater />);

  return (
    <section className="app_section">
      <div className="app_renderItems">
        <button
          className="header_button"
          onClick={() => setRenderedItem(<Agecalculater />)}
        >
          <Agecalculater />
        </button>
        <button
          className="header_button"
          onClick={() => setRenderedItem(<Agecalculater />)}
        >
          <Agecalculater />
        </button>
        <button
          className="header_button"
          onClick={() => setRenderedItem(<Agecalculater />)}
        >
          <Agecalculater />
        </button>
      </div>
      <div className="app_renderer">{renderedItem}</div>
    </section>
  );
};

export default App;
