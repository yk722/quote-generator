import React, { useState, useEffect } from "react";

export default function Quote() {
  const [quote, setQuote] = useState({
    content: "",
    author: "",
  });

  const [quoteDb, setQuoteDb] = useState([]);

  function generateQuote() {
    fetch("https://api.quotable.io/quotes/random")
      .then((res) => res.json())
      .then((data) =>
        setQuote({ content: data[0].content, author: data[0].author })
      );
  }

  //   useEffect(() => {
  //     fetch("https://api.quotable.io/quotes/random")
  //       .then((res) => res.json())
  //       .then((data) =>
  //         setQuote({ content: data[0].content, author: data[0].author })
  //       );
  //   }, []);

  return (
    <main>
      <div>
        <div className="form">
          <button onClick={generateQuote}>Generate a new quote!</button>
        </div>
        <div className="quote-text">
          {quote.content && <h2>{quote.content}</h2>}
          {quote.author && <h3> {quote.author}</h3>}
        </div>
      </div>
    </main>
  );
}
