import React from 'react';

export default function Questions({ data }) {
  return (
    <section style={{ padding: '1rem', borderBottom: '1px solid #ddd' }}>
      <h2>Perguntas sobre o Produto</h2>
      {data.map((question, index) => (
        <div key={index} style={{ marginBottom: '1rem' }}>
          <p><strong>{question.user}</strong> ({question.date}):</p>
          <p><strong>Pergunta:</strong> {question.question}</p>
          <p><strong>Resposta:</strong> {question.answer}</p>
        </div>
      ))}
    </section>
  );
}
