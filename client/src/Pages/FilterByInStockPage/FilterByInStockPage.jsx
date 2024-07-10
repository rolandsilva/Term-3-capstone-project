import React, { useState } from 'react';
import './FilterByInStockPage.css';

const products = [
  {
    name: "2024 M4 MacBook Pro Laptop",
    price: 4500,
    inStock: true,
    image: "/macbookpro.png"
  },
  {
    name: "2024 M4 MacBook Air",
    price: 1699,
    inStock: false,
    image: "/macbookpro2.png"
  },
  {
    name: "2024 M4 MacBook Max",
    price: 3999,
    inStock: true,
    image: "/M3mbpmax.png"
  }
];

const FilterByInStockPage = () => {
  const [inStockFilter, setInStockFilter] = useState(true);

  const filteredProducts = products.filter(product => product.inStock === inStockFilter);

  return (
    <div className="filterbyinstock-container">
      <div className="filterbyinstock-header">
        <h2>Filter by In Stock</h2>
        <label>
          <input 
            type="checkbox" 
            checked={inStockFilter} 
            onChange={(e) => setInStockFilter(e.target.checked)} 
          />
          Show In Stock Only
        </label>
      </div>
      <div className="product-list">
        {filteredProducts.map(product => (
          <div key={product.name} className="product-item">
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <p>{product.inStock ? 'In Stock' : 'Out of Stock'}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="tips-section">
        <h2>5 Tips for Comparing by In Stock</h2>
        <ul>
          <li>Check the availability status frequently.</li>
          <li>Sign up for stock alerts on the retailer's website.</li>
          <li>Compare different retailers for stock availability.</li>
          <li>Consider pre-order options if available.</li>
          <li>Look for alternatives with similar features that are in stock.</li>
        </ul>
      </div>
    </div>
  );
}

export default FilterByInStockPage;