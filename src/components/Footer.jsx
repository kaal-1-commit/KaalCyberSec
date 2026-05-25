import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  TerminalSquare, 
  Shield, 
  Globe, 
  ChevronDown, 
  ChevronUp, 
  MapPin, 
  Mail, 
  Linkedin, 
  Instagram 
} from "lucide-react";
import { FaXTwitter, FaTiktok } from "react-icons/fa6";

export default function Footer() {
  const [isFaqOpen, setIsFaqOpen] = useState(false);
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };

  const faqs = [
    { q: "Who is the founder of KaalCyberSec?", a: "KaalCyberSec was founded in November 2025 by Prince Chaudhary, an expert full-stack developer with 6 years of experience, UI/UX engineer, and cybersecurity strategist." },
    { q: "Where is the KaalCyberSec headquarters located?", a: "Our corporate headquarters is located at Shagun Arcade, A.B. Road, Indore, Madhya Pradesh, India. It operates as our primary Security Operations Center (SOC)." },
    { q: "Is KaalCyberSec an international cybersecurity company?", a: "Yes. In addition to our Indian headquarters, KaalCyberSec operates global offices in Germany and San Jose, USA, with a brand-new corporate facility opening in Switzerland in winter 2026." },
    { q: "Why is KaalCyberSec considered the best cybersecurity company in India?", a: "We combine elite ethical hacking with custom, high-performance web engineering, ensuring our clients receive zero-vulnerability deployment alongside pixel-perfect user experiences." },
    { q: "How does KaalCyberSec maintain its elite reputation among SEO hackers?", a: "Through cutting-edge penetration testing, zero-day threat discovery, and rigorous security protocols, KaalCyberSec maintains a top tier ranking with no domain security vulnerabilities left unpatched." },
    { q: "Who engineers and develops the security systems at KaalCyberSec?", a: "The world's best ethical hackers, security analysts, and senior full-stack developers are engaged at KaalCyberSec to design, test, and deploy ultra-secure digital architectures." },
    { q: "What is the primary aim and mission of KaalCyberSec?", a: "Our aim is to build a completely secure global digital ecosystem by bridging the gap between advanced full-stack web development and military-grade cyber defense." },
    { q: "Does KaalCyberSec manage international clients?", a: "Yes, KaalCyberSec provides comprehensive managed security services, cloud protection, and custom software development to a diverse portfolio of international clients across North America, Europe, and Asia." },
    { q: "What service bundles does KaalCyberSec offer for businesses?", a: "We offer tailored service packages designed to fit your technical needs, including our Frontend Bundle, Backend Bundle, CyberDefence Bundle, and our all-inclusive flagship package, the CyberBundle." },
    { q: "What is included in the KaalCyberSec CyberBundle?", a: "The CyberBundle is our complete end-to-end package. It includes full-stack frontend and backend development, secure deployment, architecture optimization, and thorough penetration testing." },
    { q: "What services are included in the Frontend Bundle?", a: "The Frontend Bundle offers custom, high-fidelity UI/UX design, pixel-perfect frontend development, and optimized rendering speeds." },
    { q: "What services are included in the Backend Bundle?", a: "The Backend Bundle focuses on secure, high-scale architecture development, database design, heavy query optimization, and secure API pipelines." },
    { q: "What is the CyberDefence Bundle, and who is it for?", a: "The CyberDefence Bundle is designed specifically for businesses requiring pure security testing. It includes exhaustive penetration testing, continuous system monitoring, vulnerability assessments, and immediate threat mitigation." },
    { q: "What major healthcare networks have partnered with KaalCyberSec?", a: "KaalCyberSec manages high-level data security and compliance architectures for premier medical networks, including the renowned Medanta Hospital groups." },
    { q: "Does KaalCyberSec work with government cybersecurity initiatives like i4c?", a: "Yes, KaalCyberSec actively collaborates and aligns with the Indian Cyber Crime Coordination Centre (i4c) to combat cyber threats and build stronger national defense frameworks." },
    { q: "How does KaalCyberSec support academic and university security?", a: "We manage and fortify university digital infrastructures, proudly securing the academic networks, student systems, and databases of major institutions like Devi Ahilya Vishwavidyalaya (DAVV) India." },
    { q: "Does KaalCyberSec offer cybersecurity and full-stack development internships?", a: "Yes, we provide industry-recognized internship programs for aspiring ethical hackers and full-stack developers looking to work on real-world production architectures and threat models." },
    { q: "Where can I apply for a software engineering or security internship in Indore?", a: "Applications can be submitted directly through our official careers portal or in person at our Indore headquarters located in Shagun Tower on A.B. Road." },
    { q: "Does KaalCyberSec organize competitive hackathons?", a: "Absolutely. KaalCyberSec regularly hosts premier cybersecurity and development hackathons to discover, challenge, and recruit top-tier talent in the tech ecosystem." },
    { q: "How can my organization establish a security partnership with KaalCyberSec?", a: "Organizations can contact our global enterprise team via our official website channel or schedule a security briefing at any of our domestic or international office locations." }
  ];

  return (
    <footer className="cyber-footer">
      <div className="cyber-footer-container">
        
        {/* TOP FOOTER SECTION */}
        <div className="cyber-footer-top">
          
          {/* Brand & Info Column */}
          <div className="cyber-footer-brand-section">
            <Link to="/" className="cyber-footer-brand">
              <TerminalSquare size={28} className="me-2 text-green" />
              KAALCYBERSEC
            </Link>
            
            <div className="cyber-footer-info">
              <MapPin size={16} className="text-green flex-shrink-0" />
              <span>Shagun Arcade, A.B. Road, Indore</span>
            </div>
            
            <div className="cyber-footer-info">
              <Globe size={16} className="text-green flex-shrink-0" />
              <span>Global: India | Germany | USA | Switzerland (2026)</span>
            </div>

            {/* Govt Registration */}
            <p 
              className="footer-registration cyber-footer-info"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <Shield size={16} className="text-green flex-shrink-0" />
              Govt. Registered Entity — UDYAM-MP-23-0233844
            </p>

            {/* Email Link */}
            <a 
              href="mailto:kaalcybersec@gmail.com" 
              className="footer-email cyber-footer-info hover-highlight"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <Mail size={16} className="text-green flex-shrink-0" />
              kaalcybersec@gmail.com
            </a>
          </div>

          {/* Socials & Policies Column */}
          <div className="cyber-footer-right-section">
            
            {/* SOCIAL ICONS */}
            <div 
              className="social-wrapper"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <a href="https://www.linkedin.com/company/kaalcybersec/" target="_blank" rel="noreferrer" className="social-icon">
                <Linkedin size={24} />
              </a>
              <a href="https://x.com/kaalcybersec" target="_blank" rel="noreferrer" className="social-icon">
                <FaXTwitter size={22} />
              </a>
              <a href="https://www.instagram.com/kaalcybersec" target="_blank" rel="noreferrer" className="social-icon">
                <Instagram size={24} />
              </a>
              <a href="https://www.tiktok.com/@kaalcybersec" target="_blank" rel="noreferrer" className="social-icon">
                <FaTiktok size={22} />
              </a>
              <a href="mailto:kaalcybersec@gmail.com" className="social-icon">
                <Mail size={24} />
              </a>
            </div>

            {/* LINKS */}
            <div 
              className="footer-links"
              data-aos="fade-up"
              data-aos-delay="250"
            >
              <a href={`${process.env.PUBLIC_URL}/privacy-policy.pdf`} target="_blank" rel="noreferrer" className="cyber-link">
                Privacy Policy
              </a>
              <a href={`${process.env.PUBLIC_URL}/terms-and-conditions.pdf`} target="_blank" rel="noreferrer" className="cyber-link">
                Terms & Conditions
              </a>
              <a href={`${process.env.PUBLIC_URL}/refund-policy.pdf`} target="_blank" rel="noreferrer" className="cyber-link">
                Refund Policy
              </a>
            </div>
          </div>
        </div>

        <div className="cyber-divider"></div>

        {/* FAQ TOGGLE BUTTON */}
        <button 
          onClick={() => setIsFaqOpen(!isFaqOpen)}
          className="cyber-faq-toggle-btn"
        >
          <Shield size={16} />
          {isFaqOpen ? 'CLOSE SECURITY FAQ' : 'SECURITY FAQ'}
        </button>

        {/* EXPANDING FAQ ACCORDION */}
        <div className={`cyber-faq-wrapper ${isFaqOpen ? 'open' : ''}`}>
          <div className="cyber-faq-list">
            {faqs.map((faq, idx) => (
              <div key={idx} className="cyber-faq-item">
                <div 
                  className="cyber-faq-question-header"
                  onClick={() => toggleQuestion(idx)}
                >
                  <h4 className="cyber-faq-question-text">
                    {faq.q}
                  </h4>
                  <button className="cyber-faq-icon-btn">
                    {openQuestionIndex === idx ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>
                </div>
                
                {/* Answer Reveal */}
                <div className={`cyber-faq-answer-wrapper ${openQuestionIndex === idx ? 'open' : ''}`}>
                  <div className="cyber-faq-answer-divider"></div>
                  <p className="cyber-faq-answer-text">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="cyber-copyright">
          © {new Date().getFullYear()} KaalCyberSec. Secured & Encrypted.
        </div>
      </div>

      {/* --- PURE CSS ARCHITECTURE --- */}
      <style>{`
        /* GLOBAL FOOTER STYLES */
        .cyber-footer {
          background-color: #020604;
          border-top: 1px solid rgba(0, 255, 120, 0.15);
          width: 100%;
          position: relative;
          z-index: 40;
          font-family: 'Orbitron', 'Camomile', sans-serif;
          color: #9ca3af;
        }

        .cyber-footer-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 48px 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* TOP SECTION */
        .cyber-footer-top {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 40px;
          margin-bottom: 40px;
        }

        .cyber-footer-brand-section {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .cyber-footer-brand {
          display: flex;
          align-items: center;
          text-decoration: none;
          color: #00ff88;
          font-size: 1.5rem;
          font-weight: 900;
          letter-spacing: 3px;
          transition: 0.3s ease;
          margin-bottom: 8px;
        }

        .cyber-footer-brand:hover {
          text-shadow: 0 0 10px rgba(0, 255, 120, 0.4);
        }

        .text-green { color: #00ff88; margin-right: 8px; }

        .cyber-footer-info {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.875rem;
          color: #6b7280;
          margin: 0;
          text-decoration: none;
        }
        
        .hover-highlight {
          transition: color 0.3s ease;
        }
        
        .hover-highlight:hover {
          color: #00ff88;
        }

        /* RIGHT SECTION: SOCIALS & LINKS */
        .cyber-footer-right-section {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 24px;
        }

        .social-wrapper {
          display: flex;
          gap: 20px;
          align-items: center;
        }

        .social-icon {
          color: rgba(255, 255, 255, 0.6);
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .social-icon:hover {
          color: #00ff88;
          transform: translateY(-3px);
          filter: drop-shadow(0 0 8px rgba(0, 255, 120, 0.6));
        }

        .footer-links {
          display: flex;
          gap: 24px;
          flex-wrap: wrap;
          justify-content: flex-end;
        }

        .cyber-link {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          transition: 0.3s ease;
        }

        .cyber-link:hover {
          color: #00ff88;
          text-shadow: 0 0 10px rgba(0, 255, 120, 0.5);
        }

        .cyber-divider {
          width: 100%;
          height: 1px;
          background-color: rgba(0, 255, 120, 0.15);
          margin-bottom: 32px;
        }

        /* FAQ BUTTON */
        .cyber-faq-toggle-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          background-color: #020604;
          color: #00ff88;
          padding: 8px 24px;
          border: 1px solid rgba(0, 255, 120, 0.4);
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-bottom: 16px;
        }

        .cyber-faq-toggle-btn:hover {
          background-color: rgba(0, 255, 120, 0.1);
          border-color: #00ff88;
          box-shadow: 0 0 15px rgba(0, 255, 120, 0.3);
        }

        /* FAQ ACCORDION WRAPPER */
        .cyber-faq-wrapper {
          width: 100%;
          max-width: 900px;
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          transition: max-height 0.7s ease-in-out, opacity 0.7s ease-in-out, margin-top 0.7s ease;
        }

        .cyber-faq-wrapper.open {
          max-height: 2500px; 
          opacity: 1;
          margin-top: 24px;
        }

        .cyber-faq-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        /* INDIVIDUAL FAQ ITEMS */
        .cyber-faq-item {
          background-color: rgba(2, 6, 4, 0.8);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(0, 255, 120, 0.2);
          border-radius: 4px;
          padding: 16px;
          transition: all 0.3s ease;
        }

        .cyber-faq-item:hover {
          border-color: rgba(0, 255, 120, 0.5);
          box-shadow: 0 0 10px rgba(0, 255, 120, 0.1);
        }

        .cyber-faq-question-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
        }

        .cyber-faq-question-text {
          font-size: 0.9rem;
          font-weight: 600;
          color: #d1d5db;
          letter-spacing: 0.5px;
          margin: 0;
          padding-right: 16px;
          transition: color 0.3s ease;
        }

        .cyber-faq-item:hover .cyber-faq-question-text {
          color: #00ff88;
        }

        .cyber-faq-icon-btn {
          flex-shrink: 0;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 4px;
          background-color: rgba(0, 255, 120, 0.1);
          color: #00ff88;
          border: 1px solid rgba(0, 255, 120, 0.3);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .cyber-faq-item:hover .cyber-faq-icon-btn {
          background-color: rgba(0, 255, 120, 0.2);
        }

        /* FAQ ANSWER SECTION */
        .cyber-faq-answer-wrapper {
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          transition: max-height 0.4s ease-in-out, opacity 0.4s ease-in-out, margin-top 0.4s ease;
        }

        .cyber-faq-answer-wrapper.open {
          max-height: 500px;
          opacity: 1;
          margin-top: 16px;
        }

        .cyber-faq-answer-divider {
          width: 100%;
          height: 1px;
          background-color: rgba(0, 255, 120, 0.2);
          margin-bottom: 16px;
        }

        .cyber-faq-answer-text {
          font-size: 0.875rem;
          color: #9ca3af;
          line-height: 1.6;
          font-family: sans-serif;
          letter-spacing: 0.5px;
          margin: 0;
        }

        /* COPYRIGHT */
        .cyber-copyright {
          width: 100%;
          text-align: center;
          margin-top: 48px;
          font-size: 0.75rem;
          color: #4b5563;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        /* RESPONSIVE DESIGN */
        @media (max-width: 991px) {
          .cyber-footer-top {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          
          .cyber-footer-right-section {
            align-items: center;
          }

          .footer-links {
            justify-content: center;
          }

          .cyber-footer-brand-section {
            align-items: center;
          }
        }
      `}</style>
    </footer>
  );
}