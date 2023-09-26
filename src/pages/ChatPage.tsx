// ChatPage.tsx

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Assuming you're using React Router for routing
import ChatMessage from './ChatMessage'; // Create a ChatMessage component to display messages

interface ChatPageProps {
  // You can add any necessary props here
}

const ChatPage: React.FC<ChatPageProps> = ({}) => {
  const { chatId } = useParams(); // Retrieve the chatId from the URL parameters
  const [messages, setMessages] = useState<string[]>([]);
  const [newMessage, setNewMessage] = useState<string>('');

  // Simulate fetching initial chat messages from an API
  useEffect(() => {
    // Replace this with actual API calls to fetch chat messages based on chatId
    const fetchChatMessages = async () => {
      try {
        const response = await fetch(`/api/chat/${chatId}/messages`);
        const data = await response.json();
        setMessages(data.messages);
      } catch (error) {
        console.error('Error fetching chat messages:', error);
      }
    };

    fetchChatMessages();
  }, [chatId]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewMessage(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Add the new message to the state and clear the input field
    setMessages([...messages, newMessage]);
    setNewMessage('');
  };

  return (
    <div className="chat-page">
      <h2>Chat Room: {chatId}</h2>
      <div className="chat-messages">
        {messages.map((message, index) => (
          <ChatMessage key={index} message={message} />
        ))}
      </div>
      <form onSubmit={handleSubmit} className="message-input-form">
        <input
          type="text"
          value={newMessage}
          onChange={handleInputChange}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatPage;
