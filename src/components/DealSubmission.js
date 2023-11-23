import React, { useState } from 'react';

const DealSubmission = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    dealLink: '',
    originalPrice: 0,
    dealPrice: 0,
    discountCode: '',
    shippingCost: 0,
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
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea>

        <label htmlFor="category">Category:</label>
        <input
          type="text"
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        />

        <label htmlFor="dealLink">Deal Link:</label>
        <input
          type="text"
          id="dealLink"
          name="dealLink"
          value={formData.dealLink}
          onChange={handleChange}
          required
        />

        <label htmlFor="originalPrice">Original Price:</label>
        <input
          type="number"
          id="originalPrice"
          name="originalPrice"
          value={formData.originalPrice}
          onChange={handleChange}
          required
        />

        <label htmlFor="dealPrice">Deal Price:</label>
        <input
          type="number"
          id="dealPrice"
          name="dealPrice"
          value={formData.dealPrice}
          onChange={handleChange}
          required
        />

        <label htmlFor="discountCode">Discount Code:</label>
        <input
          type="text"
          id="discountCode"
          name="discountCode"
          value={formData.discountCode}
          onChange={handleChange}
        />

        <label htmlFor="shippingCost">Shipping Cost:</label>
        <input
          type="number"
          id="shippingCost"
          name="shippingCost"
          value={formData.shippingCost}
          onChange={handleChange}
        />

        <label htmlFor="dealType">Deal Type:</label>
        <input
          type="text"
          id="dealType"
          name="dealType"
          value={formData.dealType}
          onChange={handleChange}
        />

        <button type="submit">Submit Deal</button>
      </form>
    </div>
  );
};

export default DealSubmission;
