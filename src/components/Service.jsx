import React, { Component } from "react";
import { ShieldCheck, Code, Globe, Users } from "lucide-react"; // npm i lucide-react

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
            background: rgba(0, 0, 0, 1);
            border: 1px solid rgba(13, 255, 0, 1);
            box-shadow: 0px 0px 15px rgba(0, 255, 255, 0.3);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            border-radius: 12px;
          }
          .neon-card-service:hover {
            transform: scale(1.05);
            box-shadow: 0px 0px 25px rgba(17, 255, 0, 1);
          }
          .neon-card-service:hover p {
            color: #4dff4d !important;
            text-shadow: 0px 0px 10px rgba(68, 255, 0, 0.8);
          }

          .glitch-title {
            font-size: 2.5rem;
            text-transform: uppercase;
            font-weight: bold;
            animation: flicker 2s infinite alternate;
            text-shadow: 0px 0px 15px rgba(68, 255, 0, 0.8);
          }
          @keyframes flicker {
            0% { text-shadow: 2px 2px #0ff; }
            50% { text-shadow: -2px -2px #f0f; }
            100% { text-shadow: 2px -2px #ff0; }
          }
        `}</style>

        <h2
          className="text-center mb-5 border-5 border-bottom border-success pb-4 "
          data-aos="zoom-in"
          style={{ fontFamily: "serif" }}
        >
          Our Services
        </h2>

        <div className="row g-4 px-4">
          {/* Penetration Testing */}
          <div className="col-md-6 col-lg-3">
            <div
              className="p-4 neon-card-service text-center h-100"
              data-aos="fade-up"
            >
              <ShieldCheck size={40} className="mb-3 text-success" />
              <h5>Penetration Testing & Red Teaming</h5>
              <p className="mt-3">
                We simulate real-world cyberattacks to identify vulnerabilities
                before malicious hackers do. Our experts perform deep testing on{" "}
                <b>government systems, enterprise networks, and cloud
                infrastructures</b> using both manual and automated techniques.
              </p>
              <p>
                The outcome? A clear remediation plan and a stronger, more
                resilient digital presence for your business.
              </p>
            </div>
          </div>

          {/* Secure Development */}
          <div className="col-md-6 col-lg-3">
            <div
              className="p-4 neon-card-service text-center h-100"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <Code size={40} className="mb-3 text-success" />
              <h5>Secure Software Development</h5>
              <p className="mt-3">
                Our full-stack developers design and build{" "}
                <b>web and mobile applications</b> with security baked in from
                the first line of code. We use modern stacks like React,
                Django, and FastAPI while applying{" "}
                <b>secure coding standards and CI/CD hardening</b>.
              </p>
              <p>
                The result is high-performing apps that are functional,
                scalable, and resilient against cyberattacks.
              </p>
            </div>
          </div>

          {/* Incident Response */}
          <div className="col-md-6 col-lg-3">
            <div
              className="p-4 neon-card-service text-center h-100"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <Globe size={40} className="mb-3 text-success" />
              <h5>Incident Response & Digital Forensics</h5>
              <p className="mt-3">
                When breaches happen, speed matters. Our team provides{" "}
                <b>24/7 incident response</b>, forensic evidence collection, and
                detailed root-cause analysis to contain damage and restore
                operations quickly.
              </p>
              <p>
                We help organizations not only recover but also{" "}
                <b>strengthen their defenses</b> to prevent repeat incidents.
              </p>
            </div>
          </div>

          {/* Training */}
          <div className="col-md-6 col-lg-3">
            <div
              className="p-4 neon-card-service text-center h-100"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <Users size={40} className="mb-3 text-success" />
              <h5>Training & Awareness Programs</h5>
              <p className="mt-3">
                Cybersecurity is strongest when people are empowered. We provide{" "}
                <b>customized workshops, awareness sessions, and hands-on
                training</b> for teams, students, and professionals.
              </p>
              <p>
                Our instructors simplify complex hacking concepts and build{" "}
                <b>in-house security talent</b> that ensures lasting protection
                beyond our services.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

