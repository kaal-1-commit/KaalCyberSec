import React, { Component } from "react";

import {

  ShieldCheck,
  Globe,
  Building2,
  Hospital,
  Hotel,
  ShoppingBag,
  GraduationCap,
  ArrowUpRight,
} from "lucide-react";

export default class Testimonials extends Component {

  render() {

    const testimonials = [

      {
        icon: <ShieldCheck size={48} />,
        name: "I4C Collaboration",
        role: "Cyber Awareness & Security Operations",
        quote:
          "KaalCyberSec demonstrated advanced technical understanding, responsible security practices, and strong cybersecurity coordination capabilities during multiple awareness and security-focused engagements.",
      },

      {
        icon: <Hospital size={48} />,
        name: "Healthcare Infrastructure",
        role: "Medical & Hospital Security",
        quote:
          "Security assessments and penetration testing engagements helped strengthen healthcare web infrastructure, improve data protection practices, and reduce exposure to modern cyber threats.",
      },

      {
        icon: <Hotel size={48} />,
        name: "Hospitality & Enterprise Platforms",
        role: "Hotels & Booking Systems",
        quote:
          "Enterprise hospitality platforms benefited from infrastructure hardening, vulnerability assessments, and improved application-level security for customer-facing systems.",
      },

      {
        icon: <GraduationCap size={48} />,
        name: "Educational Platforms",
        role: "University & Institutional Systems",
        quote:
          "Academic and institutional platforms were reviewed for security posture improvements, secure deployment practices, and enhanced protection against web application vulnerabilities.",
      },

      {
        icon: <ShoppingBag size={48} />,
        name: "E-Commerce & Retail",
        role: "Retail Technology Security",
        quote:
          "Modern e-commerce platforms were strengthened with secure engineering recommendations, application security testing, and infrastructure-level hardening strategies.",
      },

      {
        icon: <Building2 size={48} />,
        name: "Enterprise Technology Clients",
        role: "Infrastructure & Development",
        quote:
          "Organizations trusted KaalCyberSec for scalable development, security-focused architecture, penetration testing, and long-term digital infrastructure resilience.",
      },

      {
        icon: <Globe size={48} />,
        name: "International Clients",
        role: "USA Technology Engagements",
        quote:
          "International clients appreciated the team's communication, secure development approach, infrastructure expertise, and professional execution across remote engagements.",
      },

      {
        icon: <ShieldCheck size={48} />,
        name: "Incident Response Clients",
        role: "Cybersecurity & Recovery",
        quote:
          "Rapid response support, vulnerability analysis, and actionable remediation guidance helped organizations recover securely while improving future resilience.",
      },

    ];

    return (
      <section
        id="testimonials"
        className="container-fluid py-5 position-relative overflow-hidden"
        style={{
          color: "#fff",
          fontFamily: "'Camomile', sans-serif",
        }}
      >

        {/* STYLES */}
        <style>{`

          @import url('https://fonts.cdnfonts.com/css/camomile');

          .testimonial-heading {

            font-size: 3rem;

            font-weight: 700;

            letter-spacing: 2px;

            color: #fff;

            text-shadow: 0 0 18px rgba(0,255,120,0.18);
          }

          .testimonial-subtext {

            max-width: 820px;

            margin: auto;

            color: rgba(255,255,255,0.92);

            line-height: 1.9;

            font-size: 1.02rem;
          }

          .testimonial-card {

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

          .testimonial-card::before {

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

          .testimonial-card:hover {

            transform: translateY(-10px);

            border-color: rgba(0,255,120,0.5);

            box-shadow:
              0 0 35px rgba(0,255,120,0.18),
              0 0 60px rgba(0,255,120,0.08);
          }

          .testimonial-card:hover::before {
            opacity: 1;
          }

          .testimonial-avatar {

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

          .testimonial-card:hover .testimonial-avatar {

            transform: scale(1.08) rotate(4deg);

            background: rgba(0,255,120,0.15);

            box-shadow:
              0 0 25px rgba(0,255,120,0.3),
              0 0 50px rgba(0,255,120,0.15);
          }

          .quote-icon {

            color: #00ff88;

            margin-bottom: 18px;

            opacity: 0.9;
          }

          .testimonial-quote {

            color: rgba(255,255,255,0.94);

            line-height: 1.95;

            font-size: 1rem;

            margin-bottom: 28px;
          }

          .testimonial-name {

            font-size: 1.2rem;

            font-weight: 700;

            color: #fff;

            margin-bottom: 8px;

            transition: 0.3s ease;
          }

          .testimonial-card:hover .testimonial-name {
            color: #00ff88;
          }

          .testimonial-role {

            color: rgba(255,255,255,0.72);

            font-size: 0.95rem;

            letter-spacing: 0.5px;

            margin-bottom: 20px;
          }

          .testimonial-link {

            display: inline-flex;

            align-items: center;

            gap: 8px;

            color: #fff;

            font-size: 0.92rem;

            letter-spacing: 1px;

            text-transform: uppercase;

            transition: 0.3s ease;
          }

          .testimonial-card:hover .testimonial-link {
            color: #00ff88;
          }

          .testimonial-link svg {
            transition: 0.3s ease;
          }

          .testimonial-card:hover .testimonial-link svg {
            transform: translate(4px,-4px);
          }

          .testimonial-glow {

            position: absolute;

            width: 550px;
            height: 550px;

            background: rgba(0,255,120,0.05);

            border-radius: 50%;

            filter: blur(130px);

            top: -220px;
            left: -180px;

            z-index: 0;
          }

          @media(max-width:768px){

            .testimonial-heading{
              font-size: 2.2rem;
            }

            .testimonial-card{
              padding: 34px 24px;
            }
          }

        `}</style>

        {/* BACKGROUND GLOW */}
        <div className="testimonial-glow"></div>

        {/* HEADING */}
        <div className="text-center mb-5 position-relative">

          <h2
            className="testimonial-heading"
            data-aos="zoom-in"
          >
            Trusted By Organizations
          </h2>

          <p
            className="testimonial-subtext mt-4"
            data-aos="fade-up"
          >
            KaalCyberSec has contributed to security testing, infrastructure
            hardening, secure engineering, and cybersecurity engagements
            across healthcare, hospitality, enterprise, education, retail,
            and international technology ecosystems.
          </p>

        </div>

        {/* CARDS */}
        <div className="row g-4 px-lg-5 px-3 position-relative">

          {testimonials.map((item, index) => (

            <div
              className="col-md-6 col-xl-3"
              key={index}
            >

              <div
                className="testimonial-card text-center"
                data-aos="fade-up"
                data-aos-delay={index * 120}
              >

                <div className="testimonial-avatar">
                  {item.icon}
                </div>

                

                <p className="testimonial-quote">
                  {item.quote}
                </p>

                <h4 className="testimonial-name">
                  {item.name}
                </h4>

                <p className="testimonial-role">
                  {item.role}
                </p>

                <div className="testimonial-link">
                  Security Engagement
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