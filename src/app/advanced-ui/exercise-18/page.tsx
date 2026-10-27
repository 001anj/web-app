'use client';
import { useState } from 'react';

export default function Exercise18() {
  const [items, setItems] = useState(['Item A', 'Item B', 'Item C']);
  const [dropped, setDropped] = useState<string[]>([]);

  const handleDragStart = (e: React.DragEvent, item: string) => {
    e.dataTransfer.setData('text/plain', item);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const item = e.dataTransfer.getData('text');
    if (item && !dropped.includes(item)) {
      setDropped([...dropped, item]);
      setItems(items.filter(i => i !== item));
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault(); // Necessary to allow dropping
  };

  return (
    <div>
      <h2>Exercise 18: Perform Drag and Drop</h2>
      <p style={{marginBottom: '24px', color: 'var(--text-secondary)'}}>
        Test scenario: Drag items from the source area and drop them into the target area.
      </p>

      <div style={{display: 'flex', gap: '32px'}}>
        <div 
          id="source-area" 
          style={{flex: 1, padding: '16px', background: 'rgba(255,255,255,0.02)', border: '1px dashed var(--glass-border)', borderRadius: '8px', minHeight: '200px'}}
        >
          <h3 style={{marginBottom: '16px', fontSize: '16px'}}>Source Area</h3>
          {items.map(item => (
            <div 
              key={item} 
              id={`drag-item-${item.replace(' ', '-').toLowerCase()}`}
              draggable
              onDragStart={(e) => handleDragStart(e, item)}
              style={{
                padding: '12px', background: 'var(--accent-color)', color: 'white', 
                marginBottom: '8px', borderRadius: '4px', cursor: 'grab', userSelect: 'none'
              }}
            >
              {item}
            </div>
          ))}
        </div>

        <div 
          id="target-area" 
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          style={{flex: 1, padding: '16px', background: 'rgba(99,102,241,0.05)', border: '2px dashed var(--accent-color)', borderRadius: '8px', minHeight: '200px'}}
        >
          <h3 style={{marginBottom: '16px', fontSize: '16px'}}>Drop Area</h3>
          {dropped.map(item => (
            <div 
              key={item} 
              className="dropped-item"
              style={{
                padding: '12px', background: 'var(--success-color)', color: 'white', 
                marginBottom: '8px', borderRadius: '4px'
              }}
            >
              {item}
            </div>
          ))}
          {dropped.length === 0 && (
            <p style={{color: 'var(--text-secondary)', textAlign: 'center', marginTop: '40px'}}>
              Drop items here
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
