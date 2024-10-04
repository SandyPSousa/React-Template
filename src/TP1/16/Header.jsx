import React from 'react';

export default function Header() {
  return (
    <header style={{padding: '1rem', backgroundColor: '#333', color: '#fff' }}>
      <h1>E-Commerce</h1>
      <nav>
        <ul style={{ display: 'flex', listStyle: 'none', gap: '1rem', justifyContent: 'center' }}>
          <li>Home</li>
          <li>Produtos</li>
          <li>Sobre</li>
          <li>Contato</li>
        </ul>
      </nav>
    </header>
  );
}
