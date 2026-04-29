import React, { Component } from "react";
import {
  Shield,
  Layers3,
  LockKeyhole,
  MonitorSmartphone,
  ServerCog,
  ArrowUpRight,
} from "lucide-react";

export default class Bundles extends Component {

  render() {

    const bundles = [
      {
        icon: <MonitorSmartphone size={52} />,
        title: "Frontend Experience Bundle™",
        desc: "Modern responsive frontend systems engineered for performance, branding, accessibility, and immersive digital experiences.",
      },

      {
        icon: <ServerCog size={52} />,
        title: "Backend Systems Bundle™",
        desc: "Scalable backend infrastructures with secure APIs, authentication systems, database architecture, and enterprise integrations.",
      },

      {
        icon: <Layers3 size={52} />,
        title: "TechStack Bundle™",
        desc: "Complete full-stack product engineering including frontend, backend, deployment pipelines, hosting, and production support.",
      },

      {
        icon: <LockKeyhole size={52} />,
        title: "CyberDefense Bundle™",
        desc: "Advanced cybersecurity solutions for vulnerability assessment, infrastructure hardening, monitoring, and risk reduction.",
      },

      {
        icon: <Shield size={52} />,
        title: "CyberBundle™",
        desc: "All-in-one enterprise technology and cybersecurity ecosystem combining development, pentesting, infrastructure security, and maintenance.",
      },
    ];

    return (
      <section
        id="bundles"
        className="container-fluid py-5 position-relative overflow-hidden"
        style={{
          color: "#fff",
          fontFamily: "'Camomile', sans-serif",
        }}
      >

        {/* STYLES */}
        <style>{`

          @import url('https://fonts.cdnfonts.com/css/camomile');

          .bundle-heading {

            font-size: 3rem;

            font-weight: 700;

            letter-spacing: 2px;

            color: #fff;

            text-shadow: 0 0 18px rgba(0,255,120,0.18);
          }

          .bundle-subtext {

            max-width: 780px;

            margin: auto;

            color: rgba(255,255,255,0.92);

            line-height: 1.9;

            font-size: 1.02rem;
          }

          .bundle-card {

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

          .bundle-card::before {

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

          .bundle-card:hover {

            transform: translateY(-10px);

            border-color: rgba(0,255,120,0.5);

            box-shadow:
              0 0 35px rgba(0,255,120,0.18),
              0 0 60px rgba(0,255,120,0.08);
          }

          .bundle-card:hover::before {
            opacity: 1;
          }

          .bundle-icon {

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

          .bundle-card:hover .bundle-icon {

            transform: scale(1.08) rotate(4deg);

            background: rgba(0,255,120,0.15);

            box-shadow:
              0 0 25px rgba(0,255,120,0.3),
              0 0 50px rgba(0,255,120,0.15);
          }

          .bundle-title {

            font-size: 1.35rem;

            font-weight: 700;

            color: #fff;

            margin-bottom: 20px;

            transition: 0.3s ease;
          }

          .bundle-card:hover .bundle-title {
            color: #00ff88;
          }

          .bundle-description {

            color: rgba(255,255,255,0.93);

            line-height: 1.95;

            font-size: 0.98rem;

            margin-bottom: 28px;
          }

          .bundle-link {

            display: inline-flex;

            align-items: center;

            gap: 8px;

            color: #fff;

            font-size: 0.92rem;

            letter-spacing: 1px;

            text-transform: uppercase;

            transition: 0.3s ease;
          }

          .bundle-card:hover .bundle-link {
            color: #00ff88;
          }

          .bundle-link svg {
            transition: 0.3s ease;
          }

          .bundle-card:hover .bundle-link svg {
            transform: translate(4px,-4px);
          }

          .bundle-glow {

            position: absolute;

            width: 550px;
            height: 550px;

            background: rgba(0,255,120,0.05);

            border-radius: 50%;

            filter: blur(130px);

            bottom: -220px;
            left: -180px;

            z-index: 0;
          }

          @media(max-width:768px){

            .bundle-heading{
              font-size: 2.2rem;
            }

            .bundle-card{
              padding: 34px 24px;
            }
          }

        `}</style>

        {/* BACKGROUND GLOW */}
        <div className="bundle-glow"></div>

        {/* HEADING */}
        <div className="text-center mb-5 position-relative">

          <h2
            className="bundle-heading"
            data-aos="zoom-in"
          >
            Enterprise Technology Bundles
          </h2>

          <p
            className="bundle-subtext mt-4"
            data-aos="fade-up"
          >
            Premium technology and cybersecurity engagement models designed
            for startups, enterprises, and organizations building secure,
            scalable, and future-ready digital ecosystems.
          </p>

        </div>

        {/* CARDS */}
        <div className="row g-4 px-lg-5 px-3 position-relative">

          {bundles.map((bundle, index) => (

            <div
              className={`${
                index === 3 || index === 4
                  ? "col-md-6"
                  : "col-md-6 col-xl-4"
              }`}
              key={index}
            >

              <div
                className="bundle-card text-center"
                data-aos="fade-up"
                data-aos-delay={index * 120}
              >

                <div className="bundle-icon">
                  {bundle.icon}
                </div>

                <h4 className="bundle-title">
                  {bundle.title}
                </h4>

                <p className="bundle-description">
                  {bundle.desc}
                </p>

                <div className="bundle-link">
                  Explore Solution
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