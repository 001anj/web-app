'use client';
import { useState, useEffect } from 'react';

export default function Exercise4() {
  const [showDelayedButton, setShowDelayedButton] = useState(false);
  const [dynamicId, setDynamicId] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Generate a dynamic ID that changes every time the component loads
    setDynamicId(`btn-${Math.random().toString(36).substring(2, 9)}`);

    // Show button after 3 seconds
    const timer = setTimeout(() => {
      setShowDelayedButton(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h2>Exercise 4: Work with Dynamic Elements</h2>
      <p style={{marginBottom: '24px', color: 'var(--text-secondary)'}}>
        Test scenario: Wait for the button to appear and click it. The button has a dynamic ID that changes every reload. Use a locator based on text or data attributes.
      </p>

      {message && (
        <div className="alert alert-success" id="dynamic-message">
          {message}
        </div>
      )}

      <div style={{ height: '100px', display: 'flex', alignItems: 'center' }}>
        {showDelayedButton ? (
          <button 
            id={dynamicId} 
            data-testid="dynamic-button"
            className="btn-primary"
            onClick={() => setMessage('Dynamic button clicked!')}
          >
            Click me! I appeared after delay
          </button>
        ) : (
          <div style={{ color: 'var(--text-secondary)' }}>
            Loading button... (wait 3 seconds)
          </div>
        )}
      </div>
    </div>
  );
}
