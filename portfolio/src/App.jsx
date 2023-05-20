import { Hero, Navigation, About, WhatIDo, Contact } from "./section";

function App() {
  return (
    <section className="flex flex-col items-center ">
      <Navigation/>
      <Hero/>
    </section>
  );
}

export default App;
