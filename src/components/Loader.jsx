import React, { useEffect, useState } from "react";

export default function Loader({ onFinish }) {

  const [text, setText] = useState("");

  const finalText = "INITIALIZING KAALCYBERSEC";

  useEffect(() => {

    let index = 0;

    const typing = setInterval(() => {

      setText(finalText.slice(0, index));

      index++;

      if (index > finalText.length) {
        clearInterval(typing);
      }

    }, 80);

    const timer = setTimeout(() => {
      onFinish();
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearInterval(typing);
    };

  }, [onFinish]);

  return (

    <div className="loader-wrapper">

      <div className="loader-grid"></div>

      <div className="loader-content">

        <h1 className="loader-logo">
          KAALCYBERSEC
        </h1>

        <p className="loader-text">
          {text}
          <span className="blink">_</span>
        </p>

        <div className="loader-bar">

          <div className="loader-progress"></div>

        </div>

       

      </div>

    </div>
  );
}