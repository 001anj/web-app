'use client';
import { useState, useEffect } from 'react';

export default function Exercise26() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/users');
      const data = await res.json();
      setUsers(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Exercise 26: Create Test Data Using an API</h2>
      <p style={{marginBottom: '24px', color: 'var(--text-secondary)'}}>
        Test scenario: Use Playwright APIRequestContext to POST a new user to <code>/api/users</code>. Then reload this page and verify the new user appears in the list.
      </p>

      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px'}}>
        <h3 style={{fontSize: '18px'}}>Users List</h3>
        <button className="btn-primary" onClick={fetchUsers} style={{padding: '8px 16px'}}>Refresh List</button>
      </div>

      <div id="users-list" style={{background: 'rgba(255,255,255,0.05)', borderRadius: '8px', padding: '16px'}}>
        {loading ? (
          <p>Loading...</p>
        ) : users.length === 0 ? (
          <p style={{color: 'var(--text-secondary)'}}>No users found. Create one via API!</p>
        ) : (
          <ul style={{listStyle: 'none'}}>
            {users.map(u => (
              <li key={u.id} style={{padding: '12px 0', borderBottom: '1px solid var(--glass-border)'}}>
                <span style={{fontWeight: 'bold'}}>{u.name}</span> - <span style={{color: 'var(--text-secondary)'}}>{u.email}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
