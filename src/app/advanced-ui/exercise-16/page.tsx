'use client';
import { useState } from 'react';

export default function Exercise16() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <h2>Exercise 16: Handle Modal Windows</h2>
      <p style={{marginBottom: '24px', color: 'var(--text-secondary)'}}>
        Test scenario: Click the button to open a modal, verify its contents, and close it.
      </p>

      <button id="open-modal-btn" className="btn-primary" onClick={() => setIsModalOpen(true)}>
        Open Modal
      </button>

      {isModalOpen && (
        <div 
          className="modal-overlay" 
          style={{
            position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', 
            background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', 
            justifyContent: 'center', zIndex: 100
          }}
        >
          <div 
            id="simple-modal" 
            className="card" 
            style={{minWidth: '400px', margin: '20px'}}
          >
            <h3 id="modal-title" style={{marginBottom: '16px'}}>Information Modal</h3>
            <p id="modal-content" style={{marginBottom: '24px', color: 'var(--text-secondary)'}}>
              This is a custom modal window. You need to automate closing it.
            </p>
            <div style={{display: 'flex', justifyContent: 'flex-end', gap: '12px'}}>
              <button 
                id="close-modal-btn" 
                className="btn-primary" 
                style={{background: 'var(--glass-bg)', border: '1px solid var(--glass-border)'}}
                onClick={() => setIsModalOpen(false)}
              >
                Close
              </button>
              <button 
                id="save-modal-btn" 
                className="btn-primary"
                onClick={() => setIsModalOpen(false)}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
