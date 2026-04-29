import React, { Component } from "react";
import {
  Globe,
  Users,
  Code2,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

export default class About extends Component {

  render() {

    const aboutCards = [
      {
        icon: <ShieldCheck size={50} />,
        title: "Our Mission",
        desc: "KaalCyberSec is committed to building a secure digital ecosystem where organizations, startups, and enterprises can innovate confidently without fear of evolving cyber threats.",
      },

      {
        icon: <Globe size={50} />,
        title: "Our Vision",
        desc: "We envision a future where cybersecurity becomes the foundation of digital growth, enabling businesses to scale securely with world-class protection and hacker-level awareness.",
      },

      {
        icon: <Users size={50} />,
        title: "Our Team",
        desc: "Our team combines penetration testers, secure developers, cybersecurity researchers, and engineers experienced in enterprise systems, security operations, and scalable architectures.",
      },

      {
        icon: <Code2 size={50} />,
        title: "Our Edge",
        desc: "We merge a hacker mindset with engineering precision to create secure-by-design solutions focused on resilience, scalability, performance, and long-term digital defense.",
      },
    ];

    return (
      <section
        id="about"
        className="container-fluid py-5 position-relative overflow-hidden"
        style={{
          color: "#fff",
          fontFamily: "'Camomile', sans-serif",
        }}
      >

        {/* STYLES */}
        <style>{`

          @import url('https://fonts.cdnfonts.com/css/camomile');

          .about-heading {

            font-size: 3rem;

            font-weight: 700;

            letter-spacing: 2px;

            color: #fff;

            text-shadow: 0 0 18px rgba(0,255,120,0.18);
          }

          .about-subtext {

            max-width: 780px;

            margin: auto;

            color: rgba(255,255,255,0.92);

            line-height: 1.9;

            font-size: 1.02rem;
          }

          .about-card {

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

          .about-card::before {

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

          .about-card:hover {

            transform: translateY(-10px);

            border-color: rgba(0,255,120,0.5);

            box-shadow:
              0 0 35px rgba(0,255,120,0.18),
              0 0 60px rgba(0,255,120,0.08);
          }

          .about-card:hover::before {
            opacity: 1;
          }

          .about-icon {

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

          .about-card:hover .about-icon {

            transform: scale(1.08) rotate(4deg);

            background: rgba(0,255,120,0.15);

            box-shadow:
              0 0 25px rgba(0,255,120,0.3),
              0 0 50px rgba(0,255,120,0.15);
          }

          .about-title {

            font-size: 1.4rem;

            font-weight: 700;

            color: #fff;

            margin-bottom: 18px;

            transition: 0.3s ease;
          }

          .about-card:hover .about-title {
            color: #00ff88;
          }

          .about-description {

            color: rgba(255,255,255,0.94);

            line-height: 1.95;

            font-size: 1rem;

            margin-bottom: 28px;
          }

          .about-link {

            display: inline-flex;

            align-items: center;

            gap: 8px;

            color: #fff;

            font-size: 0.92rem;

            letter-spacing: 1px;

            text-transform: uppercase;

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

          .about-glow {

            position: absolute;

            width: 550px;
            height: 550px;

            background: rgba(0,255,120,0.05);

            border-radius: 50%;

            filter: blur(130px);

            top: -220px;
            right: -180px;

            z-index: 0;
          }

          @media(max-width:768px){

            .about-heading{
              font-size: 2.2rem;
            }

            .about-card{
              padding: 34px 24px;
            }
          }

        `}</style>

        {/* BACKGROUND GLOW */}
        <div className="about-glow"></div>

        {/* HEADING */}
        <div className="text-center mb-5 position-relative">

          <h2
            className="about-heading"
            data-aos="zoom-in"
          >
            About KaalCyberSec
          </h2>

          <p
            className="about-subtext mt-4"
            data-aos="fade-up"
          >
            A modern cybersecurity and technology company focused on secure
            engineering, offensive security, enterprise protection, and
            future-ready digital infrastructure.
          </p>

        </div>

        {/* CARDS */}
        <div className="row g-4 px-lg-5 px-3 position-relative">

          {aboutCards.map((card, index) => (

            <div
              className="col-md-6"
              key={index}
            >

              <div
                className="about-card text-center"
                data-aos="fade-up"
                data-aos-delay={index * 120}
              >

                <div className="about-icon">
                  {card.icon}
                </div>

                <h4 className="about-title">
                  {card.title}
                </h4>

                <p className="about-description">
                  {card.desc}
                </p>

                <div className="about-link">
                  Learn More
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