// Message.tsx

import React from 'react';

interface MessageProps {
  message: {
    id: number;
    text: string;
    sender: string;
  };
}

const Message: React.FC<MessageProps> = ({ message }) => {
  const { text, sender } = message;

  return (
    <div className={`message ${sender === 'You' ? 'sent' : 'received'}`}>
      <div className="message-sender">{sender}</div>
      <div className="message-text">{text}</div>
    </div>
  );
};

export default Message;
