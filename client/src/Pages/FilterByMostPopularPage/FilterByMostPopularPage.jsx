import React, { useState } from 'react';
import './FilterByMostPopularPage.css';

const products = [
  {
    name: "2024 M4 MacBook Pro Laptop",
    price: 4500,
    popularity: 95,
    image: "/macbookpro.png"
  },
  {
    name: "2024 M4 MacBook Air",
    price: 1699,
    popularity: 85,
    image: "/macbookpro2.png"
  },
  {
    name: "2024 M4 MacBook Max",
    price: 3999,
    popularity: 90,
    image: "/M3mbpmax.png"
  }
];

const FilterByMostPopularPage = () => {
  const [popularityFilter, setPopularityFilter] = useState(0);

  const filteredProducts = products.filter(product => product.popularity >= popularityFilter);

  return (
    <div className="filterbymostpopular-container">
      <div className="filterbymostpopular-header">
        <h2>Filter by Most Popular</h2>
        <input 
          type="range" 
          min="0" 
          max="100" 
          value={popularityFilter} 
          onChange={(e) => setPopularityFilter(e.target.value)} 
        />
        <span>{popularityFilter} Popularity</span>
      </div>
      <div className="product-list">
        {filteredProducts.map(product => (
          <div key={product.name} className="product-item">
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <p>Popularity: {product.popularity}%</p>
            </div>
          </div>
        ))}
      </div>
      <div className="tips-section">
        <h2>5 Tips for Comparing by Most Popular</h2>
        <ul>
          <li>Check the sales volume along with the popularity percentage.</li>
          <li>Look for products that have been popular over a sustained period.</li>
          <li>Compare the features of popular products to see what stands out.</li>
          <li>Consider user feedback and ratings in addition to popularity.</li>
          <li>Be aware of any trends or seasonal popularity spikes.</li>
        </ul>
      </div>
    </div>
  );
}

export default FilterByMostPopularPage;