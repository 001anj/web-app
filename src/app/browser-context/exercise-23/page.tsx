export default function Exercise23() {
  return (
    <div>
      <h2>Exercise 23: Automate an Embedded iframe</h2>
      <p style={{marginBottom: '24px', color: 'var(--text-secondary)'}}>
        Test scenario: Switch to the iframe context and interact with the button inside it.
      </p>

      <div style={{border: '2px solid var(--glass-border)', borderRadius: '8px', overflow: 'hidden'}}>
        <iframe 
          id="test-iframe"
          src="/browser-context/iframe-content"
          width="100%"
          height="300px"
          frameBorder="0"
          title="Test iframe"
        />
      </div>
    </div>
  );
}
