import { CheckCircle2 } from 'lucide-react';

export default function Module1Page() {
  return (
    <div>
      <h1 className="page-title">Module 1: Course Setup and Playwright Essentials</h1>
      <p className="page-subtitle">Introduction, configuration, and framework basics.</p>

      <div className="card">
        <h3 style={{marginBottom: '16px'}}>In this module you will learn:</h3>
        <ul style={{listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px'}}>
          <li style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
            <CheckCircle2 size={18} style={{color: 'var(--success-color)'}} />
            <span>Course structure and exercise organization (Course Introduction).</span>
          </li>
          <li style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
            <CheckCircle2 size={18} style={{color: 'var(--success-color)'}} />
            <span>Setting up the development environment for the Playwright project (Setup).</span>
          </li>
          <li style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
            <CheckCircle2 size={18} style={{color: 'var(--success-color)'}} />
            <span>Understanding the architecture of this practice application and test data.</span>
          </li>
          <li style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
            <CheckCircle2 size={18} style={{color: 'var(--success-color)'}} />
            <span>Running, debugging tests, and analyzing reports.</span>
          </li>
        </ul>

        <div className="alert alert-success" style={{marginTop: '32px'}}>
          This module is theoretical and configuration-focused. It does not require interacting with the graphical interface.
          When you are ready to write code, proceed to <strong>Module 2: Locators & UI</strong> in the sidebar!
        </div>
      </div>
    </div>
  );
}
