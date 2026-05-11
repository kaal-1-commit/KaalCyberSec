import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, TerminalSquare } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);

  // The Hacker Dictionary
  const words = [
    "KAALCYBERSEC",
    "THINK",
    "INNOVATE",
    "BUILD",
    
    "HACK",
    "SECURE",
  ];

  // The 2-Second Cyber Cycle Engine
  useEffect(() => {
    const cycleInterval = setInterval(() => {
      // Trigger the CSS glitch effect
      setIsGlitching(true);
      
      // Change the word halfway through the glitch
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % words.length);
      }, 150);

      // Turn off the glitch effect
      setTimeout(() => {
        setIsGlitching(false);
      }, 300);

    }, 2000); // 2 seconds

    return () => clearInterval(cycleInterval);
  }, [words.length]);

  return (
    <nav className="cyber-navbar fixed-top">
      <div className="cyber-container">
        
        {/* --- SEO PROTECTED BRAND LOGO --- */}
        <Link className="cyber-brand" to="/" onClick={() => setMenuOpen(false)}>
          <TerminalSquare size={24} className="me-2 inline text-green" />
          
          {/* Invisible to users, visible to Google */}
          <span className="visually-hidden">KaalCyberSec Official Site</span>
          
          {/* Visible to users, ignored by Google */}
          <span 
            className={`cyber-text ${isGlitching ? "glitch-active" : ""}`} 
            aria-hidden="true"
            data-text={words[wordIndex]}
          >
            {words[wordIndex]}
          </span>
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          className="cyber-mobile-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Navigation"
        >
          {menuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        {/* NAV LINKS (Pure Flexbox, No Bootstrap) */}
        <div className={`cyber-nav-menu ${menuOpen ? "open" : ""}`}>
          <ul className="cyber-nav-list">
            <li>
              <Link className="cyber-link" to="/about" onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link className="cyber-link" to="/services" onClick={() => setMenuOpen(false)}>
                Services
              </Link>
            </li>
            <li>
              <Link className="cyber-link" to="/verify" onClick={() => setMenuOpen(false)}>
                Verify
              </Link>
            </li>
            <li>
              <Link className="cyber-link" to="/blog" onClick={() => setMenuOpen(false)}>
                Research
              </Link>
            </li>
            <li>
              <Link className="cyber-link" to="/case-studies" onClick={() => setMenuOpen(false)}>
                Client Success
              </Link>
            </li>
            <li>
              <Link className="cyber-link" to="/career" onClick={() => setMenuOpen(false)}>
                Join Us
              </Link>
            </li>
            <li>
              <Link className="cyber-link highlight-link" to="/contact" onClick={() => setMenuOpen(false)}>
                Engage
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* --- PURE CSS ARCHITECTURE --- */}
      <style>{`
        /* GLOBAL NAVBAR STYLES */
        .cyber-navbar {
          background: rgba(2, 6, 4, 0.6);
          backdrop-filter: blur(15px);
          -webkit-backdrop-filter: blur(15px);
          border-bottom: 1px solid rgba(0, 255, 120, 0.15);
          width: 100%;
          position: fixed;
          top: 0;
          z-index: 9999;
          font-family: 'Orbitron', 'Camomile', sans-serif;
        }

        .cyber-container {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 18px 25px;
        }

        /* SEO HIDDEN TEXT */
        .visually-hidden {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          border: 0;
        }

        /* BRAND ANIMATION & GLITCH */
        .cyber-brand {
          display: flex;
          align-items: center;
          text-decoration: none;
          color: #00ff88;
          font-size: 1.6rem;
          font-weight: 900;
          letter-spacing: 3px;
          transition: 0.3s ease;
        }

        .text-green { color: #00ff88; }

        .cyber-text {
          position: relative;
          display: inline-block;
          min-width: 220px; /* Prevents layout shifting when word changes */
          text-shadow: 0 0 10px rgba(0, 255, 120, 0.4);
        }

        /* The actual glitch flicker effect */
        .glitch-active {
          animation: terminalFlicker 0.15s infinite;
          color: #fff;
          text-shadow: -2px 0 #00ff88, 2px 0 #ff003c;
        }

        @keyframes terminalFlicker {
          0% { opacity: 1; transform: translate(0); }
          20% { opacity: 0.8; transform: translate(-2px, 1px); }
          40% { opacity: 0.4; transform: translate(2px, -1px); }
          60% { opacity: 0.9; transform: translate(-1px, -1px); }
          80% { opacity: 0.3; transform: translate(1px, 1px); }
          100% { opacity: 1; transform: translate(0); }
        }

        /* NAVIGATION LIST */
        .cyber-nav-list {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
          gap: 35px;
          align-items: center;
        }

        .cyber-link {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          font-size: 0.85rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          transition: 0.3s ease;
          position: relative;
        }

        .cyber-link:hover {
          color: #00ff88;
          text-shadow: 0 0 15px rgba(0, 255, 120, 0.5);
        }

        /* Cool underline hover effect */
        .cyber-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -6px;
          left: 0;
          background-color: #00ff88;
          transition: width 0.3s ease;
        }

        .cyber-link:hover::after {
          width: 100%;
        }

        .highlight-link {
          border: 1px solid rgba(0, 255, 120, 0.5);
          padding: 8px 18px;
          border-radius: 4px;
          color: #00ff88;
        }
        
        .highlight-link:hover {
          background: rgba(0, 255, 120, 0.1);
        }
        .highlight-link::after { display: none; } /* Remove underline for button */

        /* MOBILE MENU SETTINGS */
        .cyber-mobile-btn {
          display: none;
          background: none;
          border: none;
          color: #00ff88;
          cursor: pointer;
          z-index: 10001;
        }

        @media (max-width: 991px) {
          .cyber-container { padding: 15px 20px; }
          .cyber-text { min-width: 180px; font-size: 1.3rem; }
          .cyber-mobile-btn { display: block; }
          
          .cyber-nav-menu {
            position: fixed;
            top: 0;
            right: -100%;
            width: 100vw;
            height: 100vh;
            background: rgba(3, 8, 5, 0.98);
            display: flex;
            justify-content: center;
            align-items: center;
            transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            z-index: 10000;
          }

          .cyber-nav-menu.open { right: 0; }

          .cyber-nav-list {
            flex-direction: column;
            gap: 40px;
            text-align: center;
          }

          .cyber-link { font-size: 1.2rem; }
        }
      `}</style>
    </nav>
  );
}