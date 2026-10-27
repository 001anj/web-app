'use client';
import { useState } from 'react';

export default function Exercise10() {
  const [cart, setCart] = useState([
    { id: 1, name: 'Wireless Mouse', price: 49.99 },
    { id: 2, name: 'Mechanical Keyboard', price: 129.99 },
  ]);

  const removeItem = (id: number) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <div>
      <h2>Exercise 10: Remove a Product from the Cart</h2>
      <p style={{marginBottom: '24px', color: 'var(--text-secondary)'}}>
        Test scenario: Click the remove button and verify that the product is removed. Check for the empty cart message.
      </p>

      {cart.length === 0 ? (
        <div id="empty-cart-message" data-testid="empty-cart-message" className="alert alert-success">
          Your cart is empty.
        </div>
      ) : (
        <div className="cart-list" style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
          {cart.map(item => (
            <div key={item.id} className="cart-item" data-testid={`cart-item-${item.id}`} style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '16px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px'
            }}>
              <div>
                <h3 className="product-name">{item.name}</h3>
                <p style={{color: 'var(--accent-hover)'}}>${item.price}</p>
              </div>
              <button 
                className="btn-primary" 
                style={{background: 'var(--error-color)'}}
                data-testid={`remove-btn-${item.id}`}
                onClick={() => removeItem(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
