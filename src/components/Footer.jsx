// import React, { Component } from 'react'

// export default class Footer extends Component {
//   render() {
//     return (
//       <div>  {/* Footer */}
//       <footer className="text-center py-4 border-top border-secondary border-5 border-bottom border-success pb-4">
//         © {new Date().getFullYear()} KaalCyberSec — Hack the Future
//       </footer></div>
//     )
//   }
// }
import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer className="text-center py-4 border-top border-secondary border-5 border-bottom border-success bg-black">
        
        <div className="container">
          {/* Brand Line */}
          <p className="mb-1 text-success fw-bold">
            © {new Date().getFullYear()} KaalCyberSec
          </p>

          {/* Tagline */}
          <p className="mb-2 text-white small">
            Securing Digital Assets • Building Reliable Technology
          </p>

          {/* Legal & Trust */}
          <p className="mb-2 small text-secondary">
            Govt. Registered Entity (UDYAM-MP-23-0233844)
          </p>

          {/* Footer Links */}
          <div className="d-flex justify-content-center gap-3 small">
            <a href="/privacy-policy" className="text-success text-decoration-none">
              Privacy Policy
            </a>
            <span className="text-secondary">|</span>
            <a href="/terms-and-conditions" className="text-success text-decoration-none">
              Terms & Conditions
            </a>
            <span className="text-secondary">|</span>
            <a href="/refund-policy" className="text-success text-decoration-none">
              Refund Policy
            </a>
          </div>
        </div>

      </footer>
    );
  }
}
