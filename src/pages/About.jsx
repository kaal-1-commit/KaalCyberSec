import React, { Component } from "react";
import {
  Globe,
  Users,
  Code2,
  ShieldCheck,
  ArrowUpRight,
  Lock,
  Activity,
  Layers,
  Zap,
  
} from "lucide-react";

export default class About extends Component {
  render() {
    // 8 Expanded Premium Cards
    const aboutCards = [
      {
        icon: <ShieldCheck size={48} />,
        title: "Offensive Security Mission",
        desc: "KaalCyberSec is committed to architecting a secure digital ecosystem where organizations and enterprises can innovate confidently against evolving, persistent cyber threats.",
      },
      {
        icon: <Globe size={48} />,
        title: "Zero-Trust Vision",
        desc: "We envision a future where proactive cybersecurity and zero-trust principles form the foundation of global digital growth, enabling businesses to scale with uncompromised resilience.",
      },
      {
        icon: <Users size={48} />,
        title: "Global Infosec Experts",
        desc: "Our elite team unites advanced penetration testers, secure software engineers, and threat researchers experienced in defending complex enterprise infrastructure and cloud networks.",
      },
      {
        icon: <Code2 size={48} />,
        title: "The Engineering Edge",
        desc: "We merge an offensive hacker mindset with rigorous engineering precision to deploy secure-by-design architectures optimized for performance, scalability, and impenetrable defense.",
      },
      {
        icon: <Lock size={48} />,
        title: "Absolute Confidentiality",
        desc: "Military-grade data protection, strict NDA-first enforcement, and end-to-end encrypted communication channels guarantee total secrecy for all client engagements.",
      },
      {
        icon: <Activity size={48} />,
        title: "Continuous Vigilance",
        desc: "Proactive threat hunting, behavioral analysis, and real-time network monitoring to intercept and neutralize anomalies before they escalate into critical breaches.",
      },
      {
        icon: <Layers size={48} />,
        title: "Scalable Resilience",
        desc: "Future-proof security frameworks and deployment pipelines designed to evolve seamlessly alongside your enterprise's operational scale and digital footprint.",
      },
      {
        icon: <Zap size={48} />,
        title: "Rapid Deployment",
        desc: "Agile response protocols ensuring swift integration of security controls, rapid patch deployment, and immediate incident mitigation with zero operational downtime.",
      },
    ];

    // Company Stats for Extra Content & Trust Building
    const stats = [
      { number: "24/7", label: "Active Threat Monitoring" },
      { number: "99.9%", label: "Infrastructure Uptime" },
      { number: "0-Day", label: "Vulnerability Research" },
      { number: "100%", label: "Confidentiality Retained" },
    ];

    return (
      <section
        id="about"
        className="container-fluid pt-5 pb-5 position-relative overflow-hidden"
        style={{
          fontFamily: "'Camomile', sans-serif",
        }}
      >
        {/* PREMIUM CSS STYLES */}
        <style>{`
         body { background: #000; color: #fff; overflow-x: hidden; }
          .about-heading {
            font-size: 3rem;

          font-weight: 800;

          text-align: center;

          color: #00ff88;

          text-shadow:
            0 0 15px rgba(0,255,120,0.45),
            0 0 40px rgba(0,255,120,0.15);
          }

          @keyframes neonPulse {
            0% {
              text-shadow: 0 0 10px rgba(0, 255, 120, 0.1), 0 0 20px rgba(0, 255, 120, 0.1);
              color: rgba(255, 255, 255, 0.9);
            }
            100% {
              text-shadow: 0 0 15px rgba(0, 255, 120, 0.8), 0 0 30px rgba(0, 255, 120, 0.5), 0 0 45px rgba(0, 255, 120, 0.3);
              color: #fff;
            }
          }

          .about-subtext {
            max-width: 850px;
            margin: auto;
            color: rgba(255,255,255,0.85);
            line-height: 1.9;
            font-size: 1.05rem;
          }

          /* STATS ROW STYLING */
          .stats-container {
            background: rgba(0, 255, 120, 0.03);
            border: 1px solid rgba(0, 255, 120, 0.15);
            border-radius: 15px;
            padding: 30px 20px;
            margin-top: 40px;
            margin-bottom: 50px;
            backdrop-filter: blur(10px);
          }

          .stat-box {
            text-align: center;
            padding: 10px;
          }
          
          .stat-box:not(:last-child) {
            border-right: 1px solid rgba(0, 255, 120, 0.1);
          }

          .stat-number {
            font-size: 2.2rem;
            font-weight: 800;
            color: #00ff88;
            margin-bottom: 5px;
            text-shadow: 0 0 15px rgba(0, 255, 120, 0.3);
          }

          .stat-label {
            color: rgba(255, 255, 255, 0.7);
            font-size: 0.9rem;
            letter-spacing: 1px;
            text-transform: uppercase;
          }

          /* PREMIUM FROSTED GLASS CARDS */
          .about-card {
            position: relative;
            height: 100%;
            padding: 45px 35px;
            border-radius: 20px;
            overflow: hidden;
            background: rgba(5, 12, 8, 0.6);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(0,255,120,0.12);
            transition: 0.4s ease;
            box-shadow:
              0 0 20px rgba(0,255,120,0.04),
              inset 0 0 20px rgba(255,255,255,0.01);
            z-index: 2;
          }

          .about-card::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 2px;
            background: linear-gradient(90deg, transparent, rgba(0,255,120,0.8), transparent);
            opacity: 0;
            transition: 0.4s ease;
          }

          .about-card:hover {
            transform: translateY(-8px);
            border-color: rgba(0,255,120,0.4);
            box-shadow:
              0 0 35px rgba(0,255,120,0.12),
              0 0 60px rgba(0,255,120,0.05);
            background: rgba(10, 20, 15, 0.8);
          }

          .about-card:hover::before {
            opacity: 1;
          }

          /* ICON CONTAINER */
          .about-icon {
            width: 90px;
            height: 90px;
            margin: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            color: #00ff88;
            background: rgba(0,255,120,0.05);
            border: 1px solid rgba(0,255,120,0.15);
            margin-bottom: 24px;
            transition: 0.4s ease;
            box-shadow: 0 0 20px rgba(0,255,120,0.05);
          }

          .about-card:hover .about-icon {
            transform: scale(1.1) rotate(5deg);
            background: rgba(0,255,120,0.12);
            box-shadow:
              0 0 25px rgba(0,255,120,0.25),
              0 0 50px rgba(0,255,120,0.1);
            color: #fff;
          }

          .about-title {
            color: #fff;
            font-size: 1.35rem;
            font-weight: 700;
            margin-bottom: 18px;
            transition: 0.3s ease;
            letter-spacing: 0.5px;
          }

          .about-card:hover .about-title {
            color: #00ff88;
            text-shadow: 0 0 10px rgba(0,255,120,0.4);
          }

          .about-description {
            color: rgba(255,255,255,0.75);
            line-height: 1.9;
            font-size: 0.98rem;
            margin-bottom: 28px;
            transition: 0.3s ease;
          }

          .about-card:hover .about-description {
            color: rgba(255,255,255,0.95);
          }

          .about-link {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: #fff;
            font-size: 0.88rem;
            text-transform: uppercase;
            font-weight: 600;
            letter-spacing: 1.5px;
            transition: 0.3s ease;
          }

          .about-card:hover .about-link {
            color: #00ff88;
          }

          .about-link svg {
            transition: 0.3s ease;
          }

          .about-card:hover .about-link svg {
            transform: translate(4px,-4px);
          }

          /* AMBIENT BACKGROUND GLOW */
          .about-glow {
            position: absolute;
            width: 650px;
            height: 650px;
            background: radial-gradient(circle, rgba(0,255,120,0.05) 0%, transparent 60%);
            border-radius: 50%;
            filter: blur(100px);
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 0;
            pointer-events: none;
          }

          @media(max-width:992px){
            .stat-box:not(:last-child) {
              border-right: none;
              border-bottom: 1px solid rgba(0, 255, 120, 0.1);
              margin-bottom: 15px;
              padding-bottom: 15px;
            }
          }

          @media(max-width:768px){
            .about-heading { font-size: 2.2rem; }
            .about-card { padding: 35px 24px; }
          }
        `}</style>

        {/* AMBIENT GLOW */}
        <div className="about-glow"></div>

        {/* TOP SPACING CONTAINER */}
        <div className="container mt-5 pt-4">
          
          {/* HEADING & INTRO */}
          <div className="text-center mb-4 position-relative" data-aos="fade-down">
            <h2 className="about-heading d-inline-block pb-3 px-4">
              About KaalCyberSec
            </h2>

            <p className="about-subtext mt-3" data-aos="fade-up" data-aos-delay="100">
              A modern cybersecurity and technology intelligence firm focused on secure engineering, offensive threat simulation, enterprise protection, and future-ready digital infrastructure. We bridge the gap between aggressive hacking tactics and robust defensive engineering.
            </p>
          </div>

          {/* NEW STATS ROW DIV */}
          <div className="row justify-content-center" data-aos="zoom-in" data-aos-delay="150">
            <div className="col-lg-10">
              <div className="stats-container row text-center">
                {stats.map((stat, index) => (
                  <div className="col-md-6 col-lg-3 stat-box" key={index}>
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SECTION DIVIDER */}
          <div className="text-center mb-5 mt-4" data-aos="fade-up">
            <h4 style={{ color: "rgba(255,255,255,0.5)", letterSpacing: "2px", fontSize: "1rem", textTransform: "uppercase" }}>
              Our Core Architecture
            </h4>
          </div>

          {/* CARDS GRID - Now rendering 8 cards in a 4-column layout on Desktop */}
          <div className="row g-4 justify-content-center position-relative">
            {aboutCards.map((card, index) => (
              <div
                className="col-md-6 col-lg-4 col-xl-3"
                key={index}
              >
                <div
                  className="about-card text-center"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="about-icon">
                    {card.icon}
                  </div>

                  <h3 className="about-title">
                    {card.title}
                  </h3>

                  <p className="about-description">
                    {card.desc}
                  </p>

                  <div className="about-link">
                    Discover More
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    );
  }
}