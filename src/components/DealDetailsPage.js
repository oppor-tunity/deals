// DealDetailsPage.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DealCard from './DealCard';
import DealDescription from './DealDescription';
import DealComments from './DealComments';

const DealDetailsPage = () => {
  const { dealId } = useParams();
  const [deal, setDeal] = useState(null);

  useEffect(() => {
    const fetchDealDetails = async () => {
      try {
        // Fetch deal details using the dealId
        const response = await fetch(`/api/deals/${dealId}`);
        const data = await response.json();

        setDeal(data);
      } catch (error) {
        console.error('Error fetching deal details:', error);
      }
    };

    fetchDealDetails();
  }, [dealId]);

  if (!deal) {
    // If the deal is still being fetched, you can display a loading message or spinner
    return <div>Loading...</div>;
  }

  return (
    <div className="deal-details-page">
      <DealCard deal={deal} />
      <DealDescription description={deal.description} />
      <DealComments dealId={dealId} />
    </div>
  );
};

export default DealDetailsPage;
