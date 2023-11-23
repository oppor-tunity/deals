// DealDescription.js

import React from 'react';

const DealDescription = ({ description }) => {
  return (
    <div className="deal-description-container">
      <h4>Description</h4>
      <p>{description}</p>
    </div>
  );
};

export default DealDescription;
