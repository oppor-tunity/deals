// DealCard.js

import React from 'react';
import { Link } from 'react-router-dom';
import './DealCard.css'; // Assuming you already have this file

const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
  const discount = originalPrice - discountedPrice;
  const discountPercentage = (discount / originalPrice) * 100;
  return Math.round(discountPercentage);
};

const DealCard = ({ deal }) => {
  const discountPercentage = calculateDiscountPercentage(deal.originalPrice, deal.dealPrice);

  return (
    <div className="deal-card">
      <div className="deal-image-container">
        <img src={deal.image} alt={deal.title} className="deal-image" />
      </div>
      <div className="deal-content">
        <div className="deal-rating">
          {/* Add your rating widget here */}
          {/* Example: <span>Rating: {deal.rating}</span> */}
        </div>
        <div className="deal-title">
          <h3><Link to={`/deal/${deal._id}`}>{deal.title}</Link></h3>
        </div>
        <div className="deal-prices">
          <span className="discounted-price">{deal.dealPrice} kr</span>
          <span className="original-price">{deal.originalPrice} kr</span>
          <span className="discount-percentage">-{discountPercentage}%</span>
        </div>
        <div className="deal-description">
          <p>{deal.description}</p>
        </div>
        <div className="deal-footer">
          <span className="author">Author: {deal.author}</span>
          <a href={deal.dealLink} className="deal-link-button" target="_blank" rel="noopener noreferrer">Go to Deal</a>
        </div>
      </div>
    </div>
  );
};

export default DealCard;
