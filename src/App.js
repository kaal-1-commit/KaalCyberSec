import './App.css';
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { HelmetProvider } from 'react-helmet-async'
// Pages
import Loader from './pages/Loader';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Career from './pages/Career';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Generate from './pages/generate';
import Verify from './pages/Verify';
import ClientSuccess from "./pages/ClientSuccess";
import BlogPost from './pages/BlogPost';

const App = () => {
  /* INITIALIZE AOS GLOBALLY */
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  const [loading, setLoading] = useState(true);

  /* LOADER */
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

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
      <HelmetProvider>
      <Router basename='KaalCyberSec'>
        <ScrollToTop /> 
        {/* CYBER BACKGROUND */}
        <div className="cyber-grid"></div>

        {/* CURSOR GLOW */}
        <div className="mouse-light"></div>

        {/* AMBIENT TOP GLOW */}
        <div className="top-glow"></div>

        {/* GLOBAL COMPONENTS */}
        <Navbar />

        {/* PAGE ROUTES */}
        <Routes>
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} /> 
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/career" element={<Career />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/generate" element={<Generate />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/case-studies" element={<ClientSuccess />} />
        
        </Routes>

        {/* GLOBAL COMPONENTS */}
        <Footer />
      </Router>
      </HelmetProvider>
    </div>
  );
}

export default App;