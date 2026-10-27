'use client';
import { useState } from 'react';

const MOCK_PRODUCTS = [
  { id: 1, name: 'Wireless Headphones', price: 99.99, category: 'Electronics' },
  { id: 2, name: 'Coffee Mug', price: 12.99, category: 'Home' },
  { id: 3, name: 'Running Shoes', price: 89.99, category: 'Sports' },
  { id: 4, name: 'Mechanical Keyboard', price: 129.99, category: 'Electronics' },
  { id: 5, name: 'Yoga Mat', price: 29.99, category: 'Sports' },
];

export default function Exercise5() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<{ id: number; name: string; price: number; category: string }[] | null>(null);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    
    // Simulate network delay
    setTimeout(() => {
      const filtered = MOCK_PRODUCTS.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase()) || 
        p.category.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
      setIsSearching(false);
    }, 1000);
  };

  return (
    <div>
      <h2>Exercise 5: Automate a Search Feature</h2>
      <p style={{marginBottom: '24px', color: 'var(--text-secondary)'}}>
        Test scenario: Enter a product name or category into the search box and verify the correct results are returned.
      </p>

      <form onSubmit={handleSearch} id="search-form" style={{display: 'flex', gap: '12px', marginBottom: '32px'}}>
        <input
          type="text"
          id="search-input"
          className="form-control"
          placeholder="Search products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" id="search-btn" className="btn-primary" disabled={isSearching}>
          {isSearching ? 'Searching...' : 'Search'}
        </button>
      </form>

      <div id="search-results">
        {results && results.length === 0 && (
          <p id="no-results" style={{color: 'var(--text-secondary)'}}>No products found.</p>
        )}
        
        {results && results.length > 0 && (
          <div style={{display: 'grid', gap: '16px'}}>
            {results.map((product) => (
              <div key={product.id} className="product-item" style={{
                padding: '16px',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid var(--glass-border)',
                borderRadius: '8px'
              }}>
                <h3 className="product-name" style={{fontSize: '18px', marginBottom: '8px'}}>{product.name}</h3>
                <div style={{display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)'}}>
                  <span className="product-category">{product.category}</span>
                  <span className="product-price" style={{color: 'var(--accent-hover)'}}>${product.price}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
