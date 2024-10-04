import React from 'react';
import "./styles.css"

export default function Comments({ data }) {
  return (
    <section style={{ padding: '1rem', borderBottom: '1px solid #ddd' }}>
      <h2>Comentários dos sClientes</h2>
      {data.map((comment, index) => (
        <div key={index} style={{ marginBottom: '1rem' }}>
          <p><strong>{comment.user}</strong> ({comment.date}):</p>
          <p>{comment.message}</p>
          <p>Nota: {comment.rating} / 5</p>
        </div>
      ))}
    </section>
  );
}
