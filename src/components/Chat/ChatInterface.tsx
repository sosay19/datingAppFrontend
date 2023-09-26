// ChatInterface.tsx

import React, { useState, useEffect } from 'react';
import Message from './Message'; // Assuming you have a Message component

interface Message {
    id: number;
    text: string;
    sender: string;
}

const ChatInterface: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [newMessage, setNewMessage] = useState<string>('');

    const handleSendMessage = () => {
        if (newMessage.trim() !== '') {
            const message: Message = {
                id: messages.length + 1,
                text: newMessage,
                sender: 'You', // You can customize the sender logic
            };
            setMessages([...messages, message]);
            setNewMessage('');
        }
    };

    useEffect(() => {
        // Simulate receiving a message from another user (e.g., from a WebSocket or API)
        const receivedMessage: Message = {
            id: messages.length + 1,
            text: 'Hello there!',
            sender: 'Friend',
        };
        setTimeout(() => {
            setMessages([...messages, receivedMessage]);
        }, 3000); // Simulate receiving a message after 3 seconds
    }, [messages]);

    return (
        <div className="chat-interface">
            <div className="chat-messages">
                {messages.map((message) => (
                    <Message key={message.id} message={message} />
                ))}
            </div>
            <div className="chat-input">
                <input
                    type="text"
                    placeholder="Type your message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                />
                <button onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    );
};

export default ChatInterface;
