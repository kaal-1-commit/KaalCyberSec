

import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Typewriter from "typewriter-effect";

import {
  ShieldCheck,
  ChevronRight,
  Shield,
  Layers3,
  LockKeyhole,
  MonitorSmartphone,
  ServerCog,
  ArrowUpRight,
  Globe,
  Code2,
  Hospital,
  Hotel,
  ShoppingBag,
  GraduationCap,
  Cpu,
  Database,
  Network,
  Building2,
} from "lucide-react";

import CyberScene from "./CyberScene";

// ==========================================
// 1. BUNDLES SECTION
// ==========================================
const BundlesSection = () => {
  const bundles = [
    {
      icon: <MonitorSmartphone size={52} />,
      title: "Frontend Experience Bundle™",
      desc: "Modern responsive frontend systems engineered for performance, branding, accessibility, and immersive digital experiences.",
    },
    {
      icon: <ServerCog size={52} />,
      title: "Backend Systems Bundle™",
      desc: "Scalable backend infrastructures with secure APIs, authentication systems, database architecture, and enterprise integrations.",
    },
    {
      icon: <Layers3 size={52} />,
      title: "TechStack Bundle™",
      desc: "Complete full-stack product engineering including frontend, backend, deployment pipelines, hosting, and production support.",
    },
    {
      icon: <LockKeyhole size={52} />,
      title: "CyberDefense Bundle™",
      desc: "Advanced cybersecurity solutions for vulnerability assessment, infrastructure hardening, monitoring, and risk reduction.",
    },
    {
      icon: <Shield size={52} />,
      title: "CyberBundle™",
      desc: "All-in-one enterprise technology and cybersecurity ecosystem combining development, pentesting, infrastructure security, and maintenance.",
    },
  ];

  return (
    <section id="bundles" className="container-fluid py-5 position-relative overflow-hidden" style={{ color: "#fff", fontFamily: "'Camomile', sans-serif" }}>
      <style>{`
        .bundle-heading { font-size: 3rem; font-weight: 700; letter-spacing: 2px; color: #fff; text-shadow: 0 0 18px rgba(0,255,120,0.18); }
        .bundle-subtext { max-width: 780px; margin: auto; color: rgba(255,255,255,0.92); line-height: 1.9; font-size: 1.02rem; }
        .bundle-card { position: relative; height: 100%; padding: 40px 30px; border-radius: 24px; overflow: hidden; background: rgba(255,255,255,0.03); border: 1px solid rgba(0,255,120,0.14); backdrop-filter: blur(18px); transition: 0.45s ease; box-shadow: 0 0 25px rgba(0,255,120,0.05), inset 0 0 18px rgba(255,255,255,0.02); }
        .bundle-card::before { content: ""; position: absolute; inset: 0; background: linear-gradient(135deg, rgba(0,255,120,0.08), transparent 45%); opacity: 0; transition: 0.4s ease; }
        .bundle-card:hover { transform: translateY(-10px); border-color: rgba(0,255,120,0.5); box-shadow: 0 0 35px rgba(0,255,120,0.18), 0 0 60px rgba(0,255,120,0.08); }
        .bundle-card:hover::before { opacity: 1; }
        .bundle-icon { width: 95px; height: 95px; margin: auto; display: flex; align-items: center; justify-content: center; border-radius: 50%; color: #00ff88; background: rgba(0,255,120,0.08); border: 1px solid rgba(0,255,120,0.16); margin-bottom: 24px; transition: 0.4s ease; box-shadow: 0 0 25px rgba(0,255,120,0.08); }
        .bundle-card:hover .bundle-icon { transform: scale(1.08) rotate(4deg); background: rgba(0,255,120,0.15); box-shadow: 0 0 25px rgba(0,255,120,0.3), 0 0 50px rgba(0,255,120,0.15); }
        .bundle-title { font-size: 1.35rem; font-weight: 700; color: #fff; margin-bottom: 20px; transition: 0.3s ease; }
        .bundle-card:hover .bundle-title { color: #00ff88; }
        .bundle-description { color: rgba(255,255,255,0.93); line-height: 1.95; font-size: 0.98rem; margin-bottom: 28px; }
        .bundle-link { display: inline-flex; align-items: center; gap: 8px; color: #fff; font-size: 0.92rem; letter-spacing: 1px; text-transform: uppercase; transition: 0.3s ease; }
        .bundle-card:hover .bundle-link { color: #00ff88; }
        .bundle-link svg { transition: 0.3s ease; }
        .bundle-card:hover .bundle-link svg { transform: translate(4px,-4px); }
        .bundle-glow { position: absolute; width: 550px; height: 550px; background: rgba(0,255,120,0.05); border-radius: 50%; filter: blur(130px); bottom: -220px; left: -180px; z-index: 0; }
        @media(max-width:768px){ .bundle-heading{ font-size: 2.2rem; } .bundle-card{ padding: 34px 24px; } }
      `}</style>
      <div className="bundle-glow"></div>
      <div className="text-center mb-5 position-relative">
        <h2 className="bundle-heading" data-aos="zoom-in">Enterprise Technology Bundles</h2>
        <p className="bundle-subtext mt-4" data-aos="fade-up">Premium technology and cybersecurity engagement models designed for startups, enterprises, and organizations building secure, scalable, and future-ready digital ecosystems.</p>
      </div>
      <div className="row g-4 px-lg-5 px-3 position-relative">
        {bundles.map((bundle, index) => (
          <div className={`${index === 3 || index === 4 ? "col-md-6" : "col-md-6 col-xl-4"}`} key={index}>
            <div className="bundle-card text-center" data-aos="fade-up" data-aos-delay={index * 120}>
              <div className="bundle-icon">{bundle.icon}</div>
              <h4 className="bundle-title">{bundle.title}</h4>
              <p className="bundle-description">{bundle.desc}</p>
              <div className="bundle-link">Explore Solution <ArrowUpRight size={18} /></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// ==========================================
// 2. TECH STACK SECTION
// ==========================================
const TechStackSection = () => {
  const technologies = [
    {
      icon: <Cpu size={52} />,
      title: "Offensive Security",
      desc: "Advanced penetration testing, exploit validation, vulnerability research, and offensive security operations using industry-standard tooling.",
      tech: "Kali Linux • Burp Suite • Metasploit • Wireshark",
    },
    {
      icon: <ShieldCheck size={52} />,
      title: "Defensive Security",
      desc: "Enterprise defense operations focused on monitoring, threat detection, SIEM integrations, and infrastructure hardening.",
      tech: "SIEM • IDS/IPS • SOC Monitoring • Threat Intel",
    },
    {
      icon: <Code2 size={52} />,
      title: "Secure Development",
      desc: "Scalable secure software engineering for modern web applications, APIs, and enterprise systems with security-first architecture.",
      tech: "React • Django • FastAPI • Node.js",
    },
    {
      icon: <Database size={52} />,
      title: "Data Infrastructure",
      desc: "High-performance database systems engineered for scalability, resilience, optimization, and enterprise-grade reliability.",
      tech: "PostgreSQL • MongoDB • MySQL • Redis",
    },
    {
      icon: <Network size={52} />,
      title: "Cloud & DevSecOps",
      desc: "Cloud-native infrastructure, secure deployment pipelines, containerization, CI/CD security, and production hardening.",
      tech: "AWS • Docker • Kubernetes • CI/CD",
    },
  ];

  return (
    <section id="tech-stack" className="container-fluid py-5 position-relative overflow-hidden" style={{ color: "#fff", fontFamily: "'Camomile', sans-serif" }}>
      <style>{`
        .stack-heading { font-size: 3rem; font-weight: 700; letter-spacing: 2px; color: #fff; text-shadow: 0 0 18px rgba(0,255,120,0.18); }
        .stack-subtext { max-width: 780px; margin: auto; color: rgba(255,255,255,0.92); line-height: 1.9; font-size: 1.02rem; }
        .stack-card { position: relative; height: 100%; padding: 40px 30px; border-radius: 24px; overflow: hidden; background: rgba(255,255,255,0.03); border: 1px solid rgba(0,255,120,0.14); backdrop-filter: blur(18px); transition: 0.45s ease; box-shadow: 0 0 25px rgba(0,255,120,0.05), inset 0 0 18px rgba(255,255,255,0.02); }
        .stack-card::before { content: ""; position: absolute; inset: 0; background: linear-gradient(135deg, rgba(0,255,120,0.08), transparent 45%); opacity: 0; transition: 0.4s ease; }
        .stack-card:hover { transform: translateY(-10px); border-color: rgba(0,255,120,0.5); box-shadow: 0 0 35px rgba(0,255,120,0.18), 0 0 60px rgba(0,255,120,0.08); }
        .stack-card:hover::before { opacity: 1; }
        .stack-icon { width: 95px; height: 95px; margin: auto; display: flex; align-items: center; justify-content: center; border-radius: 50%; color: #00ff88; background: rgba(0,255,120,0.08); border: 1px solid rgba(0,255,120,0.16); margin-bottom: 24px; transition: 0.4s ease; box-shadow: 0 0 25px rgba(0,255,120,0.08); }
        .stack-card:hover .stack-icon { transform: scale(1.08) rotate(4deg); background: rgba(0,255,120,0.15); box-shadow: 0 0 25px rgba(0,255,120,0.3), 0 0 50px rgba(0,255,120,0.15); }
        .stack-title { font-size: 1.4rem; font-weight: 700; color: #fff; margin-bottom: 18px; transition: 0.3s ease; }
        .stack-card:hover .stack-title { color: #00ff88; }
        .stack-description { color: rgba(255,255,255,0.94); line-height: 1.95; font-size: 1rem; margin-bottom: 18px; }
        .stack-tech { color: #00ff88; font-size: 0.95rem; letter-spacing: 0.5px; margin-bottom: 28px; line-height: 1.8; }
        .stack-link { display: inline-flex; align-items: center; gap: 8px; color: #fff; font-size: 0.92rem; letter-spacing: 1px; text-transform: uppercase; transition: 0.3s ease; }
        .stack-card:hover .stack-link { color: #00ff88; }
        .stack-link svg { transition: 0.3s ease; }
        .stack-card:hover .stack-link svg { transform: translate(4px,-4px); }
        .stack-glow { position: absolute; width: 550px; height: 550px; background: rgba(0,255,120,0.05); border-radius: 50%; filter: blur(130px); bottom: -220px; right: -180px; z-index: 0; }
        @media(max-width:768px){ .stack-heading{ font-size: 2.2rem; } .stack-card{ padding: 34px 24px; } }
      `}</style>
      <div className="stack-glow"></div>
      <div className="text-center mb-5 position-relative">
        <h2 className="stack-heading" data-aos="zoom-in">Technology Stack</h2>
        <p className="stack-subtext mt-4" data-aos="fade-up">Enterprise-grade technologies, offensive security tooling, cloud-native infrastructure, and secure engineering frameworks powering modern digital ecosystems.</p>
      </div>
      <div className="row g-4 px-lg-5 px-3 position-relative">
        {technologies.map((tech, index) => (
          <div className={`${index === 4 ? "col-12" : "col-md-6 col-xl-3"}`} key={index}>
            <div className="stack-card text-center" data-aos="fade-up" data-aos-delay={index * 120}>
              <div className="stack-icon">{tech.icon}</div>
              <h4 className="stack-title">{tech.title}</h4>
              <p className="stack-description">{tech.desc}</p>
              <div className="stack-tech">{tech.tech}</div>
              <div className="stack-link">Explore Technologies <ArrowUpRight size={18} /></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// ==========================================
// 3. CASE STUDIES SECTION
// ==========================================
const CaseStudiesSection = () => {
  const caseStudies = [
    {
      icon: <ShieldCheck size={52} />,
      title: "Government Cybersecurity Hardening",
      desc: "Conducted advanced penetration testing and infrastructure security assessments for government-facing digital systems and citizen service platforms.",
      details: "Identified authentication weaknesses, insecure configurations, exposed services, and attack surfaces requiring remediation and security hardening.",
      outcome: "Improved platform resilience, reduced phishing exposure, and strengthened citizen data protection mechanisms.",
    },
    {
      icon: <Globe size={52} />,
      title: "Cloud Platform Security",
      desc: "Secured cloud-hosted startup infrastructure through DevSecOps implementation, CI/CD hardening, API reviews, and infrastructure monitoring.",
      details: "Performed AWS security assessments, container security validation, deployment reviews, and cloud access control optimization.",
      outcome: "Reduced critical vulnerabilities, accelerated secure deployment workflows, and improved cloud compliance readiness.",
    },
    {
      icon: <Code2 size={52} />,
      title: "Enterprise Incident Response",
      desc: "Responded to ransomware and enterprise-level security incidents with rapid forensic analysis, containment, and recovery planning.",
      details: "Performed malware investigation, attack tracing, root-cause analysis, and infrastructure recovery coordination for affected systems.",
      outcome: "Business operations restored securely with improved monitoring and long-term security posture enhancements.",
    },
    {
      icon: <Hospital size={52} />,
      title: "Healthcare Security Assessments",
      desc: "Performed web application security reviews and infrastructure assessments for healthcare and medical service platforms.",
      details: "Focused on patient data protection, secure authentication flows, infrastructure hardening, and web vulnerability reduction.",
      outcome: "Enhanced platform security, reduced exposure to common attacks, and improved operational trust.",
    },
    {
      icon: <Hotel size={52} />,
      title: "Hospitality & Booking Platforms",
      desc: "Security-focused reviews and optimization of hospitality booking systems, customer-facing portals, and digital infrastructure.",
      details: "Conducted vulnerability assessments, secure deployment reviews, and performance-focused infrastructure improvements.",
      outcome: "Improved booking system reliability, customer trust, and platform stability during peak traffic operations.",
    },
    {
      icon: <ShoppingBag size={52} />,
      title: "E-Commerce Security Engineering",
      desc: "Strengthened online retail systems through secure coding reviews, penetration testing, and infrastructure optimization.",
      details: "Analyzed payment workflows, API exposure, authentication systems, and customer data security controls.",
      outcome: "Improved customer data protection and reduced business risk from application-layer threats.",
    },
    {
      icon: <GraduationCap size={52} />,
      title: "Educational Platform Security",
      desc: "Reviewed institutional and educational web platforms for vulnerabilities, access control weaknesses, and deployment security.",
      details: "Focused on secure authentication systems, infrastructure resilience, and scalable digital learning environments.",
      outcome: "Enhanced academic platform stability, security awareness, and infrastructure reliability.",
    },
    {
      icon: <ServerCog size={52} />,
      title: "Infrastructure & DevSecOps",
      desc: "Implemented scalable infrastructure hardening and secure deployment pipelines for modern enterprise environments.",
      details: "Included container security, automated deployment workflows, monitoring integrations, and server optimization.",
      outcome: "Improved infrastructure scalability, deployment consistency, and long-term operational security.",
    },
  ];

  return (
    <section  className="container-fluid py-5 position-relative overflow-hidden" style={{ color: "#fff", fontFamily: "'Camomile', sans-serif" }}>
      <style>{`
        .case-heading { font-size: 3rem; font-weight: 700; letter-spacing: 2px; color: #fff; text-shadow: 0 0 18px rgba(0,255,120,0.18); }
        .case-subtext { max-width: 820px; margin: auto; color: rgba(255,255,255,0.92); line-height: 1.9; font-size: 1.02rem; }
        .case-card { position: relative; height: 100%; padding: 40px 30px; border-radius: 24px; overflow: hidden; background: rgba(255,255,255,0.03); border: 1px solid rgba(0,255,120,0.14); backdrop-filter: blur(18px); transition: 0.45s ease; box-shadow: 0 0 25px rgba(0,255,120,0.05), inset 0 0 18px rgba(255,255,255,0.02); }
        .case-card::before { content: ""; position: absolute; inset: 0; background: linear-gradient(135deg, rgba(0,255,120,0.08), transparent 45%); opacity: 0; transition: 0.4s ease; }
        .case-card:hover { transform: translateY(-10px); border-color: rgba(0,255,120,0.5); box-shadow: 0 0 35px rgba(0,255,120,0.18), 0 0 60px rgba(0,255,120,0.08); }
        .case-card:hover::before { opacity: 1; }
        .case-icon { width: 95px; height: 95px; margin: auto; display: flex; align-items: center; justify-content: center; border-radius: 50%; color: #00ff88; background: rgba(0,255,120,0.08); border: 1px solid rgba(0,255,120,0.16); margin-bottom: 24px; transition: 0.4s ease; box-shadow: 0 0 25px rgba(0,255,120,0.08); }
        .case-card:hover .case-icon { transform: scale(1.08) rotate(4deg); background: rgba(0,255,120,0.15); box-shadow: 0 0 25px rgba(0,255,120,0.3), 0 0 50px rgba(0,255,120,0.15); }
        .case-title { font-size: 1.35rem; font-weight: 700; color: #fff; margin-bottom: 18px; transition: 0.3s ease; }
        .case-card:hover .case-title { color: #00ff88; }
        .case-description { color: rgba(255,255,255,0.94); line-height: 1.9; font-size: 1rem; margin-bottom: 18px; }
        .case-details { color: rgba(255,255,255,0.78); line-height: 1.9; font-size: 0.95rem; margin-bottom: 22px; }
        .case-outcome { color: #00ff88; line-height: 1.8; font-size: 0.96rem; margin-bottom: 26px; }
        .case-link { display: inline-flex; align-items: center; gap: 8px; color: #fff; font-size: 0.92rem; letter-spacing: 1px; text-transform: uppercase; transition: 0.3s ease; }
        .case-card:hover .case-link { color: #00ff88; }
        .case-link svg { transition: 0.3s ease; }
        .case-card:hover .case-link svg { transform: translate(4px,-4px); }
        .case-glow { position: absolute; width: 550px; height: 550px; background: rgba(0,255,120,0.05); border-radius: 50%; filter: blur(130px); top: -220px; right: -180px; z-index: 0; }
        @media(max-width:768px){ .case-heading{ font-size: 2.2rem; } .case-card{ padding: 34px 24px; } }
      `}</style>
      <div className="case-glow"></div>
      <div className="text-center mb-5 position-relative">
        <h2 className="case-heading" data-aos="zoom-in">Security Case Studies</h2>
        <p className="case-subtext mt-4" data-aos="fade-up">Real-world cybersecurity engagements, secure engineering projects, cloud infrastructure reviews, and enterprise-grade digital defense initiatives delivered across multiple industries.</p>
      </div>
      <div className="row g-4 px-lg-5 px-3 position-relative">
        {caseStudies.map((item, index) => (
          <div className="col-md-6 col-xl-3" key={index}>
            <div className="case-card text-center" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="case-icon">{item.icon}</div>
              <h4 className="case-title">{item.title}</h4>
              <p className="case-description">{item.desc}</p>
              <p className="case-details">{item.details}</p>
              <div className="case-outcome">✅ {item.outcome}</div>
              <div className="case-link">View Engagement <ArrowUpRight size={18} /></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// ==========================================
// 4. TESTIMONIALS SECTION
// ==========================================
const TestimonialsSection = () => {
  const testimonials = [
    {
      icon: <ShieldCheck size={48} />,
      name: "I4C Collaboration",
      role: "Cyber Awareness & Security Operations",
      quote: "KaalCyberSec demonstrated advanced technical understanding, responsible security practices, and strong cybersecurity coordination capabilities during multiple awareness and security-focused engagements.",
    },
    {
      icon: <Hospital size={48} />,
      name: "Healthcare Infrastructure",
      role: "Medical & Hospital Security",
      quote: "Security assessments and penetration testing engagements helped strengthen healthcare web infrastructure, improve data protection practices, and reduce exposure to modern cyber threats.",
    },
    {
      icon: <Hotel size={48} />,
      name: "Hospitality & Enterprise Platforms",
      role: "Hotels & Booking Systems",
      quote: "Enterprise hospitality platforms benefited from infrastructure hardening, vulnerability assessments, and improved application-level security for customer-facing systems.",
    },
    {
      icon: <GraduationCap size={48} />,
      name: "Educational Platforms",
      role: "University & Institutional Systems",
      quote: "Academic and institutional platforms were reviewed for security posture improvements, secure deployment practices, and enhanced protection against web application vulnerabilities.",
    },
    {
      icon: <ShoppingBag size={48} />,
      name: "E-Commerce & Retail",
      role: "Retail Technology Security",
      quote: "Modern e-commerce platforms were strengthened with secure engineering recommendations, application security testing, and infrastructure-level hardening strategies.",
    },
    {
      icon: <Building2 size={48} />,
      name: "Enterprise Technology Clients",
      role: "Infrastructure & Development",
      quote: "Organizations trusted KaalCyberSec for scalable development, security-focused architecture, penetration testing, and long-term digital infrastructure resilience.",
    },
    {
      icon: <Globe size={48} />,
      name: "International Clients",
      role: "USA Technology Engagements",
      quote: "International clients appreciated the team's communication, secure development approach, infrastructure expertise, and professional execution across remote engagements.",
    },
    {
      icon: <ShieldCheck size={48} />,
      name: "Incident Response Clients",
      role: "Cybersecurity & Recovery",
      quote: "Rapid response support, vulnerability analysis, and actionable remediation guidance helped organizations recover securely while improving future resilience.",
    },
  ];

  return (
    <section id="testimonials" className="container-fluid py-5 position-relative overflow-hidden" style={{ color: "#fff", fontFamily: "'Camomile', sans-serif" }}>
      <style>{`
        .testimonial-heading { font-size: 3rem; font-weight: 700; letter-spacing: 2px; color: #fff; text-shadow: 0 0 18px rgba(0,255,120,0.18); }
        .testimonial-subtext { max-width: 820px; margin: auto; color: rgba(255,255,255,0.92); line-height: 1.9; font-size: 1.02rem; }
        .testimonial-card { position: relative; height: 100%; padding: 40px 30px; border-radius: 24px; overflow: hidden; background: rgba(255,255,255,0.03); border: 1px solid rgba(0,255,120,0.14); backdrop-filter: blur(18px); transition: 0.45s ease; box-shadow: 0 0 25px rgba(0,255,120,0.05), inset 0 0 18px rgba(255,255,255,0.02); }
        .testimonial-card::before { content: ""; position: absolute; inset: 0; background: linear-gradient(135deg, rgba(0,255,120,0.08), transparent 45%); opacity: 0; transition: 0.4s ease; }
        .testimonial-card:hover { transform: translateY(-10px); border-color: rgba(0,255,120,0.5); box-shadow: 0 0 35px rgba(0,255,120,0.18), 0 0 60px rgba(0,255,120,0.08); }
        .testimonial-card:hover::before { opacity: 1; }
        .testimonial-avatar { width: 95px; height: 95px; margin: auto; display: flex; align-items: center; justify-content: center; border-radius: 50%; color: #00ff88; background: rgba(0,255,120,0.08); border: 1px solid rgba(0,255,120,0.16); margin-bottom: 24px; transition: 0.4s ease; box-shadow: 0 0 25px rgba(0,255,120,0.08); }
        .testimonial-card:hover .testimonial-avatar { transform: scale(1.08) rotate(4deg); background: rgba(0,255,120,0.15); box-shadow: 0 0 25px rgba(0,255,120,0.3), 0 0 50px rgba(0,255,120,0.15); }
        .testimonial-quote { color: rgba(255,255,255,0.94); line-height: 1.95; font-size: 1rem; margin-bottom: 28px; }
        .testimonial-name { font-size: 1.2rem; font-weight: 700; color: #fff; margin-bottom: 8px; transition: 0.3s ease; }
        .testimonial-card:hover .testimonial-name { color: #00ff88; }
        .testimonial-role { color: rgba(255,255,255,0.72); font-size: 0.95rem; letter-spacing: 0.5px; margin-bottom: 20px; }
        .testimonial-link { display: inline-flex; align-items: center; gap: 8px; color: #fff; font-size: 0.92rem; letter-spacing: 1px; text-transform: uppercase; transition: 0.3s ease; }
        .testimonial-card:hover .testimonial-link { color: #00ff88; }
        .testimonial-link svg { transition: 0.3s ease; }
        .testimonial-card:hover .testimonial-link svg { transform: translate(4px,-4px); }
        .testimonial-glow { position: absolute; width: 550px; height: 550px; background: rgba(0,255,120,0.05); border-radius: 50%; filter: blur(130px); top: -220px; left: -180px; z-index: 0; }
        @media(max-width:768px){ .testimonial-heading{ font-size: 2.2rem; } .testimonial-card{ padding: 34px 24px; } }
      `}</style>
      <div className="testimonial-glow"></div>
      <div className="text-center mb-5 position-relative">
        <h2 className="testimonial-heading" data-aos="zoom-in">Trusted By Organizations</h2>
        <p className="testimonial-subtext mt-4" data-aos="fade-up">KaalCyberSec has contributed to security testing, infrastructure hardening, secure engineering, and cybersecurity engagements across healthcare, hospitality, enterprise, education, retail, and international technology ecosystems.</p>
      </div>
      <div className="row g-4 px-lg-5 px-3 position-relative">
        {testimonials.map((item, index) => (
          <div className="col-md-6 col-xl-3" key={index}>
            <div className="testimonial-card text-center" data-aos="fade-up" data-aos-delay={index * 120}>
              <div className="testimonial-avatar">{item.icon}</div>
              <p className="testimonial-quote">{item.quote}</p>
              <h4 className="testimonial-name">{item.name}</h4>
              <p className="testimonial-role">{item.role}</p>
              <div className="testimonial-link">Security Engagement <ArrowUpRight size={18} /></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};


// ==========================================
// MAIN LANDING PAGE EXPORT
// ==========================================
export default function KaalCyberSecLanding() {
 

  return (
    <div className="font-tesla">
      {/* GLOBAL STYLES & FONTS */}
      <style>{`
        @import url('https://fonts.cdnfonts.com/css/tesla');
        @import url('https://fonts.cdnfonts.com/css/camomile');

        .font-tesla { font-family: 'Tesla', sans-serif; }
        body { background: #000; color: #fff; overflow-x: hidden; }

        /* HERO CSS */
        .hero-container { position: relative; min-height: 100vh; display: flex; justify-content: center; align-items: center; overflow: hidden; text-align: center; background: #000; }
        canvas { position: absolute; inset: 0; width: 100% !important; height: 100% !important; z-index: 0; }
        .hero-overlay { position: absolute; inset: 0; background: radial-gradient(circle at center, rgba(0,0,0,0.18), rgba(0,0,0,0.78)); z-index: 1; }
        .scan-lines { position: absolute; inset: 0; background: repeating-linear-gradient(to bottom, rgba(255,255,255,0.02), rgba(255,255,255,0.02) 1px, transparent 1px, transparent 3px); opacity: 0.12; z-index: 2; pointer-events: none; }
        .hero-content { position: relative; z-index: 10; max-width: 1000px; padding: 20px; }
        .hero-badge { display: inline-flex; align-items: center; gap: 10px; padding: 12px 22px; border-radius: 40px; border: 1px solid rgba(0,255,120,0.16); background: rgba(255,255,255,0.03); color: #00ff88; font-size: 0.92rem; letter-spacing: 1px; margin-bottom: 28px; backdrop-filter: blur(10px); box-shadow: 0 0 25px rgba(0,255,120,0.08); }
        .typewriter-text { font-size: 4rem; font-weight: 800; line-height: 1.3; color: #fff; text-shadow: 0 0 18px rgba(0,255,120,0.18); }
        .Typewriter__wrapper { color: #00ff88; text-shadow: 0 0 12px rgba(0,255,120,0.45), 0 0 30px rgba(0,255,120,0.18); }
        .hero-description { margin-top: 35px; color: rgba(255,255,255,0.88); font-size: 1.12rem; line-height: 2; max-width: 850px; margin-inline: auto; }
        .hero-buttons { margin-top: 45px; display: flex; justify-content: center; align-items: center; gap: 20px; flex-wrap: wrap; }
        .neon-btn { padding: 15px 34px; border-radius: 50px; border: 1px solid rgba(0,255,120,0.25); background: rgba(255,255,255,0.03); color: #fff; text-decoration: none; display: inline-flex; align-items: center; gap: 10px; letter-spacing: 1px; font-weight: 600; transition: 0.4s ease; backdrop-filter: blur(12px); box-shadow: 0 0 20px rgba(0,255,120,0.05); }
        .neon-btn:hover { transform: translateY(-4px); color: #00ff88; border-color: rgba(0,255,120,0.55); box-shadow: 0 0 25px rgba(0,255,120,0.25), 0 0 45px rgba(0,255,120,0.08); }
        
        @media(max-width:768px){ .typewriter-text{ font-size: 2.2rem; } .hero-description{ font-size: 1rem; line-height: 1.9; } .hero-buttons{ gap: 14px; } .neon-btn{ width: 100%; justify-content: center; } }
      `}</style>

      {/* 1. HERO SECTION */}
      <section id="hero" className="hero-container">
        <CyberScene />
        <div className="hero-overlay"></div>
        <div className="scan-lines"></div>

        <div className="hero-content" data-aos="fade-up">
          <div className="hero-badge">
            <ShieldCheck size={18} /> Offensive Security • Secure Engineering
          </div>

          <div className="typewriter-text">
            <Typewriter
              options={{
                strings: [
                  "Hack The Future With KaalCyberSec",
                  "Guardians Of The Digital Realm",
                  "Penetration Testing & Red Teaming",
                  "Secure Development & Cyber Defense",
                  "Empowering Enterprises Against Cyber Threats",
                ],
                autoStart: true,
                loop: true,
                delay: 40,
                deleteSpeed: 20,
              }}
            />
          </div>

          <p className="hero-description">
            KaalCyberSec is a modern cybersecurity and secure engineering
            company focused on penetration testing, enterprise defense,
            secure application development, cloud security, and digital
            resilience for startups, enterprises, and institutions.
          </p>

          <div className="hero-buttons">
            <a href="KaalCyberSec/services" className="neon-btn">
              Explore Services
              <ChevronRight size={18} />
            </a>
            <a href="KaalCyberSec/contact" className="neon-btn">
              Get In Touch
              <ChevronRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* 2. SERVICES/BUNDLES SECTION */}
      <BundlesSection />

      {/* 3. TECH STACK SECTION */}
      <TechStackSection />

      {/* 4. CASE STUDIES SECTION */}
      <CaseStudiesSection />

      {/* 5. TESTIMONIALS SECTION */}
      <TestimonialsSection />

    </div>
  );
}