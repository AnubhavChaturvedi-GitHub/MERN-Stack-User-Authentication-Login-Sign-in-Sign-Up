import React, { useEffect, useState } from 'react';
import './Notification.css'; // Create this CSS file for styling

const Notification = ({ message, type, visible, onClose }) => {
    useEffect(() => {
        if (visible) {
            const timer = setTimeout(() => {
                onClose();
            }, 3000); // Notification disappears after 3 seconds
            return () => clearTimeout(timer);
        }
    }, [visible, onClose]);

    if (!visible) return null;

    return (
        <div className={`notification ${type}`}>
            {type === 'loading' && <div className="loader"></div>}
            {message && <p>{message}</p>}
        </div>
    );
};

export default Notification;
