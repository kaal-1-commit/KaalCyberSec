import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import "bootstrap/dist/css/bootstrap.min.css";

import Typewriter from "typewriter-effect";

import {
  ShieldCheck,
  ChevronRight,
} from "lucide-react";



export default function KaalCyberSecLanding() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (

    <div className="font-tesla">

      <style>{`


      









        @import url('https://fonts.cdnfonts.com/css/tesla');

        .font-tesla {
          font-family: 'Tesla', sans-serif;
        }

        body {
          background: #000000;
          color: #fff;
          overflow-x: hidden;
        }

        /* NAVBAR */

        .navbar-custom {

          background: rgba(0,0,0,0.72);

          backdrop-filter: blur(14px);

          border-bottom: 1px solid rgba(0,255,120,0.14);

          padding: 14px 0;

          transition: 0.4s ease;
          box-shadow:
            0 0 20px rgba(0,255,120,0.06);
        }

        .brand-logo {

          color: #00ff88 !important;

          font-size: 1.7rem;

          font-weight: 700;

          letter-spacing: 2px;

          text-shadow:
            0 0 12px rgba(0,255,120,0.4);
        }

        .navbar-custom .nav-link {

          color: rgba(255,255,255,0.88) !important;

          text-transform: uppercase;

          font-size: 0.92rem;

          letter-spacing: 1px;

          font-weight: 600;

          transition: 0.3s ease;

          position: relative;
        }

        .navbar-custom .nav-link:hover {

          color: #00ff88 !important;

          text-shadow:
            0 0 12px rgba(0,255,120,0.5);
        }

        /* HERO */

        .hero-container {

          position: relative;

          min-height: 100vh;

          display: flex;

          justify-content: center;

          align-items: center;

          overflow: hidden;

          text-align: center;
        }

      

        /* MATRIX OVERLAY */

        .matrix-overlay {

          position: absolute;

          inset: 0;

          background:
            linear-gradient(
              rgba(0, 0, 0, 0.79),
              rgba(0, 0, 0, 0.64)
            );

          z-index: 1;
        }

        /* SCAN LINES */

        .scan-lines {

          position: absolute;

          inset: 0;

          background:
            repeating-linear-gradient(
              to bottom,
              rgba(255,255,255,0.02),
              rgba(255,255,255,0.02) 1px,
              transparent 1px,
              transparent 3px
            );

          opacity: 0.12;

          z-index: 2;

          pointer-events: none;
        }

        /* HERO GLOW */

        .hero-glow {

          position: absolute;

          width: 700px;
          height: 700px;

          background: rgba(0,255,120,0.08);

          border-radius: 50%;

          filter: blur(130px);

          z-index: 1;
        }

        /* CONTENT */

        .hero-content {

          position: relative;

          z-index: 5;

          max-width: 1000px;

          padding: 20px;
        }

        /* BADGE */

        .hero-badge {

          display: inline-flex;

          align-items: center;

          gap: 10px;

          padding: 12px 22px;

          border-radius: 40px;

          border: 1px solid rgba(0,255,120,0.16);

          background: rgba(255,255,255,0.03);

          color: #00ff88;

          font-size: 0.92rem;

          letter-spacing: 1px;

          margin-bottom: 28px;

          backdrop-filter: blur(10px);

          box-shadow:
            0 0 25px rgba(0,255,120,0.08);
        }

        /* TYPEWRITER */

        .typewriter-text {

          font-size: 4rem;

          font-weight: 800;

          line-height: 1.3;

          color: #fff;

          text-shadow:
            0 0 18px rgba(0,255,120,0.18);
        }

        .Typewriter__wrapper {

          color: #00ff88;

          text-shadow:
            0 0 12px rgba(0,255,120,0.45),
            0 0 30px rgba(0,255,120,0.18);
        }

        /* DESCRIPTION */

        .hero-description {

          margin-top: 35px;

          color: rgba(255,255,255,0.88);

          font-size: 1.12rem;

          line-height: 2;

          max-width: 850px;

          margin-inline: auto;
        }

        /* BUTTONS */

        .hero-buttons {

          margin-top: 45px;

          display: flex;

          justify-content: center;

          align-items: center;

          gap: 20px;

          flex-wrap: wrap;
        }

        .neon-btn {

          padding: 15px 34px;

          border-radius: 50px;

          border: 1px solid rgba(0,255,120,0.25);

          background: rgba(255,255,255,0.03);

          color: #fff;

          text-decoration: none;

          display: inline-flex;

          align-items: center;

          gap: 10px;

          letter-spacing: 1px;

          font-weight: 600;

          transition: 0.4s ease;

          backdrop-filter: blur(12px);

          box-shadow:
            0 0 20px rgba(0,255,120,0.05);
        }

        .neon-btn:hover {

          transform: translateY(-4px);

          color: #00ff88;

          border-color: rgba(0,255,120,0.55);

          box-shadow:
            0 0 25px rgba(0,255,120,0.25),
            0 0 45px rgba(0,255,120,0.08);
        }

        /* FLOATING CODE */

        .floating-code {

          position: absolute;

          color: rgba(0,255,120,0.08);

          font-size: 1rem;

          font-family: monospace;

          animation: floatCode 14s linear infinite;

          white-space: nowrap;

          pointer-events: none;

          z-index: 1;
        }

        .code-1 {
          top: 12%;
          left: -20%;
          animation-delay: 0s;
        }

        .code-2 {
          top: 30%;
          right: -20%;
          animation-delay: 4s;
        }

        .code-3 {
          bottom: 18%;
          left: -25%;
          animation-delay: 8s;
        }

        @keyframes floatCode {

          from {
            transform: translateX(0px);
          }

          to {
            transform: translateX(140vw);
          }
        }

        /* RESPONSIVE */

        @media(max-width:768px){

          .typewriter-text{
            font-size: 2.2rem;
          }

          .hero-description{
            font-size: 1rem;
            line-height: 1.9;
          }

          .hero-buttons{
            gap: 14px;
          }

          .neon-btn{
            width: 100%;
            justify-content: center;
          }
        }

      `}</style>

      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-custom fixed-top">

        <div className="container">

          <a
            className="navbar-brand brand-logo"
            href="/"
          >
            KAALCYBERSEC
          </a>

          <div className="collapse navbar-collapse justify-content-end">

            <ul className="navbar-nav gap-lg-4">

              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#services">
                  Services
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#career">
                  Careers
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>

            </ul>

          </div>

        </div>

      </nav>

      {/* HERO */}
      <section
        id="hero"
        className="hero-container"
      >

        {/* BACKGROUND */}
       

        {/* OVERLAYS */}
        <div className="matrix-overlay"></div>

<div className="hero-grid"></div>

<div className="scan-lines"></div>

        {/* FLOATING CODE */}
        <div className="floating-code code-1">
          initializing secure shell...
        </div>

        <div className="floating-code code-2">
          bypassing firewalls...
        </div>

        <div className="floating-code code-3">
          establishing encrypted protocols...
        </div>

        {/* CONTENT */}
        <div
          className="hero-content"
          data-aos="fade-up"
        >

          {/* BADGE */}
          <div className="hero-badge">

            <ShieldCheck size={18} />

            Offensive Security • Secure Engineering

          </div>

          {/* TYPEWRITER */}
          <div className="typewriter-text">

            <Typewriter
              options={{
                strings: [

                  "Hack The Future With KaalCyberSec",

                  "Guardians Of The Digital Realm",

                  "Penetration Testing & Red Teaming",

                  "Secure Development & Cyber Defense",

                  "Empowering Enterprises Against Cyber Threats",

                ],

                autoStart: true,

                loop: true,

                delay: 40,

                deleteSpeed: 20,
              }}
            />

          </div>

          {/* DESCRIPTION */}
          <p className="hero-description">

            KaalCyberSec is a modern cybersecurity and secure engineering
            company focused on penetration testing, enterprise defense,
            secure application development, cloud security, and digital
            resilience for startups, enterprises, and institutions.

          </p>

          {/* BUTTONS */}
          <div className="hero-buttons">

            <a
              href="#services"
              className="neon-btn"
            >
              Explore Services
              <ChevronRight size={18} />
            </a>

            <a
              href="#contact"
              className="neon-btn"
            >
              Get In Touch
              <ChevronRight size={18} />
            </a>

          </div>

        </div>

      </section>

    </div>
  );
}