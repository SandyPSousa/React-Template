import React, { useState } from 'react';
import './main.css';

export default function App() {
  const [items] = useState([
    { name: 'Notebook', unitPrice: 1500, quantity: 1 },
    { name: 'Textbooks', unitPrice: 200, quantity: 3 },
    { name: 'Backpack', unitPrice: 50, quantity: 1 },
    { name: 'Pens', unitPrice: 5, quantity: 10 },
    { name: 'Laptop Charger', unitPrice: 30, quantity: 1 }
  ]);

  const [darkMode, setDarkMode] = useState(false);

  const totalPurchase = items.reduce(
    (acc, item) => acc + item.unitPrice * item.quantity,
    0
  );

  return (
    <div className={darkMode ? 'container dark' : 'container'}>
      <button
        className="toggle-theme"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>

      <h1>Shopping List</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="item">
            <span>{item.name}</span>
            <span>Unit Price: R${item.unitPrice}</span>
            <span>Quantity: {item.quantity}</span>
            <span>Total: R${item.unitPrice * item.quantity}</span>
          </li>
        ))}
      </ul>
      <h2>Total Purchase: R${totalPurchase}</h2>
    </div>
  );
}

