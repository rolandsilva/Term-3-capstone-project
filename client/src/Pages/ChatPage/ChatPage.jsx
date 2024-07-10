import React from "react";
import "./ChatPage.css";

const ChatPage = () => {
  return (
    <div className="chat-page-container">
      <div className="chat-container">
        <div className="chat-header">
          <h2>Chat with Us</h2>
        </div>
        <div className="chat-window">
          <div className="chat-message">
            <div className="message user-message">
              <p>Hi! I'm looking for a new laptop.</p>
            </div>
          </div>
          <div className="chat-message">
            <div className="message agent-message">
              <p>Sure! We have several options. Here are a few:</p>
              <ul>
                <li>
                  <strong>MacBook Air</strong> - Lightweight, powerful, and
                  portable.
                </li>
                <li>
                  <strong>MacBook Pro</strong> - High performance for
                  professional use.
                </li>
                <li>
                  <strong>Dell XPS 13</strong> - Sleek design with powerful
                  specs.
                </li>
              </ul>
            </div>
          </div>
          <div className="chat-message">
            <div className="message user-message">
              <p>Can you tell me more about the MacBook Pro?</p>
            </div>
          </div>
          <div className="chat-message">
            <div className="message agent-message">
              <p>
                Of course! The MacBook Pro comes with an M1 chip, 16GB of RAM,
                and a 512GB SSD. It's perfect for heavy tasks like video editing
                and software development.
              </p>
            </div>
          </div>
        </div>
        <div className="chat-input">
          <input type="text" placeholder="Type a message..." />
          <button>Send</button>
        </div>

      </div>
      <div className="advisorandinfocontainer">
          <div className="advisornameimagecontainer">
            <div className="advisorname">
              <h3>Hi, I am Steve Jobs,</h3>
              <h4>How may I help you ?</h4>
              <img className="advisorimage" src="/stevejobs.png"
                  id="advisorimage"
                  alt="Image of Steve Jobs"
                  // className="M3MBPimage"
                />
            </div>
          </div>
          <div className="chatinfocontainer">
            <p className="chatinfotext">1.	Please have your receipt number ready for verification.</p>
            <p className="chatinfotext">	2.	You must provide the model number of your product for accurate assistance.</p>
            <p className="chatinfotext">	3.	Make sure to include any relevant information about your issue or question.</p>
            <p className="chatinfotext">	4.	Have your warranty details on hand to expedite the support process.</p>
            <p className="chatinfotext">5.	It is helpful to have your order confirmation email available.</p>
            <p className="chatinfotext">6.	Please be ready to share your contact information for follow-up.</p>
            <p className="chatinfotext">7.	If possible, take note of any error messages you have encountered.</p>
            <p className="chatinfotext">8.	Keep your product’s serial number accessible for troubleshooting purposes.</p>
            <p className="chatinfotext">9.	Ensure you know the purchase date of your product when initiating the chat.</p>
            <p className="chatinfotext">10.	Be prepared to describe any troubleshooting steps you have already taken.</p>
          </div>
        </div>
    </div>
  );
};

export default ChatPage;
