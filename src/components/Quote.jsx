import React, { useState, useEffect } from "react";
import fonts from "./fonts";

export default function Quote() {
  const [quote, setQuote] = useState({
    content: "",
    author: "",
  });

  const [selectedFont, setSeletedFont] = useState("Open Sans");

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
      <div>
        <div className="form">
          <select value={selectedFont} onChange={handleFontChange}>
            {fonts.map((font) => (
              <option value={font}>{font}</option>
            ))}
          </select>
          <button onClick={generateQuote}>Generate a new quote!</button>
        </div>
        <div className="quote-text" style={{ fontFamily: selectedFont }}>
          {quote.content && <h2>{quote.content}</h2>}
          {quote.author && <h3> {quote.author}</h3>}
        </div>
      </div>
    </main>
  );
}
