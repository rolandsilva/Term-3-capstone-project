import React from 'react'
import './CompareProductsPage.css';

const CompareProductsPage = () => {
  return (
    <div className="compare-products-info">
        <div className="container">
          <h1>Compare iPad Models</h1>
          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>iPad Mini</th>
                  <th>iPad Air</th>
                  <th>iPad Pro</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Display</td>
                  <td>7.9-inch Retina</td>
                  <td>10.9-inch Liquid Retina</td>
                  <td>11-inch or 12.9-inch Liquid Retina XDR</td>
                </tr>
                <tr>
                  <td>Processor</td>
                  <td>A12 Bionic</td>
                  <td>A14 Bionic</td>
                  <td>M1 or M2</td>
                </tr>
                <tr>
                  <td>Storage Options</td>
                  <td>64GB, 256GB</td>
                  <td>64GB, 256GB, 512GB</td>
                  <td>128GB, 256GB, 512GB, 1TB, 2TB</td>
                </tr>
                <tr>
                  <td>Camera</td>
                  <td>8MP rear, 7MP front</td>
                  <td>12MP rear, 7MP front</td>
                  <td>12MP rear (wide), 10MP rear (ultra-wide), 12MP front (TrueDepth)</td>
                </tr>
                <tr>
                  <td>Battery Life</td>
                  <td>Up to 10 hours</td>
                  <td>Up to 10 hours</td>
                  <td>Up to 10 hours</td>
                </tr>
                <tr>
                  <td>Price</td>
                  <td>Starting at $399</td>
                  <td>Starting at $599</td>
                  <td>Starting at $799</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

    </div>
  );
};

export default CompareProductsPage;