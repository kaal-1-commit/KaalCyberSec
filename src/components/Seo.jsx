import React from "react";
import { Helmet } from "react-helmet";

function SEO() {
  return (
    <Helmet>
      {/* Primary SEO */}
      <title>
        KaalCyberSec | Cybersecurity & Full Stack Development
      </title>

      <meta
        name="description"
        content="KaalCyberSec is an Indian cybersecurity and full stack development company specializing in penetration testing, red teaming, ethical hacking, Kali Linux, API security, cloud security, malware analysis, data recovery, and secure engineering."
      />

      <meta
        name="keywords"
        content="KaalCyberSec, cybersecurity company India, penetration testing, ethical hacking, red teaming, Kali Linux experts, VAPT, API security, malware analysis, data recovery, cloud security, secure coding, full stack development"
      />

      <meta name="author" content="Prince Chaudhary" />

      {/* Canonical */}
      <link
        rel="canonical"
        href="https://kaal-1-commit.github.io/KaalCyberSec/"
      />

      {/* Open Graph */}
      <meta
        property="og:title"
        content="KaalCyberSec | Cybersecurity Company India"
      />

      <meta
        property="og:description"
        content="Advanced cybersecurity, ethical hacking, red teaming, secure development, and cyber defense solutions."
      />

      <meta
        property="og:url"
        content="https://kaal-1-commit.github.io/KaalCyberSec/"
      />

      <meta property="og:type" content="website" />

      <meta
        property="og:image"
        content="https://kaal-1-commit.github.io/KaalCyberSec/logo.png"
      />

      {/* Twitter SEO */}
      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content="KaalCyberSec | Cybersecurity Company"
      />

      <meta
        name="twitter:description"
        content="Red Teaming, Ethical Hacking, Secure Engineering & Full Stack Development."
      />

      {/* Robots */}
      <meta
        name="robots"
        content="index, follow, max-image-preview:large"
      />

      {/* Theme Color */}
      <meta name="theme-color" content="#00ff88" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "KaalCyberSec",
          url: "https://kaal-1-commit.github.io/KaalCyberSec/",
          logo:
            "https://kaal-1-commit.github.io/KaalCyberSec/logo.png",
          description:
            "Indian cybersecurity company specializing in penetration testing, red teaming, ethical hacking, data recovery, and secure development.",
          founder: {
            "@type": "Person",
            name: "Prince Chaudhary",
          },
          sameAs: [
            "https://github.com/kaal-1-commit",
            "https://www.linkedin.com/company/kaalcybersec/",
          ],
        })}
      </script>
    </Helmet>
  );
}

export default SEO;