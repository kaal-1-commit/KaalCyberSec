import React from "react";

import {
  ShieldCheck,
  Terminal,
  Globe,
  Bug,
  Lock,
  Cpu,

  ArrowRight,
  Activity,
  Cloud,
} from "lucide-react";

export default function Blog() {

  const blogs = [

    {
      icon: <ShieldCheck size={34} />,
      category: "Cybersecurity",
      title: "How Modern Penetration Testing Protects Enterprises",
      description:
        "Modern penetration testing simulates real-world cyberattacks against applications, APIs, cloud environments, and enterprise infrastructure to uncover exploitable vulnerabilities before attackers do.",
      read: "8 min read",
    },

    {
      icon: <Terminal size={34} />,
      category: "Red Teaming",
      title: "Inside Real-World Red Team Operations",
      description:
        "Red teaming goes beyond traditional vulnerability scanning by simulating advanced persistent threats, phishing attacks, lateral movement, and privilege escalation techniques.",
      read: "11 min read",
    },

    {
      icon: <Globe size={34} />,
      category: "Cloud Security",
      title: "Cloud Infrastructure Hardening Best Practices",
      description:
        "Cloud misconfigurations remain one of the biggest causes of data exposure. Organizations must implement IAM controls, monitoring, logging, and zero-trust principles.",
      read: "7 min read",
    },

    {
      icon: <Bug size={34} />,
      category: "Bug Bounty",
      title: "Common Vulnerabilities Found During Web Application Audits",
      description:
        "From SQL Injection to Broken Access Control and insecure APIs, security audits help organizations identify high-risk vulnerabilities before exploitation occurs.",
      read: "9 min read",
    },

    {
      icon: <Lock size={34} />,
      category: "Secure Development",
      title: "Secure Coding Practices for Modern Applications",
      description:
        "Security-first development ensures authentication, authorization, encryption, validation, and secure session handling are integrated into the application lifecycle.",
      read: "10 min read",
    },

    {
      icon: <Cpu size={34} />,
      category: "Artificial Intelligence",
      title: "AI & Cybersecurity: The Future of Threat Detection",
      description:
        "Artificial intelligence is transforming cybersecurity through behavioral analysis, anomaly detection, automated response systems, and predictive defense capabilities.",
      read: "12 min read",
    },

    {
      icon: <Activity size={34} />,
      category: "SOC Operations",
      title: "How Security Operation Centers Detect Threats in Real Time",
      description:
        "Modern SOC environments combine SIEM, threat intelligence, EDR solutions, and human analysts to monitor and respond to cyber threats continuously.",
      read: "8 min read",
    },

    {
      icon: <Cloud size={34} />,
      category: "DevSecOps",
      title: "Integrating Security into CI/CD Pipelines",
      description:
        "DevSecOps enables organizations to automate security checks, dependency scanning, secret detection, and infrastructure security across deployment pipelines.",
      read: "9 min read",
    },
  ];

  return (

    <section
      id="blog"
      className="container-fluid py-5"
      style={{
        color: "#fff",
        fontFamily: "'Camomile', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >

      <style>{`

        @import url('https://fonts.cdnfonts.com/css/camomile');

        /* SECTION */

        .blog-wrapper {

          max-width: 1500px;

          margin: auto;

          position: relative;

          z-index: 2;
        }

        /* HEADING */

        .blog-heading {

          font-size: 3rem;

          font-weight: 800;

          text-align: center;

          color: #00ff88;

          text-shadow:
            0 0 15px rgba(0,255,120,0.45),
            0 0 40px rgba(0,255,120,0.15);
        }

        .blog-subheading {

          text-align: center;

          max-width: 850px;

          margin: 22px auto 55px;

          color: rgba(255,255,255,0.78);

          font-size: 1.08rem;

          line-height: 2;
        }

        /* FEATURED */

        .featured-blog {

          position: relative;

          border-radius: 28px;

          padding: 55px;

          overflow: hidden;

          margin-bottom: 45px;

          background:
            linear-gradient(
              145deg,
              rgba(0,255,120,0.08),
              rgba(255,255,255,0.02)
            );

          border: 1px solid rgba(0,255,120,0.16);

          backdrop-filter: blur(16px);

          box-shadow:
            0 0 45px rgba(0,255,120,0.08);
        }

        .featured-badge {

          display: inline-flex;

          align-items: center;

          gap: 10px;

          padding: 12px 20px;

          border-radius: 40px;

          background: rgba(0,255,120,0.12);

          color: #00ff88;

          margin-bottom: 25px;

          font-size: 0.9rem;

          letter-spacing: 1px;
        }

        .featured-title {

          font-size: 3rem;

          font-weight: 800;

          line-height: 1.3;

          color: #fff;
        }

        .featured-desc {

          margin-top: 25px;

          color: rgba(255,255,255,0.8);

          line-height: 2;

          font-size: 1.08rem;

          max-width: 950px;
        }

        .featured-btn {

          margin-top: 35px;

          display: inline-flex;

          align-items: center;

          gap: 10px;

          padding: 16px 28px;

          border-radius: 50px;

          border: 1px solid rgba(0,255,120,0.25);

          color: #fff;

          text-decoration: none;

          background: rgba(255,255,255,0.03);

          transition: 0.35s ease;
        }

        .featured-btn:hover {

          transform: translateY(-4px);

          color: #00ff88;

          box-shadow:
            0 0 28px rgba(0,255,120,0.16);
        }

        /* SEARCH */

        .search-bar {

          display: flex;

          align-items: center;

          gap: 14px;

          padding: 18px 24px;

          border-radius: 18px;

          background: rgba(255,255,255,0.03);

          border: 1px solid rgba(0,255,120,0.12);

          margin-bottom: 45px;

          backdrop-filter: blur(14px);
        }

        .search-bar input {

          background: transparent;

          border: none;

          outline: none;

          width: 100%;

          color: #fff;
        }

        .search-bar input::placeholder {
          color: rgba(255,255,255,0.45);
        }

        /* GRID */

        .blog-grid {

          display: grid;

          grid-template-columns:
            repeat(auto-fit, minmax(320px, 1fr));

          gap: 28px;
        }

        /* CARD */

        .blog-card {

          position: relative;

          padding: 34px;

          border-radius: 24px;

          overflow: hidden;

          background:
            linear-gradient(
              145deg,
              rgba(255,255,255,0.03),
              rgba(0,255,120,0.04)
            );

          border: 1px solid rgba(0,255,120,0.12);

          backdrop-filter: blur(16px);

          transition: 0.35s ease;

          box-shadow:
            0 0 30px rgba(0,255,120,0.03);
        }

        .blog-card:hover {

          transform:
            translateY(-8px)
            scale(1.02);

          border-color: rgba(0,255,120,0.28);

          box-shadow:
            0 0 35px rgba(0,255,120,0.12);
        }

        .blog-icon {

          width: 70px;

          height: 70px;

          border-radius: 18px;

          display: flex;

          align-items: center;

          justify-content: center;

          background: rgba(0,255,120,0.08);

          color: #00ff88;

          margin-bottom: 22px;

          box-shadow:
            0 0 22px rgba(0,255,120,0.08);
        }

        .blog-category {

          color: #00ff88;

          font-size: 0.82rem;

          text-transform: uppercase;

          letter-spacing: 2px;

          margin-bottom: 14px;
        }

        .blog-title {

          font-size: 1.35rem;

          font-weight: 700;

          line-height: 1.5;

          color: #fff;
        }

        .blog-description {

          margin-top: 18px;

          color: rgba(255,255,255,0.78);

          line-height: 1.9;

          font-size: 0.98rem;
        }

        .blog-footer {

          margin-top: 28px;

          display: flex;

          align-items: center;

          justify-content: space-between;
        }

        .read-time {

          color: rgba(255,255,255,0.55);

          font-size: 0.9rem;
        }

        .read-btn {

          width: 44px;

          height: 44px;

          border-radius: 50%;

          display: flex;

          align-items: center;

          justify-content: center;

          background: rgba(0,255,120,0.08);

          color: #00ff88;

          transition: 0.35s ease;
        }

        .blog-card:hover .read-btn {

          transform: translateX(4px);

          background: rgba(0,255,120,0.16);
        }

        /* RESPONSIVE */

        @media(max-width:768px){

          .blog-heading {
            font-size: 2.1rem;
          }

          .featured-title {
            font-size: 2rem;
          }

          .featured-blog {
            padding: 30px;
          }

          .blog-card {
            padding: 28px;
          }
        }

      `}</style>

      <div className="blog-wrapper container" id="Blog">

        {/* HEADING */}

        <h2
          className="blog-heading"
          data-aos="fade-down"
        >
          Cybersecurity Research & Insights
        </h2>

        <p
          className="blog-subheading"
          data-aos="fade-up"
        >
          Explore modern cybersecurity strategies, penetration testing methodologies,
          red teaming operations, secure development practices, cloud hardening,
          AI-driven defense systems, and enterprise threat intelligence insights
          from the KaalCyberSec research ecosystem.
        </p>

        {/* FEATURED */}

        <div
          className="featured-blog"
          data-aos="zoom-in"
        >

          <div className="featured-badge">
            <Activity size={18} />
            Featured Research
          </div>

          <h3 className="featured-title">
            The Evolution of Cyber Warfare & Modern Digital Defense
          </h3>

          <p className="featured-desc">
            Cyber warfare has evolved from isolated attacks into highly organized,
            financially motivated, and state-sponsored operations targeting critical
            infrastructure, healthcare, cloud ecosystems, enterprises, and digital
            supply chains. Modern organizations require continuous monitoring,
            offensive security testing, zero-trust architecture, secure software
            engineering, and proactive incident response capabilities to survive
            in the modern threat landscape.
          </p>

          <a href="#contact" className="featured-btn">
            Explore Research
            <ArrowRight size={18} />
          </a>

        </div>

        {/* SEARCH */}

       

        {/* BLOG GRID */}

        <div className="blog-grid">

          {blogs.map((blog, index) => (

            <div
              key={index}
              className="blog-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >

              <div className="blog-icon">
                {blog.icon}
              </div>

              <div className="blog-category">
                {blog.category}
              </div>

              <h4 className="blog-title">
                {blog.title}
              </h4>

              <p className="blog-description">
                {blog.description}
              </p>

              <div className="blog-footer">

                <span className="read-time">
                  {blog.read}
                </span>

                <div className="read-btn">
                  <ArrowRight size={18} />
                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}