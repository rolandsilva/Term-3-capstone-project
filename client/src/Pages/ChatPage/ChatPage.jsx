import React from 'react';
import './ChatPage.css';

const ChatPage = () => {
  return (
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
              <li><strong>MacBook Air</strong> - Lightweight, powerful, and portable.</li>
              <li><strong>MacBook Pro</strong> - High performance for professional use.</li>
              <li><strong>Dell XPS 13</strong> - Sleek design with powerful specs.</li>
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
            <p>Of course! The MacBook Pro comes with an M1 chip, 16GB of RAM, and a 512GB SSD. It's perfect for heavy tasks like video editing and software development.</p>
          </div>
        </div>
      </div>
      <div className="chat-input">
        <input type="text" placeholder="Type a message..." />
        <button>Send</button>
      </div>
    </div>
  );
}

export default ChatPage;