import React, { useState } from "react";
import { ChevronDown, MessageSquareCode } from "lucide-react";

export default function FAQ({ title = "Frequently Asked Questions", faqData = [] }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // 1. DYNAMIC SEO SCHEMA GENERATION
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
      },
    })),
  };

  // If no data is passed, don't render the section
  if (!faqData || faqData.length === 0) return null;

  return (
    <>
      {/* INJECTING INVISIBLE SEO SCHEMA */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />

      <section className="faq-section" style={{ fontFamily: "'Camomile', sans-serif" }}>
        <style>{`
          .faq-section {
            padding: 80px 20px;
            position: relative;
            z-index: 1;
          }

          .faq-container {
            max-width: 900px;
            margin: 0 auto;
          }

          .faq-header {
            text-align: center;
            margin-bottom: 50px;
          }

          .faq-title {
            font-size: 2.8rem;
            font-weight: 800;
            color: #fff;
            letter-spacing: 1px;
          }

          .faq-title span {
            color: #00ff88;
            text-shadow: 0 0 15px rgba(0, 255, 120, 0.4);
          }

          /* ACCORDION STYLES (PURE CSS / FLEXBOX) */
          .faq-item {
            background: rgba(5, 12, 8, 0.6);
            backdrop-filter: blur(15px);
            border: 1px solid rgba(0, 255, 120, 0.15);
            border-radius: 12px;
            margin-bottom: 15px;
            overflow: hidden;
            transition: all 0.3s ease;
          }

          .faq-item:hover {
            border-color: rgba(0, 255, 120, 0.4);
            box-shadow: 0 0 20px rgba(0, 255, 120, 0.05);
          }

          .faq-item.active {
            border-color: #00ff88;
            box-shadow: 0 0 30px rgba(0, 255, 120, 0.1);
            background: rgba(10, 20, 15, 0.8);
          }

          .faq-question {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 25px 30px;
            background: transparent;
            border: none;
            color: #fff;
            font-size: 1.15rem;
            font-weight: 700;
            text-align: left;
            cursor: pointer;
            transition: color 0.3s ease;
          }

          .faq-item.active .faq-question {
            color: #00ff88;
          }

          .faq-icon {
            color: #00ff88;
            transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            flex-shrink: 0;
            margin-left: 20px;
          }

          .faq-item.active .faq-icon {
            transform: rotate(180deg);
          }

          .faq-answer-wrapper {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .faq-item.active .faq-answer-wrapper {
            max-height: 400px; /* Expands smoothly */
          }

          .faq-answer {
            padding: 0 30px 30px 30px;
            color: rgba(255, 255, 255, 0.75);
            line-height: 1.8;
            font-size: 1rem;
          }

          @media (max-width: 768px) {
            .faq-title { font-size: 2.2rem; }
            .faq-question { padding: 20px; font-size: 1.05rem; }
            .faq-answer { padding: 0 20px 20px 20px; }
          }
        `}</style>

        <div className="faq-container" data-aos="fade-up">
          <div className="faq-header">
            <MessageSquareCode size={40} color="#00ff88" className="mb-3 mx-auto" />
            <h2 className="faq-title">
              {title.split(' ').map((word, i, arr) => 
                i === arr.length - 1 ? <span key={i}> {word}</span> : word + ' '
              )}
            </h2>
          </div>

          <div className="faq-accordion">
            {faqData.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item ${activeIndex === index ? "active" : ""}`}
              >
                <button
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={activeIndex === index}
                >
                  {faq.question}
                  <ChevronDown className="faq-icon" size={24} />
                </button>
                
                <div 
                  className="faq-answer-wrapper"
                  aria-hidden={activeIndex !== index}
                >
                  <div className="faq-answer">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}