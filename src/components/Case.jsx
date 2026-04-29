import React, { Component } from "react";

import {
  ShieldCheck,
  Globe,
  Code2,
  ServerCog,
  Hospital,
  Hotel,
  ShoppingBag,
  GraduationCap,
  ArrowUpRight,
} from "lucide-react";

export default class CaseStudies extends Component {

  render() {

    const caseStudies = [

      {
        icon: <ShieldCheck size={52} />,
        title: "Government Cybersecurity Hardening",
        desc:
          "Conducted advanced penetration testing and infrastructure security assessments for government-facing digital systems and citizen service platforms.",
        details:
          "Identified authentication weaknesses, insecure configurations, exposed services, and attack surfaces requiring remediation and security hardening.",
        outcome:
          "Improved platform resilience, reduced phishing exposure, and strengthened citizen data protection mechanisms.",
      },

      {
        icon: <Globe size={52} />,
        title: "Cloud Platform Security",
        desc:
          "Secured cloud-hosted startup infrastructure through DevSecOps implementation, CI/CD hardening, API reviews, and infrastructure monitoring.",
        details:
          "Performed AWS security assessments, container security validation, deployment reviews, and cloud access control optimization.",
        outcome:
          "Reduced critical vulnerabilities, accelerated secure deployment workflows, and improved cloud compliance readiness.",
      },

      {
        icon: <Code2 size={52} />,
        title: "Enterprise Incident Response",
        desc:
          "Responded to ransomware and enterprise-level security incidents with rapid forensic analysis, containment, and recovery planning.",
        details:
          "Performed malware investigation, attack tracing, root-cause analysis, and infrastructure recovery coordination for affected systems.",
        outcome:
          "Business operations restored securely with improved monitoring and long-term security posture enhancements.",
      },

      {
        icon: <Hospital size={52} />,
        title: "Healthcare Security Assessments",
        desc:
          "Performed web application security reviews and infrastructure assessments for healthcare and medical service platforms.",
        details:
          "Focused on patient data protection, secure authentication flows, infrastructure hardening, and web vulnerability reduction.",
        outcome:
          "Enhanced platform security, reduced exposure to common attacks, and improved operational trust.",
      },

      {
        icon: <Hotel size={52} />,
        title: "Hospitality & Booking Platforms",
        desc:
          "Security-focused reviews and optimization of hospitality booking systems, customer-facing portals, and digital infrastructure.",
        details:
          "Conducted vulnerability assessments, secure deployment reviews, and performance-focused infrastructure improvements.",
        outcome:
          "Improved booking system reliability, customer trust, and platform stability during peak traffic operations.",
      },

      {
        icon: <ShoppingBag size={52} />,
        title: "E-Commerce Security Engineering",
        desc:
          "Strengthened online retail systems through secure coding reviews, penetration testing, and infrastructure optimization.",
        details:
          "Analyzed payment workflows, API exposure, authentication systems, and customer data security controls.",
        outcome:
          "Improved customer data protection and reduced business risk from application-layer threats.",
      },

      {
        icon: <GraduationCap size={52} />,
        title: "Educational Platform Security",
        desc:
          "Reviewed institutional and educational web platforms for vulnerabilities, access control weaknesses, and deployment security.",
        details:
          "Focused on secure authentication systems, infrastructure resilience, and scalable digital learning environments.",
        outcome:
          "Enhanced academic platform stability, security awareness, and infrastructure reliability.",
      },

      {
        icon: <ServerCog size={52} />,
        title: "Infrastructure & DevSecOps",
        desc:
          "Implemented scalable infrastructure hardening and secure deployment pipelines for modern enterprise environments.",
        details:
          "Included container security, automated deployment workflows, monitoring integrations, and server optimization.",
        outcome:
          "Improved infrastructure scalability, deployment consistency, and long-term operational security.",
      },

    ];

    return (
      <section
        id="case-studies"
        className="container-fluid py-5 position-relative overflow-hidden"
        style={{
          color: "#fff",
          fontFamily: "'Camomile', sans-serif",
        }}
      >

        {/* STYLES */}
        <style>{`

          @import url('https://fonts.cdnfonts.com/css/camomile');

          .case-heading {

            font-size: 3rem;

            font-weight: 700;

            letter-spacing: 2px;

            color: #fff;

            text-shadow: 0 0 18px rgba(0,255,120,0.18);
          }

          .case-subtext {

            max-width: 820px;

            margin: auto;

            color: rgba(255,255,255,0.92);

            line-height: 1.9;

            font-size: 1.02rem;
          }

          .case-card {

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

          .case-card::before {

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

          .case-card:hover {

            transform: translateY(-10px);

            border-color: rgba(0,255,120,0.5);

            box-shadow:
              0 0 35px rgba(0,255,120,0.18),
              0 0 60px rgba(0,255,120,0.08);
          }

          .case-card:hover::before {
            opacity: 1;
          }

          .case-icon {

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

          .case-card:hover .case-icon {

            transform: scale(1.08) rotate(4deg);

            background: rgba(0,255,120,0.15);

            box-shadow:
              0 0 25px rgba(0,255,120,0.3),
              0 0 50px rgba(0,255,120,0.15);
          }

          .case-title {

            font-size: 1.35rem;

            font-weight: 700;

            color: #fff;

            margin-bottom: 18px;

            transition: 0.3s ease;
          }

          .case-card:hover .case-title {
            color: #00ff88;
          }

          .case-description {

            color: rgba(255,255,255,0.94);

            line-height: 1.9;

            font-size: 1rem;

            margin-bottom: 18px;
          }

          .case-details {

            color: rgba(255,255,255,0.78);

            line-height: 1.9;

            font-size: 0.95rem;

            margin-bottom: 22px;
          }

          .case-outcome {

            color: #00ff88;

            line-height: 1.8;

            font-size: 0.96rem;

            margin-bottom: 26px;
          }

          .case-link {

            display: inline-flex;

            align-items: center;

            gap: 8px;

            color: #fff;

            font-size: 0.92rem;

            letter-spacing: 1px;

            text-transform: uppercase;

            transition: 0.3s ease;
          }

          .case-card:hover .case-link {
            color: #00ff88;
          }

          .case-link svg {
            transition: 0.3s ease;
          }

          .case-card:hover .case-link svg {
            transform: translate(4px,-4px);
          }

          .case-glow {

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

            .case-heading{
              font-size: 2.2rem;
            }

            .case-card{
              padding: 34px 24px;
            }
          }

        `}</style>

        {/* BACKGROUND GLOW */}
        <div className="case-glow"></div>

        {/* HEADING */}
        <div className="text-center mb-5 position-relative">

          <h2
            className="case-heading"
            data-aos="zoom-in"
          >
            Security Case Studies
          </h2>

          <p
            className="case-subtext mt-4"
            data-aos="fade-up"
          >
            Real-world cybersecurity engagements, secure engineering projects,
            cloud infrastructure reviews, and enterprise-grade digital defense
            initiatives delivered across multiple industries.
          </p>

        </div>

        {/* CARDS */}
        <div className="row g-4 px-lg-5 px-3 position-relative">

          {caseStudies.map((item, index) => (

            <div
              className="col-md-6 col-xl-3"
              key={index}
            >

              <div
                className="case-card text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >

                <div className="case-icon">
                  {item.icon}
                </div>

                <h4 className="case-title">
                  {item.title}
                </h4>

                <p className="case-description">
                  {item.desc}
                </p>

                <p className="case-details">
                  {item.details}
                </p>

                <div className="case-outcome">
                  ✅ {item.outcome}
                </div>

                <div className="case-link">
                  View Engagement
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