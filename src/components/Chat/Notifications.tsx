// Notifications.tsx

import React, { useState } from 'react';

interface Notification {
    id: number;
    message: string;
    type: 'info' | 'success' | 'warning' | 'error';
}

const Notifications: React.FC = () => {
    const [notifications, setNotifications] = useState<Notification[]>([]);

    const addNotification = (message: string, type: Notification['type']) => {
        const newNotification: Notification = {
            id: Date.now(),
            message,
            type,
        };
        setNotifications([...notifications, newNotification]);
    };

    const removeNotification = (id: number) => {
        const updatedNotifications = notifications.filter((notification) => notification.id !== id);
        setNotifications(updatedNotifications);
    };

    return (
        <div className="notifications-container">
            {notifications.map((notification) => (
                <div
                    key={notification.id}
                    className={`notification notification-${notification.type}`}
                >
                    <span className="notification-message">{notification.message}</span>
                    <button
                        className="notification-close"
                        onClick={() => removeNotification(notification.id)}
                    >
                        &times;
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Notifications;
