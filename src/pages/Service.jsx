import React, { Component } from "react";

import {
  ShieldCheck,
  Code2,
  GlobeLock,
  Users,
  ArrowUpRight,
  TerminalSquare,
  HardDriveDownload,
  ServerCog,
  Braces
} from "lucide-react";

export default class Service extends Component {
  render() {
    // 8 Premium Services for a perfectly balanced 4x2 grid on large screens
 
    const services = [
      {
        icon: <ShieldCheck size={48} />,
        title: "Web & API Penetration Testing",
        desc: "Advanced vulnerability assessments and exploit validation for web applications, APIs, and enterprise cloud networks.",
      },
      {
        icon: <TerminalSquare size={48} />,
        title: "Red Teaming & Hacking",
        desc: "Real-world adversary simulations to test organizational defenses, SOC response times, and identify critical security gaps.",
      },
      {
        icon: <HardDriveDownload size={48} />,
        title: "Forensics & Data Recovery",
        desc: "Post-breach digital forensics, malware reverse-engineering, evidence preservation, and advanced enterprise data recovery protocols.",
      },
      {
        icon: <GlobeLock size={48} />,
        title: "Cyber Incident Response",
        desc: "24/7 rapid breach containment, threat eradication, and business continuity restoration managed by global security experts.",
      },
      {
        icon: <Code2 size={48} />,
        title: "Full-Stack React Development",
        desc: "High-performance, SEO-optimized frontend architectures and full-stack enterprise applications built on the modern React ecosystem.",
      },
      {
        icon: <ServerCog size={48} />,
        title: "Backend Engineering & Django",
        desc: "Scalable, secure, and resilient backend systems, database architectures, and microservices powered by Python and Django.",
      },
      {
        icon: <Braces size={48} />,
        title: "Secure API Development",
        desc: "Custom RESTful and GraphQL API architecture with robust authentication, rate limiting, and end-to-end encrypted data transmission.",
      },
      {
        icon: <Users size={48} />,
        title: "Global Expert Advisory",
        desc: "Strategic security consulting, compliance audits, and architecture reviews conducted by our worldwide network of infosec professionals.",
      },
    ];

    return (
      <section
        id="services"
        className="container-fluid pt-5 pb-5 position-relative"
        style={{
          fontFamily: "'Camomile', sans-serif",
          overflow: "hidden",
        }}
      >
        {/* CSS STYLES */}
        <style>{`
         body { background: #000; color: #fff; overflow-x: hidden; }
          /* GLOWING ANIMATED TITLE */
          .service-heading {
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

          .service-subtext {
            max-width: 780px;
            margin: auto;
            color: rgba(255,255,255,0.85);
            font-size: 1.05rem;
            line-height: 1.8;
          }

          /* PREMIUM FROSTED GLASS CARDS */
          .service-card {
            position: relative;
            height: 100%;
            padding: 40px 28px;
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

          /* TOP GLOW LINE ON HOVER */
          .service-card::before {
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

          .service-card:hover {
            transform: translateY(-8px);
            border-color: rgba(0,255,120,0.4);
            box-shadow:
              0 0 35px rgba(0,255,120,0.12),
              0 0 60px rgba(0,255,120,0.05);
            background: rgba(10, 20, 15, 0.8);
          }

          .service-card:hover::before {
            opacity: 1;
          }

          /* ICON CONTAINER */
          .service-icon {
            width: 85px;
            height: 85px;
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

          .service-card:hover .service-icon {
            transform: scale(1.1) rotate(5deg);
            background: rgba(0,255,120,0.12);
            box-shadow:
              0 0 25px rgba(0,255,120,0.25),
              0 0 50px rgba(0,255,120,0.1);
            color: #fff;
          }

          .service-title {
            color: #fff;
            font-size: 1.25rem;
            font-weight: 700;
            margin-bottom: 16px;
            transition: 0.3s ease;
            letter-spacing: 0.5px;
          }

          .service-card:hover .service-title {
            color: #00ff88;
            text-shadow: 0 0 10px rgba(0,255,120,0.4);
          }

          .service-description {
            color: rgba(255,255,255,0.75);
            font-size: 0.95rem;
            line-height: 1.8;
            margin-bottom: 28px;
            transition: 0.3s ease;
          }

          .service-card:hover .service-description {
            color: rgba(255,255,255,0.95);
          }

          .service-link {
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

          .service-card:hover .service-link {
            color: #00ff88;
          }

          .service-link svg {
            transition: 0.3s ease;
          }

          .service-card:hover .service-link svg {
            transform: translate(4px, -4px);
          }

          /* AMBIENT BACKGROUND GLOW */
          .service-glow {
            position: absolute;
            width: 700px;
            height: 700px;
            background: radial-gradient(circle, rgba(0,255,120,0.05) 0%, transparent 60%);
            border-radius: 50%;
            filter: blur(100px);
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 0;
            pointer-events: none;
          }

          @media(max-width: 768px){
            .service-heading { font-size: 2.2rem; }
            .service-card { padding: 35px 24px; }
          }
        `}</style>

        {/* BACKGROUND GLOW */}
        <div className="service-glow"></div>

        {/* TOP SPACING CONTAINER (mt-5 pt-4) TO CLEAR NAVBAR */}
        <div className="container mt-5 pt-4">
          
          {/* HEADING */}
          <div className="text-center mb-5 position-relative" data-aos="fade-down">
            <h2 className="service-heading d-inline-block pb-3 px-4">
              Enterprise Cyber Solutions
            </h2>

            <p className="service-subtext mt-3" data-aos="fade-up" data-aos-delay="100">
              Military-grade cybersecurity offensive operations, digital forensics, and full-stack secure engineering executed by our worldwide network of industry-leading experts.
            </p>
          </div>

          {/* GRID ROW */}
          <div className="row g-4 justify-content-center position-relative">
            {services.map((service, index) => (
              <div
                className="col-md-6 col-lg-4 col-xl-3"
                key={index}
              >
                <div
                  className="service-card text-center"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="service-icon">
                    {service.icon}
                  </div>

                  <h3 className="service-title">
                    {service.title}
                  </h3>

                  <p className="service-description">
                    {service.desc}
                  </p>

                  <div className="service-link">
                    Explore Details
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