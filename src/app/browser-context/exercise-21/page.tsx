export default function Exercise21() {
  return (
    <div>
      <h2>Exercise 21: Work with Multiple Tabs</h2>
      <p style={{marginBottom: '24px', color: 'var(--text-secondary)'}}>
        Test scenario: Click the link below to open a new tab. Switch Playwright context to the new tab, verify its title or content, and close it.
      </p>

      <a 
        id="new-tab-link"
        href="/browser-context/exercise-21" 
        target="_blank" 
        rel="noopener noreferrer"
        className="btn-primary"
        style={{display: 'inline-block'}}
      >
        Open New Tab
      </a>

      <div style={{marginTop: '32px', padding: '16px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px'}}>
        <h3 id="target-header">This is the target page</h3>
        <p>If you see this in a new tab, you successfully switched context!</p>
      </div>
    </div>
  );
}
