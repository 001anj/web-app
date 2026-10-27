'use client';
import { useState } from 'react';

export default function Exercise11() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    zip: '',
    card: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="alert alert-success" id="order-success">
        <h2>Order Confirmed</h2>
        <p>Thank you for your purchase, {formData.name}!</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Exercise 11: Complete the Checkout Process</h2>
      <p style={{marginBottom: '24px', color: 'var(--text-secondary)'}}>
        Test scenario: Fill in the customer details and payment information to complete the checkout.
      </p>

      <form onSubmit={handleSubmit} id="checkout-form">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" className="form-control" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input type="text" id="address" className="form-control" required value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})} />
        </div>
        <div style={{display: 'flex', gap: '16px'}}>
          <div className="form-group" style={{flex: 1}}>
            <label htmlFor="city">City</label>
            <input type="text" id="city" className="form-control" required value={formData.city} onChange={e => setFormData({...formData, city: e.target.value})} />
          </div>
          <div className="form-group" style={{flex: 1}}>
            <label htmlFor="zip">ZIP Code</label>
            <input type="text" id="zip" className="form-control" required value={formData.zip} onChange={e => setFormData({...formData, zip: e.target.value})} />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="card">Credit Card Number</label>
          <input type="text" id="card" className="form-control" required value={formData.card} onChange={e => setFormData({...formData, card: e.target.value})} />
        </div>
        
        <button type="submit" id="submit-order-btn" className="btn-primary" style={{width: '100%'}}>
          Place Order
        </button>
      </form>
    </div>
  );
}
