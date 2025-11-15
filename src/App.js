
import './App.css';
import Landingpage from './components/Landingpage';
import Contact from './components/Contact';
import Service from './components/Service';
import About from './components/About';
import Testimonials from './components/Testimonial';
import TechStack from './components/Technology';
import CaseStudies from './components/Case';
import Caareer from './components/Career';

const App = () => {
  return (
    <div className="App">


  
    <Landingpage/>
    <About/>
    <Service/>
    <TechStack/>
     <Testimonials/>
    <CaseStudies/>
    <Caareer/>
    <Contact/>
   
    
    </div>
  );
}

export default App;
