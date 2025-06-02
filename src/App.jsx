import Header from "./Components/Layout/Header";
import AboutMe from "./Components/Sections/AboutMe";
import GTA from "./Components/Sections/GTA";
import Hero from "./Components/Sections/Hero";
import SmoothScroll from "./Components/UI/SmoothScroll";

function App() {


  return (
    <>
      <SmoothScroll>

        {/* <GTA /> */}
        <Header />
        <div className="HeroBgGrid top-0 left-0 absolute w-full h-screen"></div>

        <Hero />
        <AboutMe />
      </SmoothScroll>
    </>
  );
}

export default App;