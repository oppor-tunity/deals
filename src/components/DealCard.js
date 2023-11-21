// DealCard.js
import React from 'react';

const DealCard = ({ deal }) => {
  return (
    <div className="deal-card">
      <img src={deal.image} alt={deal.title} />
      <h3>{deal.title}</h3>
      <p>{deal.description}</p>
      <span>Original Price: {deal.originalPrice}</span>
      <span>Deal Price: {deal.dealPrice}</span>
      <span>Discount Code: {deal.discountCode}</span>
      <span>Shipping Cost: {deal.shippingCost}</span>
      <span>Shipping/Local Deal: {deal.shippingType}</span>
      <div className="voting-options">
        {/* Voting options here */}
      </div>
      <div className="deal-details">
        <span>Deal Link: <a href={deal.dealLink}>{deal.dealLink}</a></span>
        <span>Deal Author: {deal.author}</span>
      </div>
    </div>
  );
};

export default DealCard;
