import React, { useState, useEffect } from 'react';
import './Profile.css';
import { useNavigate } from 'react-router-dom';
import Notification from '../Notification/Notification';

const Profile = () => {
    const [user, setUser] = useState(null);
    const [notification, setNotification] = useState({ message: '', type: '', visible: false });
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProfile = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                navigate('/login');
                return;
            }

            try {
                const response = await fetch('http://localhost:5000/api/profile', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });

                const data = await response.json();

                if (response.ok) {
                    setUser(data);
                } else {
                    setNotification({ message: data.message || 'Failed to load profile.', type: 'error', visible: true });
                    navigate('/login');
                }
            } catch (error) {
                console.error('Error:', error);
                setNotification({ message: 'Server error. Please try again later.', type: 'error', visible: true });
                navigate('/login');
            }
        };

        fetchProfile();
    }, [navigate]);

    return (
        <div className="profile-container">
            {notification.visible && (
                <Notification
                    message={notification.message}
                    type={notification.type}
                    visible={notification.visible}
                    onClose={() => setNotification({ ...notification, visible: false })}
                />
            )}
            <div className="profile-card">
                <div className="logout-button">
                    <button onClick={() => {
                        localStorage.removeItem('token');
                        navigate('/login');
                    }}>Logout</button>
                </div>
                <div className="profile-header">
                    <div className="profile-photo">
                        {user?.photo ? (
                            <img src={user.photo} alt="Profile" />
                        ) : (
                            <div className="profile-placeholder">
                                {user?.username?.charAt(0) || '👤'}
                            </div>
                        )}
                    </div>
                    <h2>Profile</h2>
                </div>
                <div className="profile-info">
                    <p><strong>Username:</strong> {user?.username}</p>
                    <p><strong>Email:</strong> {user?.email}</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;
