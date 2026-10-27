'use client';
import { useState, useEffect } from 'react';

export default function Exercise28() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/products');
      const data = await res.json();
      setProducts(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Exercise 28: Intercept and Mock a Network Request</h2>
      <p style={{marginBottom: '24px', color: 'var(--text-secondary)'}}>
        Test scenario: Intercept the GET request to <code>/api/products</code> and provide a mocked response. Verify that the UI displays the mocked data.
      </p>

      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px'}}>
        <h3 style={{fontSize: '18px'}}>Products List</h3>
        <button id="reload-btn" className="btn-primary" onClick={fetchProducts} style={{padding: '8px 16px'}}>Reload</button>
      </div>

      <div id="mocked-products-list" style={{display: 'grid', gap: '12px'}}>
        {loading ? (
          <p>Loading...</p>
        ) : products.length === 0 ? (
          <p>No products found.</p>
        ) : (
          products.map(p => (
            <div key={p.id} className="product-item" style={{
              padding: '16px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px',
              display: 'flex', justifyContent: 'space-between'
            }}>
              <span style={{fontWeight: 'bold'}}>{p.name}</span>
              <span style={{color: 'var(--accent-hover)'}}>${p.price}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
