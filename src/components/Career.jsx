import React, { Component } from "react";

import {
  
  ChevronDown,
  ShieldCheck,
  Code2,
  Cpu,
  MonitorCog,
  Send,
  LoaderCircle,
} from "lucide-react";

export default class Career extends Component {

  constructor() {
    super();

    this.state = {
      openJob: null,
      showModal: false,
      selectedJob: "",
      loading: false,
      status: "",
    };
  }

  toggleJob(id) {
    this.setState({
      openJob: this.state.openJob === id ? null : id,
    });
  }

  openApplyModal(jobTitle) {
    this.setState({
      showModal: true,
      selectedJob: jobTitle,
    });
  }

  closeModal() {
    this.setState({
      showModal: false,
    });
  }

  async submitApplication(e) {

    e.preventDefault();

    this.setState({
      loading: true,
      status: "sending",
    });

    const form = e.target;

    const file = form.resume.files[0];

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = async () => {

      const formData = {
        position: this.state.selectedJob,
        name: form.name.value,
        email: form.email.value,
        phone: form.phone.value,
        resume: reader.result,
      };

      try {

        await fetch(
          "https://script.google.com/macros/s/AKfycbyEQg4huKappI8OIMII2wT1Ns3pSbg4n7EMlmqYMkWjvqpHL-nbVs7g0zLWTUwiz9JX/exec",
          {
            method: "POST",
            mode: "no-cors",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        this.setState({
          status: "sent",
        });

        form.reset();

        setTimeout(() => {
          this.setState({
            loading: false,
            status: "",
            showModal: false,
          });
        }, 2500);

      } catch (error) {

        console.log(error);

        this.setState({
          status: "error",
        });

        setTimeout(() => {
          this.setState({
            loading: false,
            status: "",
          });
        }, 2500);
      }
    };
  }

  render() {

    const jobs = [

      {
        id: 1,

        icon: <ShieldCheck size={46} />,

        title: "Junior Penetration Tester",

        desc:
          "Work with offensive security teams to perform VAPT across web applications, APIs, cloud infrastructure, enterprise systems, and internal networks.",

        skills: [
          "Web Application Pentesting",
          "API Security Testing",
          "OWASP Top 10",
          "Burp Suite Professional",
          "Nmap & Enumeration",
          "Metasploit Framework",
          "Linux & Kali Linux",
          "Vulnerability Assessment",
          "Network Security",
          "Report Writing",
          "Active Directory Basics",
          "Recon & OSINT",
        ],
      },

      {
        id: 2,

        icon: <Code2 size={46} />,

        title: "Full Stack Developer",

        desc:
          "Build scalable secure applications, enterprise dashboards, APIs, and cybersecurity platforms using modern frameworks and secure engineering practices.",

        skills: [
          "React.js",
          "Next.js",
          "Django & DRF",
          "FastAPI",
          "Node.js",
          "REST APIs",
          "Tailwind CSS",
          "Bootstrap",
          "Authentication Systems",
          "Secure Coding Practices",
          "Git & GitHub",
          "CI/CD Pipelines",
          "Docker Basics",
          "Cloud Deployment",
        ],
      },

      {
        id: 3,

        icon: <Cpu size={46} />,

        title: "Cybersecurity Instructor",

        desc:
          "Train students and enterprise teams in ethical hacking, penetration testing, cybersecurity operations, and secure engineering fundamentals.",

        skills: [
          "Ethical Hacking",
          "Practical Pentesting",
          "Strong Communication",
          "Cybersecurity Fundamentals",
          "Linux & Networking",
          "Lab Environment Setup",
          "CTF Creation",
          "Presentation Skills",
          "Security Awareness",
          "Cloud Security Basics",
          "Threat Intelligence",
          "Documentation",
        ],
      },

      {
        id: 4,

        icon: <MonitorCog size={46} />,

        title: "SOC Analyst",

        desc:
          "Monitor security alerts, investigate suspicious activities, analyze incidents, and support defensive cybersecurity operations.",

        skills: [
          "SIEM Monitoring",
          "Incident Response",
          "Threat Hunting",
          "Network Security",
          "Log Analysis",
          "Cyber Threat Intelligence",
          "Security Operations",
          "IDS/IPS",
          "Windows & Linux Logs",
          "MITRE ATT&CK",
          "SOC Workflows",
          "Malware Basics",
        ],
      },

    ];

    return (
      <section
        id="career"
        className="container-fluid py-5 position-relative overflow-hidden"
        style={{
          color: "#fff",
          fontFamily: "'Camomile', sans-serif",
        }}
      >

        {/* HACKER OVERLAY */}
        {this.state.loading && (

          <div className="hacker-overlay">

            <div className="hacker-box">

              {this.state.status === "sending" && (
                <>
                  <LoaderCircle
                    className="spin-icon mb-3"
                    size={42}
                  />

                  <h2 className="hacker-text flicker">
                    SENDING APPLICATION...
                  </h2>
                </>
              )}

              {this.state.status === "sent" && (
                <h2 className="hacker-text success flicker">
                  APPLICATION SENT
                </h2>
              )}

            </div>

          </div>
        )}

        {/* APPLY MODAL */}
        {this.state.showModal && (

          <div className="career-modal-overlay">

            <div className="career-modal">

              <h3 className="mb-4 text-center modal-title">
                Apply For {this.state.selectedJob}
              </h3>

              <form onSubmit={(e) => this.submitApplication(e)}>

                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="career-input"
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="career-input"
                  required
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="career-input"
                  required
                />
                <label htmlFor="Resume">Upload Resume (PDF)</label>
                <input
                  type="file"
                  name="resume"
                  className="career-input"
                  required
                  accept=".pdf"
                   placeholder="Upload Resume (PDF)"

                />

                <div className="d-flex gap-3 mt-4">

                  <button
                    type="submit"
                    className="career-btn"
                  >
                    <Send size={18} />
                    Submit
                  </button>

                  <button
                    type="button"
                    className="career-btn cancel-btn"
                    onClick={() => this.closeModal()}
                  >
                    Cancel
                  </button>

                </div>

              </form>

            </div>

          </div>
        )}

        {/* STYLES */}
        <style>{`

          @import url('https://fonts.cdnfonts.com/css/camomile');

          .career-heading {

            font-size: 3rem;

            font-weight: 700;

            letter-spacing: 2px;

            color: #fff;

            text-shadow: 0 0 18px rgba(0,255,120,0.18);
          }

          .career-subtext {

            max-width: 780px;

            margin: auto;

            color: rgba(255,255,255,0.92);

            line-height: 1.9;

            font-size: 1.02rem;
          }

          .career-card {

            position: relative;

            padding: 32px;

            border-radius: 24px;

            background: rgba(255,255,255,0.03);

            border: 1px solid rgba(0,255,120,0.14);

            backdrop-filter: blur(18px);

            transition: 0.45s ease;

            box-shadow:
              0 0 25px rgba(0,255,120,0.05),
              inset 0 0 18px rgba(255,255,255,0.02);

            margin-bottom: 20px;
          }

          .career-card:hover {

            transform: translateY(-6px);

            border-color: rgba(0,255,120,0.5);

            box-shadow:
              0 0 35px rgba(0,255,120,0.18),
              0 0 60px rgba(0,255,120,0.08);
          }

          .career-icon {

            width: 85px;
            height: 85px;

            display: flex;
            align-items: center;
            justify-content: center;

            border-radius: 50%;

            color: #00ff88;

            background: rgba(0,255,120,0.08);

            border: 1px solid rgba(0,255,120,0.16);

            margin-bottom: 22px;
          }

          .career-title {

            font-size: 1.5rem;

            font-weight: 700;

            transition: 0.3s ease;
          }

          .career-card:hover .career-title {
            color: #00ff88;
          }

          .career-desc {

            color: rgba(255,255,255,0.92);

            line-height: 1.9;

            margin-top: 18px;
          }

          .skill-badge {

            padding: 10px 16px;

            border-radius: 40px;

            background: rgba(0,255,120,0.08);

            border: 1px solid rgba(0,255,120,0.14);

            color: #fff;

            font-size: 0.92rem;
          }

          .career-btn {

            border: none;

            padding: 12px 24px;

            border-radius: 40px;

            background: linear-gradient(
              90deg,
              #00ff88,
              #00cc66
            );

            color: #000;

            font-weight: 700;

            display: inline-flex;

            align-items: center;

            gap: 10px;

            transition: 0.3s ease;
          }

          .career-btn:hover {

            transform: translateY(-3px);

            box-shadow: 0 0 20px rgba(0,255,120,0.4);
          }

          .career-modal-overlay {

            position: fixed;

            inset: 0;

            background: rgba(0,0,0,0.7);

            backdrop-filter: blur(12px);

            z-index: 9999;

            display: flex;

            align-items: center;

            justify-content: center;
          }

          .career-modal {

            width: 95%;
            max-width: 500px;

            padding: 35px;

            border-radius: 24px;

            background: rgba(0,0,0,0.9);

            border: 1px solid rgba(0,255,120,0.25);

            box-shadow: 0 0 35px rgba(0,255,120,0.18);
          }

          .career-input {

            width: 100%;

            margin-bottom: 18px;

            padding: 14px;

            border-radius: 12px;

            border: 1px solid rgba(0,255,120,0.2);

            background: rgba(255,255,255,0.04);

            color: #fff;
          }

          .career-input:focus {

            outline: none;

            box-shadow: 0 0 15px rgba(0,255,120,0.35);
          }

          .modal-title {
            color: #00ff88;
          }

          .cancel-btn {
            background: #111;
            color: #fff;
            border: 1px solid rgba(255,255,255,0.1);
          }

          .hacker-overlay {

            position: fixed;

            inset: 0;

            background: rgba(0,0,0,0.75);

            backdrop-filter: blur(10px);

            display: flex;

            align-items: center;

            justify-content: center;

            z-index: 99999;
          }

          .hacker-box {

            padding: 40px;

            border-radius: 24px;

            background: rgba(0,0,0,0.9);

            border: 1px solid rgba(0,255,120,0.25);

            box-shadow: 0 0 40px rgba(0,255,120,0.2);

            text-align: center;
          }

          .hacker-text {

            color: #00ff88;

            font-size: 24px;

            font-weight: 700;

            letter-spacing: 3px;

            text-shadow: 0 0 12px #00ff88;
          }

          .spin-icon {

            color: #00ff88;

            animation: spin 1s linear infinite;
          }

          .flicker {
            animation: flicker 1.4s infinite alternate;
          }

          @keyframes spin {

            from {
              transform: rotate(0deg);
            }

            to {
              transform: rotate(360deg);
            }
          }

          @keyframes flicker {

            0% { opacity: 1; }
            50% { opacity: 0.6; }
            100% { opacity: 1; }
          }

        `}</style>

        {/* HEADING */}
        <div className="text-center mb-5">

          <h2
            className="career-heading"
            data-aos="zoom-in"
          >
            Join KaalCyberSec
          </h2>

          <p
            className="career-subtext mt-4"
            data-aos="fade-up"
          >
            Build secure systems, work on real-world cybersecurity
            engagements, and grow with a modern security-focused
            engineering team.
          </p>

        </div>

        {/* JOBS */}
        <div className="row px-lg-5 px-3">

          <div className="col-lg-10 mx-auto">

            {jobs.map((job, index) => (

              <div
                className="career-card"
                key={job.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >

                <div
                  className="d-flex justify-content-between align-items-center"
                  onClick={() => this.toggleJob(job.id)}
                  style={{ cursor: "pointer" }}
                >

                  <div>

                    <div className="career-icon">
                      {job.icon}
                    </div>

                    <h4 className="career-title">
                      {job.title}
                    </h4>

                  </div>

                  <ChevronDown
                    size={26}
                    style={{
                      transform:
                        this.state.openJob === job.id
                          ? "rotate(180deg)"
                          : "rotate(0deg)",

                      transition: "0.3s",
                    }}
                  />

                </div>

                {this.state.openJob === job.id && (

                  <div className="mt-4">

                    <p className="career-desc">
                      {job.desc}
                    </p>

                    <div className="d-flex flex-wrap gap-3 mt-4">

                      {job.skills.map((skill, i) => (

                        <div
                          className="skill-badge"
                          key={i}
                        >
                          {skill}
                        </div>

                      ))}

                    </div>

                    <button
                      className="career-btn mt-4"
                      onClick={() =>
                        this.openApplyModal(job.title)
                      }
                    >
                      Apply Now
                    </button>

                  </div>
                )}

              </div>
            ))}

          </div>

        </div>

      </section>
    );
  }
}