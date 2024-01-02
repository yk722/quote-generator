import React, { useState, useEffect } from "react";
import fonts from "./fonts";

export default function Quote() {
  const [quote, setQuote] = useState({
    content: "",
    author: "",
  });

  const [selectedFont, setSeletedFont] = useState("system-ui");

  function generateQuote() {
    fetch("https://api.quotable.io/quotes/random")
      .then((res) => res.json())
      .then((data) =>
        setQuote({ content: data[0].content, author: data[0].author })
      );
  }

  function handleFontChange(event) {
    const { name, value } = event.target;
    setSeletedFont(value);
  }

  return (
    <main>
      <div className="container">
        <div className="form">
          <select
            className="font-selector"
            value={selectedFont}
            onChange={handleFontChange}
            style={{ fontFamily: selectedFont }}
          >
            <option value="" style={{ fontFamily: "system-ui" }}>
              -- choose a font --
            </option>
            {fonts.map((font) => (
              <option value={font} style={{ fontFamily: font }}>
                {font}
              </option>
            ))}
          </select>
          <br />
          <button className="quote-button" onClick={generateQuote}>
            Generate a new quote!
          </button>
        </div>

        <div className="quote-text" style={{ fontFamily: selectedFont }}>
          {quote.content && <h1 className="quotation-mark-top">❝</h1>}
          {quote.content && <h2 className="quote-content">{quote.content}</h2>}
          {quote.author && <h3 className="quote-author">- {quote.author} -</h3>}
          {quote.content && <h1 className="quotation-mark-bottom">❞</h1>}
        </div>
      </div>
    </main>
  );
}
