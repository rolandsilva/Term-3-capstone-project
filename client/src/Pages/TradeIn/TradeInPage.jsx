import React from 'react';
import './TradeInPage.css';

const TradeInPage = () => {
  return (
    <div className="trade-in-info">
      <div className="container">
        <h1 className="tradeinh1">How to Trade In Your Computer Equipment</h1>
        <section className="trade-in-steps">
          <h2>Step-by-Step Guide</h2>
          <ol>
            <li>
              <strong>Get an Estimate:</strong> Use our online tool to get an estimated value for your device. Just enter the model and condition of your equipment.
            </li>
            <li>
              <strong>Prepare Your Device:</strong> Backup your data and perform a factory reset to ensure all personal information is removed.
            </li>
            <li>
              <strong>Package Your Device:</strong> Use original packaging if available, or follow our packaging guidelines to ensure your device is protected during shipping.
            </li>
            <li>
              <strong>Ship Your Device:</strong> Print out the provided shipping label and drop off the package at the nearest shipping center.
            </li>
            <li>
              <strong>Receive Payment:</strong> Once we receive and verify the condition of your device, we’ll send you payment via your chosen method.
            </li>
          </ol>
        </section>

        <section className="estimated-value">
          <h2 className="tradeinh2">Estimated Value</h2>
          <p>
            Our online estimator will provide you with an approximate value for your device based on its model and condition. Keep in mind that the final value may vary after our technicians inspect the device.
          </p>
        </section>

        <section className="packing-shipping">
          <h2 className="tradeinh2">Packing and Shipping Instructions</h2>
          <ul>
            <li>Use a sturdy box that can withstand shipping.</li>
            <li>Wrap your device in bubble wrap or other protective material.</li>
            <li>Fill any empty spaces in the box with packing peanuts or crumpled paper to prevent movement.</li>
            <li>Seal the box securely with packing tape.</li>
            <li>Attach the shipping label to the outside of the box.</li>
            <li>Drop off the package at the designated shipping center or schedule a pickup.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};


export default TradeInPage