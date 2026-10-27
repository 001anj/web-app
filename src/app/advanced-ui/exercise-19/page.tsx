'use client';
import { useState } from 'react';

export default function Exercise19() {
  const [fileName, setFileName] = useState('');
  const [uploaded, setUploaded] = useState(false);

  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault();
    if (fileName) {
      setUploaded(true);
    }
  };

  return (
    <div>
      <h2>Exercise 19: Upload and Validate a File</h2>
      <p style={{marginBottom: '24px', color: 'var(--text-secondary)'}}>
        Test scenario: Automate file uploading using Playwright's setInputFiles and verify the success message.
      </p>

      {uploaded ? (
        <div id="upload-success" className="alert alert-success">
          File <strong>{fileName}</strong> was successfully uploaded!
        </div>
      ) : (
        <form onSubmit={handleUpload} style={{maxWidth: '400px'}}>
          <div className="form-group">
            <label htmlFor="file-upload">Select a file to upload</label>
            <input 
              type="file" 
              id="file-upload" 
              className="form-control" 
              style={{padding: '8px'}}
              onChange={(e) => setFileName(e.target.files?.[0]?.name || '')}
              required
            />
          </div>
          <button type="submit" id="upload-btn" className="btn-primary">
            Upload File
          </button>
        </form>
      )}
    </div>
  );
}
