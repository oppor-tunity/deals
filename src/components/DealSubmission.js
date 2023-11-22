// DealSubmission.js
import React, { useState } from 'react';

const DealSubmission = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    dealLink: '',
    originalPrice: '',
    dealPrice: '',
    discountCode: '',
    shippingCost: '',
    dealType: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/api/deals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Deal successfully submitted, you can handle the response as needed
        console.log('Deal submitted successfully!');
      } else {
        // Handle error cases
        console.error('Failed to submit deal');
      }
    } catch (error) {
      console.error('Error submitting deal:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="deal-submission">
      <h2>Submit a Deal</h2>
      <form onSubmit={handleSubmit}>
        {/* Form fields for deal submission */}
        {/* Example: Title input */}
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        {/* Add other form fields as needed */}
        <button type="submit">Submit Deal</button>
      </form>
    </div>
  );
};

export default DealSubmission;
