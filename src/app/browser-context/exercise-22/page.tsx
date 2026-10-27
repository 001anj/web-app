'use client';

export default function Exercise22() {
  const openPopup = () => {
    window.open('/browser-context/exercise-22', 'popupWindow', 'width=600,height=400');
  };

  return (
    <div>
      <h2>Exercise 22: Handle Pop-Up Windows</h2>
      <p style={{marginBottom: '24px', color: 'var(--text-secondary)'}}>
        Test scenario: Click the button to open a popup window. Intercept the popup event in Playwright and verify it.
      </p>

      <button id="open-popup-btn" className="btn-primary" onClick={openPopup}>
        Open Popup Window
      </button>
      
      <div style={{marginTop: '32px', padding: '16px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px'}}>
        <h3 id="popup-content">Popup content area</h3>
        <p>This text is visible if you are inside the popup or on the same page.</p>
      </div>
    </div>
  );
}
