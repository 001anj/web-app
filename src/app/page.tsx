import Link from 'next/link';

export default function Home() {
  return (
    <div className="card">
      <h1 className="page-title">Welcome to my QA Playground</h1>
      <p className="page-subtitle">30 hands-on scenarios I built to practice and showcase Playwright test automation skills.</p>

      <div style={{ marginTop: '24px' }}>
        <p style={{ marginBottom: '16px', lineHeight: '1.6' }}>
          This app is my personal sandbox for designing and automating realistic UI, API, and end-to-end scenarios.
          Pick a section from the sidebar to explore.
        </p>
        <Link href="/ui-interactions">
          <button className="btn-primary">Start Practicing</button>
        </Link>
      </div>
    </div>
  );
}
