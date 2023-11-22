// HomePageContainer.js
import React, { useState, useEffect } from 'react';
import DealList from '../components/DealList';

const HomePageContainer = () => {
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    // Fetch deals from the API (adjust as needed)
    const fetchData = async () => {
      try {
        // Fetch deals sorted by rating
        const response = await fetch('/api/deals?sortBy=rating');
        const data = await response.json();
        setDeals(data);
      } catch (error) {
        console.error('Error fetching deals:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="home-page-container">
      <h2>Top Deals</h2>
      <DealList deals={deals} />
    </div>
  );
};

export default HomePageContainer;
