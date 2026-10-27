'use client';
import { useState } from 'react';

const PRODUCTS = [
  { id: 1, name: 'Basic Mouse', price: 15 },
  { id: 2, name: 'Pro Keyboard', price: 120 },
  { id: 3, name: 'Monitor 24"', price: 150 },
  { id: 4, name: 'Mousepad', price: 10 },
  { id: 5, name: 'Webcam', price: 60 },
];

export default function Exercise7() {
  const [sort, setSort] = useState('default');

  const sorted = [...PRODUCTS].sort((a, b) => {
    if (sort === 'asc') return a.price - b.price;
    if (sort === 'desc') return b.price - a.price;
    return 0; // default (id)
  });

  return (
    <div>
      <h2>Exercise 7: Sort Products by Price</h2>
      <p style={{marginBottom: '24px', color: 'var(--text-secondary)'}}>
        Test scenario: Sort products by price (low to high, high to low) and verify the order is correct.
      </p>

      <div className="form-group" style={{maxWidth: '300px'}}>
        <label htmlFor="sort-select">Sort By</label>
        <select 
          id="sort-select" 
          className="form-control"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          data-testid="sort-select"
        >
          <option value="default">Default</option>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
      </div>

      <div className="product-list" style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
        {sorted.map(p => (
          <div key={p.id} className="product-card" data-testid="product-card" style={{
            display: 'flex', justifyContent: 'space-between', padding: '16px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px'
          }}>
            <span className="product-name">{p.name}</span>
            <span className="product-price" data-price={p.price} style={{fontWeight: 'bold', color: 'var(--accent-hover)'}}>${p.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
