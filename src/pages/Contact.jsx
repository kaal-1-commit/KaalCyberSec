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
      <style>{`
         body { background: #000; color: #fff; overflow-x: hidden; }
        .contact-section {
          position: relative;
          z-index: 1;
       
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* GLOWING ANIMATED TITLE */
        .contact-heading {
           font-size: 3rem;

          font-weight: 800;

          text-align: center;

          color: #00ff88;

          text-shadow:
            0 0 15px rgba(0,255,120,0.45),
            0 0 40px rgba(0,255,120,0.15);
        }

        /* KEYFRAMES FOR THE TITLE FADE/GLOW */
        @keyframes neonPulse {
          0% {
            text-shadow: 0 0 10px rgba(0, 255, 120, 0.1), 0 0 20px rgba(0, 255, 120, 0.1);
            color:#00ee5b;
          }
          100% {
            text-shadow: 0 0 15px hsla(148, 100%, 50%, 0.80), 0 0 30px rgba(0, 255, 120, 0.5), 0 0 45px rgba(0, 255, 120, 0.3);
            color : #00ee5b;
          }
        }

        /* FROSTED GLASS FORM - BLURS THE GLOBAL APP.CSS GRID LINES */
        .cyber-form {
          background: rgba(1, 10, 5, 0); /* Dark transparent base */
          backdrop-filter: blur(1px); /* Heavy blur to diffuse grid lines */
          -webkit-backdrop-filter: blur(1px); /* Safari support */
          border: 1px solid rgba(0, 255, 120, 0.15);
          padding: 45px 35px;
          border-radius: 20px;
          box-shadow: 
            0 0 40px rgba(0, 255, 120, 0.08), 
            inset 0 0 20px rgba(0, 255, 120, 0.03);
          position: relative;
          overflow: hidden;
          z-index: 1; 
          transition: 0.45s ease;
        }

        .cyber-form:hover {
          border-color: rgba(0, 255, 120, 0.4);
          box-shadow: 
            0 0 35px rgba(0, 255, 120, 0.15), 
            0 0 60px rgba(0, 255, 119, 0.45);
        }

        /* TOP GREEN GLOW LINE ON FORM */
        .cyber-form::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(0,255,120,0.8), transparent);
          opacity: 0.7;
        }

        .cyber-input {
          background: rgba(0, 0, 0, 0.6) !important;
          border: 1px solid rgba(0, 255, 120, 0.25) !important;
          color: #00ff88 !important;
          padding: 16px !important;
          border-radius: 8px !important;
          font-size: 0.95rem;
          transition: all 0.3s ease;
        }

        .cyber-input::placeholder {
          color: rgba(255, 255, 255, 0.35);
          letter-spacing: 0.5px;
        }

        .cyber-input:focus {
          box-shadow: 0 0 20px rgba(0, 255, 120, 0.15) !important;
          border-color: #00ff88 !important;
          background: rgba(0, 255, 120, 0.05) !important;
          outline: none;
        }

        .futuristic-btn {
          background: linear-gradient(90deg, #00ff88, #00cc66);
          border: none;
          padding: 16px 36px;
          color: #000;
          font-weight: 800;
          letter-spacing: 1px;
          border-radius: 50px;
          transition: 0.3s ease;
          box-shadow: 0 0 20px rgba(0, 255, 120, 0.2);
          text-transform: uppercase;
          font-size: 0.9rem;
        }

        .futuristic-btn:hover {
          transform: translateY(-4px);
          box-shadow: 0 0 35px rgba(0, 255, 120, 0.4);
          background: linear-gradient(90deg, #00cc66, #00ff88);
        }

        .futuristic-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }

        /* HACKER POPUP ANIMATIONS */
        .hacker-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(15px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 99999;
        }

        .hacker-box {
          text-align: center;
          padding: 50px;
          border: 1px solid rgba(0, 255, 120, 0.4);
          background: rgba(5, 10, 5, 0.95);
          border-radius: 15px;
          box-shadow: 0 0 50px rgba(0, 255, 120, 0.15), inset 0 0 20px rgba(0, 255, 120, 0.05);
          min-width: 350px;
        }

        .hacker-text {
          color: #00ff88;
          font-size: 1.5rem;
          font-weight: 700;
          letter-spacing: 4px;
          text-shadow: 0 0 15px rgba(0, 255, 120, 0.6);
          margin: 0;
        }

        .success { color: #00ff88; }
        .error { color: #ff3333; text-shadow: 0 0 15px rgba(255, 51, 51, 0.6); }
        .spin-icon { color: #00ff88; animation: spin 1.2s linear infinite; }
        .flicker { animation: flicker 2s infinite alternate; }

        @keyframes flicker {
          0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% { opacity: 1; }
          20%, 24%, 55% { opacity: 0.4; }
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* MOBILE RESPONSIVE FIXES */
        @media(max-width:768px){
          .contact-heading { font-size: 2.2rem; }
          .cyber-form { padding: 35px 20px; }
        }
      `}</style>

      {/* Hacker Popup Overlay */}
      {loading && (
        <div className="hacker-overlay">
          <div className="hacker-box">
            {status === "sending" && (
              <>
                <LoaderCircle className="spin-icon mb-4 mx-auto d-block" size={50} />
                <h2 className="hacker-text flicker">ENCRYPTING REQUEST...</h2>
              </>
            )}

            {status === "sent" && (
              <>
                <ShieldCheck className="mb-4 text-success mx-auto d-block" size={55} />
                <h2 className="hacker-text success flicker">TRANSMISSION SECURE</h2>
              </>
            )}

            {status === "error" && (
              <h2 className="hacker-text error flicker">CONNECTION FAILED</h2>
            )}
          </div>
        </div>
      )}

      <section
        id="contact"
        className="contact-section container-fluid pt-5 pb-5 overflow-hidden"
        style={{
          fontFamily: "'Camomile', sans-serif",
        }}
      >
        <div className="container mt-5 pt-4">
          
          {/* Heading Section */}
          <div className="text-center mb-5 position-relative" data-aos="fade-down">
            <h2 className="contact-heading mb-3 d-inline-block pb-3 px-4">
              Secure Communications
            </h2>
            <p className="text-white mt-2 mx-auto" style={{ maxWidth: '650px', fontSize: '1.05rem', lineHeight: '1.8' }}>
              Initialize contact for penetration testing, enterprise defense architecture, or secure infrastructure deployments.
            </p>
          </div>

          <div className="row justify-content-center pb-5">
            <div className="col-lg-8">
              
              {/* Trust Badge Line */}
           

              {/* Form Container */}
              <form
                ref={form}
                onSubmit={sendEmail}
                className="row g-4 cyber-form"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="col-md-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Authorized Personnel Name"
                    className="form-control cyber-input"
                    required
                  />
                </div>

                <div className="col-md-6">
                  <input
                    type="email"
                    name="email"
                    placeholder="Corporate Email Matrix"
                    className="form-control cyber-input"
                    required
                  />
                </div>

                <div className="col-md-6">
                  <input
                    type="text"
                    name="company"
                    placeholder="Organization / Entity"
                    className="form-control cyber-input"
                  />
                </div>

                <div className="col-md-6">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Secure Comms Line (Phone)"
                    className="form-control cyber-input"
                  />
                </div>

                <div className="col-12">
                  <textarea
                    rows={5}
                    name="message"
                    placeholder="Detail your security parameters or project scope..."
                    className="form-control cyber-input"
                    required
                  ></textarea>
                </div>

                <div className="col-12 text-center mt-5">
                  <button
                    type="submit"
                    className="futuristic-btn"
                    disabled={loading}
                  >
                    <Mail className="me-2 mb-1" size={18} />
                    Initiate Handshake
                  </button>
                </div>
              </form>

              {/* Footer text below form */}
              <p className="text-center small mt-4" style={{ color: 'rgb(255, 255, 255)' }} data-aos="fade-up" data-aos-delay="200">
                Response sequence initiated within 24 operational hours. Data remains classified.
              </p>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}