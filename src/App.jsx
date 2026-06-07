import Header from "./Components/Layout/Header";
import AboutMe from "./Components/Sections/AboutMe";
import CompanySlider from "./Components/Sections/CompanySlider";
import GTA from "./Components/Sections/GTA";
import Hero from "./Components/Sections/Hero";
import Projects from "./Components/Sections/Projects";
import Stats from "./Components/Sections/Stats";
import ProfileUI from "./Components/UI/ProfileUI";
import SmoothScroll from "./Components/UI/SmoothScroll";

function App() {


  return (
    <>
      <SmoothScroll>

        {/* <GTA /> */}

        {/* <ProfileUI/> */}

        <Header />

        <div className="HeroBgGrid top-0 left-0 absolute w-full h-screen"></div>

        <Hero />

        <CompanySlider />
        <Stats/>
        <Projects />

        {/* <AboutMe /> */}

      </SmoothScroll>
    </>
  );
}

export default App;