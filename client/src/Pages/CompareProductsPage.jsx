import React from "react";
import "./CompareProductsPage.css";

const CompareProductsPage = () => {
  return (
    <div className="compare-products-info">
      <div className="table-container">
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
                <td>
                  12MP rear (wide), 10MP rear (ultra-wide), 12MP front
                  (TrueDepth)
                </td>
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
      <div className="text-container">
        <h1>Tips to Compare Models</h1>
        <div className="text-box">
          <p>
            <a href="#tip1">1. Processor and Performance</a>
          </p>
          <p>
            <a href="#tip2">2. RAM</a>
          </p>
          <p>
            <a href="#tip3">3. Storage</a>
          </p>
          <p>
            <a href="#tip4">4. Display Quality</a>
          </p>
          <p>
            <a href="#tip5">5. Graphics</a>
          </p>
          <p>
            <a href="#tip6">6. Battery Life</a>
          </p>
          <p>
            <a href="#tip7">7. Portability</a>
          </p>
          <p>
            <a href="#tip8">8. Operating System</a>
          </p>
          <p>
            <a href="#tip9">9. Build Quality and Design</a>
          </p>
          <p>
            <a href="#tip10">10. Connectivity</a>
          </p>
          <p>
            <a href="#tip11">11. Audio Quality</a>
          </p>
          <p>
            <a href="#tip12">12. Software and Ecosystem</a>
          </p>
          <p>
            <a href="#tip13">13. Price and Value for Money</a>
          </p>
          <p>
            <a href="#tip14">14. Customer Support and Warranty</a>
          </p>
          <div id="tip1">
            <h2>1. Processor and Performance</h2>
            <p>
              Look at the type and generation of the processor (e.g., Intel Core
              i5 vs. M1) and compare their performance benchmarks.
            </p>
          </div>
          <div id="tip2">
            <h2>2. RAM</h2>
            <p>
              Check the amount and type of RAM. More RAM allows for better
              multitasking and smoother performance with demanding applications.
            </p>
          </div>
          <div id="tip3">
            <h2>3. Storage</h2>
            <p>
              Compare the types (SSD vs. HDD) and capacities of storage options.
              SSDs are faster and more reliable than HDDs.
            </p>
          </div>
          <div id="tip4">
            <h2>4. Display Quality</h2>
            <p>
              Evaluate the screen size, resolution, brightness, and color
              accuracy. High-resolution Retina displays are ideal for detailed
              work.
            </p>
          </div>
          <div id="tip5">
            <h2>5. Graphics</h2>
            <p>
              Compare the integrated or dedicated graphics cards. Dedicated GPUs
              are essential for gaming, video editing, and 3D modeling.
            </p>
          </div>
          <div id="tip6">
            <h2>6. Battery Life</h2>
            <p>
              Look at battery life estimates for real-world usage scenarios.
              Longer battery life is crucial for portability.
            </p>
          </div>
          <div id="tip7">
            <h2>7. Portability</h2>
            <p>
              Consider the weight and dimensions of the devices. Lighter and
              thinner devices are more portable.
            </p>
          </div>
          <div id="tip8">
            <h2>8. Operating System</h2>
            <p>
              Compare the versions of macOS or other operating systems. Newer
              versions typically offer better features and security.
            </p>
          </div>
          <div id="tip9">
            <h2>9. Build Quality and Design</h2>
            <p>
              Examine the materials used (e.g., aluminum vs. plastic) and the
              overall design aesthetics and durability.
            </p>
          </div>
          <div id="tip10">
            <h2>10. Connectivity</h2>
            <p>
              Check the number and types of ports (USB-C, Thunderbolt, HDMI) and
              wireless connectivity options (Wi-Fi 6, Bluetooth).
            </p>
          </div>
          <div id="tip11">
            <h2>11. Audio Quality</h2>
            <p>
              Compare the built-in speakers and microphone quality, especially
              if you plan to use the device for media consumption or
              conferencing.
            </p>
          </div>
          <div id="tip12">
            <h2>12. Software and Ecosystem</h2>
            <p>
              Consider the pre-installed software and the broader ecosystem
              compatibility (e.g., seamless integration with other Apple
              devices).
            </p>
          </div>
          <div id="tip13">
            <h2>13. Price and Value for Money</h2>
            <p>
              Evaluate the price in relation to the features and performance
              offered. Consider any ongoing promotions or discounts.
            </p>
          </div>
          <div id="tip14">
            <h2>14. Customer Support and Warranty</h2>
            <p>
              Check the warranty terms and the quality of customer support.
              AppleCare+ can be a valuable addition for extended coverage.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompareProductsPage;
