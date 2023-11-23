// Header.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [showCategories, setShowCategories] = useState(false);

  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src="placeholder-logo.png" alt="Swedeal Logo" />
        <span>Swedeal</span>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Hem</Link></li>
          <li><button onClick={toggleCategories}>Kategorier</button></li>
        </ul>
      </nav>
      <div className="actions">
        <Link to="/add-deal">Lägg Till Deal</Link>
        <div className="profile-link">
          <Link to="/user-profile">Ditt Profil</Link>
        </div>
      </div>
      {showCategories && (
        <div className="category-overlay">
          <ul>
              <li><Link to="/category/electronics">Elektronik</Link></li>
              <li><Link to="/category/gaming">Spel</Link></li>
              <li><Link to="/category/food-and-household">Mat och hushåll</Link></li>
              <li><Link to="/category/fashion">Mode</Link></li>
              <li><Link to="/category/beauty-and-health">Skönhet och hälsa</Link></li>
              <li><Link to="/category/family-and-kids">Familj och barn</Link></li>
              <li><Link to="/category/home-and-living">Hem och boende</Link></li>
              <li><Link to="/category/garden-and-hardware-store">Trädgård och byggvaror</Link></li>
              <li><Link to="/category/car-and-motorcycle">Bil och motorcykel</Link></li>
              <li><Link to="/category/culture-and-spare-time">Kultur och fritid</Link></li>
              <li><Link to="/category/sport-and-outdoor">Sport och friluftsliv</Link></li>
              <li><Link to="/category/phone-and-internet-contracts">Telefon och internetavtal</Link></li>
              <li><Link to="/category/insurance-and-finance">Försäkring och finans</Link></li>
              <li><Link to="/category/services-and-contracts">Tjänster och avtal</Link></li>
              <li><Link to="/category/vacation-and-traveling">Semester och resor</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
