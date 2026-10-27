'use client';
import { useState, useEffect } from 'react';

export default function Exercise25() {
  const [localStorageVal, setLocalStorageVal] = useState('');
  const [cookieVal, setCookieVal] = useState('');

  useEffect(() => {
    // Read from local storage
    const val = localStorage.getItem('playwright_test_key');
    if (val) setLocalStorageVal(val);

    // Read from cookie
    const cookies = document.cookie.split(';');
    const testCookie = cookies.find(c => c.trim().startsWith('playwright_cookie='));
    if (testCookie) {
      setCookieVal(testCookie.split('=')[1]);
    }
  }, []);

  const saveToStorage = () => {
    localStorage.setItem('playwright_test_key', 'PlaywrightLocalStorageValue');
    document.cookie = "playwright_cookie=PlaywrightCookieValue; path=/";
    alert('Data saved to Local Storage and Cookies! Reload the page to see them.');
  };

  const clearStorage = () => {
    localStorage.removeItem('playwright_test_key');
    document.cookie = "playwright_cookie=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setLocalStorageVal('');
    setCookieVal('');
  };

  return (
    <div>
      <h2>Exercise 25: Use Cookies and Local Storage</h2>
      <p style={{marginBottom: '24px', color: 'var(--text-secondary)'}}>
        Test scenario: Automate setting local storage and cookies via Playwright context, then reload the page and verify they are displayed below.
      </p>

      <div style={{display: 'flex', gap: '16px', marginBottom: '24px'}}>
        <button id="save-storage-btn" className="btn-primary" onClick={saveToStorage}>Save Data (For Manual Test)</button>
        <button id="clear-storage-btn" className="btn-primary" style={{background: 'var(--error-color)'}} onClick={clearStorage}>Clear Data</button>
      </div>

      <div style={{display: 'grid', gap: '16px'}}>
        <div className="card" style={{padding: '16px'}}>
          <h3>Local Storage</h3>
          <p>Key: <code>playwright_test_key</code></p>
          <p>Value found: <strong id="local-storage-value" style={{color: 'var(--accent-hover)'}}>{localStorageVal || 'None'}</strong></p>
        </div>

        <div className="card" style={{padding: '16px'}}>
          <h3>Cookies</h3>
          <p>Name: <code>playwright_cookie</code></p>
          <p>Value found: <strong id="cookie-value" style={{color: 'var(--accent-hover)'}}>{cookieVal || 'None'}</strong></p>
        </div>
      </div>
    </div>
  );
}
