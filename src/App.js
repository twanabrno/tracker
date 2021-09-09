import Navigation from "./Components/Navigation";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Assets/Style.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Features from "./Components/Features";
import WhyChooseUs from "./Components/WhyChooseUs";
import FAQ from "./Components/FAQ";
import Testimonial from "./Components/Testimonial";
import Footer from "./Components/Footer";
import Subscribe from "./Components/Subscribe";
import Download from "./Components/Download";
import Fade from "react-reveal/Fade";

function App() {
  return (
    <>
      <Navigation />
      <Fade duration={2000}>
        <Home />
        <About />
        <Features />
        <Testimonial />
        <FAQ />
        <Download />
        <Subscribe />
        <Footer />
      </Fade>
    </>
  );
}

export default App;
