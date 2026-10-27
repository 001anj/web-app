'use client';

export default function Exercise20() {
  // Create a data URI for a sample text file
  const fileContent = "This is a sample downloaded file from the Playwright course application.";
  const dataUri = `data:text/plain;charset=utf-8,${encodeURIComponent(fileContent)}`;

  return (
    <div>
      <h2>Exercise 20: Download and Verify a File</h2>
      <p style={{marginBottom: '24px', color: 'var(--text-secondary)'}}>
        Test scenario: Click the download button, wait for the download event, and verify the file name and its contents.
      </p>

      <div className="card" style={{display: 'inline-block', padding: '24px', textAlign: 'center'}}>
        <h3 style={{marginBottom: '16px'}}>Sample Document.txt</h3>
        <a 
          id="download-btn" 
          href={dataUri} 
          download="sample-document.txt"
          className="btn-primary"
          style={{display: 'inline-block'}}
        >
          Download File
        </a>
      </div>
    </div>
  );
}
