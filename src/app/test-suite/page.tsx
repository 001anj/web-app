import { Settings } from 'lucide-react';

export default function Module8Page() {
  return (
    <div>
      <h1 className="page-title">Module 8: Improving the Test Suite</h1>
      <p className="page-subtitle">Best practices, refactoring, and Continuous Integration.</p>

      <div className="card">
        <h3 style={{marginBottom: '16px'}}>In this module you will focus on improving the code:</h3>
        <ul style={{listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', color: 'var(--text-secondary)'}}>
          <li>👉 Refactoring tests using Page Object Model (POM).</li>
          <li>👉 Creating reusable Fixtures and helper functions.</li>
          <li>👉 Replacing hardcoded data with environment variables (ENV) and external data files.</li>
          <li>👉 Running tests across multiple browsers simultaneously (Cross-browser testing).</li>
          <li>👉 Parallel test execution and Playwright configuration.</li>
          <li>👉 Generating screenshots, videos, trace files, and advanced HTML reports.</li>
          <li>👉 Configuring and running tests on CI/CD (GitHub Actions).</li>
        </ul>

        <div className="alert" style={{marginTop: '32px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px', color: 'var(--text-primary)'}}>
            <Settings size={20} />
            <strong>Playwright Config Tasks</strong>
          </div>
          Similar to Module 1, this module is based on refactoring your test code (e.g., <code>playwright.config.ts</code>), so it does not have its own graphical interface exercises.
          It's time to polish what you have already built!
        </div>
      </div>
    </div>
  );
}
