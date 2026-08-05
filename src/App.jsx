import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";
import About from "./Components/Sections/About";
import Services from "./Components/Sections/Services";
import TechStack from "./Components/Sections/TechStack";
import Hero from "./Components/Sections/Hero";
import HeroShowcase from "./Components/Sections/HeroShowcase";
import Projects from "./Components/Sections/Projects";
import Stats from "./Components/Sections/Stats";
import Process from "./Components/Sections/Process";
import Testimonials from "./Components/Sections/Testimonials";
import FAQ from "./Components/Sections/FAQ";
import Contact from "./Components/Sections/Contact";
import SmoothScroll from "./Components/UI/SmoothScroll";

function App() {
  return (
    <>
      <SmoothScroll>
        <div id="top" className="relative">
          <Header />

          <div className="HeroBgGrid top-0 left-0 absolute w-full h-screen"></div>
          <Hero />
          <HeroShowcase />

          <About />
          <Services />
          <TechStack />
          <Projects />
          <Stats />
          <Process />
          <Testimonials />
          <FAQ />
          <Contact />
          <Footer />
        </div>
      </SmoothScroll>
    </>
  );
}

export default App;
