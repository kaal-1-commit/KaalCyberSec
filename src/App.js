
import './App.css';
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
  return (
    <div className="App">


  
    <Landingpage/>
   
    <Service/>
    <Bundles />
     <About/>

    <TechStack/>
     <Testimonials/>
    <CaseStudies/>
    <Caareer/>
    <Contact/>
    <Footer/>
   
    
    </div>
  );
}

export default App;
