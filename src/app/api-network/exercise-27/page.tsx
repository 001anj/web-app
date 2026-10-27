'use client';
import { useState } from 'react';

export default function Exercise27() {
  const [result, setResult] = useState<any>(null);

  const testApi = async () => {
    try {
      const res = await fetch('/api/products');
      const data = await res.json();
      setResult({
        status: res.status,
        headers: Object.fromEntries(res.headers.entries()),
        data
      });
    } catch (e: any) {
      setResult({ error: e.message });
    }
  };

  return (
    <div>
      <h2>Exercise 27: Validate an API Response</h2>
      <p style={{marginBottom: '24px', color: 'var(--text-secondary)'}}>
        Test scenario: Use Playwright to make a GET request to <code>/api/products</code>. Validate the status code (200), specific headers, and the response body.
      </p>

      <button id="test-api-btn" className="btn-primary" onClick={testApi}>
        Trigger API Request (Manual Test)
      </button>

      {result && (
        <div style={{marginTop: '24px', background: '#1e293b', padding: '16px', borderRadius: '8px', overflow: 'auto'}}>
          <pre style={{fontSize: '12px', color: 'var(--success-color)'}}>
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}
