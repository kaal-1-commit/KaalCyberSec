import React, { useRef } from "react";
import { Mail, MapPin } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jp88iik",     // ⚡ Service ID
        "template_y85jubb",    // ⚡ Template ID
        form.current,
        "YogqWmen2ZNaf_oBO"    // ⚡ Public Key (User ID)
      )
      .then(
        (result) => {
          alert("✅ Message Sent Successfully!");
          console.log(result.text);
        },
        (error) => {
          alert("❌ Failed to send. Try again later.");
          console.error(error.text);
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
      <h2
        className="text-center fw-bold mb-5 border-bottom border-success pb-4"
        data-aos="fade-down"
      >
        Contact Us
      </h2>

      <div className="row justify-content-center">
        <div className="col-lg-8">
          <form ref={form} onSubmit={sendEmail} className="row g-4" data-aos="fade-up">
            <div className="col-md-6">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                className="form-control"
                required
              />
            </div>
            <div className="col-md-6">
              <input
                type="email"
                name="user_email"
                placeholder="Email Address"
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
                placeholder="Phone Number"
                className="form-control"
              />
            </div>
            <div className="col-12">
              <textarea
                rows={5}
                name="message"
                placeholder="Your Message"
                className="form-control"
                required
              ></textarea>
            </div>
            <div className="col-12 text-center">
              <button type="submit" className="futuristic-btn mt-3">
                <Mail className="me-2" /> Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="text-center mt-5" data-aos="fade-up" data-aos-delay="300">
        <p className="mb-2 d-flex align-items-center justify-content-center gap-2">
          <MapPin size={18} className="text-info" /> Indore, Madhya Pradesh (HQ)
        </p>
        <p className="mb-2 d-flex align-items-center justify-content-center gap-2">
          <Mail size={18} className="text-info" /> kaalcybersec@gmail.com
        </p>
        <p className="opacity-75 small mt-3 border-bottom border-success pb-4">
          We respond within 24 hours. For urgent security incidents, mark your message as <b>High Priority</b>.
        </p>
      </div>
    </section>
  );
}
