import React, { Component } from "react";
import {
  ShieldCheck,
  Code2,
  GlobeLock,
  Users,
  ArrowUpRight,
} from "lucide-react";

export default class Service extends Component {
  render() {
    const services = [
      {
        icon: <ShieldCheck size={52} />,
        title: "Penetration Testing",
        desc: "Advanced web, API, cloud, and infrastructure penetration testing with real-world attack simulations and detailed remediation guidance.",
      },
      {
        icon: <Code2 size={52} />,
        title: "Secure Development",
        desc: "Modern secure application development using React, Django, FastAPI, and scalable cloud-native architectures with security-first engineering.",
      },
      {
        icon: <GlobeLock size={52} />,
        title: "Incident Response",
        desc: "Rapid breach containment, forensic investigation, malware analysis, and incident recovery to minimize operational and reputational impact.",
      },
      {
        icon: <Users size={52} />,
        title: "Security Awareness",
        desc: "Enterprise-grade awareness programs and advisory services to strengthen organizational security culture and reduce human risks.",
      },
    ];

    return (
      <section
        id="services"
        className="container-fluid py-5 position-relative"
        style={{
          color: "#fff",
          fontFamily: "'Camomile', sans-serif",
          overflow: "hidden",
        }}
      >
        {/* STYLES */}
        <style>{`
          @import url('https://fonts.cdnfonts.com/css/camomile');

          .service-heading {
            font-size: 3rem;
            font-weight: 700;
            letter-spacing: 2px;
            color: #fff;
            text-shadow: 0 0 18px rgba(0,255,120,0.25);
          }

          .service-subtext {
            max-width: 750px;
            margin: auto;
            color: rgba(255,255,255,0.92);
            font-size: 1.05rem;
            line-height: 1.8;
          }

          .service-card {

            position: relative;

            height: 100%;

            padding: 40px 28px;

            border-radius: 24px;

            overflow: hidden;

            backdrop-filter: blur(18px);

            background: rgba(255,255,255,0.03);

            border: 1px solid rgba(0,255,120,0.18);

            transition: 0.4s ease;

            box-shadow:
              0 0 20px rgba(0,255,120,0.06),
              inset 0 0 20px rgba(255,255,255,0.02);
          }

          .service-card::before {

            content: "";

            position: absolute;

            inset: 0;

            background: linear-gradient(
              135deg,
              rgba(0,255,120,0.08),
              transparent 40%
            );

            opacity: 0;

            transition: 0.4s ease;
          }

          .service-card:hover {

            transform: translateY(-10px);

            border-color: rgba(0,255,120,0.55);

            box-shadow:
              0 0 35px rgba(0,255,120,0.18),
              0 0 60px rgba(0,255,120,0.08);
          }

          .service-card:hover::before {
            opacity: 1;
          }

          .service-icon {

            width: 90px;
            height: 90px;

            margin: auto;

            display: flex;
            align-items: center;
            justify-content: center;

            border-radius: 50%;

            color: #00ff88;

            background: rgba(0,255,120,0.08);

            border: 1px solid rgba(0,255,120,0.18);

            margin-bottom: 24px;

            transition: 0.4s ease;

            box-shadow: 0 0 25px rgba(0,255,120,0.08);
          }

          .service-card:hover .service-icon {

            transform: scale(1.08) rotate(4deg);

            background: rgba(0,255,120,0.14);

            box-shadow:
              0 0 25px rgba(0,255,120,0.3),
              0 0 50px rgba(0,255,120,0.15);
          }

          .service-title {

            color: #fff;

            font-size: 1.35rem;

            font-weight: 700;

            margin-bottom: 18px;

            transition: 0.3s ease;
          }

          .service-card:hover .service-title {
            color: #00ff88;
          }

          .service-description {

            color: rgba(255,255,255,0.92);

            font-size: 0.98rem;

            line-height: 1.9;

            margin-bottom: 28px;
          }

          .service-link {

            display: inline-flex;

            align-items: center;

            gap: 8px;

            color: #fff;

            font-size: 0.92rem;

            text-transform: uppercase;

            letter-spacing: 1px;

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

          .service-glow {

            position: absolute;

            width: 500px;
            height: 500px;

            background: rgba(0,255,120,0.06);

            border-radius: 50%;

            filter: blur(120px);

            top: -180px;
            right: -150px;

            z-index: 0;
          }

          @media(max-width: 768px){

            .service-heading{
              font-size: 2.2rem;
            }

            .service-card{
              padding: 32px 22px;
            }
          }
        `}</style>

        {/* BACKGROUND GLOW */}
        <div className="service-glow"></div>

        {/* HEADING */}
        <div className="text-center mb-5 position-relative">
          <h2
            className="service-heading"
            data-aos="zoom-in"
          >
            Cyber Security Services
          </h2>

          <p
            className="service-subtext mt-4"
            data-aos="fade-up"
          >
            Enterprise-grade cybersecurity and secure development solutions
            engineered to protect digital infrastructure, strengthen resilience,
            and accelerate secure innovation.
          </p>
        </div>

        {/* CARDS */}
        <div className="row g-4 px-lg-5 px-3 position-relative">

          {services.map((service, index) => (
            <div
              className="col-md-6 col-xl-3"
              key={index}
            >
              <div
                className="service-card text-center"
                data-aos="fade-up"
                data-aos-delay={index * 120}
              >

                <div className="service-icon">
                  {service.icon}
                </div>

                <h4 className="service-title">
                  {service.title}
                </h4>

                <p className="service-description">
                  {service.desc}
                </p>

                <div className="service-link">
                  Explore Service
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