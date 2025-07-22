import React, { useState, useEffect, useRef } from "react";
import "./unibot.css";

const UniBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Sample bot responses
  const botResponses = {
    greeting: [
      "Hi there! I'm Uni Bot, your university course finder assistant. How can I help you today?",
      "Hello! Welcome to UniCracker. I can help you find university courses based on your Z-score. What would you like to know?",
    ],
    zScore: [
      "Based on your Z-score of {score}, you might be eligible for programs in Engineering, Medicine, and Computer Science at top universities in Sri Lanka.",
      "With a Z-score of {score}, I recommend checking out programs at University of Colombo, University of Peradeniya, and University of Moratuwa.",
    ],
    general: [
      "I can help you find university courses based on your Z-score, district, and stream. Would you like to know more?",
      "UniCracker helps you discover the best university options based on your qualifications. What specific information are you looking for?",
      "I'm here to guide you through your university selection process. Feel free to ask me anything about courses, universities, or admission requirements.",
    ],
    unknown: [
      "I'm not sure I understand. Could you rephrase your question?",
      "I'm still learning! Could you ask that in a different way?",
      "I don't have information on that yet. Would you like to know about university courses based on Z-scores instead?",
    ],
  };

  // Toggle chat window
  const toggleChat = () => {
    setIsOpen(!isOpen);

    // If opening the chat and no messages yet, send greeting
    if (!isOpen && messages.length === 0) {
      setTimeout(() => {
        const greeting =
          botResponses.greeting[
            Math.floor(Math.random() * botResponses.greeting.length)
          ];
        setMessages([{ text: greeting, sender: "bot" }]);
      }, 500);
    }
  };

  // Send message
  const sendMessage = (e) => {
    e.preventDefault();

    if (inputMessage.trim() === "") return;

    // Add user message
    const newMessages = [...messages, { text: inputMessage, sender: "user" }];
    setMessages(newMessages);
    setInputMessage("");

    // Simulate bot typing
    setIsTyping(true);

    // Generate bot response after delay
    setTimeout(() => {
      setIsTyping(false);

      let response;

      // Check for Z-score related queries
      if (
        inputMessage.toLowerCase().includes("z-score") ||
        inputMessage.toLowerCase().includes("zscore")
      ) {
        const scoreMatch = inputMessage.match(/\d+(\.\d+)?/);
        const score = scoreMatch ? scoreMatch[0] : "1.5";
        response = botResponses.zScore[
          Math.floor(Math.random() * botResponses.zScore.length)
        ].replace("{score}", score);
      }
      // General queries
      else if (
        inputMessage.toLowerCase().includes("help") ||
        inputMessage.toLowerCase().includes("course") ||
        inputMessage.toLowerCase().includes("university")
      ) {
        response =
          botResponses.general[
            Math.floor(Math.random() * botResponses.general.length)
          ];
      }
      // Unknown queries
      else {
        response =
          botResponses.unknown[
            Math.floor(Math.random() * botResponses.unknown.length)
          ];
      }

      setMessages([...newMessages, { text: response, sender: "bot" }]);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  };

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Show welcome message when component mounts (page loads)
  useEffect(() => {
    // Check if we're on the home page
    const isHomePage =
      window.location.pathname === "/" ||
      window.location.pathname === "/index.html";

    if (isHomePage) {
      // Auto-open chat with delay
      setTimeout(() => {
        setIsOpen(true);

        // Send welcome message with delay
        setTimeout(() => {
          const greeting =
            "👋 Hi there! I'm Uni Bot. I can help you find the perfect university course based on your Z-score. Feel free to ask me anything!";
          setMessages([{ text: greeting, sender: "bot" }]);
        }, 500);
      }, 2000); // 2 seconds after page load
    }
  }, []);

  return (
    <div className="unibot-container">
      {/* Chat toggle button */}
      <button
        className={`unibot-toggle ${isOpen ? "open" : ""}`}
        onClick={toggleChat}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          <i className="fas fa-times"></i>
        ) : (
          <img
            src="/images/chatbot-icon.png"
            alt="Uni Bot"
            className="unibot-icon"
          />
        )}
      </button>

      {/* Chat window */}
      <div className={`unibot-chat-window ${isOpen ? "open" : ""}`}>
        <div className="unibot-header">
          <div className="unibot-avatar">
            <img src="/images/chatbot-icon.png" alt="Uni Bot" />
          </div>
          <div className="unibot-info">
            <h3>Uni Bot</h3>
            <span className="unibot-status">Online</span>
          </div>
          <button className="unibot-close" onClick={toggleChat}>
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="unibot-messages">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`unibot-message ${
                message.sender === "bot" ? "bot" : "user"
              }`}
            >
              {message.sender === "bot" && (
                <div className="unibot-avatar-small">
                  <img src="/images/chatbot-icon.png" alt="Uni Bot" />
                </div>
              )}
              <div className="unibot-bubble">{message.text}</div>
            </div>
          ))}

          {isTyping && (
            <div className="unibot-message bot">
              <div className="unibot-avatar-small">
                <img src="/images/chatbot-icon.png" alt="Uni Bot" />
              </div>
              <div className="unibot-bubble typing">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        <form className="unibot-input" onSubmit={sendMessage}>
          <input
            type="text"
            placeholder="Ask about university courses..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
          />
          <button type="submit" disabled={inputMessage.trim() === ""}>
            <i className="fas fa-paper-plane"></i>
          </button>
        </form>

        <div className="unibot-footer">
          <p>Powered by UniCracker</p>
        </div>
      </div>
    </div>
  );
};

export default UniBot;
