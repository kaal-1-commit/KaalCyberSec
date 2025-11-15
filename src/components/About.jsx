import React, { Component } from "react";
import { Users, Code, Globe } from "lucide-react"; // npm i lucide-react

export default class About extends Component {
  render() {
    return (
      <section
        id="about"
        className="container-fluid py-5"
        style={{
          backgroundColor: "#000",
          color: "#fff",
          fontFamily: "'Camomile', sans-serif",
        }}
      >
        {/* Font Import + Styles */}
        <style>{`
          @import url('https://fonts.cdnfonts.com/css/camomile');

          .neon-card {
            border: 1px solid rgba(68, 255, 0, 0.6);
            background: rgba(0, 0, 0, 0.7);
            box-shadow: 0px 0px 10px rgba(68, 255, 0, 0.4);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            border-radius: 12px;
          }
          .neon-card:hover {
            transform: scale(1.05);
            box-shadow: 0px 0px 25px rgba(68, 255, 0, 0.9);
          }
          .neon-card:hover p {
            color: #4dff4d !important; /* Green text on hover */
            text-shadow: 0px 0px 10px rgba(68, 255, 0, 0.8);
          }

          h2.section-title {
            font-size: 2.5rem;
            text-transform: uppercase;
            font-weight: bold;
            text-shadow: 0px 0px 15px rgba(68, 255, 0, 0.8);
          }
        `}</style>

        {/* Section Title */}
        <h2
          className="text-center section-title mb-5 border-5 border-bottom border-success pb-4"
          data-aos="fade-up"
        >
          About KaalCyberSec
        </h2>

        <div className="row g-4 px-4">
          {/* Mission */}
          <div className="col-md-6" data-aos="fade-right">
            <div className="p-4 neon-card h-100">
              <h5 className="d-flex align-items-center gap-2 text-text">
                Our Mission
              </h5>
              <p className="mt-3 text-text" >
                At KaalCyberSec, our mission is to redefine digital safety. We
                aim to build a secure digital ecosystem where governments,
                enterprises, startups, and individuals can thrive without fear of
                cyber threats. By merging cutting-edge innovation with proven
                security practices, we protect businesses from today’s attacks
                while preparing them for tomorrow’s challenges.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="col-md-6" data-aos="fade-left">
            <div className="p-4 neon-card h-100">
              <h5 className="d-flex align-items-center gap-2 text-white">
                <Globe size={24} /> Our Vision
              </h5>
              <p className="mt-3 text-white">
                We envision a future where cybersecurity is not a barrier but a
                foundation of growth. Our vision is to be recognized globally as
                a trusted security partner that empowers organizations to
                innovate freely, knowing their digital infrastructure is
                protected by world-class security experts with hacker-level
                awareness.
              </p>
            </div>
          </div>

          {/* Team */}
          <div className="col-12" data-aos="fade-up" data-aos-delay="200">
            <div className="p-4 neon-card h-100">
              <h5 className="d-flex align-items-center gap-2 text-white">
                <Users size={24} /> Our Team
              </h5>
              <p className="mt-3 text-white">
                Our strength lies in our people. KaalCyberSec brings together
                experienced front-end and back-end developers, elite penetration
                testers, and cybersecurity instructors who have collectively
                worked on government assignments, enterprise security programs,
                and startup innovations. Each team member contributes unique
                expertise—whether it’s building scalable apps, breaking into
                hardened systems to reveal flaws, or training the next generation
                of defenders.
              </p>
              <p>
                This diverse blend of developers, hackers, and educators ensures
                we don’t just deliver solutions but also transfer knowledge and
                create lasting impact for our clients.
              </p>
            </div>
          </div>

          {/* Edge */}
          <div className="col-12" data-aos="fade-up" data-aos-delay="400">
            <div className="p-4 neon-card h-100">
              <h5 className="d-flex align-items-center gap-2 text-white">
                <Code size={24} /> Our Edge
              </h5>
              <p className="mt-3 text-white">
                Unlike traditional firms, we combine a hacker’s mindset, a
                developer’s precision, and a teacher’s clarity. This unique
                synergy allows us to design solutions that are not only
                effective but also sustainable and easy to adopt. We believe true
                cybersecurity is not about creating fear, but about enabling
                growth through confidence and trust.
              </p>
              <p>
                By adopting futuristic approaches such as automated red teaming,
                AI-assisted monitoring, and secure-by-design development, we stay
                ahead of evolving threats. With KaalCyberSec, clients don’t just
                get protection—they gain a long-term partner in digital defense.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

