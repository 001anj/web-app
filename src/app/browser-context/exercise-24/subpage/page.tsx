import Link from 'next/link';

export default function Subpage() {
  return (
    <div className="card">
      <h2 id="subpage-title">You are on the Subpage!</h2>
      <p style={{marginBottom: '24px', color: 'var(--text-secondary)'}}>
        Use page.goBack() in Playwright to return to the previous page.
      </p>
      <Link href="/browser-context/exercise-24" id="back-link">
        Return manually
      </Link>
    </div>
  );
}
