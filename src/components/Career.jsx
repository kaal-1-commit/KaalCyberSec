import React, { Component } from "react";
import { Briefcase, ChevronDown } from "lucide-react";

export default class Career extends Component {
  constructor() {
    super();
    this.state = {
      openJob: null,
    };
  }

  toggleJob(id) {
    this.setState({ openJob: this.state.openJob === id ? null : id });
  }

  render() {
    const jobs = [
      {
        id: 1,
        title: "Junior Penetration Tester",
        desc: "Work with our red-team to perform VAPT on web applications, APIs, mobile apps, and internal networks.",
        skills: [
          "Web + API Pentesting",
          "Burp Suite / Nmap / Metasploit",
          "OWASP Top 10",
          "Report writing",
        ],
      },
      {
        id: 2,
        title: "Full Stack Developer (React + Django)",
        desc: "Develop secure and scalable applications for clients and internal cybersecurity tools.",
        skills: [
          "React / Bootstrap / Tailwind",
          "Django / DRF / FastAPI",
          "Secure Coding Practices",
          "Git / CI-CD",
        ],
      },
      {
        id: 3,
        title: "Cybersecurity Instructor",
        desc: "Teach ethical hacking, pentesting, and security fundamentals to students and corporate teams.",
        skills: [
          "Strong Pentesting Knowledge",
          "Good Communication Skills",
          "Practical Labs Creation",
        ],
      },
      {
        id: 4,
        title: "SOC Analyst (Fresher / Intern)",
        desc: "Monitor alerts, investigate suspicious activities, and escalate incidents.",
        skills: [
          "SIEM Tools Knowledge",
          "Network Security Basics",
          "Incident Response",
        ],
      },
    ];

    return (
      <section
        id="career"
        className="container py-5"
        style={{
          background: "#000",
          color: "#fff",
          fontFamily: "'Camomile', sans-serif",
        }}
      >
        {/* Styles */}
        <style>{`
          @import url('https://fonts.cdnfonts.com/css/camomile');

          .job-card {
            background: rgba(13, 255, 0, 0.07);
            border: 1px solid rgba(0, 255, 136, 0.3);
            border-radius: 8px;
            padding: 18px;
            margin-bottom: 15px;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .job-card:hover {
            transform: scale(1.02);
            box-shadow: 0 0 15px rgba(0, 255, 136, 0.7);
          }

          .job-details {
            margin-top: 12px;
            padding-left: 15px;
            border-left: 3px solid #0f0;
            animation: fadeIn 0.4s ease;
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .apply-btn {
            background: linear-gradient(90deg, #0ff, #0f0);
            border: none;
            padding: 10px 20px;
            border-radius: 6px;
            font-weight: bold;
            transition: 0.3s ease;
            color: #000;
          }

          .apply-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 0 20px #0f0;
          }
        `}</style>

        <h2
          className="text-center fw-bold mb-4 border-bottom border-success pb-3"
          data-aos="fade-down"
        >
          <Briefcase size={32} className="me-2 text-info" />
          Join Our Team
        </h2>

        <p className="text-center text-secondary mb-5" data-aos="fade-up">
          We are always looking for passionate developers, penetration testers,
          and cybersecurity professionals.  
          <br />
          If your skills match any role, apply now.
        </p>

        <div className="col-lg-10 mx-auto">
          {jobs.map((job) => (
            <div
              className="job-card"
              key={job.id}
              data-aos="fade-up"
              onClick={() => this.toggleJob(job.id)}
            >
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="mb-0">{job.title}</h5>
                <ChevronDown
                  size={20}
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
                <div className="job-details">
                  <p className="mt-3">{job.desc}</p>

                  <h6 className="text-success">Required Skills:</h6>
                  <ul>
                    {job.skills.map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ul>

                  <a
                    href={`mailto:kaalcybersec@gmail.com?subject=Application for ${job.title}`}
                  >
                    <button className="apply-btn mt-3">Apply Now</button>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    );
  }
}
