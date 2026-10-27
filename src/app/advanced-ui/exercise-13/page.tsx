'use client';
import { useState } from 'react';

export default function Exercise13() {
  const [standard, setStandard] = useState('');
  const [customOpen, setCustomOpen] = useState(false);
  const [custom, setCustom] = useState('Select an option');

  return (
    <div>
      <h2>Exercise 13: Handle Dropdown Lists</h2>
      <p style={{marginBottom: '24px', color: 'var(--text-secondary)'}}>
        Test scenario: Select options from both a standard HTML &lt;select&gt; and a custom div-based dropdown.
      </p>

      <div className="form-group" style={{maxWidth: '300px', marginBottom: '32px'}}>
        <label htmlFor="standard-dropdown">Standard Dropdown</label>
        <select 
          id="standard-dropdown" 
          className="form-control"
          value={standard}
          onChange={(e) => setStandard(e.target.value)}
        >
          <option value="">Select a color</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
        </select>
        <p style={{marginTop: '8px', fontSize: '14px', color: 'var(--accent-hover)'}} id="standard-result">
          {standard && `You selected: ${standard}`}
        </p>
      </div>

      <div className="form-group" style={{maxWidth: '300px'}}>
        <label>Custom Dropdown (Div based)</label>
        <div style={{position: 'relative'}}>
          <div 
            id="custom-dropdown-toggle"
            className="form-control" 
            style={{cursor: 'pointer', userSelect: 'none'}}
            onClick={() => setCustomOpen(!customOpen)}
          >
            {custom}
          </div>
          {customOpen && (
            <div 
              id="custom-dropdown-menu"
              style={{
                position: 'absolute', top: '100%', left: 0, width: '100%', 
                background: '#1e293b', border: '1px solid var(--glass-border)', 
                borderRadius: '8px', marginTop: '4px', zIndex: 10
              }}
            >
              {['Option A', 'Option B', 'Option C'].map(opt => (
                <div 
                  key={opt}
                  className="custom-option"
                  style={{padding: '12px 16px', cursor: 'pointer', transition: 'background 0.2s'}}
                  onClick={() => { setCustom(opt); setCustomOpen(false); }}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                >
                  {opt}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
