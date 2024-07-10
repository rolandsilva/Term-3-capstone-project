import React, { useState } from 'react';
import './FilterByPricePage.css';

const products = [
  {
    name: "2024 M4 MacBook Pro Laptop",
    price: 4500,
    image: process.env.PUBLIC_URL + "/macbookpro.png" 
  },
  {
    name: "2024 M4 MacBook Air",
    price: 1699,
    image: process.env.PUBLIC_URL + "/macbookpro.png2" 
  },
  {
    name: "2024 M4 MacBook Max",
    price: 3999,
    image: process.env.PUBLIC_URL + "/M3mbpmax.png"
  }
];

const FilterByPricePage = () => {
  const [priceFilter, setPriceFilter] = useState(5000);

  const filteredProducts = products.filter(product => product.price <= priceFilter);

  return (
    <div className="filterbyprice-container">
      <div className="filterbyprice-header">
        <h2>filterbyprice with Us</h2>
      </div>
      <div className="filterbyprice-window">
        <div className="filterbyprice-message">
          <div className="message user-message">
            <p>Hi! Can you show me the available laptops under $5000?</p>
          </div>
        </div>
        <div className="filterbyprice-message">
          <div className="message agent-message">
            <p>Sure! Here are some options:</p>
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
          </div>
        </div>
      </div>
      <div className="filterbyprice-input">
        <input type="text" placeholder="Type a message..." />
        <button>Send</button>
      </div>
    </div>
  );
}

export default FilterByPricePage;
