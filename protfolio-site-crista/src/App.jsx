import { Cards, ClientReview, FEQ, Hero, NavBar, Stats } from "./components";


function App() {
  return (
    <div className="bg-primary overflow-hidden ">
      <NavBar />
      <Hero />
      <Stats/>
      <Cards />
      <ClientReview />
      <FEQ />
    </div>
  );
}

export default App;
