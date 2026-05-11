import React, { Component } from "react";
import FAQ from "../components/FAQ"; // Adjust path if needed
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
  const enterpriseFAQs = [
    {
      question: "Who is the founder of KaalCyberSec?",
      answer: "KaalCyberSec was founded by Prince Chaudhary, a recognized perfectionist across offensive hacking, advanced computer hardware, and full-stack engineering. His unique, multidisciplinary expertise ensures that our solutions aren't just theoretically secure, but practically impenetrable at both the software and hardware levels."
    },
    {
      question: "How long does a typical enterprise penetration test take?",
      answer: "The duration of a penetration test depends heavily on the scope and complexity of your digital infrastructure. A standard web application or API pentest typically takes 1 to 2 weeks, while large-scale enterprise network or red team operations can take 3 to 6 weeks."
    },
    {
      question: "What makes KaalCyberSec different from automated scanning tools?",
      answer: "Automated scanners only catch known, surface-level flaws. Our team utilizes a manual, offensive hacker mindset combined with engineering precision. We chain multiple low-risk vulnerabilities together to execute complex, real-world exploits that automated tools completely miss."
    },
    {
      question: "Do you provide secure full-stack development services?",
      answer: "Yes. Leveraging our founder's deep development expertise, we architect and deploy secure-by-design web applications. We specialize in building highly resilient, scalable platforms utilizing modern frameworks like React for the frontend and Python/Django for robust backend infrastructure."
    },
    {
      question: "What is included in your final security assessment report?",
      answer: "We deliver a comprehensive, enterprise-grade report divided into two sections: an Executive Summary for C-level stakeholders detailing business risks, and a Deep Technical Breakdown for developers. It includes step-by-step exploit replication, CVSS scoring, and actionable remediation code snippets."
    },
    {
      question: "Do you provide remediation support after uncovering vulnerabilities?",
      answer: "Absolutely. We don't just hand over a report and leave. KaalCyberSec provides developer-friendly remediation guidance and includes a complimentary re-test within 30 days to cryptographically verify that all critical vulnerabilities have been successfully patched."
    },
    {
      question: "What is the difference between Red Teaming and standard Penetration Testing?",
      answer: "A penetration test is a comprehensive assessment to find as many vulnerabilities as possible within a specific timeframe. Red Teaming is a targeted, covert adversary simulation designed to test your organization's detection, response capabilities (SOC), and human awareness without them knowing an attack is happening."
    },
    {
      question: "Will your offensive security assessments disrupt our daily operations?",
      answer: "No. Our security engineers strictly utilize controlled, non-destructive methodologies. While we simulate highly aggressive real-world attacks, we operate within explicitly defined boundaries and Rules of Engagement (RoE) to ensure zero downtime for your production environments."
    },
    {
      question: "How do you handle data confidentiality and non-disclosure agreements (NDAs)?",
      answer: "Confidentiality is our highest priority. We enforce strict, military-grade data protection protocols and operate on an NDA-first basis. All client data, vulnerability reports, and communication channels are end-to-end encrypted and completely isolated."
    },
    {
      question: "Does KaalCyberSec perform hardware security audits and digital forensics?",
      answer: "Yes. Given our deep background in computer hardware architecture, we conduct rigorous physical security assessments, hardware reverse-engineering, and post-breach digital forensics to recover data and trace attack vectors at the bare-metal level."
    },
    {
      question: "What industries do you specialize in protecting?",
      answer: "We provide high-assurance security services across multiple high-risk sectors, including Healthcare (HIPAA environments), FinTech, E-Commerce, Higher Education, and global Enterprise Technology infrastructures."
    },
    {
      question: "How fast is your Incident Response (IR) deployment?",
      answer: "In the event of an active breach, our incident response team initiates rapid containment protocols. We focus on immediate threat eradication, forensic preservation, and restoring business continuity with minimal operational loss."
    },
    {
      question: "Can you audit custom APIs and microservice architectures?",
      answer: "Yes. We conduct rigorous security audits on custom RESTful and GraphQL APIs. We specifically target complex authentication bypasses, Broken Object Level Authorization (BOLA), rate limiting flaws, and injection vectors within microservices."
    },
    {
      question: "Do you offer continuous vulnerability monitoring or just point-in-time tests?",
      answer: "While we offer point-in-time penetration testing, we highly recommend our continuous vigilance programs. We deploy proactive threat hunting and real-time perimeter monitoring to catch newly exposed vulnerabilities before adversaries can exploit them."
    },
    {
      question: "Can your assessments help us achieve compliance (SOC 2, ISO 27001, etc.)?",
      answer: "Yes. Our penetration tests and architecture reviews are mapped directly to industry-standard frameworks like OWASP Top 10, NIST, and MITRE ATT&CK, fulfilling the stringent testing requirements needed for SOC 2, ISO 27001, and PCI-DSS compliance."
    },
    {
      question: "Do you offer cybersecurity awareness training for internal staff?",
      answer: "Human error remains the largest attack vector. We conduct targeted phishing simulations, social engineering campaigns, and comprehensive awareness training to transform your employees from a security liability into a proactive human firewall."
    }
  ];
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
        <FAQ 
          title="Service Execution Queries" 
          faqData={enterpriseFAQs} 
        />
      </section>
    );
  }
}