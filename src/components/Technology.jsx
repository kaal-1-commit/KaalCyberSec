import React, { Component } from "react";

import {
  Cpu,
  ShieldCheck,
  Code2,
  Database,
  Network,
  ArrowUpRight,
} from "lucide-react";

export default class TechStack extends Component {

  render() {

    const technologies = [
      {
        icon: <Cpu size={52} />,
        title: "Offensive Security",
        desc: "Advanced penetration testing, exploit validation, vulnerability research, and offensive security operations using industry-standard tooling.",
        tech: "Kali Linux • Burp Suite • Metasploit • Wireshark",
      },

      {
        icon: <ShieldCheck size={52} />,
        title: "Defensive Security",
        desc: "Enterprise defense operations focused on monitoring, threat detection, SIEM integrations, and infrastructure hardening.",
        tech: "SIEM • IDS/IPS • SOC Monitoring • Threat Intel",
      },

      {
        icon: <Code2 size={52} />,
        title: "Secure Development",
        desc: "Scalable secure software engineering for modern web applications, APIs, and enterprise systems with security-first architecture.",
        tech: "React • Django • FastAPI • Node.js",
      },

      {
        icon: <Database size={52} />,
        title: "Data Infrastructure",
        desc: "High-performance database systems engineered for scalability, resilience, optimization, and enterprise-grade reliability.",
        tech: "PostgreSQL • MongoDB • MySQL • Redis",
      },

      {
        icon: <Network size={52} />,
        title: "Cloud & DevSecOps",
        desc: "Cloud-native infrastructure, secure deployment pipelines, containerization, CI/CD security, and production hardening.",
        tech: "AWS • Docker • Kubernetes • CI/CD",
      },
    ];

    return (
      <section
        id="tech-stack"
        className="container-fluid py-5 position-relative overflow-hidden"
        style={{
          color: "#fff",
          fontFamily: "'Camomile', sans-serif",
        }}
      >

        {/* STYLES */}
        <style>{`

          @import url('https://fonts.cdnfonts.com/css/camomile');

          .stack-heading {

            font-size: 3rem;

            font-weight: 700;

            letter-spacing: 2px;

            color: #fff;

            text-shadow: 0 0 18px rgba(0,255,120,0.18);
          }

          .stack-subtext {

            max-width: 780px;

            margin: auto;

            color: rgba(255,255,255,0.92);

            line-height: 1.9;

            font-size: 1.02rem;
          }

          .stack-card {

            position: relative;

            height: 100%;

            padding: 40px 30px;

            border-radius: 24px;

            overflow: hidden;

            background: rgba(255,255,255,0.03);

            border: 1px solid rgba(0,255,120,0.14);

            backdrop-filter: blur(18px);

            transition: 0.45s ease;

            box-shadow:
              0 0 25px rgba(0,255,120,0.05),
              inset 0 0 18px rgba(255,255,255,0.02);
          }

          .stack-card::before {

            content: "";

            position: absolute;

            inset: 0;

            background: linear-gradient(
              135deg,
              rgba(0,255,120,0.08),
              transparent 45%
            );

            opacity: 0;

            transition: 0.4s ease;
          }

          .stack-card:hover {

            transform: translateY(-10px);

            border-color: rgba(0,255,120,0.5);

            box-shadow:
              0 0 35px rgba(0,255,120,0.18),
              0 0 60px rgba(0,255,120,0.08);
          }

          .stack-card:hover::before {
            opacity: 1;
          }

          .stack-icon {

            width: 95px;
            height: 95px;

            margin: auto;

            display: flex;
            align-items: center;
            justify-content: center;

            border-radius: 50%;

            color: #00ff88;

            background: rgba(0,255,120,0.08);

            border: 1px solid rgba(0,255,120,0.16);

            margin-bottom: 24px;

            transition: 0.4s ease;

            box-shadow: 0 0 25px rgba(0,255,120,0.08);
          }

          .stack-card:hover .stack-icon {

            transform: scale(1.08) rotate(4deg);

            background: rgba(0,255,120,0.15);

            box-shadow:
              0 0 25px rgba(0,255,120,0.3),
              0 0 50px rgba(0,255,120,0.15);
          }

          .stack-title {

            font-size: 1.4rem;

            font-weight: 700;

            color: #fff;

            margin-bottom: 18px;

            transition: 0.3s ease;
          }

          .stack-card:hover .stack-title {
            color: #00ff88;
          }

          .stack-description {

            color: rgba(255,255,255,0.94);

            line-height: 1.95;

            font-size: 1rem;

            margin-bottom: 18px;
          }

          .stack-tech {

            color: #00ff88;

            font-size: 0.95rem;

            letter-spacing: 0.5px;

            margin-bottom: 28px;

            line-height: 1.8;
          }

          .stack-link {

            display: inline-flex;

            align-items: center;

            gap: 8px;

            color: #fff;

            font-size: 0.92rem;

            letter-spacing: 1px;

            text-transform: uppercase;

            transition: 0.3s ease;
          }

          .stack-card:hover .stack-link {
            color: #00ff88;
          }

          .stack-link svg {
            transition: 0.3s ease;
          }

          .stack-card:hover .stack-link svg {
            transform: translate(4px,-4px);
          }

          .stack-glow {

            position: absolute;

            width: 550px;
            height: 550px;

            background: rgba(0,255,120,0.05);

            border-radius: 50%;

            filter: blur(130px);

            bottom: -220px;
            right: -180px;

            z-index: 0;
          }

          @media(max-width:768px){

            .stack-heading{
              font-size: 2.2rem;
            }

            .stack-card{
              padding: 34px 24px;
            }
          }

        `}</style>

        {/* BACKGROUND GLOW */}
        <div className="stack-glow"></div>

        {/* HEADING */}
        <div className="text-center mb-5 position-relative">

          <h2
            className="stack-heading"
            data-aos="zoom-in"
          >
            Technology Stack
          </h2>

          <p
            className="stack-subtext mt-4"
            data-aos="fade-up"
          >
            Enterprise-grade technologies, offensive security tooling,
            cloud-native infrastructure, and secure engineering frameworks
            powering modern digital ecosystems.
          </p>

        </div>

        {/* CARDS */}
        <div className="row g-4 px-lg-5 px-3 position-relative">

          {technologies.map((tech, index) => (

            <div
              className={`${
                index === 4
                  ? "col-12"
                  : "col-md-6 col-xl-3"
              }`}
              key={index}
            >

              <div
                className="stack-card text-center"
                data-aos="fade-up"
                data-aos-delay={index * 120}
              >

                <div className="stack-icon">
                  {tech.icon}
                </div>

                <h4 className="stack-title">
                  {tech.title}
                </h4>

                <p className="stack-description">
                  {tech.desc}
                </p>

                <div className="stack-tech">
                  {tech.tech}
                </div>

                <div className="stack-link">
                  Explore Technologies
                  <ArrowUpRight size={18} />
                </div>

              </div>

            </div>

          ))}

        </div>

      </section>
    );
  }
}