// Header.js (updated)
import React, { useState } from 'react';

const Header = () => {
  const [showCategories, setShowCategories] = useState(false);

  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

  return (
    <header>
      <div className="logo">
        <img src="placeholder-logo.png" alt="Swedeal Logo" />
        <span>Swedeal</span>
      </div>
      <nav>
        <ul>
          <li><a href="/">Hem</a></li>
          <li>
            <button onClick={toggleCategories}>Kategorier</button>
            {showCategories && (
              <ul className="category-list">
                {/* List of categories */}
                <li><a href="/category/electronics">Elektronik</a></li>
                <li><a href="/category/gaming">Spel</a></li>
                {/* Add more categories */}
              </ul>
            )}
          </li>
        </ul>
      </nav>
      <div className="profile-link">
        <a href="/user-profile">Ditt Profil</a>
      </div>
    </header>
  );
};

export default Header;
