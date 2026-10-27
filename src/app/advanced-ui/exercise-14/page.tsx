'use client';
import { useState } from 'react';

export default function Exercise14() {
  const [flavor, setFlavor] = useState('');
  const [toppings, setToppings] = useState({ sprinkles: false, chocolate: false, nuts: false });

  const toggleTopping = (topping: keyof typeof toppings) => {
    setToppings(prev => ({...prev, [topping]: !prev[topping]}));
  };

  return (
    <div>
      <h2>Exercise 14: Work with Checkboxes and Radio Buttons</h2>
      <p style={{marginBottom: '24px', color: 'var(--text-secondary)'}}>
        Test scenario: Select a radio button for ice cream flavor, and check multiple toppings.
      </p>

      <div style={{marginBottom: '24px'}}>
        <h3 style={{marginBottom: '12px'}}>Choose a flavor (Radio)</h3>
        {['Vanilla', 'Chocolate', 'Strawberry'].map(f => (
          <div key={f} style={{display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px'}}>
            <input 
              type="radio" 
              id={`flavor-${f.toLowerCase()}`} 
              name="flavor" 
              value={f}
              checked={flavor === f}
              onChange={(e) => setFlavor(e.target.value)}
            />
            <label htmlFor={`flavor-${f.toLowerCase()}`}>{f}</label>
          </div>
        ))}
      </div>

      <div>
        <h3 style={{marginBottom: '12px'}}>Choose toppings (Checkbox)</h3>
        {Object.entries(toppings).map(([topping, isChecked]) => (
          <div key={topping} style={{display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px'}}>
            <input 
              type="checkbox" 
              id={`topping-${topping}`} 
              checked={isChecked}
              onChange={() => toggleTopping(topping as keyof typeof toppings)}
            />
            <label htmlFor={`topping-${topping}`} style={{textTransform: 'capitalize'}}>{topping}</label>
          </div>
        ))}
      </div>
      
      <div id="selection-result" style={{marginTop: '24px', padding: '16px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px'}}>
        Selected Flavor: <span id="result-flavor">{flavor || 'None'}</span> <br/>
        Selected Toppings: <span id="result-toppings">{Object.entries(toppings).filter(([_, checked]) => checked).map(([t]) => t).join(', ') || 'None'}</span>
      </div>
    </div>
  );
}
