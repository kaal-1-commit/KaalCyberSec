import React, { useState, useEffect } from "react";
// Assuming you have your seal image here
import seal from "../assests/seal.png";

import { 
  FileBadge, LockKeyhole, LoaderCircle, ShieldCheck, UserRound, Briefcase, CalendarDays, KeyRound,  RotateCcw,  Search, FileText, ChevronLeft, ChevronRight, Plus
} from "lucide-react";

export default function CertificateGenerator() {
  // Views: "trigger" | "auth" | "dashboard" | "form" | "generating" | "preview"
  const [view, setView] = useState("trigger");
  
  const [authError, setAuthError] = useState(false);
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  
  // Dashboard & Data States
  const [allCerts, setAllCerts] = useState([]);
  const [filteredCerts, setFilteredCerts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isFetchingData, setIsFetchingData] = useState(false);
  
  // Pagination States
  const [currentPage, setCurrentPage] = useState(1);
  const certsPerPage = 10;
  
  const [certData, setCertData] = useState({
    studentName: "", domain: "Penetration Testing & Red Teaming", duration: "3", 
  });
  
  const [selectedCert, setSelectedCert] = useState(null);

  // HARDCODED CREDENTIALS
  const ADMIN_USER = "admin";
  const ADMIN_PASS = "KaalCyber2026!";
  const API_URL = "https://script.google.com/macros/s/AKfycbwIFmdJVX95DLRuiEV1KIMogNisctoKPW4WQqWzlSnzzBizSS2re4rYzwNchs5ZJbnjHQ/exec";

  // --- 1. AUTHENTICATION ---
  const handleAuthSubmit = (e) => {
    e.preventDefault();
    setView("generating"); // Show scanner
    setAuthError(false);

    setTimeout(() => {
      if (credentials.username === ADMIN_USER && credentials.password === ADMIN_PASS) {
        setCredentials({ username: "", password: "" });
        fetchAllCertificates(); // Fetch data upon login
      } else {
        setView("auth");
        setAuthError(true);
      }
    }, 1200);
  };

  // --- 2. FETCH ALL CERTIFICATES ---
  const fetchAllCertificates = async () => {
    setIsFetchingData(true);
    setView("dashboard"); // Switch to dashboard but show loading overlay

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ action: "get_all_certificates" })
      });
      const data = await res.json();
      
      if (data.result === "success") {
        setAllCerts(data.data);
        setFilteredCerts(data.data);
      }
    } catch (err) {
      console.log("Error fetching data:", err);
      alert("Failed to load database records.");
    } finally {
      setIsFetchingData(false);
    }
  };

  // --- 3. SEARCH & FILTER LOGIC ---
  useEffect(() => {
    const results = allCerts.filter(cert => 
      cert.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.certificateId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.domain.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredCerts(results);
    setCurrentPage(1); // Reset to page 1 on new search
  }, [searchQuery, allCerts]);

  // --- 4. PAGINATION LOGIC ---
  const indexOfLastCert = currentPage * certsPerPage;
  const indexOfFirstCert = indexOfLastCert - certsPerPage;
  const currentCerts = filteredCerts.slice(indexOfFirstCert, indexOfLastCert);
  const totalPages = Math.ceil(filteredCerts.length / certsPerPage);

  // --- 5. GENERATE NEW CERTIFICATE ---
  const generateVerificationNumber = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = 'KCS-';
    for (let i = 0; i < 8; i++) { result += chars.charAt(Math.floor(Math.random() * chars.length)); }
    return result;
  };

  const handleCertSubmit = async (e) => {
    e.preventDefault();
    setView("generating");

    const newCertId = generateVerificationNumber();
    const currentDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });

    const payload = {
      action: "generate_certificate",
      certificateId: newCertId,
      studentName: certData.studentName,
      domain: certData.domain,
      duration: certData.duration + " Months", 
      dateGenerated: currentDate,
    };

    try {
      await fetch(API_URL, {
        method: "POST", mode: "no-cors", headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      setSelectedCert(payload);
      // Add new cert to the top of our local state so we don't have to refetch immediately
      setAllCerts([payload, ...allCerts]); 
      
      setTimeout(() => {
        setView("preview");
        setCertData({ studentName: "", domain: "Penetration Testing & Red Teaming", duration: "3" });
      }, 1500);

    } catch (error) {
      alert("Failed to sync to database. Please check connection.");
      setView("form");
    }
  };



  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600;700&family=Orbitron:wght@400;700;900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Ballet:opsz@16..72&display=swap');
        body { background: #000; color: #fff; overflow-x: hidden; }

        /* --- DASHBOARD STYLES --- */
        .dashboard-container {
          padding: 40px 20px;
          min-height: 80vh;
          max-width: 1400px;
          margin: 0 auto;
            margin-top:5%
        }

        .cyber-card {
      
          background: rgba(5, 12, 8, 0.7);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(0, 255, 120, 0.2);
          border-radius: 15px;
          padding: 25px;
          box-shadow: 0 0 30px rgba(0, 255, 120, 0.05);
        }

        .cyber-table {
          width: 100%;
          color: #fff;
          border-collapse: separate;
          border-spacing: 0 10px;
        }

        .cyber-table th {
          color: rgba(255, 255, 255, 0.5);
          text-transform: uppercase;
          letter-spacing: 1px;
          padding: 15px;
          font-weight: 600;
          font-size: 0.85rem;
          border-bottom: 1px solid rgba(0, 255, 120, 0.2);
        }

        .cyber-table td {
          background: rgba(0, 0, 0, 0.4);
          padding: 15px;
          vertical-align: middle;
        }

        .cyber-table tr td:first-child { border-top-left-radius: 10px; border-bottom-left-radius: 10px; border-left: 1px solid rgba(0,255,120,0.1); }
        .cyber-table tr td:last-child { border-top-right-radius: 10px; border-bottom-right-radius: 10px; border-right: 1px solid rgba(0,255,120,0.1); }
        .cyber-table tr td { border-top: 1px solid rgba(0,255,120,0.1); border-bottom: 1px solid rgba(0,255,120,0.1); }
        
        .cyber-table tr:hover td { background: rgba(0, 255, 120, 0.05); border-color: rgba(0, 255, 120, 0.3); }

        .pagination-btn {
          background: rgba(0, 255, 120, 0.1);
          border: 1px solid rgba(0, 255, 120, 0.3);
          color: #00ff88;
          padding: 8px 15px;
          border-radius: 8px;
          transition: 0.3s;
        }
        .pagination-btn:hover:not(:disabled) { background: #00ff88; color: #000; }
        .pagination-btn:disabled { opacity: 0.3; cursor: not-allowed; }

        .view-btn {
          background: transparent; border: 1px solid #00ff88; color: #00ff88;
          padding: 6px 12px; border-radius: 5px; font-size: 0.8rem; font-weight: bold;
          text-transform: uppercase; transition: 0.3s;
        }
        .view-btn:hover { background: #00ff88; color: #000; box-shadow: 0 0 15px rgba(0,255,120,0.4); }

        /* --- MODAL & FORM STYLES --- */
        .admin-trigger-card { background: rgba(5, 12, 8, 0.6); backdrop-filter: blur(5px); border: 1px solid rgba(0,255,120,0.15); border-radius: 20px; padding: 40px; text-align: center; transition: 0.4s ease; cursor: pointer; margin-top:15%; margin-bottom:15%; }
        .admin-trigger-card:hover { border-color: #00ff88; box-shadow: 0 0 30px rgba(0,255,120,0.15); transform: translateY(-5px); }

        .cyber-modal-overlay { position: fixed; inset: 0; background: rgba(0, 0, 0, 0.85); backdrop-filter: blur(15px); display: flex; align-items: center; justify-content: center; z-index: 9999; padding: 20px; }
        .cyber-modal { background: #050806; border: 1px solid rgba(0, 255, 120, 0.3); padding: 40px; border-radius: 20px; width: 100%; max-width: 500px; box-shadow: 0 0 50px rgba(0, 255, 120, 0.1); position: relative; }
        .cyber-modal.large { max-width: 95vw !important; width: 100%; padding: 30px; max-height: 95vh; overflow-y: auto; }

        .cyber-input { background: rgba(0, 0, 0, 0.6) !important; border: 1px solid rgba(0, 255, 120, 0.25) !important; color: #00ff88 !important; padding: 14px 14px 14px 45px !important; border-radius: 8px !important; }
        .cyber-input.search-bar { padding-left: 50px !important; border-radius: 50px !important; font-size: 1.1rem; color: #00ff88 }
        .cyber-input:focus { box-shadow: 0 0 15px rgba(0, 255, 120, 0.2) !important; border-color: #00ff88 !important; outline: none; }
        .input-icon { position: absolute; left: 15px; top: 50%; transform: translateY(-50%); color: rgba(0, 255, 120, 0.5); }

        .futuristic-btn { background: linear-gradient(90deg, #00ff88, #00cc66); border: none; padding: 14px; color: #000; font-weight: 800; border-radius: 8px; width: 100%; transition: 0.3s ease; text-transform: uppercase; letter-spacing: 1px; }
        .futuristic-btn.rounded-pill { border-radius: 50px !important; }
        .futuristic-btn:hover { box-shadow: 0 0 25px rgba(0, 255, 120, 0.4); transform: translateY(-2px); }

        .outline-btn { background: transparent; border: 1px solid #00ff88; color: #00ff88; padding: 14px; font-weight: 800; border-radius: 8px; width: 100%; transition: 0.3s ease; text-transform: uppercase; letter-spacing: 1px; }
        .outline-btn:hover { background: rgba(0,255,120,0.1); }

        .close-btn { position: absolute; top: 15px; right: 20px; background: transparent; border: none; color: rgba(255,255,255,0.5); font-size: 1.5rem; cursor: pointer; transition: 0.3s; z-index: 10; }
        .close-btn:hover { color: #ff3333; }

        .spin-icon { color: #00ff88; animation: spin 1s linear infinite; }
        .flicker { animation: flicker 1.5s infinite alternate; }

        @keyframes spin { 100% { transform: rotate(360deg); } }
        @keyframes flicker { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }

        /* =========================================
           PURE CSS CYBERPUNK CERTIFICATE (Matches Verify.jsx)
           ========================================= */
        .cert-pure-css {
          position: relative; width: 100%; aspect-ratio: 1.414 / 1;
          background-color: #030604;
          background-image: 
            linear-gradient(rgba(0, 255, 120, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 120, 0.05) 1px, transparent 1px);
          background-size: 25px 25px;
          font-family: 'Orbitron', sans-serif; color: #fff;
          padding: 3% 4%; 
          border: 1px solid rgba(0, 255, 120, 0.3); box-shadow: inset 0 0 50px rgba(0, 255, 119, 0.58);
          clip-path: polygon(40px 0, 100% 0, 100% calc(100% - 40px), calc(100% - 40px) 100%, 0 100%, 0 40px);
        }

        .cert-corner-tl { position: absolute; top: 15px; left: 15px; width: 60px; height: 60px; border-top: 3px solid #00ff88; border-left: 3px solid #00ff88; }
        .cert-corner-br { position: absolute; bottom: 15px; right: 15px; width: 60px; height: 60px; border-bottom: 3px solid #00ff88; border-right: 3px solid #00ff88; }
        
        .cert-watermark-container { 
          position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); 
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          opacity: 0.36; pointer-events: none; z-index: 0;
        }
        
        /* Scaled down watermark for screen preview */
        .cert-watermark-icon { width: 18vw; height: 18vw; color: #00ff88; }
        .cert-watermark-text { font-size: 2.5vw; font-weight: 900; color: #00ff88; letter-spacing: 12px; margin-top: 15px; }

        /* TEXT WRAPPER TO STAY ABOVE WATERMARK */
        .cert-content-wrapper {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
          padding: 1% 0;
        }

        /* Scaled down typography for the screen preview */
        .cert-header { text-align: center; margin-top: 1%; }
        .cert-header h1 { font-size: 2.8vw; font-weight: 900; color: #00ff88; text-transform: uppercase; letter-spacing: 6px; margin: 0; text-shadow: 0 0 20px rgba(0, 255, 120, 0.4); }
        .cert-header p { font-size: 0.85vw; color: rgb(255, 255, 255); letter-spacing: 3px; margin-top: 8px; text-transform: uppercase; }

        .cert-name-section { text-align: center; }
        .cert-name-section h2 { font-size: 3.2vw; font-weight: 700; color: #fff; text-transform: uppercase; margin: 0; padding: 5px 30px; display: inline-block; border-bottom: 2px solid rgba(0, 255, 120, 0.5); text-shadow: 0 0 10px rgba(255, 255, 255, 0.2); }

        .cert-body { text-align: center; font-size: 0.95vw; line-height: 1.7; color: rgb(255, 255, 255); padding: 0 8%; text-transform: uppercase; letter-spacing: 1px; }
        .cert-highlight { color: #00ff88; font-weight: 700; }

        .cert-footer { display: flex; justify-content: space-between; align-items: flex-end; padding: 0 2%; margin-bottom: 0.1%; }
        .cert-meta { text-align: left; font-family: monospace; font-size: 0.75vw; color: #00ff88 ; font-weight: 700 ;line-height: 1.6; }

        .cert-signature { text-align: center; color: #00ff88 ; font-weight: 500 
          font-family: "Ballet", cursive;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
        }
        .sig-line { width: 12vw; height: 1px; background: #00ff88; margin-bottom: 4px; }
        /* NEW SIGNATURE FONT CLASS */
        .sig-name {
          font-family: "Ballet", cursive;
          font-size: 1.5vw;
          color: #00ff88;
     
          text-shadow: 0 0 10px rgba(0, 255, 120, 0.3);
          letter-spacing: 2px;
        
        }
        .sig-title { font-size: 0.75vw; color: #00ff88 ;}
        /* PRINT STYLES */
        @media print {
          @page { size: A4 landscape; margin: 0 !important; }
          body, html { margin: 0 !important; padding: 0 !important; background-color: #030604 !important; height: 100% !important; overflow: hidden !important; }
          body * { visibility: hidden; }
          .cyber-modal.large, .cyber-modal.large * { visibility: visible; }
          .cyber-modal.large { position: absolute; left: 0; top: 0; width: 100%; height: 100%; margin: 0; padding: 0; display: flex; align-items: center; justify-content: center; background-color: #030604 !important; }
          
          .cert-pure-css { width: 297mm !important; height: 209mm !important; max-width: none !important; border: none; margin: 0; box-shadow: none; -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; background-color: #030604 !important; padding: 12mm 15mm !important; border-radius: 0; aspect-ratio: auto; }
          .cert-header h1 { font-size: 34pt !important; margin-top: 5px !important;}
          .cert-header p { font-size: 11pt !important; margin-top: 5px !important;}
          .cert-name-section h2 { font-size: 42pt !important; margin: 15px 0 !important; padding-bottom: 5px !important; }
          .cert-body { font-size: 12.5pt !important; padding: 0 6% !important; line-height: 1.6 !important; }
          .sig-name { font-size: 32pt !important; color: #000 !important; text-shadow: none !important; }
          .sig-title, .cert-meta { font-size: 9pt !important; }
          .sig-line { width: 220px !important; margin-bottom: 5px !important; }
          .cert-watermark-icon { width: 300px !important; height: 300px !important; }
          .cert-watermark-text { font-size: 40pt !important; margin-top: 10px !important; }
          .no-print { display: none !important; }
        }
      `}</style>

      {/* --- 1. TRIGGER VIEW --- */}
      {view === "trigger" && (
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6">
              <div className="admin-trigger-card" onClick={() => setView("auth")}>
                <FileBadge size={50} color="#00ff88" className="mb-3" />
                <h3 style={{ color: "#fff", fontWeight: "700" }}>Admin Dashboard Gateway</h3>
                <p style={{ color: "rgba(255,255,255,0.6)" }}>Access the centralized portal to generate, view, and manage official internship credentials.</p>
                <div className="text-success small mt-3" style={{ letterSpacing: "1px" }}>
                  <LockKeyhole size={14} className="me-1 inline" /> SECURE PORTAL
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- 2. MAIN DASHBOARD VIEW --- */}
      {view === "dashboard" && (
        <div className="dashboard-container" data-aos="fade-in">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 style={{ fontWeight: "800", color: "#fff", margin: 0 }}>
              <ShieldCheck color="#00ff88" size={32} className="me-2 mb-1 inline" /> 
              Admin Dashboard
            </h2>
          </div>

          {/* TOP ROW: Search (8 col) & Generate (4 col) */}
          <div className="row mb-4 g-3 align-items-center">
            <div className="col-md-8">
              <div className="position-relative">
                <Search size={20} className="input-icon" style={{ left: "20px" }} />
                <input 
                  type="text" 
                  className="form-control cyber-input search-bar" 
                  placeholder="Search by Name, ID, or Domain..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-4">
              <button 
                className="futuristic-btn rounded-pill d-flex justify-content-center align-items-center"
                onClick={() => setView("form")}
                style={{ padding: "18px" }}
              >
                <Plus size={20} className="me-2" /> Generate Certificate
              </button>
            </div>
          </div>

          {/* DATA TABLE */}
          <div className="cyber-card">
            <div className="table-responsive">
              <table className="cyber-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>ID Number</th>
                    <th>Student Name</th>
                    <th>Domain</th>
                    <th>Duration</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {currentCerts.length > 0 ? (
                    currentCerts.map((cert, index) => (
                      <tr key={index}>
                        <td style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem" }}>{cert.dateGenerated}</td>
                        <td style={{ color: "#00ff88", fontFamily: "monospace", letterSpacing: "1px" }}>{cert.certificateId}</td>
                        <td style={{ fontWeight: "bold" }}>{cert.studentName}</td>
                        <td>{cert.domain}</td>
                        <td>{cert.duration}</td>
                        <td className="text-center">
                          <button 
                            className="view-btn d-inline-flex align-items-center"
                            onClick={() => { setSelectedCert(cert); setView("preview"); }}
                          >
                            <FileText size={14} className="me-2" /> View PDF
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="text-center py-5" style={{ color: "rgba(255,255,255,0.5)" }}>
                        No records found matching your search.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* PAGINATION CONTROLS */}
            {totalPages > 1 && (
              <div className="d-flex justify-content-between align-items-center mt-4 pt-3 border-top" style={{ borderColor: "rgba(0,255,120,0.1) !important" }}>
                <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9rem" }}>
                  Showing {indexOfFirstCert + 1} to {Math.min(indexOfLastCert, filteredCerts.length)} of {filteredCerts.length} Entries
                </div>
                <div className="d-flex gap-2">
                  <button 
                    className="pagination-btn d-flex align-items-center" 
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(currentPage - 1)}
                  >
                    <ChevronLeft size={16} className="me-1" /> Prev
                  </button>
                  <button 
                    className="pagination-btn d-flex align-items-center" 
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(currentPage + 1)}
                  >
                    Next <ChevronRight size={16} className="ms-1" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* --- MODAL OVERLAYS (Auth, Form, Spinner, Preview) --- */}
      {view !== "trigger" && view !== "dashboard" && (
        <div className="cyber-modal-overlay">
          
          {/* AUTH VIEW */}
          {view === "auth" && (
            <div className="cyber-modal">
              <button className="close-btn" onClick={() => setView("trigger")}>&times;</button>
              <div className="text-center mb-4">
                <LockKeyhole size={40} color="#00ff88" className="mb-2" />
                <h4 style={{ color: "#fff", fontWeight: "700" }}>Admin Authentication</h4>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9rem" }}>Please verify your credentials to proceed.</p>
              </div>
              <form onSubmit={handleAuthSubmit}>
                <div className="input-icon-wrapper">
                  <UserRound size={18} className="input-icon" />
                  <input type="text" className="form-control cyber-input" placeholder="Admin Username" value={credentials.username} onChange={(e) => setCredentials({...credentials, username: e.target.value})} required />
                </div>
                <div className="input-icon-wrapper">
                  <KeyRound size={18} className="input-icon" />
                  <input type="password" className="form-control cyber-input" placeholder="Secure Password" value={credentials.password} onChange={(e) => setCredentials({...credentials, password: e.target.value})} required />
                </div>
                {authError && <div className="text-danger text-center small mb-3">Invalid credentials. Access denied.</div>}
                <button type="submit" className="futuristic-btn">Verify Access</button>
              </form>
            </div>
          )}

          {/* GENERATE FORM VIEW */}
          {view === "form" && (
            <div className="cyber-modal">
              <button className="close-btn" onClick={() => setView("dashboard")}>&times;</button>
              <div className="text-center mb-4">
                <FileBadge size={40} color="#00ff88" className="mb-2" />
                <h4 style={{ color: "#fff", fontWeight: "700" }}>Generate Certificate</h4>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9rem" }}>Enter internship details to issue secure credentials.</p>
              </div>
              <form onSubmit={handleCertSubmit}>
                <div className="input-icon-wrapper">
                  <UserRound size={18} className="input-icon" />
                  <input type="text" className="form-control cyber-input" placeholder="Student Full Name" value={certData.studentName} onChange={(e) => setCertData({...certData, studentName: e.target.value})} required />
                </div>
                <div className="input-icon-wrapper">
                  <Briefcase size={18} className="input-icon" />
                  <select className="form-control cyber-input" style={{ appearance: "none" }} value={certData.domain} onChange={(e) => setCertData({...certData, domain: e.target.value})}>
                    <option value="Penetration Testing & Red Teaming">Penetration Testing & Red Teaming</option>
                    <option value="Secure Web Development">Secure Web Development</option>
                    <option value="Digital Forensics">Digital Forensics</option>
                    <option value="Cloud Security">Cloud Security</option>
                    <option value="Data Entry">Data Entry</option>
                    <option value="SOC Analysis">SOC Analysis</option>
                    <option value="Full Stack Development">Full Stack Development</option>
                    <option value="Human Resource">Human Resource</option>
                    <option value="Frontend Development">Frontend Development</option>
                    <option value="Backend Development">Backend Development</option>
                    <option value="Ethical Hacking">Ethical Hacking</option>
                    <option value="Python Development">Python Development</option>
                    <option value="Algo Software">Algo Software</option>
                  </select>
                </div>
                <div className="input-icon-wrapper">
                  <CalendarDays size={18} className="input-icon" />
                  <select className="form-control cyber-input" style={{ appearance: "none" }} value={certData.duration} onChange={(e) => setCertData({...certData, duration: e.target.value})}>
                    <option value="1">1 Month</option>
                    <option value="3">3 Months</option>
                    <option value="6">6 Months</option>
                  </select>
                </div>
                <button type="submit" className="futuristic-btn">Generate & Sync to Database</button>
              </form>
            </div>
          )}

          {/* SCANNING / FETCHING SPINNER VIEW */}
          {(view === "generating" || isFetchingData) && (
            <div className="text-center">
              <LoaderCircle className="spin-icon mx-auto d-block mb-3" size={60} />
              <h3 className="flicker" style={{ color: "#00ff88", letterSpacing: "3px" }}>QUERYING DATABASE...</h3>
              <p style={{ color: "rgba(255,255,255,0.5)" }}>Authenticating and syncing with encrypted network.</p>
            </div>
          )}

          {/* PURE CSS CERTIFICATE PREVIEW */}
          {view === "preview" && selectedCert && (
            <div className="cyber-modal large no-print">
              <div className="d-flex justify-content-between align-items-center mb-4 no-print">
                <h4 style={{ color: "#fff", margin: 0 }}><ShieldCheck color="#00ff88" className="inline me-2 mb-1"/> Document Viewer</h4>
                <button className="close-btn" style={{ position: 'relative', top: 0, right: 0 }} onClick={() => setView("dashboard")}>&times;</button>
              </div>

              {/* --- THE PURE CSS CERTIFICATE --- */}
              <div className="cert-pure-css">
                <div className="cert-corner-tl"></div>
                <div className="cert-corner-br"></div>
                
                {/* MASSIVE WATERMARK */}
                <div className="cert-watermark-container">
                  <ShieldCheck className="cert-watermark-icon" />
                  <div className="cert-watermark-text">KAALCYBERSEC</div>
                </div>

                <div className="cert-content-wrapper">
                  <div className="cert-header">
                    <h1>Certificate of Completion</h1>
                    <p>This credential is proudly presented to</p>
                  </div>

                  <div className="cert-name-section">
                    <h2>{selectedCert.studentName}</h2>
                  </div>

                  <div className="cert-body">
                    For the successful completion of the <span className="cert-highlight">{selectedCert.duration}</span> internship program 
                    in the operational domain of <br/><span className="cert-highlight">{selectedCert.domain}</span> at <br/>
                    <span style={{ color: "#fff", fontWeight: "900", letterSpacing: "2px", display: "inline-block", margin: "10px 0" }}>KAALCYBERSEC</span><br/>
                    The intern demonstrated exceptional technical proficiency, strategic adaptability, and a strong commitment 
                    to offensive security protocols. They actively engaged in secure engineering tasks, executed directives 
                    with precision, and maintained a disciplined operational attitude. Their capabilities reflect strong 
                    potential for future enterprise security endeavors.
                  </div>

                  <div className="cert-footer">
                    <div className="cert-meta">
                      [ ID ] {selectedCert.certificateId}<br/>
                      [ DATE ] {selectedCert.dateGenerated}<br/>
                      [ SYS ] ENCRYPTED_AND_VERIFIED
                    </div>
                    
                    {/* Seal Image */}
                    {seal && <img src={seal} height={100} width={100} alt="Official Seal" style={{ opacity: 0.8 }} />}
                    
                    <div className="cert-signature">
                      <div className="sig-name">Prince Chaudhary</div>
                      <div className="sig-line"></div>
                      <div className="sig-title">AUTHORIZED DIRECTOR</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ACTION BUTTONS */}
              <div className="row mt-4 g-3 no-print">
               
                <div className="col-md-12">
                  <button className="outline-btn d-flex justify-content-center align-items-center" onClick={() => setView("dashboard")}>
                    <RotateCcw className="me-2" size={18} /> Close Preview
                  </button>
                </div>
              </div>

            </div>
          )}

        </div>
      )}
    </>
  );
}