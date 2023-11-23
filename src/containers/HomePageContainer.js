// HomePageContainer.js

import React, { useState, useEffect } from 'react';
import DealList from '../components/DealList';

const HomePageContainer = () => {
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/deals');
        const data = await response.json();
        setDeals(data);
      } catch (error) {
        console.error('Error fetching deals:', error);
      }
    };

    fetchData();
  }, []); // Run once when the component mounts

  return (
    <div className="home-page-container">
      <h2>Top Deals</h2>
      <DealList deals={deals} />
    </div>
  );
};

export default HomePageContainer;
