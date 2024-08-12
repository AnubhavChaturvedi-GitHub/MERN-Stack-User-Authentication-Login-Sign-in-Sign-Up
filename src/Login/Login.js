// src/Login.js
import React, { useState } from 'react';
import './Login.css';
import Notification from '../Notification/Notification';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [notification, setNotification] = useState({ message: '', type: '', visible: false });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        setNotification({ message: '', type: 'loading', visible: true });

        try {
            const response = await fetch('http://localhost:5000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('token', data.token); // Save the JWT token
                setNotification({ message: 'Login successful!', type: 'success', visible: true });

                setTimeout(() => {
                    setNotification({ ...notification, visible: false });
                    navigate('/profile'); // Redirect to profile page
                }, 2000);
            } else {
                setNotification({ message: data.message || 'Something went wrong. Please try again.', type: 'error', visible: true });
            }
        } catch (error) {
            console.error('Error:', error);
            setNotification({ message: 'Server error. Please try again later.', type: 'error', visible: true });
        } finally {
            setTimeout(() => setNotification({ ...notification, visible: false }), 2000);
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h2>Sign In</h2>
                <form onSubmit={handleSubmit} className="login-form">
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <div className="line-input">
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <span className="line"></span>
                        </div>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <div className="line-input">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <i
                                className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'} password-toggle`}
                                onClick={() => setShowPassword(!showPassword)}
                            ></i>
                            <span className="line"></span>
                        </div>
                    </div>
                    {notification.visible && (
                        <Notification
                            message={notification.message}
                            type={notification.type}
                            visible={notification.visible}
                            onClose={() => setNotification({ ...notification, visible: false })}
                        />
                    )}
                    <button type="submit" className="login-button">Sign In</button>
                </form>
                <p>
                    Don't have an account? <a href="#" onClick={() => navigate('/register')}>Sign Up</a>
                </p>
            </div>
        </div>
    );
};

export default Login;
