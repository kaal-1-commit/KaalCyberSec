import React, { Component } from "react";
import { Cpu, Lock, Code, Database, Network } from "lucide-react"; // npm i lucide-react

export default class TechStack extends Component {
  render() {
    return (
      <section
        id="tech-stack"
        className="container-fluid py-5"
        style={{
          backgroundColor: "#0a0a0a",
          color: "#fff",
          fontFamily: "'camomile', sans-serif",
        }}
      >
        <style>{`
          @import url('https://fonts.cdnfonts.com/css/camomile');
          .stack-card {
            background: rgba(0, 0, 0, 0.83);
            border: 1px solid rgba(0, 255, 55, 1);
            box-shadow: 0px 0px 15px rgba(0, 255, 55, 1);
            border-radius: 10px;
            padding: 20px;
            transition: all 0.4s ease;
          }
          .stack-card:hover {
            transform: translateY(-5px);
            box-shadow: 0px 0px 25px rgba(0, 255, 55, 1);
          }
        `}</style>

        <h2
          className="text-center fw-bold mb-5 border-5 border-bottom border-success pb-4"
          data-aos="fade-down"
          style={{
            textShadow: "0px 0px 12px rgba(0, 255, 55, 1)",
          }}
        >
          Technology Stack
        </h2>

        <div className="row g-4 px-4 text-center ">
          <div className="col-md-3" data-aos="zoom-in">
            <div className="stack-card">
              <Cpu size={40} className="text-info mb-2" />
              <h6>Offensive Security</h6>
              <p>Kali Linux • Burp Suite • Metasploit • Wireshark</p>
            </div>
          </div>

          <div className="col-md-3" data-aos="zoom-in" data-aos-delay="200">
            <div className="stack-card">
              <Lock size={40} className="text-warning mb-2" />
              <h6>Defensive Security</h6>
              <p>SIEM • IDS/IPS • SOC Monitoring • Threat Intel</p>
            </div>
          </div>

          <div className="col-md-3" data-aos="zoom-in" data-aos-delay="400">
            <div className="stack-card">
              <Code size={40} className="text-success mb-2" />
              <h6>Development</h6>
              <p>React • Django • FastAPI • Node.js • Secure Coding</p>
            </div>
          </div>

          <div className="col-md-3" data-aos="zoom-in" data-aos-delay="600">
            <div className="stack-card">
              <Database size={40} className="text-danger mb-2" />
              <h6>Databases</h6>
              <p>PostgreSQL • MongoDB • MySQL • Redis</p>
            </div>
          </div>

          <div className="col-md-12 mt-4" data-aos="fade-up">
            <div className="stack-card">
              <Network size={40} className="text-primary mb-2" />
              <h6>Cloud & DevSecOps</h6>
              <p>AWS • Docker • Kubernetes • CI/CD Security • Cloud Hardening</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
