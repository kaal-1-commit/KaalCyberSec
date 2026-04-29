import './App.css';

import { useEffect, useState } from "react";

import Loader from './components/Loader';

import Landingpage from './components/Landingpage';
import Contact from './components/Contact';
import Service from './components/Service';
import About from './components/About';
import Testimonials from './components/Testimonial';
import TechStack from './components/Technology';
import CaseStudies from './components/Case';
import Caareer from './components/Career';
import Footer from './components/Footer';
import Bundles from "./components/Bundles";

const App = () => {

  const [loading, setLoading] = useState(true);

  /* LOADER */
  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);

  }, []);

  /* MOUSE LIGHT */
  useEffect(() => {

    const light = document.querySelector(".mouse-light");

    const moveLight = (e) => {

      if (!light) return;

      light.style.left = `${e.clientX}px`;
      light.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", moveLight);

    return () => {
      window.removeEventListener("mousemove", moveLight);
    };

  }, []);

  /* SHOW LOADER FIRST */
  if (loading) {
    return <Loader onFinish={() => setLoading(false)} />;
  }

  return (

    <div className="App">

      {/* CYBER BACKGROUND */}
      <div className="cyber-grid"></div>

      {/* CURSOR GLOW */}
      <div className="mouse-light"></div>

      {/* AMBIENT TOP GLOW */}
      <div className="top-glow"></div>

      {/* WEBSITE */}

      <Landingpage />

      <Service />

      <Bundles />

      <About />

      <TechStack />

      <Testimonials />

      <CaseStudies />

      <Caareer />

      <Contact />

      <Footer />

    </div>
  );
}

export default App;