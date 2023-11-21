// CategoryPageContainer.js
import React, { useState, useEffect } from 'react';
import DealList from './DealList';

const CategoryPageContainer = ({ category }) => {
  const [categoryDeals, setCategoryDeals] = useState([]);

  useEffect(() => {
    // Fetch deals for the selected category from the API (adjust as needed)
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/deals?category=${category}`);
        const data = await response.json();
        setCategoryDeals(data);
      } catch (error) {
        console.error(`Error fetching ${category} deals:`, error);
      }
    };

    fetchData();
  }, [category]);

  return (
    <div className="category-page-container">
      <h2>{category} Deals</h2>
      <DealList deals={categoryDeals} />
    </div>
  );
};

export default CategoryPageContainer;
