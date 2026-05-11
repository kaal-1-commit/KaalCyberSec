import React, { useState } from "react";
import seal from"../assests/seal.png";
import { 
  ShieldCheck, 
  Search, 
  LoaderCircle, 
  XCircle, 
  Printer,
  RotateCcw,
  BadgeCheck
} from "lucide-react";

export default function Verify() {
  const [view, setView] = useState("search"); 
  const [searchId, setSearchId] = useState("");
  const [certData, setCertData] = useState(null);

  const handleVerify = async (e) => {
    e.preventDefault();
    if (!searchId.trim()) return;

    setView("scanning");

    const payload = {
      action: "verify_certificate",
      certificateId: searchId.trim(),
    };

    try {
      const fetchUrl = "https://script.google.com/macros/s/AKfycbwIFmdJVX95DLRuiEV1KIMogNisctoKPW4WQqWzlSnzzBizSS2re4rYzwNchs5ZJbnjHQ/exec";
      
      const res = await fetch(fetchUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(payload)
      });
      
      const data = await res.json();

      setTimeout(() => {
        if (data.result === "found") {
          setCertData(data.data);
          setView("preview");
        } else {
          setView("error");
        }
      }, 1500);

    } catch (error) {
      console.log("Verification error:", error);
      alert("Network error while connecting to the verification server.");
      setView("search");
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <style>{`
@import url('https://fonts.googleapis.com/css2?family=Ballet:opsz@16..72&display=swap');

        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap');

        vl{
        font-size: 0.75vw; color: #00ff88 ;
        }
        /* =========================================
           SCREEN PREVIEW STYLES (Print styles remain untouched)

           ========================================= */
        .cyber-modal.large {
          max-width: 95vw !important; /* Expands modal to use the whole screen */
          width: 100%;
          padding: 30px;
          max-height: 95vh;
          overflow-y: auto;
        }

        .cert-container {
          width: 100%;
          max-width: 1500px; /* Allows the certificate to stretch out */
          margin: 0 auto;
        }

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

        body { background-color: #000 !important; color: #fff; }

        .verify-section {
          min-height: 100vh;
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
        }

        .cyber-glow {
          position: absolute; width: 600px; height: 600px;
          background: radial-gradient(circle, rgba(0, 255, 120, 0.05) 0%, transparent 70%);
          filter: blur(90px); top: 50%; left: 50%; transform: translate(-50%, -50%);
          z-index: -1; pointer-events: none;
        }

        .search-card {
          background: rgba(5, 12, 8, 0.75);
          backdrop-filter: blur(25px);
          border: 1px solid rgba(0, 255, 120, 0.2);
          border-radius: 20px;
          padding: 50px 40px;
          width: 100%;
          max-width: 600px;
          box-shadow: 0 0 40px rgba(0, 255, 120, 0.08), inset 0 0 20px rgba(0, 255, 120, 0.02);
          position: relative;
        }

        .search-card::before {
          content: ""; position: absolute; top: 0; left: 0; width: 100%; height: 2px;
          background: linear-gradient(90deg, transparent, #00ff88, transparent);
        }

        .cyber-input-group {
          position: relative;
          display: flex;
          align-items: center;
          margin-top: 30px;
        }

        .cyber-input {
          background: rgba(0, 0, 0, 0.6) !important;
          border: 1px solid rgba(0, 255, 120, 0.3) !important;
          color: #00ff88 !important;
          padding: 20px 20px 20px 60px !important;
          border-radius: 50px !important;
          font-size: 1.1rem;
          width: 100%;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .cyber-input:focus {
          box-shadow: 0 0 20px rgba(0, 255, 120, 0.2) !important;
          border-color: #00ff88 !important;
          outline: none;
        }

        .input-icon {
          position: absolute;
          left: 25px;
          color: rgba(0, 255, 120, 0.5);
        }

        .futuristic-btn {
          background: linear-gradient(90deg, #00ff88, #00cc66);
          border: none; padding: 18px 40px; color: #000; font-weight: 800;
          border-radius: 50px; transition: 0.3s ease;
          text-transform: uppercase; letter-spacing: 1px;
          margin-top: 25px; width: 100%; font-size: 1.1rem;
        }
        .futuristic-btn:hover { box-shadow: 0 0 30px rgba(0, 255, 120, 0.4); transform: translateY(-2px); }

       

        .status-box { text-align: center; }
        .spin-icon { color: #00ff88; animation: spin 1s linear infinite; }
        .flicker { animation: flicker 1.5s infinite alternate; }

        @keyframes spin { 100% { transform: rotate(360deg); } }
        @keyframes flicker { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }

        
       /* =========================================
           BULLETPROOF SINGLE-PAGE PRINT STYLES
           ========================================= */
        @media print {
          @page { 
            size: A4 landscape; /* Explicitly forces A4 Landscape */
            margin: 0 !important; /* Kills browser default margins */
          }
          
          body, html { 
            margin: 0 !important; 
            padding: 0 !important; 
            background-color: #030604 !important; 
            height: 100% !important;
            overflow: hidden !important; /* Instantly kills the second blank page */
          }
          
          body * { visibility: hidden; }
          .cert-container, .cert-container * { visibility: visible; }
          
          .cert-container { 
            position: absolute; 
            left: 0; 
            top: 0; 
            width: 100%; 
            height: 100%; 
            margin: 0; 
            padding: 0; 
            display: flex; 
            align-items: center; 
            justify-content: center; 
            background-color: #030604 !important; 
            page-break-after: avoid;
            page-break-inside: avoid;
          }
          
          .cert-pure-css { 
            width: 297mm !important; /* Exact physical width of A4 paper */
            height: 209mm !important; /* Exact physical height of A4 paper */
            max-width: none !important;
            border: none; 
            margin: 0; 
            box-shadow: none; 
            -webkit-print-color-adjust: exact !important; 
            print-color-adjust: exact !important; 
            background-color: #030604 !important; 
            aspect-ratio: auto; 
            border-radius: 0; 
            padding: 12mm 15mm !important; /* Physical padding so text breathes */
          }
          
          /* Font scaling hardcoded to physical paper sizes (pt) */
          .cert-header h1 { font-size: 34pt !important; margin-top: 5px !important;}
          .cert-header p { font-size: 11pt !important; margin-top: 5px !important;}
          .cert-name-section h2 { font-size: 42pt !important; margin: 15px 0 !important; padding-bottom: 5px !important; }
          .cert-body { font-size: 12.5pt !important; padding: 0 6% !important; line-height: 1.6 !important; }
          .sig-title, .cert-meta { font-size: 9pt !important; color: #00ff88 ; font-weight: 700 !important; } 
          .sig-line { width: 220px !important; margin-bottom: 5px !important; color: #00ff88 ; font-weight: 700 !important; }
          
          /* Watermark adjustments for print */
          .cert-watermark-icon { width: 300px !important; height: 300px !important; }
          .cert-watermark-text { font-size: 40pt !important; margin-top: 10px !important; }
          .cert-footer { display: flex; justify-content: space-between; align-items: flex-end; padding: 0 2%; margin-bottom: 0.1%; }
        .cert-meta { text-align: left; font-family: monospace; font-size: 0.75vw; color: #00ff88 ; font-weight: 700 ;line-height: 1.6; }
          
          .no-print { display: none !important; }
          .sig-name {  font-size: 1.9vw;
          color: #00ff88;
     
          text-shadow: 0 0 10px rgba(0, 255, 120, 0.3);
          letter-spacing: 2px; }
           
        }
      `}</style>

      <section className="verify-section" style={{ fontFamily: "'Camomile', sans-serif" }}>
        <div className="cyber-glow"></div>

        {/* --- SEARCH VIEW --- */}
        {view === "search" && (
          <div className="search-card" data-aos="zoom-in">
            <div className="text-center mb-2">
              <BadgeCheck size={60} color="#00ff88" className="mb-3" />
              <h2 style={{ fontWeight: "800", letterSpacing: "2px" ,color:"#00ff88"}}>Credential Verification</h2>
              <p style={{ color: "rgba(255,255,255,0.6)" }}>Enter a valid KaalCyberSec Certificate ID to verify authenticity.</p>
            </div>

            <form onSubmit={handleVerify}>
              <div className="cyber-input-group">
                <Search size={22} className="input-icon" />
                <input 
                  type="text" 
                  className="cyber-input" 
                  placeholder="e.g. KCS-8F3A2B9X" 
                  value={searchId}
                  onChange={(e) => setSearchId(e.target.value.toUpperCase())}
                  required
                />
              </div>
              <button type="submit" className="futuristic-btn d-flex justify-content-center align-items-center">
                Verify Credential
              </button>
            </form>
          </div>
        )}

        {/* --- SCANNING VIEW --- */}
        {view === "scanning" && (
          <div className="status-box">
            <LoaderCircle className="spin-icon mx-auto d-block mb-4" size={70} />
            <h2 className="flicker" style={{ color: "#00ff88", letterSpacing: "4px", fontWeight: "800" }}>HACKING DATABASE...</h2>
            <p style={{ color: "rgba(255, 255, 255, 0.98)", fontSize: "1.1rem" }}>Cross-referencing cryptographic records for: <span className="text-white">{searchId}</span></p>
          </div>
        )}

        {/* --- ERROR VIEW --- */}
        {view === "error" && (
          <div className="search-card text-center">
            <XCircle size={70} color="#ff3333" className="mb-4 mx-auto" style={{ filter: "drop-shadow(0 0 15px rgba(255,51,51,0.5))" }} />
            <h2 style={{ color: "#ff3333", fontWeight: "800", letterSpacing: "2px" }}>VERIFICATION FAILED</h2>
            <p style={{ color: "rgba(255,255,255,0.7)", margin: "20px 0" }}>
              The Certificate ID <strong className="text-white">{searchId}</strong> does not exist in our secure database. It may be invalid or forged.
            </p>
            <button className="outline-btn mt-3" onClick={() => setView("search")}>
              <RotateCcw className="me-2 inline mb-1" size={18} /> Search Another ID
            </button>
          </div>
        )}

        {/* --- PREVIEW VIEW (SUCCESS) --- */}
        {view === "preview" && certData && (
          <div className="cert-container" data-aos="fade-up">
            <div className="d-flex justify-content-between align-items-center mb-4 no-print">
              <h3 style={{ margin: 0, fontWeight: "800" ,color:"#00ff88"}}>
                <ShieldCheck color="#00ff88" className="inline me-2 mb-1" size={28}/> 
                Credential Verified
              </h3>
            </div>

            {/* THE PURE CSS CERTIFICATE */}
            <div className="cert-pure-css">
              <div className="cert-corner-tl"></div>
              <div className="cert-corner-br"></div>
              
              {/* NEW MASSIVE WATERMARK */}
              <div className="cert-watermark-container">
                <ShieldCheck className="cert-watermark-icon" />
                <div className="cert-watermark-text">KAALCYBERSEC</div>
              </div>

              {/* CONTENT WRAPPER SO TEXT STAYS ABOVE WATERMARK */}
              <div className="cert-content-wrapper">
                <div className="cert-header">
                  <h1>Certificate of Completion</h1>
                  <p>This credential is proudly presented to</p>
                </div>

                <div className="cert-name-section">
                  <h2>{certData.studentName}</h2>
                </div>

                <div className="cert-body">
                  For the successful completion of the <span className="cert-highlight">{certData.duration}</span> internship program 
                  in the operational domain of <br/><span className="cert-highlight">{certData.domain}</span> at <br/>
                  <span style={{ color: "#fff", fontWeight: "900", letterSpacing: "2px", display: "inline-block", margin: "10px 0" }}>KAALCYBERSEC</span><br/>
                  The intern demonstrated exceptional technical proficiency, strategic adaptability, and a strong commitment 
                  to offensive security protocols. They actively engaged in secure engineering tasks, executed directives 
                  with precision, and maintained a disciplined operational attitude. Their capabilities reflect strong 
                  potential for future enterprise security endeavors.
                </div>

                <div className="cert-footer">
                  <div className="cert-meta">
                    [ ID ] {certData.certificateId}<br/>
                    [ DATE ] {certData.dateGenerated}<br/>
                    [ SYS ] ENCRYPTED_AND_VERIFIED <br />
             
                  </div>
                  
                <center><img src={seal} height={100} width={100} alt="KaalCyberSec" /></center>
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
              <div className="col-md-6">
                <button className="futuristic-btn d-flex justify-content-center align-items-center" onClick={handlePrint}>
                  <Printer className="me-2" size={18} /> Download / Print Record
                </button>
              </div>
              <div className="col-md-6">
                <button className="futuristic-btn d-flex justify-content-center align-items-center" onClick={() => { setView("search"); setSearchId(""); }}>
                  <Search className="me-2" size={18} /> Verify Another Credential
                </button>
              </div>
            </div>
          </div>
        )}

      </section>
    </>
  );
}