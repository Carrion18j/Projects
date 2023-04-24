import { Hero, Navigation, About, WhatIDo, Contact } from "./section";

function App() {
  return (
    <section className="flex flex-col items-center bg-[#1B1F24]">
      <div className="bg-[#1B1F24]">
        <Hero />
        <Navigation />
        <About />
        <WhatIDo />
        <Contact />
      </div>
    </section>
  );
}

export default App;
