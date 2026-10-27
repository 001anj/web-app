'use client';
import { useState } from 'react';

export default function Exercise1() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin123') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials entered. Please use: admin / admin123');
    }
  };

  if (isLoggedIn) {
    return (
      <div id="welcome-message" className="alert alert-success">
        <h2>Welcome, {username}!</h2>
        <p>You have successfully logged in.</p>
        <button className="btn-primary" onClick={() => setIsLoggedIn(false)}>Log Out</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Exercise 1: Automate a Login Form</h2>
      <p style={{marginBottom: '24px', color: 'var(--text-secondary)'}}>
        Test scenario: Enter valid credentials and verify that the user is logged in successfully.
      </p>

      <form onSubmit={handleLogin} id="login-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            data-testid="username-input"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            data-testid="password-input"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" id="login-btn" data-testid="login-button" className="btn-primary">
          Log In
        </button>
      </form>
    </div>
  );
}
