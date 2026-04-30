import React, { Component } from "react";

import {
  ShieldCheck,
  Linkedin,
  Instagram,
  Mail,
} from "lucide-react";

import {  FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";



export default class Footer extends Component {

  render() {

    return (
      <footer
        className="footer-section position-relative overflow-hidden"
      >

        {/* STYLES */}
        <style>{`

          .footer-section {

            background: #000;

            border-top: 1px solid rgba(0,255,120,0.12);

            padding: 80px 20px 40px;

            position: relative;
          }

          .footer-glow {

            position: absolute;

            width: 450px;
            height: 450px;

            background: rgba(0,255,120,0.05);

            border-radius: 50%;

            filter: blur(120px);

            top: -180px;
            left: 50%;

            transform: translateX(-50%);

            z-index: 0;
          }

          .footer-brand {

            font-size: 3rem;

            font-weight: 800;

            color: #00ff88;

            letter-spacing: 3px;

            text-shadow:
              0 0 10px #00ff88,
              0 0 20px rgba(0,255,120,0.5),
              0 0 40px rgba(0,255,120,0.25);

            animation: glowPulse 2s infinite alternate;
          }

          @keyframes glowPulse {

            from {

              text-shadow:
                0 0 10px #00ff88,
                0 0 20px rgba(0,255,120,0.4),
                0 0 35px rgba(0,255,120,0.2);
            }

            to {

              text-shadow:
                0 0 20px #00ff88,
                0 0 35px rgba(0,255,120,0.8),
                0 0 55px rgba(0,255,120,0.45);
            }
          }

          .footer-tagline {

            color: rgba(255,255,255,0.88);

            margin-top: 16px;

            font-size: 1.05rem;

            letter-spacing: 1px;

            line-height: 1.9;
          }

          .footer-registration {

            color: rgba(255,255,255,0.62);

            margin-top: 18px;

            font-size: 0.95rem;

            letter-spacing: 1px;
          }

          .footer-email {

            margin-top: 18px;

            display: inline-flex;

            align-items: center;

            gap: 10px;

            color: #00ff88;

            text-decoration: none;

            transition: 0.3s ease;

            font-size: 1rem;
          }

          .footer-email:hover {

            color: #fff;

            text-shadow: 0 0 12px rgba(0,255,120,0.6);
          }

          .social-wrapper {

            display: flex;

            justify-content: center;

            align-items: center;

            gap: 18px;

            margin-top: 35px;

            flex-wrap: wrap;
          }

          .social-icon {

            width: 58px;
            height: 58px;

            border-radius: 50%;

            display: flex;

            align-items: center;

            justify-content: center;

            background: rgba(255,255,255,0.03);

            border: 1px solid rgba(0,255,120,0.16);

            color: #fff;

            transition: 0.4s ease;

            text-decoration: none;

            backdrop-filter: blur(10px);

            box-shadow: 0 0 18px rgba(0,255,120,0.05);
          }

          .social-icon:hover {

            transform: translateY(-6px) scale(1.08);

            color: #00ff88;

            border-color: rgba(0,255,120,0.55);

            box-shadow:
              0 0 25px rgba(0,255,120,0.25),
              0 0 45px rgba(0,255,120,0.1);
          }

          .footer-links {

            margin-top: 45px;

            display: flex;

            justify-content: center;

            gap: 22px;

            flex-wrap: wrap;
          }

          .footer-links a {

            color: rgba(255,255,255,0.72);

            text-decoration: none;

            transition: 0.3s ease;

            font-size: 0.95rem;

            letter-spacing: 0.5px;
          }

          .footer-links a:hover {

            color: #00ff88;

            text-shadow: 0 0 10px rgba(0,255,120,0.5);
          }

          .footer-bottom {

            margin-top: 40px;

            padding-top: 25px;

            border-top: 1px solid rgba(255,255,255,0.06);

            color: rgba(255,255,255,0.52);

            font-size: 0.9rem;

            letter-spacing: 0.5px;
          }

          @media(max-width:768px){

            .footer-brand{
              font-size: 2.2rem;
            }

            .footer-tagline{
              font-size: 0.96rem;
            }
          }

        `}</style>

        {/* GLOW */}
        <div className="footer-glow"></div>

        {/* CONTENT */}
        <div className="container text-center position-relative">

          {/* LOGO */}
          <div
            className="d-flex justify-content-center align-items-center gap-3"
            data-aos="zoom-in"
          >

            <ShieldCheck
              size={42}
              color="#00ff88"
            />

            <h1 className="footer-brand m-0">
              KaalCyberSec
            </h1>

          </div>

          {/* TAGLINE */}
          <p
            className="footer-tagline"
            data-aos="fade-up"
          >
            Offensive Security • Secure Engineering • Digital Defense
            <br />
            Building resilient digital ecosystems for the modern world.
          </p>

          {/* REGISTRATION */}
          <p
            className="footer-registration"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Govt. Registered Entity — UDYAM-MP-23-0233844
          </p>

          {/* EMAIL */}
          <a
            href="mailto:kaalcybersec@gmail.com"
            className="footer-email"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <Mail size={18} />
            kaalcybersec@gmail.com
          </a>

          {/* SOCIAL ICONS */}
          <div
            className="social-wrapper"
            data-aos="fade-up"
            data-aos-delay="200"
          >

            <a
              href="https://www.linkedin.com/company/kaalcybersec/"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
            >
              <Linkedin size={24} />
            </a>

              <a
  href="https://x.com/kaalcybersec"
  target="_blank"
  rel="noreferrer"
  className="social-icon"
>
  <FaXTwitter size={22} />
</a>
            
            <a
              href="https://www.instagram.com/kaalcybersec"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
            >
              <Instagram size={24} />
            </a>

            <a
              href="https://www.tiktok.com/@kaalcybersec"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
            >
              <FaTiktok size={22} />
            </a>

            <a
              href="mailto:kaalcybersec@gmail.com"
              className="social-icon"
            >
              <Mail size={24} />
            </a>

          </div>

          {/* LINKS */}
          <div
            className="footer-links"
            data-aos="fade-up"
            data-aos-delay="250"
          >

            <a href={`${process.env.PUBLIC_URL}/privacy-policy.pdf`}target="_blank" rel="noreferrer">
              Privacy Policy
            </a>

            <a  href={`${process.env.PUBLIC_URL}/terms-and-conditions.pdf`} target="_blank" rel="noreferrer">
              Terms & Conditions
            </a>

            <a  href={`${process.env.PUBLIC_URL}/refund-policy.pdf`} target="_blank" rel="noreferrer">
              Refund Policy
            </a>

          </div>

          {/* BOTTOM */}
          <div
            className="footer-bottom"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            © {new Date().getFullYear()} KaalCyberSec —
            Secure The Future.
          </div>

        </div>

      </footer>
    );
  }
}