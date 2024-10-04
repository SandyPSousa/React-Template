import React from 'react';

export default function RelatedProducts({ data }) {
  return (
    <section style={{ padding: '1rem' }}>
      <h2>Produtos Relacionados</h2>
      <div style={{ display: 'flex', gap: '1rem', overflowX: 'auto' }}>
        {data.map((product, index) => (
          <div key={index} style={{ minWidth: '150px', border: '1px solid #ddd', padding: '1rem' }}>
            <img src={product.image} alt={product.name} style={{ width: '100%', height: 'auto' }} />
            <h3>{product.name}</h3>
            <p><strong>Preço: R$ {product.price.toFixed(2)}</strong></p>
          </div>
        ))}
      </div>
    </section>
  );
}
