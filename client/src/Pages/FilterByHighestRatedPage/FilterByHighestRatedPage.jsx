import React, { useState } from 'react';
import './FilterByHighestRatedPage.css';

const products = [
  {
    name: "2024 M4 MacBook Pro Laptop",
    price: 4500,
    rating: 4.9,
    image: "/macbookpro.png"
  },
  {
    name: "2024 M4 MacBook Air",
    price: 1699,
    rating: 4.5,
    image: "/macbookpro2.png"
  },
  {
    name: "2024 M4 MacBook Max",
    price: 3999,
    rating: 4.7,
    image: "/M3mbpmax.png"
  }
];

const FilterByHighestRatedPage = () => {
  const [ratingFilter, setRatingFilter] = useState(0);

  const filteredProducts = products.filter(product => product.rating >= ratingFilter);

  return (
    <div className="filterbyhighestrated-container">
      <div className="filterbyhighestrated-header">
        <h2>Filter by Highest Rated</h2>
        <input 
          type="range" 
          min="0" 
          max="5" 
          step="0.1" 
          value={ratingFilter} 
          onChange={(e) => setRatingFilter(e.target.value)} 
        />
        <span>{ratingFilter} Stars</span>
      </div>
      <div className="product-list">
        {filteredProducts.map(product => (
          <div key={product.name} className="product-item">
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <p>Rating: {product.rating} Stars</p>
            </div>
          </div>
        ))}
      </div>
      <div className="tips-section">
        <h2>5 Tips for Comparing by Highest Rated</h2>
        <ul>
          <li>Look at the number of reviews along with the rating.</li>
          <li>Check for recent reviews to ensure consistency in quality.</li>
          <li>Compare similar products based on features and ratings.</li>
          <li>Consider the brand reputation in conjunction with ratings.</li>
          <li>Read detailed reviews to understand the pros and cons.</li>
        </ul>
      </div>
    </div>
  );
}

export default FilterByHighestRatedPage;