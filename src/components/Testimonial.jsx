import React, { Component } from "react";
import { Quote } from "lucide-react";

export default class Testimonials extends Component {
  render() {
    return (
      <section
        id="testimonials"
        className="container-fluid py-5"
        style={{ backgroundColor: "#000", color: "#fff", fontFamily: "'Camomile', sans-serif" }}
      >
        <style>{`
          .testimonial-card {
            background: rgba(0,0,0,0.85);
            border: 1px solid rgba(0,255,0,0.6);
            border-radius: 10px;
            padding: 20px;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .testimonial-card:hover {
            transform: translateY(-8px);
            text-color:rgba(0,255,0,0.8);
            box-shadow: 0px 0px 25px rgba(0,255,0,0.8);
          }
          .client-name {
            font-weight: bold;
            color: green;
          }
        `}</style>

        <h2 className="text-center glitch mb-5 border-5 border-bottom border-success pb-4" data-aos="fade-down">
          What Our Clients Say
        </h2>

        <div className="row g-4 px-4">
          <div className="col-md-4" data-aos="fade-up">
            <div className="testimonial-card h-100">
              <Quote size={30} className="text-info mb-3" />
              <p>
                "KaalCyberSec helped us secure our entire IT infrastructure and
                trained our staff to handle cyber incidents confidently. Their
                penetration testing reports were extremely detailed and
                actionable."
              </p>
              <p className="client-name">– Government Department, India</p>
            </div>
          </div>

          <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
            <div className="testimonial-card h-100">
              <Quote size={30} className="text-info mb-3" />
              <p>
                "Our startup was constantly under cyber threats. With
                KaalCyberSec’s secure development and monitoring solutions, we
                scaled confidently without worrying about data breaches."
              </p>
              <p className="client-name">– Tech Startup CEO</p>
            </div>
          </div>

          <div className="col-md-4" data-aos="fade-up" data-aos-delay="400">
            <div className="testimonial-card h-100">
              <Quote size={30} className="text-info mb-3" />
              <p>
                "The team’s professionalism and hacker-level expertise make them
                stand out. Their forensics support saved us during a major
                ransomware incident."
              </p>
              <p className="client-name">– Enterprise CISO</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
