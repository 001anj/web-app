import Link from 'next/link';

export default function Exercise24() {
  return (
    <div>
      <h2>Exercise 24: Test Browser Navigation</h2>
      <p style={{marginBottom: '24px', color: 'var(--text-secondary)'}}>
        Test scenario: Click the link to navigate to a subpage, then use browser navigation (Back, Forward) and verify the URL changes.
      </p>

      <Link href="/browser-context/exercise-24/subpage" id="navigate-btn" className="btn-primary" style={{display: 'inline-block'}}>
        Go to Subpage
      </Link>
    </div>
  );
}
