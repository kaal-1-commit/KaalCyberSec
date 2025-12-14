import React, { useRef } from "react";
import { Mail } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jp88iik",
        "template_y85jubb",
        form.current,
        "YogqWmen2ZNaf_oBO"
      )
      .then(
        () => {
          alert("✅ Thank you! Our team will contact you shortly.");
          form.current.reset();
        },
        () => {
          alert("❌ Failed to send. Please try again later.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="container-fluid py-5"
      style={{
        backgroundColor: "#000",
        color: "#fff",
        fontFamily: "'Camomile', sans-serif",
      }}
    >
      {/* Section Heading */}
      <h2
        className="text-center fw-bold mb-3 border-bottom border-success pb-3"
        data-aos="fade-down"
      >
        Contact KaalCyberSec
      </h2>

      {/* SEO-supportive subheading */}
      <p className="text-center text-secondary mb-5">
        Discuss your cybersecurity, development, or enterprise technology
        requirements with our experts.
      </p>

      <div className="row justify-content-center">
        <div className="col-lg-8">

          {/* Trust line */}
          <div className="text-center mb-4 small text-muted">
            Govt. Registered Entity (UDYAM-MP-23-0233844) • Secure Communication • NDA-First Approach
          </div>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="row g-4"
            data-aos="fade-up"
          >
            <div className="col-md-6">
              <input
                type="text"
                name="user_name"
                placeholder="Full Name"
                className="form-control"
                required
              />
            </div>

            <div className="col-md-6">
              <input
                type="email"
                name="user_email"
                placeholder="Business Email Address"
                className="form-control"
                required
              />
            </div>

            <div className="col-md-6">
              <input
                type="text"
                name="company"
                placeholder="Company / Organization"
                className="form-control"
              />
            </div>

            <div className="col-md-6">
              <input
                type="tel"
                name="phone"
                placeholder="Contact Number (Optional)"
                className="form-control"
              />
            </div>

            {/* CTA-aligned message */}
            <div className="col-12">
              <textarea
                rows={5}
                name="message"
                placeholder="Briefly describe your requirement (e.g., Cybersecurity audit, Full-stack development, Enterprise bundle)"
                className="form-control"
                required
              ></textarea>
            </div>

            <div className="col-12 text-center">
              <button type="submit" className="futuristic-btn mt-3">
                <Mail className="me-2" />
                Request Consultation
              </button>
            </div>
          </form>

          {/* CTA reassurance */}
          <p className="text-center text-secondary small mt-4">
            We respond within 24 working hours. Your information is kept confidential.
          </p>
        </div>
      </div>
    </section>
  );
}

