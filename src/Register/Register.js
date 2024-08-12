// src/Register.js
import React, { useState } from 'react';
import './Register.css';
import Notification from '../Notification/Notification';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [notification, setNotification] = useState({ message: '', type: '', visible: false });
    const navigate = useNavigate();

    const validatePassword = (pwd) => {
        const regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        return regex.test(pwd);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setNotification({ message: '', type: 'loading', visible: true });

        if (!validatePassword(password)) {
            setNotification({ message: 'Password must contain at least one number, one symbol, one uppercase letter, and one lowercase letter.', type: 'error', visible: true });
            return;
        }
        if (password !== confirmPassword) {
            setNotification({ message: 'Passwords do not match.', type: 'error', visible: true });
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                setNotification({ message: 'Registration successful! Redirecting to login...', type: 'success', visible: true });
                setTimeout(() => {
                    setNotification({ ...notification, visible: false });
                    navigate('/login'); // Redirect to login page after 2 seconds
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
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit} className="login-form">
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <div className="line-input">
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                            <span className="line"></span>
                        </div>
                    </div>
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
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <div className="line-input">
                            <input
                                type={showConfirmPassword ? 'text' : 'password'}
                                id="confirm-password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                            <i
                                className={`fas ${showConfirmPassword ? 'fa-eye-slash' : 'fa-eye'} password-toggle`}
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
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
                    <button type="submit" className="login-button">Sign Up</button>
                </form>
                <p>
                    Already have an account? <a href="#" onClick={() => navigate('/login')}>Sign In</a>
                </p>
            </div>
        </div>
    );
};

export default Register;
