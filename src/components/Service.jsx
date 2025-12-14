import React, { Component } from "react";
import { ShieldCheck, Code, Globe, Users } from "lucide-react";

export default class Service extends Component {
  render() {
    return (
      <section
        id="services"
        className="container-fluid py-5"
        style={{
          backgroundColor: "#000",
          color: "#fff",
          fontFamily: "'Camomile', sans-serif",
        }}
      >
        {/* Neon CSS */}
        <style>{`
          @import url('https://fonts.cdnfonts.com/css/camomile');

          .neon-card-service {
            background: #000;
            border: 1px solid rgba(0, 255, 0, 0.9);
            box-shadow: 0 0 12px rgba(0, 255, 0, 0.25);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            border-radius: 14px;
          }

          .neon-card-service:hover {
            transform: translateY(-6px);
            box-shadow: 0 0 25px rgba(0, 255, 0, 0.9);
          }

          .neon-card-service h5 {
            color: #7CFF7C;
            text-shadow: 0 0 8px rgba(0,255,0,0.6);
          }

          .neon-card-service p {
            color: #cfcfcf;
            font-size: 0.95rem;
          }
        `}</style>

        <h2
          className="text-center mb-5 border-bottom border-success pb-3"
          data-aos="zoom-in"
        >
          Our Services
        </h2>

        <div className="row g-4 px-4">
          {/* Penetration Testing */}
          <div className="col-md-6 col-lg-3">
            <div className="p-4 neon-card-service text-center h-100" data-aos="fade-up">
              <ShieldCheck size={42} className="mb-3 text-success" />
              <h5>Penetration Testing & Red Teaming</h5>
              <p className="mt-3">
                We perform real-world penetration testing and red teaming to
                identify security vulnerabilities in web applications, APIs,
                cloud infrastructure, and enterprise networks.
              </p>
              <p>
                Our reports include risk ratings, proof-of-concepts, and
                actionable remediation guidance aligned with industry standards.
              </p>
            </div>
          </div>

          {/* Secure Development */}
          <div className="col-md-6 col-lg-3">
            <div
              className="p-4 neon-card-service text-center h-100"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <Code size={42} className="mb-3 text-success" />
              <h5>Secure Software Development</h5>
              <p className="mt-3">
                We design and develop secure, scalable web and mobile
                applications using modern stacks such as React, Django,
                FastAPI, and cloud-native architectures.
              </p>
              <p>
                Security best practices are integrated throughout the
                development lifecycle to reduce long-term risk.
              </p>
            </div>
          </div>

          {/* Incident Response */}
          <div className="col-md-6 col-lg-3">
            <div
              className="p-4 neon-card-service text-center h-100"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <Globe size={42} className="mb-3 text-success" />
              <h5>Incident Response & Digital Forensics</h5>
              <p className="mt-3">
                Our incident response team assists organizations during security
                breaches with rapid containment, forensic investigation, and
                root-cause analysis.
              </p>
              <p>
                We help restore operations while strengthening defenses against
                future incidents.
              </p>
            </div>
          </div>

          {/* Advisory / Awareness */}
          <div className="col-md-6 col-lg-3">
            <div
              className="p-4 neon-card-service text-center h-100"
              data-aos="fade-up"
              data-aos-delay="450"
            >
              <Users size={42} className="mb-3 text-success" />
              <h5>Security Advisory & Awareness</h5>
              <p className="mt-3">
                We provide security advisory and awareness programs for teams
                and organizations to improve security posture and reduce
                human-level risks.
              </p>
              <p>
                These engagements support long-term resilience beyond technical
                controls.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}


