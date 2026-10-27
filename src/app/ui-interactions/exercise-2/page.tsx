'use client';
import { useState } from 'react';

export default function Exercise2() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password) {
      setError('Username and password are required.');
    } else if (username !== 'admin' || password !== 'admin123') {
      setError('Invalid credentials. Please try again.');
    } else {
      setError('You are not supposed to login successfully in this exercise!');
    }
  };

  return (
    <div>
      <h2>Exercise 2: Validate Incorrect Login Credentials</h2>
      <p style={{marginBottom: '24px', color: 'var(--text-secondary)'}}>
        Test scenario: Enter invalid credentials and verify that the error messages are displayed correctly.
      </p>

      {error && (
        <div className="alert alert-error" id="error-message" data-testid="login-error">
          {error}
        </div>
      )}

      <form onSubmit={handleLogin} id="login-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
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
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" id="login-btn" className="btn-primary">
          Log In
        </button>
      </form>
    </div>
  );
}
