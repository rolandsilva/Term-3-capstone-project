
import React, { useState } from 'react';
import './FilterByPricePage.css';

const products = [
  {
    name: "2024 M4 MacBook Pro Laptop",
    price: 4500,
    image: "/macbookpro.png" 
  },
  {
    name: "2024 M4 MacBook Air",
    price: 1699,
    image: "/macbookpro2.png" 
  },
  {
    name: "2024 M4 MacBook Max",
    price: 3999,
    image: "/M3mbpmax.png"
  }
];

const FilterByPricePage = () => {
  const [priceFilter, setPriceFilter] = useState(5000);

  const filteredProducts = products.filter(product => product.price <= priceFilter);

  return (
    <div className="filterbyprice-container">
      <div className="filterbyprice-header">
        <h2>Filter by Price</h2>
        <input 
          type="range" 
          min="0" 
          max="5000" 
          value={priceFilter} 
          onChange={(e) => setPriceFilter(e.target.value)} 
        />
        <span>${priceFilter}</span>
      </div>
      <div className="product-list">
        {filteredProducts.map(product => (
          <div key={product.name} className="product-item">
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>${product.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="tips-section">
        <h2>5 Tips for Best Product Pricing Usage</h2>
        <ul>
          <li>Set a realistic budget based on your needs.</li>
          <li>Compare different models within your price range.</li>
          <li>Check for discounts and promotions.</li>
          <li>Read reviews to ensure good value for money.</li>
          <li>Consider the long-term costs, such as maintenance and upgrades.</li>
        </ul>
      </div>
    </div>
  );
}

export default FilterByPricePage;