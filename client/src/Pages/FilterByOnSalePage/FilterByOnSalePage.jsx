import React, { useState } from 'react';
import './FilterByOnSalePage.css';

const products = [
  {
    name: "2024 M4 MacBook Pro Laptop",
    price: 4500,
    onSale: true,
    image: "/macbookpro.png"
  },
  {
    name: "2024 M4 MacBook Air",
    price: 1699,
    onSale: false,
    image: "/macbookpro2.png"
  },
  {
    name: "2024 M4 MacBook Max",
    price: 3999,
    onSale: true,
    image: "/M3mbpmax.png"
  }
];

const FilterByOnSalePage = () => {
  const [onSaleFilter, setOnSaleFilter] = useState(true);

  const filteredProducts = products.filter(product => product.onSale === onSaleFilter);

  return (
    <div className="filterbyonsale-container">
      <div className="filterbyonsale-header">
        <h2>Filter by On Sale</h2>
        <label>
          <input 
            type="checkbox" 
            checked={onSaleFilter} 
            onChange={(e) => setOnSaleFilter(e.target.checked)} 
          />
          Show On Sale Only
        </label>
      </div>
      <div className="product-list">
        {filteredProducts.map(product => (
          <div key={product.name} className="product-item">
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <p>{product.onSale ? 'On Sale' : 'Regular Price'}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="tips-section">
        <h2>5 Tips for Comparing by On Sale</h2>
        <ul>
          <li>Check the discount percentage to evaluate the deal.</li>
          <li>Compare sale prices across different retailers.</li>
          <li>Look for any additional promotions or coupons.</li>
          <li>Read the fine print for sale terms and conditions.</li>
          <li>Consider the product's regular price history to gauge the discount's value.</li>
        </ul>
      </div>
    </div>
  );
}

export default FilterByOnSalePage;