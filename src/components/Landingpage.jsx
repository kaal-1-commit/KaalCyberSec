import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Typewriter from "typewriter-effect";

// Background GIF (assets folder me rakho)
import cyberBg from "../assests/KCS.jpg";

export default function KaalCyberSecLanding() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="font-tesla">
      <style>{`
        @import url('https://fonts.cdnfonts.com/css/tesla');
        .font-tesla { font-family: 'Tesla', sans-serif; }

        body { background-color: #000; color: #fff; }

        /* Navbar */
        .navbar-custom {
          background: #000;
          border-bottom: 1px solid rgba(26, 255, 0, 1);
        }
        .navbar-custom .nav-link {
          color: rgba(0, 255, 85, 1) !important;
          text-transform: uppercase;
          font-weight: bold;
          transition: 0.3s;
        }
        .navbar-custom .nav-link:hover {
          color: #ff0 !important;
          text-shadow: 0 0 8px #ff0;
        }

        /* Hero Section */
        .hero-container {
          position: relative;
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          color: #fff;
          overflow: hidden;
        }
        .hero-container img {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          object-fit: cover;
          z-index: -1;
        }
        .hero-overlay {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background: rgba(0,0,0,0.7);
          z-index: 0;
        }
        .hero-content {
          position: relative;
          z-index: 1;
          max-width: 800px;
          padding: 20px;
        }
        .typewriter-text {
          font-size: 2.5rem;
          font-weight: bold;
          color: rgba(68, 255, 0, 0.76);
          text-shadow: 0px 0px 12px rgba(68, 255, 0, 0.76), 0px 0px 25px rgba(68, 255, 0, 0.76);
        }

        /* Buttons */
        .neon-btn {
          background: transparent;
          border: 2px solid  rgba(68, 255, 0, 0.76);
          color:rgba(68, 255, 0, 0.76);
          padding: 12px 28px;
          font-weight: bold;
          border-radius: 8px;
          transition: all 0.3s;
        }
        .neon-btn:hover {
          background: rgba(68, 255, 0, 0.76);
          color: #000;
          box-shadow: 0px 0px 20px rgba(68, 255, 0, 0.76);
        }
      `}</style>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-custom fixed-top">
        <div className="container">
          <a className="navbar-brand text-success fw-bold" href="#hero">KaalCyberSec</a>
          <div className="collapse navbar-collapse justify-content-end">
            <ul className="navbar-nav gap-4">
              <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
               <li className="nav-item"><a className="nav-link" href="#career">Career</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero-container">
        <img src={cyberBg} alt="Cyber Background"  />
        <div className="hero-overlay"></div>
        <div className="hero-content" data-aos="fade-up">
          <div className="typewriter-text">
            <Typewriter
              options={{
                strings: [
                  "Hack the Future with KaalCyberSec",
                  "Guardians of the Digital Realm",
                  "Penetration Testing & Red Teaming",
                  "Secure Development & Cyber Defense",
                  "Empowering Enterprises Against Cyber Threats"
                ],
                autoStart: true,
                loop: true,
                delay: 40,
                deleteSpeed: 20,
              }}
            />
          </div>
          <p className="lead mt-45 text-success" ><b>
            We are a futuristic cybersecurity company with a team of developers, 
            ethical hackers, and security researchers working together to defend 
            governments, enterprises, and startups from digital threats.</b>
          </p>
          <div className="mt-4">
            <a href="#services" className="neon-btn mx-2">Explore Services</a>
            <a href="#contact" className="neon-btn mx-2">Get in Touch</a>
          </div>
        </div>
      </section>

    </div>
  );
}
