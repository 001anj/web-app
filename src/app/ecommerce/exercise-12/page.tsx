export default function Exercise12() {
  const order = {
    items: [
      { id: 1, name: 'Playwright Book', price: 39.99, qty: 1 },
      { id: 2, name: 'Coffee Mug', price: 15.00, qty: 2 }
    ],
    tax: 0.10 // 10%
  };

  const subtotal = order.items.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const taxAmount = subtotal * order.tax;
  const total = subtotal + taxAmount;

  return (
    <div>
      <h2>Exercise 12: Validate Order Summary</h2>
      <p style={{marginBottom: '24px', color: 'var(--text-secondary)'}}>
        Test scenario: Verify that the subtotal, tax, and total amount are calculated correctly based on the products.
      </p>

      <div className="order-summary" style={{background: 'rgba(255,255,255,0.05)', padding: '24px', borderRadius: '8px'}}>
        <h3 style={{marginBottom: '16px'}}>Order #12345</h3>
        
        <table style={{width: '100%', marginBottom: '24px', borderCollapse: 'collapse'}}>
          <thead>
            <tr style={{borderBottom: '1px solid var(--glass-border)', textAlign: 'left'}}>
              <th style={{paddingBottom: '8px'}}>Product</th>
              <th style={{paddingBottom: '8px'}}>Qty</th>
              <th style={{paddingBottom: '8px', textAlign: 'right'}}>Price</th>
            </tr>
          </thead>
          <tbody>
            {order.items.map(item => (
              <tr key={item.id} style={{borderBottom: '1px solid var(--glass-border)'}}>
                <td style={{padding: '12px 0'}}>{item.name}</td>
                <td style={{padding: '12px 0'}}>{item.qty}</td>
                <td style={{padding: '12px 0', textAlign: 'right'}}>${(item.price * item.qty).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={{display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-end', fontSize: '16px'}}>
          <div>Subtotal: <span id="summary-subtotal">${subtotal.toFixed(2)}</span></div>
          <div>Tax (10%): <span id="summary-tax">${taxAmount.toFixed(2)}</span></div>
          <div style={{fontSize: '20px', fontWeight: 'bold', marginTop: '8px', color: 'var(--accent-hover)'}}>
            Total: <span id="summary-total">${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
