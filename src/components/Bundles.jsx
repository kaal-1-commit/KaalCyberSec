import React, { Component } from "react";
import { Shield, Layers, Lock, Monitor, Server } from "lucide-react";

export default class Bundles extends Component {
  render() {
    return (
      <section
        id="bundles"
        className="container-fluid py-5"
        style={{ backgroundColor: "#000", color: "#fff" }}
      >
        {/* Styles */}
        <style>{`
          .bundle-card {
            background: #000;
            border: 1px solid rgba(0,255,0,0.85);
            border-radius: 18px;
            padding: 30px;
            box-shadow: 0 0 18px rgba(0,255,0,0.25);
            transition: all 0.3s ease;
            height: 100%;
          }

          .bundle-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 0 32px rgba(0,255,0,0.95);
          }

          .bundle-card h4 {
            color: #7CFF7C;
            text-shadow: 0 0 8px rgba(0,255,0,0.6);
          }

          .bundle-card p {
            color: #d0d0d0;
            font-size: 0.95rem;
          }

          .bundle-icon {
            color: #00ff00;
            margin-bottom: 18px;
          }

          .bundle-cta {
            display: inline-block;
            margin-top: 18px;
            color: #00ff00;
            font-weight: 600;
            text-decoration: none;
          }

          .bundle-cta:hover {
            text-decoration: underline;
          }
        `}</style>

        <h2 className="text-center mb-5 border-bottom border-success pb-3">
          Enterprise Technology & Security Bundles
        </h2>

        <div className="row g-4 px-4">

          {/* Frontend Bundle */}
          <div className="col-md-6 col-lg-4">
            <div className="bundle-card text-center" data-aos="fade-up">
              <Monitor size={46} className="bundle-icon" />
              <h4>Frontend Experience Bundle™</h4>
              <p className="mt-3">
                High-performance, responsive, and modern frontend solutions
                designed to deliver seamless user experiences.
              </p>
              <p>
                Ideal for businesses focusing on UI performance, branding,
                accessibility, and scalable frontend architecture.
              </p>
              <a href="#contact" className="bundle-cta">
                Explore Frontend Solution →
              </a>
            </div>
          </div>

          {/* Backend Bundle */}
          <div className="col-md-6 col-lg-4">
            <div
              className="bundle-card text-center"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <Server size={46} className="bundle-icon" />
              <h4>Backend Systems Bundle™</h4>
              <p className="mt-3">
                Secure and scalable backend systems built for reliability,
                performance, and long-term growth.
              </p>
              <p>
                Covers APIs, databases, authentication, integrations, and
                server-side architecture.
              </p>
              <a href="#contact" className="bundle-cta">
                Discuss Backend Architecture →
              </a>
            </div>
          </div>

          {/* TechStack Bundle */}
          <div className="col-md-6 col-lg-4">
            <div
              className="bundle-card text-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <Layers size={46} className="bundle-icon" />
              <h4>TechStack Bundle™</h4>
              <p className="mt-3">
                End-to-end full-stack development for organizations building
                complete digital products.
              </p>
              <p>
                Includes frontend, backend, hosting, deployment, and technical
                support for production-ready systems.
              </p>
              <a href="#contact" className="bundle-cta">
                Build a Complete Product →
              </a>
            </div>
          </div>

          {/* CyberDefense Bundle */}
          <div className="col-md-6 col-lg-6">
            <div
              className="bundle-card text-center"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <Lock size={46} className="bundle-icon" />
              <h4>CyberDefense Bundle™</h4>
              <p className="mt-3">
                A professional cybersecurity solution for identifying,
                assessing, and reducing digital risks.
              </p>
              <p>
                Designed for organizations handling sensitive data, compliance
                requirements, and continuous security monitoring.
              </p>
              <a href="#contact" className="bundle-cta">
                Schedule Security Review →
              </a>
            </div>
          </div>

          {/* Final CyberBundle */}
          <div className="col-md-6 col-lg-6">
            <div
              className="bundle-card text-center"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <Shield size={48} className="bundle-icon" />
              <h4>CyberBundle™ (All-in-One Solution)</h4>
              <p className="mt-3">
                A complete technology and cybersecurity solution for enterprises
                that demand secure, scalable, and future-ready systems.
              </p>
              <p>
                Combines full-stack development, penetration testing,
                infrastructure hardening, and long-term maintenance into a
                unified engagement.
              </p>
              <a href="#contact" className="bundle-cta">
                Request Complete Solution →
              </a>
            </div>
          </div>

        </div>
      </section>
    );
  }
}
