'use client';
import { useState } from 'react';

const PRODUCTS = [
  { id: 1, name: 'PlayStation 5', category: 'Gaming', price: 499 },
  { id: 2, name: 'Xbox Series X', category: 'Gaming', price: 499 },
  { id: 3, name: 'MacBook Pro', category: 'Laptops', price: 1999 },
  { id: 4, name: 'Dell XPS 15', category: 'Laptops', price: 1499 },
  { id: 5, name: 'iPhone 15', category: 'Smartphones', price: 999 },
  { id: 6, name: 'Samsung Galaxy S24', category: 'Smartphones', price: 899 },
];

export default function Exercise6() {
  const [category, setCategory] = useState('All');

  const filtered = category === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === category);

  return (
    <div>
      <h2>Exercise 6: Filter Products by Category</h2>
      <p style={{marginBottom: '24px', color: 'var(--text-secondary)'}}>
        Test scenario: Select a category from the dropdown and verify that only products from that category are displayed.
      </p>

      <div className="form-group" style={{maxWidth: '300px'}}>
        <label htmlFor="category-filter">Category Filter</label>
        <select 
          id="category-filter" 
          className="form-control"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          data-testid="category-filter"
        >
          <option value="All">All Categories</option>
          <option value="Gaming">Gaming</option>
          <option value="Laptops">Laptops</option>
          <option value="Smartphones">Smartphones</option>
        </select>
      </div>

      <div className="product-grid" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px'}}>
        {filtered.map(p => (
          <div key={p.id} className="product-card" data-testid="product-card" style={{padding: '16px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px'}}>
            <h3>{p.name}</h3>
            <p className="product-category" style={{color: 'var(--text-secondary)'}}>{p.category}</p>
            <p style={{fontWeight: 'bold', color: 'var(--accent-hover)'}}>${p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
