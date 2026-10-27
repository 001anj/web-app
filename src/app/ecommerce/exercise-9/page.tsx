'use client';
import { useState } from 'react';

export default function Exercise9() {
  const [quantity, setQuantity] = useState(1);
  const price = 49.99;

  return (
    <div>
      <h2>Exercise 9: Update Product Quantity</h2>
      <p style={{marginBottom: '24px', color: 'var(--text-secondary)'}}>
        Test scenario: Change the quantity of the product and verify that the total order value updates correctly.
      </p>

      <div className="cart-item" style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '16px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', marginBottom: '24px'
      }}>
        <div>
          <h3 className="product-name">Wireless Mouse</h3>
          <p style={{color: 'var(--text-secondary)'}}>Price: ${price}</p>
        </div>
        
        <div style={{display: 'flex', alignItems: 'center', gap: '16px'}}>
          <input 
            type="number" 
            id="quantity-input"
            data-testid="quantity-input"
            className="form-control"
            style={{width: '80px'}}
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
        </div>
      </div>

      <div style={{textAlign: 'right', fontSize: '20px'}}>
        <span>Total: </span>
        <span id="total-price" data-testid="total-price" style={{fontWeight: 'bold', color: 'var(--accent-hover)'}}>
          ${(quantity * price).toFixed(2)}
        </span>
      </div>
    </div>
  );
}
