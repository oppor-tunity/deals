// Footer.js

import React from 'react';
import './Footer.css'; // Create a new CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <nav>
        <ul>
          <li><a href="/about-us">Om Oss</a></li>
          <li><a href="/contact">Kontakt</a></li>
          <li><a href="/faq">Vanliga Frågor</a></li>
          <li><a href="/community-rules">Community Regler</a></li>
          <li><a href="/contribute">Bidra</a></li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
