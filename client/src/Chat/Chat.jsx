import React, { useEffect, useRef } from "react";
import './Chat.css';
import User from "../usernavbar/user";

const Chat = () => {
    
  const messagesRef = useRef(null);
  const inputRef = useRef(null);
  const ws = useRef(null);
  const isWebSocketOpen = useRef(false);

  useEffect(() => {
    // Initialize WebSocket connection
    ws.current = new WebSocket('ws://localhost:3000');

    ws.current.addEventListener('open', () => {
      console.log('WebSocket connected');
      isWebSocketOpen.current = true;
    });

    ws.current.addEventListener('close', () => {
      console.log('WebSocket disconnected');
      isWebSocketOpen.current = false;
    });

    ws.current.addEventListener('message', (event) => {
      const message = event.data;
      displayMessage(message);
    });

    // Cleanup WebSocket on component unmount
    return () => {
      if (ws.current) {
        ws.current.close();
      }
    };
  }, []);

  const displayMessage = (message, isSender = false) => {
    if (!messagesRef.current) return;

    const messageContainer = document.createElement('div');
    const messageElement = document.createElement('div');
    messageElement.textContent = message;

    messageContainer.classList.add('message-container');

    if (isSender) {
      messageContainer.classList.add('sender-message-container');
      messageElement.classList.add('message-bubble', 'sender-message-bubble');
    } else {
      messageElement.classList.add('message-bubble');
    }

    messageContainer.appendChild(messageElement);
    messagesRef.current.appendChild(messageContainer);

    // Scroll to the bottom
    messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
  };

  const handleSendMessage = () => {
    const message = inputRef.current.value.trim();
    if (message) {
      if (isWebSocketOpen.current) {
        ws.current.send(message);
      }
      displayMessage(message, true); // Display message immediately
      inputRef.current.value = '';
    }
  };

  return (
    
    <div className="chat-container">
      <div className="messages-container" ref={messagesRef}></div>
      <div className="message-input-container">
        <input
          type="text"
          placeholder="Type a message..."
          ref={inputRef}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
   
  );
};

export default Chat;
