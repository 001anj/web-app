'use client';
import { useState } from 'react';

export default function Exercise17() {
  const [result, setResult] = useState('');

  const triggerAlert = () => {
    window.alert('This is a simple alert message!');
    setResult('Alert was triggered');
  };

  const triggerConfirm = () => {
    const res = window.confirm('Do you accept the terms?');
    setResult(res ? 'Confirm accepted' : 'Confirm dismissed');
  };

  const triggerPrompt = () => {
    const res = window.prompt('Please enter your name:', 'John Doe');
    setResult(res ? `Prompt returned: ${res}` : 'Prompt cancelled');
  };

  return (
    <div>
      <h2>Exercise 17: Work with Browser Dialogs</h2>
      <p style={{marginBottom: '24px', color: 'var(--text-secondary)'}}>
        Test scenario: Automate interacting with native browser dialogs (Alert, Confirm, Prompt). Playwright auto-dismisses them by default, so you need to handle the dialog event.
      </p>

      <div style={{display: 'flex', gap: '16px', marginBottom: '24px'}}>
        <button id="alert-btn" className="btn-primary" onClick={triggerAlert}>Trigger Alert</button>
        <button id="confirm-btn" className="btn-primary" onClick={triggerConfirm}>Trigger Confirm</button>
        <button id="prompt-btn" className="btn-primary" onClick={triggerPrompt}>Trigger Prompt</button>
      </div>

      <div id="dialog-result" style={{padding: '16px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px'}}>
        Result: <strong>{result || 'None'}</strong>
      </div>
    </div>
  );
}
