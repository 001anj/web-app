'use client';
import { useState } from 'react';

const PRODUCTS = [
  { id: 1, name: 'Playwright Book', price: 39.99 },
  { id: 2, name: 'Automation Course', price: 99.99 },
];

export default function Exercise8() {
  const [cart, setCart] = useState<{id: number, name: string, price: number}[]>([]);

  const addToCart = (product: any) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <h2>Exercise 8: Add a Product to the Shopping Cart</h2>
        <div id="cart-badge" data-testid="cart-badge" style={{
          background: 'var(--accent-color)', padding: '8px 16px', borderRadius: '20px', fontWeight: 'bold'
        }}>
          Cart: {cart.length} items
        </div>
      </div>
      <p style={{marginBottom: '24px', color: 'var(--text-secondary)'}}>
        Test scenario: Click "Add to Cart" and verify that the cart badge updates correctly.
      </p>

      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px'}}>
        {PRODUCTS.map(p => (
          <div key={p.id} className="product-card" style={{padding: '16px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px'}}>
            <h3 className="product-name">{p.name}</h3>
            <p style={{fontWeight: 'bold', color: 'var(--accent-hover)', marginBottom: '16px'}}>${p.price}</p>
            <button 
              className="btn-primary" 
              data-testid={`add-to-cart-${p.id}`}
              onClick={() => addToCart(p)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
