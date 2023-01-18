import React from 'react';
import '../styles/Quote.css';

const Quote = () => (
  <section className="quote-container">
    <h2 className="quote-text">
      Mathematics is not about numbers, equations, computations or algorithms:
      it is about understanding.
    </h2>
    <span className="quote-author">
      <a
        href="https://en.wikipedia.org/wiki/William_Thurston"
        target="_blank"
        rel="noreferrer"
      >
        William Paul Thurston
      </a>
    </span>
  </section>
);
export default Quote;
