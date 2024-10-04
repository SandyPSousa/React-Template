import React from 'react';

export default function SellerInfo({ data }) {
  return (
    <section style={{ padding: '1rem', borderBottom: '1px solid #ddd' }}>
      <h2>Informações do Vendedor</h2>
      <p><strong>Nome:</strong> {data.name}</p>
      <p><strong>Email:</strong> {data.email}</p>
      <p><strong>Telefone:</strong> {data.phone}</p>
      <p>Nota: {data.rating} / 5</p>
    </section>
  );
}
