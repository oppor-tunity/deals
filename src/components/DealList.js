// DealList.js
import React from 'react';

const DealList = ({ deals }) => {
  return (
    <div className="deal-list">
      {deals.map((deal) => (
        <DealCard key={deal.id} deal={deal} />
      ))}
    </div>
  );
};

export default DealList;
