'use client';
import { useState } from 'react';

export default function Exercise3() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    country: '',
    newsletter: false,
    terms: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.terms) {
      alert('You must agree to the terms and conditions');
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="alert alert-success" id="success-message">
        <h2>Registration Successful</h2>
        <p>Thank you for registering, {formData.firstName}!</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Exercise 3: Complete a Registration Form</h2>
      <p style={{marginBottom: '24px', color: 'var(--text-secondary)'}}>
        Test scenario: Fill in the registration form completely, including text fields, a dropdown, and checkboxes.
      </p>

      <form onSubmit={handleSubmit} id="registration-form">
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            className="form-control"
            value={formData.firstName}
            onChange={(e) => setFormData({...formData, firstName: e.target.value})}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            className="form-control"
            value={formData.lastName}
            onChange={(e) => setFormData({...formData, lastName: e.target.value})}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="country">Country</label>
          <select
            id="country"
            className="form-control"
            value={formData.country}
            onChange={(e) => setFormData({...formData, country: e.target.value})}
            required
          >
            <option value="">Select a country</option>
            <option value="us">United States</option>
            <option value="uk">United Kingdom</option>
            <option value="pl">Poland</option>
            <option value="de">Germany</option>
          </select>
        </div>
        <div className="form-group" style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
          <input
            type="checkbox"
            id="newsletter"
            checked={formData.newsletter}
            onChange={(e) => setFormData({...formData, newsletter: e.target.checked})}
          />
          <label htmlFor="newsletter" style={{margin: 0}}>Subscribe to newsletter</label>
        </div>
        <div className="form-group" style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
          <input
            type="checkbox"
            id="terms"
            checked={formData.terms}
            onChange={(e) => setFormData({...formData, terms: e.target.checked})}
          />
          <label htmlFor="terms" style={{margin: 0}}>I agree to the Terms and Conditions *</label>
        </div>
        <button type="submit" id="register-btn" className="btn-primary">
          Register
        </button>
      </form>
    </div>
  );
}
