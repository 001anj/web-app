'use client';
import { useState } from 'react';

export default function IframeContent() {
  const [clicked, setClicked] = useState(false);

  return (
    <div style={{
      padding: '24px', 
      background: '#1e293b', 
      color: 'white', 
      height: '100vh', 
      fontFamily: 'sans-serif'
    }}>
      <h2 id="iframe-title">Iframe Content Area</h2>
      <p style={{marginBottom: '16px'}}>This content is loaded inside an iframe.</p>
      
      {clicked ? (
        <div id="iframe-success-msg" style={{color: '#10b981', fontWeight: 'bold'}}>
          Button inside iframe clicked!
        </div>
      ) : (
        <button 
          id="iframe-btn" 
          onClick={() => setClicked(true)}
          style={{
            padding: '8px 16px', background: '#6366f1', color: 'white', 
            border: 'none', borderRadius: '4px', cursor: 'pointer'
          }}
        >
          Click Me Inside Iframe
        </button>
      )}
    </div>
  );
}
