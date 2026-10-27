'use client';
import { useState } from 'react';

export default function Exercise15() {
  const [date, setDate] = useState('');

  return (
    <div>
      <h2>Exercise 15: Automate a Date Picker</h2>
      <p style={{marginBottom: '24px', color: 'var(--text-secondary)'}}>
        Test scenario: Select a specific date using the native date input field and verify the selected value.
      </p>

      <div className="form-group" style={{maxWidth: '300px'}}>
        <label htmlFor="appointment-date">Select Appointment Date</label>
        <input 
          type="date" 
          id="appointment-date" 
          className="form-control"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      {date && (
        <div id="selected-date-msg" className="alert alert-success" style={{marginTop: '24px'}}>
          You selected: {date}
        </div>
      )}
    </div>
  );
}
