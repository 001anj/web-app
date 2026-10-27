'use client';
import { useState } from 'react';
import { CheckCircle2, User, KeyRound, ShoppingBag, ShoppingCart, CreditCard, Receipt } from 'lucide-react';

const E2E_PRODUCTS = [
  { id: 1, name: 'Playwright Mastery Course', price: 199.99 },
  { id: 2, name: 'Automation Framework Template', price: 49.99 },
];

const STEPS = [
  { id: 'register', label: 'Register', icon: User },
  { id: 'login', label: 'Login', icon: KeyRound },
  { id: 'shop', label: 'Shop', icon: ShoppingBag },
  { id: 'cart', label: 'Cart', icon: ShoppingCart },
  { id: 'checkout', label: 'Checkout', icon: CreditCard },
  { id: 'summary', label: 'Summary', icon: Receipt },
];

export default function Exercise30() {
  const [step, setStep] = useState('register');
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [cart, setCart] = useState<any[]>([]);

  const currentStepIndex = STEPS.findIndex(s => s.id === step);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('login');
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('shop');
  };

  const addToCart = (p: any) => {
    setCart([...cart, p]);
    setStep('cart');
  };

  const checkout = () => {
    setStep('checkout');
  };

  const confirmOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('summary');
  };

  return (
    <div>
      <h2 style={{marginBottom: '16px'}}>Exercise 30: Build an End-to-End E-Commerce Test</h2>
      <p style={{marginBottom: '32px', color: 'var(--text-secondary)'}}>
        Test scenario: Automate the entire flow from registration to order confirmation.
      </p>

      {/* Stepper UI */}
      <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '40px', position: 'relative'}}>
        {/* Progress Line */}
        <div style={{
          position: 'absolute', top: '20px', left: '40px', right: '40px', 
          height: '2px', background: 'var(--glass-border)', zIndex: 0
        }}>
          <div style={{
            height: '100%', background: 'var(--accent-color)', 
            width: `${(currentStepIndex / (STEPS.length - 1)) * 100}%`,
            transition: 'width 0.3s ease'
          }} />
        </div>

        {STEPS.map((s, idx) => {
          const Icon = s.icon;
          const isCompleted = idx < currentStepIndex;
          const isActive = idx === currentStepIndex;
          
          return (
            <div key={s.id} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 1, gap: '8px', width: '80px'}}>
              <div style={{
                width: '40px', height: '40px', borderRadius: '50%', 
                background: isCompleted ? 'var(--success-color)' : isActive ? 'var(--accent-color)' : 'var(--bg-color)',
                border: `2px solid ${isCompleted ? 'var(--success-color)' : isActive ? 'var(--accent-color)' : 'var(--glass-border)'}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: isCompleted || isActive ? 'white' : 'var(--text-secondary)',
                transition: 'all 0.3s ease'
              }}>
                {isCompleted ? <CheckCircle2 size={20} /> : <Icon size={20} />}
              </div>
              <span style={{
                fontSize: '12px', fontWeight: isActive ? 600 : 400,
                color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)'
              }}>
                {s.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Dynamic Content Area */}
      <div style={{background: 'rgba(255,255,255,0.02)', border: '1px solid var(--glass-border)', borderRadius: '12px', padding: '32px', minHeight: '300px'}}>
        {step === 'register' && (
          <form onSubmit={handleRegister} id="e2e-register-form" style={{maxWidth: '400px', margin: '0 auto'}}>
            <h3 style={{marginBottom: '24px', textAlign: 'center'}}>Create an Account</h3>
            <div className="form-group">
              <label>Username</label>
              <input type="text" data-testid="reg-username" className="form-control" required onChange={(e) => setCredentials({...credentials, username: e.target.value})} />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" data-testid="reg-password" className="form-control" required onChange={(e) => setCredentials({...credentials, password: e.target.value})} />
            </div>
            <button type="submit" data-testid="reg-submit" className="btn-primary" style={{width: '100%'}}>Register</button>
          </form>
        )}

        {step === 'login' && (
          <form onSubmit={handleLogin} id="e2e-login-form" style={{maxWidth: '400px', margin: '0 auto'}}>
            <h3 style={{marginBottom: '24px', textAlign: 'center'}}>Login</h3>
            <div className="alert alert-success" data-testid="reg-success-msg">Account created! Please log in.</div>
            <div className="form-group">
              <label>Username</label>
              <input type="text" data-testid="login-username" className="form-control" required />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" data-testid="login-password" className="form-control" required />
            </div>
            <button type="submit" data-testid="login-submit" className="btn-primary" style={{width: '100%'}}>Login</button>
          </form>
        )}

        {step === 'shop' && (
          <div id="e2e-shop">
            <h3 style={{marginBottom: '8px'}}>Products</h3>
            <p style={{marginBottom: '24px', color: 'var(--text-secondary)'}}>Welcome back, {credentials.username}!</p>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px'}}>
              {E2E_PRODUCTS.map(p => (
                <div key={p.id} className="product-card" style={{padding: '24px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px'}}>
                  <h4 style={{fontSize: '18px', marginBottom: '8px'}}>{p.name}</h4>
                  <p style={{color: 'var(--accent-hover)', fontWeight: 'bold', fontSize: '20px'}}>${p.price}</p>
                  <button className="btn-primary" data-testid={`e2e-add-${p.id}`} style={{marginTop: '24px', width: '100%'}} onClick={() => addToCart(p)}>
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {step === 'cart' && (
          <div id="e2e-cart" style={{maxWidth: '600px', margin: '0 auto'}}>
            <h3 style={{marginBottom: '24px'}}>Your Cart</h3>
            <div style={{padding: '24px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', marginBottom: '24px'}}>
              {cart.map((item, idx) => (
                <div key={idx} style={{display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid var(--glass-border)'}}>
                  <span data-testid="cart-item-name">{item.name}</span>
                  <span data-testid="cart-item-price" style={{fontWeight: 'bold'}}>${item.price}</span>
                </div>
              ))}
              <div style={{display: 'flex', justifyContent: 'space-between', padding: '12px 0', marginTop: '12px', fontSize: '18px', fontWeight: 'bold', color: 'var(--accent-hover)'}}>
                <span>Total:</span>
                <span data-testid="cart-total">${cart.reduce((a, b) => a + b.price, 0).toFixed(2)}</span>
              </div>
            </div>
            <button className="btn-primary" data-testid="checkout-btn" style={{width: '100%'}} onClick={checkout}>Proceed to Checkout</button>
          </div>
        )}

        {step === 'checkout' && (
          <form onSubmit={confirmOrder} id="e2e-checkout-form" style={{maxWidth: '500px', margin: '0 auto'}}>
            <h3 style={{marginBottom: '24px'}}>Checkout Details</h3>
            <div className="form-group">
              <label>Shipping Address</label>
              <input type="text" data-testid="checkout-address" className="form-control" required />
            </div>
            <div className="form-group">
              <label>Credit Card</label>
              <input type="text" data-testid="checkout-card" className="form-control" required />
            </div>
            <button type="submit" data-testid="checkout-submit" className="btn-primary" style={{width: '100%', marginTop: '16px'}}>Confirm Order</button>
          </form>
        )}

        {step === 'summary' && (
          <div id="e2e-summary" style={{textAlign: 'center', padding: '40px 0'}}>
            <div style={{width: '64px', height: '64px', background: 'rgba(16, 185, 129, 0.1)', color: 'var(--success-color)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px'}}>
              <CheckCircle2 size={40} />
            </div>
            <h3 style={{fontSize: '24px', marginBottom: '16px'}}>Order Confirmed!</h3>
            <p id="e2e-success-message" data-testid="e2e-success-message" style={{color: 'var(--text-secondary)', marginBottom: '32px'}}>
              Thank you for your purchase. Your order number is #E2E-{Math.floor(Math.random() * 10000)}.
            </p>
            <button className="btn-primary" onClick={() => {setStep('register'); setCart([]);}}>
              Start Over
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
