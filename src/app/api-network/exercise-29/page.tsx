'use client';
import { useState } from 'react';

export default function Exercise29() {
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    setErrorMsg('');
    try {
      const res = await fetch('/api/error');
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || 'Unknown error occurred');
      }
    } catch (e: any) {
      setErrorMsg(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Exercise 29: Test Failed API Responses</h2>
      <p style={{marginBottom: '24px', color: 'var(--text-secondary)'}}>
        Test scenario: Automate clicking the button that triggers a failing API call (500 Internal Server Error) and verify that the error message is displayed in the UI.
      </p>

      <button id="fetch-error-btn" className="btn-primary" onClick={fetchData} disabled={loading}>
        {loading ? 'Fetching...' : 'Fetch Data'}
      </button>

      {errorMsg && (
        <div id="error-message-container" className="alert alert-error" style={{marginTop: '24px'}}>
          <strong>Error:</strong> <span id="error-text">{errorMsg}</span>
        </div>
      )}
    </div>
  );
}
