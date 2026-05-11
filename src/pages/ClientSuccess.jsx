import React, { useEffect } from "react";
import {
  ShieldCheck,
  Hospital,
  Hotel,
  GraduationCap,
  ShoppingBag,
  Building2,
  Globe,
  ArrowUpRight,
  Target
} from "lucide-react";

export default function ClientSuccess() {
  const testimonials = [
    {
      icon: <ShieldCheck size={42} strokeWidth={1.5} />,
      name: "I4C Collaboration",
      role: "Cyber Awareness & Security Operations",
      quote: "KaalCyberSec demonstrated advanced technical understanding, responsible security practices, and strong cybersecurity coordination capabilities during multiple awareness and security-focused engagements.",
    },
    {
      icon: <Hospital size={42} strokeWidth={1.5} />,
      name: "Healthcare Infrastructure",
      role: "Medical & Hospital Security",
      quote: "Security assessments and penetration testing engagements helped strengthen healthcare web infrastructure, improve data protection practices, and reduce exposure to modern cyber threats.",
    },
    {
      icon: <Hotel size={42} strokeWidth={1.5} />,
      name: "Hospitality & Enterprise Platforms",
      role: "Hotels & Booking Systems",
      quote: "Enterprise hospitality platforms benefited from infrastructure hardening, vulnerability assessments, and improved application-level security for customer-facing systems.",
    },
    {
      icon: <GraduationCap size={42} strokeWidth={1.5} />,
      name: "Educational Platforms",
      role: "University & Institutional Systems",
      quote: "Academic and institutional platforms were reviewed for security posture improvements, secure deployment practices, and enhanced protection against web application vulnerabilities.",
    },
    {
      icon: <ShoppingBag size={42} strokeWidth={1.5} />,
      name: "E-Commerce & Retail",
      role: "Retail Technology Security",
      quote: "Modern e-commerce platforms were strengthened with secure engineering recommendations, application security testing, and infrastructure-level hardening strategies.",
    },
    {
      icon: <Building2 size={42} strokeWidth={1.5} />,
      name: "Enterprise Technology",
      role: "Infrastructure & Development",
      quote: "Organizations trusted KaalCyberSec for scalable development, security-focused architecture, penetration testing, and long-term digital infrastructure resilience.",
    },
    {
      icon: <Globe size={42} strokeWidth={1.5} />,
      name: "International Clients",
      role: "Global Technology Engagements",
      quote: "International clients appreciated the team's communication, secure development approach, infrastructure expertise, and professional execution across remote engagements.",
    },
    {
      icon: <Target size={42} strokeWidth={1.5} />,
      name: "Incident Response Clients",
      role: "Cybersecurity & Recovery",
      quote: "Rapid response support, vulnerability analysis, and actionable remediation guidance helped organizations recover securely while improving future resilience.",
    },
  ];

  // Auto-scroll to top when navigating to this new page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // SEO Schema Markup (JSON-LD) for Rich Snippets
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "KaalCyberSec",
    "url": "https://kaalcybersec.com",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "8"
    }
  };

  return (
    <>
      {/* INJECTING SEO SCHEMA */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />

      <section className="client-success-page" style={{ fontFamily: "'Camomile', sans-serif" }}>
        <style>{`
          /* BASE PAGE STYLES */
          
                     body { background: #000;  overflow-x: hidden;  min-height: 100vh;position: relative;}

          /* AMBIENT BACKGROUND GLOW */
          .cyber-glow-bg {
            position: fixed;
            width: 800px;
            height: 800px;
            background: radial-gradient(circle, rgba(0,255,120,0.04) 0%, transparent 60%);
            border-radius: 50%;
            filter: blur(120px);
            top: -200px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 0;
            pointer-events: none;
          }

          /* PAGE HERO HEADER */
          .page-hero {
            position: relative;
              color: #00ff88;
            z-index: 1;
            padding: 140px 20px 60px 20px; /* Top padding clears the fixed navbar */
            text-align: center;
          }

          .hero-heading {
            font-size: 3rem;
            font-weight: 800;
            text-align: center;
            color: #00ff88;
            text-shadow: 0 0 15px rgba(0,255,120,0.45), 0 0 40px rgba(0,255,120,0.15);
            margin-bottom: 22px;;
          }

          @keyframes neonPulse {
            0% { text-shadow: 0 0 10px rgba(0, 255, 120, 0.1), 0 0 20px rgba(0, 255, 120, 0.1); color: rgba(255, 255, 255, 0.9); }
            100% { text-shadow: 0 0 15px rgba(0, 255, 120, 0.8), 0 0 30px rgba(0, 255, 120, 0.5), 0 0 45px rgba(0, 255, 120, 0.3); color: #fff; }
          }

          .hero-subtext {
            max-width: 850px;
            margin: auto;
            color: rgba(255,255,255,0.85);
            line-height: 1.9;
            font-size: 1.15rem;
          }

          /* PURE CSS GRID ARCHITECTURE (NO BOOTSTRAP) */
          .case-study-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 35px;
            max-width: 1400px;
            margin: 0 auto;
            padding: 0 30px;
            position: relative;
            z-index: 1;
          }

          /* ADVANCED FROSTED GLASS CARDS */
          .case-card {
            position: relative;
            display: flex;
            flex-direction: column;
            padding: 45px 35px;
            border-radius: 20px;
            background: rgba(5, 12, 8, 0.6);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(0,255,120,0.12);
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            box-shadow: 0 0 20px rgba(0,255,120,0.04), inset 0 0 20px rgba(255,255,255,0.01);
            overflow: hidden;
          }

          /* TOP GLOW ACCENT */
          .case-card::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 3px;
            background: linear-gradient(90deg, transparent, rgba(0,255,120,0.8), transparent);
            opacity: 0;
            transition: 0.4s ease;
          }

          .case-card:hover {
            transform: translateY(-12px);
            border-color: rgba(0,255,120,0.4);
            box-shadow: 0 15px 35px rgba(0,255,120,0.12), 0 0 60px rgba(0,255,120,0.05);
            background: rgba(10, 20, 15, 0.85);
          }

          .case-card:hover::before {
            opacity: 1;
          }

          /* CARD HEADER: ICON & TITLE */
          .case-header {
            display: flex;
            align-items: flex-start;
            gap: 20px;
            margin-bottom: 25px;
            border-bottom: 1px solid rgba(255,255,255,0.05);
            padding-bottom: 20px;
          }

          .case-icon-wrapper {
            flex-shrink: 0;
            width: 70px;
            height: 70px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 16px;
            color: #00ff88;
            background: rgba(0,255,120,0.05);
            border: 1px solid rgba(0,255,120,0.15);
            transition: 0.4s ease;
          }

          .case-card:hover .case-icon-wrapper {
            background: rgba(0,255,120,0.15);
            box-shadow: 0 0 20px rgba(0,255,120,0.2);
            transform: rotate(-5deg) scale(1.05);
            color: #fff;
          }

          .case-titles {
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          .case-name {
            font-size: 1.3rem;
            font-weight: 800;
            color: #fff;
            margin: 0 0 5px 0;
            transition: 0.3s ease;
          }

          .case-card:hover .case-name {
            color: #00ff88;
          }

          .case-role {
            color: rgba(255,255,255,0.5);
            font-size: 0.85rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin: 0;
            font-weight: 600;
          }

          /* CARD BODY: QUOTE */
          .case-quote {
            color: rgba(255,255,255,0.85);
            line-height: 1.8;
            font-size: 1.05rem;
            margin-bottom: 30px;
            flex-grow: 1; /* Pushes the footer link to the bottom evenly */
            font-style: italic;
          }

          .case-quote::before {
            content: '"';
            color: #00ff88;
            font-size: 1.5rem;
            font-family: serif;
            margin-right: 5px;
          }

          /* CARD FOOTER: LINK */
          .case-link {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: #fff;
            font-size: 0.9rem;
            font-weight: 700;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            transition: 0.3s ease;
            margin-top: auto;
          }

          .case-card:hover .case-link {
            color: #00ff88;
          }

          .case-link svg {
            transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          }

          .case-card:hover .case-link svg {
            transform: translate(5px, -5px);
          }

          /* MOBILE RESPONSIVENESS */
          @media(max-width: 768px) {
            .hero-heading { font-size: 2.2rem; }
            .hero-subtext { font-size: 1rem; }
            .case-study-grid { grid-template-columns: 1fr; padding: 0 20px; }
            .case-card { padding: 35px 25px; }
            .case-header { flex-direction: column; align-items: center; text-align: center; }
            .case-quote { text-align: center; }
            .case-link { justify-content: center; width: 100%; }
          }
        `}</style>

        {/* BACKGROUND GLOW */}
        <div className="cyber-glow-bg"></div>

        {/* HERO SECTION */}
        <header className="page-hero" data-aos="fade-down">
          <h1 className="hero-heading">Client Success & Case Studies</h1>
          <p className="hero-subtext" data-aos="fade-up" data-aos-delay="100">
            Discover how KaalCyberSec partners with global enterprises, healthcare institutions, and disruptive startups to architect impenetrable defense systems, execute precision offensive security, and ensure long-term digital resilience.
          </p>
        </header>

        {/* PURE CSS GRID SECTION */}
        <div className="case-study-grid">
          {testimonials.map((item, index) => (
            <article 
              className="case-card" 
              key={index}
              data-aos="fade-up" 
              data-aos-delay={index * 100}
            >
              <div className="case-header">
                <div className="case-icon-wrapper">
                  {item.icon}
                </div>
                <div className="case-titles">
                  <h2 className="case-name">{item.name}</h2>
                  <h3 className="case-role">{item.role}</h3>
                </div>
              </div>
              
              <p className="case-quote">
                {item.quote}
              </p>
              
              <div className="case-link">
                View Engagement Details <ArrowUpRight size={18} />
              </div>
            </article>
          ))}
        </div>

      </section>
    </>
  );
}