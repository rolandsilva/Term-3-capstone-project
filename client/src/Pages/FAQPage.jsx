import React from 'react';
import "./FAQPage.css";

const FAQPage = () => {
  const faqs = [
    { question: "What are the different types of Apple computers?", answer: "Apple offers MacBook, MacBook Air, MacBook Pro, iMac, Mac Pro, and Mac Mini." },
    { question: "How do I update my Mac?", answer: "You can update your Mac by going to System Preferences > Software Update." },
    { question: "What should I do if my Mac won't turn on?", answer: "Check the power connection, try a different power outlet, and reset the SMC." },
    { question: "How can I back up my Mac?", answer: "You can back up your Mac using Time Machine with an external hard drive." },
    { question: "What is macOS?", answer: "macOS is the operating system designed by Apple to run on their Mac computers." },
    { question: "How do I use AirDrop on my Mac?", answer: "Open Finder, select AirDrop from the sidebar, and make sure Bluetooth and Wi-Fi are turned on." },
    { question: "How can I optimize my Mac's performance?", answer: "Close unused applications, keep your macOS updated, and manage startup items." },
    { question: "What should I do if my Mac is running slow?", answer: "Check for software updates, free up disk space, and consider adding more RAM." },
    { question: "How do I connect my Mac to an external display?", answer: "Use an HDMI cable or a DisplayPort adapter to connect your Mac to an external display." },
    { question: "How can I secure my Mac?", answer: "Enable FileVault, use strong passwords, and keep your software up to date." },
  ];

  return (
    <>
      <div className="faq-container">
        <section className="faq-info">
          <div className="info-title">Frequently Asked Questions</div>
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <p className="faq-question">{faq.question}</p>
              <p className="faq-answer">{faq.answer}</p>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

export default FAQPage;