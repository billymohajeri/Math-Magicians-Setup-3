import React from 'react';
import '../styles/Home.css';

const Home = () => (
  <section className="welcome-container">
    <h2 className="welcome-title">Welcome to our page!</h2>
    <p className="welcome-text">
      &quot;Math magicians&quot; is a website for all fans of mathematics.
    </p>
    <p className="welcome-text">
      It is a Single Page App (SPA) that allows users to:
    </p>
    <ul className="welcome-points">
      <li>Make simple calculations.</li>
      <li>Read a random math-related quote.</li>
    </ul>
  </section>
);
export default Home;
