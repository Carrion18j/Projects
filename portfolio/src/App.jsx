import { NavBar, Hero, Card1, Card2, Card3 } from "./components";

function App() {
  return (
    <div className="mx-[5%]">
      <NavBar />
      <Hero />
      <section>
        <div className="flex justify-around flex-wrap">
          <Card1 />
          <Card2 />
          <Card3 />
        </div>
      </section>
    </div>
  );
}

export default App;
