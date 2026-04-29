import React, { useRef, useState } from "react";
import { Mail, LoaderCircle, ShieldCheck } from "lucide-react";

export default function Contact() {
  const form = useRef();

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
const sendEmail = async (e) => {
  e.preventDefault();

  setLoading(true);
  setStatus("sending");

  const formData = {
    name: form.current.name.value,
    email: form.current.email.value,
    company: form.current.company.value,
    phone: form.current.phone.value,
    message: form.current.message.value,
  };

  try {

    await fetch(
      "https://script.google.com/macros/s/AKfycbwN2u_MEWNYZ2K0xSyijVUuMPFiJ_rByLJHnjpiEV_JecNZsarWJgWUong6JQQuW-7pvg/exec",
      {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    setStatus("sent");

    form.current.reset();

    setTimeout(() => {
      setLoading(false);
      setStatus("");
    }, 2500);

  } catch (error) {

    console.log(error);

    setStatus("error");

    setTimeout(() => {
      setLoading(false);
      setStatus("");
    }, 2500);
  }
};
  return (
    <>
      {/* Hacker Popup Overlay */}
      {loading && (
        <div className="hacker-overlay">
          <div className="hacker-box">
            {status === "sending" && (
              <>
                <LoaderCircle className="spin-icon mb-3" size={40} />
                <h2 className="hacker-text flicker">
                  SENDING SECURE REQUEST...
                </h2>
              </>
            )}

            {status === "sent" && (
              <>
                <ShieldCheck className="mb-3 text-success" size={45} />
                <h2 className="hacker-text success flicker">
                  REQUEST SENT SUCCESSFULLY
                </h2>
              </>
            )}

            {status === "error" && (
              <h2 className="hacker-text error flicker">
                FAILED TO SEND REQUEST
              </h2>
            )}
          </div>
        </div>
      )}

      <section
        id="contact"
        className="container-fluid py-5 position-relative overflow-hidden"
        style={{
         
          color: "#fff",
          fontFamily: "'Camomile', sans-serif",
        }}
      >
        {/* Glow Background */}
        <div className="cyber-glow"></div>

        {/* Heading */}
        <h2
          className="text-center fw-bold mb-3 border-bottom border-success pb-3"
          data-aos="fade-down"
        >
          Contact KaalCyberSec
        </h2>

        <p className="text-center text-secondary mb-5">
          Discuss your cybersecurity, development, or enterprise technology
          requirements with our experts.
        </p>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            {/* Trust Line */}
            <div className="text-center mb-4 small text-success">
              Govt. Registered Entity (UDYAM-MP-23-0233844) • Secure
              Communication • NDA-First Approach
            </div>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="row g-4 cyber-form"
              data-aos="fade-up"
            >
              <div className="col-md-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="form-control cyber-input"
                  required
                />
              </div>

              <div className="col-md-6">
                <input
                  type="email"
                  name="email"
                  placeholder="Business Email Address"
                  className="form-control cyber-input"
                  required
                />
              </div>

              <div className="col-md-6">
                <input
                  type="text"
                  name="company"
                  placeholder="Company / Organization"
                  className="form-control cyber-input"
                />
              </div>

              <div className="col-md-6">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Contact Number"
                  className="form-control cyber-input"
                />
              </div>

              <div className="col-12">
                <textarea
                  rows={5}
                  name="message"
                  placeholder="Describe your requirement..."
                  className="form-control cyber-input"
                  required
                ></textarea>
              </div>

              <div className="col-12 text-center">
                <button
                  type="submit"
                  className="futuristic-btn mt-3"
                  disabled={loading}
                >
                  <Mail className="me-2" />
                  Request Consultation
                </button>
              </div>
            </form>

            <p className="text-center text-secondary small mt-4">
              We respond within 24 working hours. Your information is kept
              confidential.
            </p>
          </div>
        </div>
      </section>

      {/* CSS */}
      <style jsx>{`
        .cyber-form {
          background: rgba(0, 255, 120, 0.03);
          border: 1px solid rgba(0, 255, 120, 0.15);
          padding: 35px;
          border-radius: 20px;
          backdrop-filter: blur(15px);
          box-shadow: 0 0 30px rgba(0, 255, 120, 0.08);
        }

        .cyber-input {
          background: rgba(255, 255, 255, 0.03) !important;
          border: 1px solid rgba(0, 255, 120, 0.2) !important;
          color: #00ff88 !important;
          padding: 14px !important;
          border-radius: 12px !important;
        }

        .cyber-input::placeholder {
          color: rgba(255, 255, 255, 0.45);
        }

        .cyber-input:focus {
          box-shadow: 0 0 15px rgba(0, 255, 120, 0.4) !important;
          border-color: #00ff88 !important;
          background: rgba(255, 255, 255, 0.05) !important;
        }

        .futuristic-btn {
          background: linear-gradient(90deg, #00ff88, #00cc66);
          border: none;
          padding: 14px 30px;
          color: #000;
          font-weight: bold;
          border-radius: 50px;
          transition: 0.3s ease;
          box-shadow: 0 0 20px rgba(0, 255, 120, 0.35);
        }

        .futuristic-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 0 30px rgba(0, 255, 120, 0.6);
        }

        .cyber-glow {
          position: absolute;
          width: 500px;
          height: 500px;
          background: rgba(0, 255, 120, 0.08);
          filter: blur(120px);
          top: -100px;
          left: -100px;
          z-index: 0;
        }

        .hacker-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(12px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 99999;
        }

        .hacker-box {
          text-align: center;
          padding: 40px;
          border: 1px solid rgba(0, 255, 120, 0.3);
          background: rgba(0, 0, 0, 0.85);
          border-radius: 20px;
          box-shadow: 0 0 40px rgba(0, 255, 120, 0.3);
        }

        .hacker-text {
          color: #00ff88;
          font-size: 24px;
          font-weight: bold;
          letter-spacing: 3px;
          text-shadow: 0 0 10px #00ff88;
        }

        .success {
          color: #00ff88;
        }

        .error {
          color: red;
          text-shadow: 0 0 10px red;
        }

        .spin-icon {
          color: #00ff88;
          animation: spin 1s linear infinite;
        }

        .flicker {
          animation: flicker 1.5s infinite alternate;
        }

        @keyframes flicker {
          0% {
            opacity: 1;
          }
          20% {
            opacity: 0.7;
          }
          40% {
            opacity: 1;
          }
          60% {
            opacity: 0.6;
          }
          80% {
            opacity: 1;
          }
          100% {
            opacity: 0.8;
          }
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  );
}