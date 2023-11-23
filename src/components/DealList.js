// DealList.js

import React from 'react';
import DealCard from './DealCard';

const DealList = ({ deals }) => {
  return (
    <div className="deal-list">
      {deals.map((deal) => (
        <DealCard key={deal._id} deal={deal} />
      ))}
    </div>
  );
};

export default DealList;
