import Header from "./Components/Layout/Header";
import GTA from "./Components/Sections/GTA";
import Hero from "./Components/Sections/Hero";

function App() {


  return (
    <>
      {/* <GTA /> */}
      <Header/>
      <div className="HeroBgGrid top-0 left-0 absolute w-full h-screen"></div>

      <Hero/>
    </>
  );
}

export default App;