import React, { Component } from "react";
import { ShieldCheck, Globe, Code } from "lucide-react"; // npm i lucide-react

export default class CaseStudies extends Component {
  render() {
    return (
      <section
        id="case-studies"
        className="container-fluid py-5"
        style={{
          backgroundColor: "#000",
          color: "#fff",
          fontFamily: "'camomile', sans-serif",
        }}
      >
        <style>{`
          @import url('https://fonts.cdnfonts.com/css/camomile');
          .case-card {
            background: rgba(0, 0, 0, 0.8);
            border: 1px solid #0f0;
            box-shadow: 0px 0px 15px rgba(0, 255, 0, 0.5);
            border-radius: 12px;
            padding: 20px;
            transition: all 0.4s ease;
          }
          .case-card:hover {
            transform: translateY(-6px) scale(1.03);
            box-shadow: 0px 0px 30px rgba(0, 255, 0, 0.9);
          }
        `}</style>

        <h2
          className="text-center mb-5 fw-bold"
          data-aos="fade-up"
          style={{
            textShadow: "0px 0px 12px rgba(0, 255, 0, 0.8)",
          }}
        >
          Case Studies
        </h2>

        <div className="row g-4 px-4">
          {/* Case 1 */}
          <div className="col-md-4" data-aos="fade-up">
            <div className="case-card h-100">
              <ShieldCheck size={40} className="text-info mb-3" />
              <h5>Government Cybersecurity Hardening</h5>
              <p>
                Our team conducted <b>penetration testing</b> for a state-level
                government portal. We discovered critical vulnerabilities in
                authentication and network configurations.
              </p>
              <p className="text-success">
                ✅ Outcome: 80% reduction in phishing attacks & improved citizen
                data security.
              </p>
            </div>
          </div>

          {/* Case 2 */}
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
            <div className="case-card h-100">
              <Globe size={40} className="text-info mb-3" />
              <h5>Startup Cloud Application Security</h5>
              <p>
                We helped a SaaS startup secure their <b>AWS-hosted</b> cloud
                platform by implementing DevSecOps, CI/CD hardening, and API
                security reviews.
              </p>
              <p className="text-success">
                ✅ Outcome: Zero critical vulnerabilities in post-audit testing
                & faster compliance clearance.
              </p>
            </div>
          </div>

          {/* Case 3 */}
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="400">
            <div className="case-card h-100">
              <Code size={40} className="text-info mb-3" />
              <h5>Enterprise Forensics & Incident Response</h5>
              <p>
                Our experts responded to a ransomware attack in a mid-sized IT
                enterprise. We performed <b>digital forensics</b>, root cause
                analysis, and incident containment.
              </p>
              <p className="text-success">
                ✅ Outcome: Business restored in 48 hours with enhanced SOC
                monitoring.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
