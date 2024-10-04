import React, { useState } from 'react';
import styles from './styles.module.css';

export default function ContributionForm() {
  const [response, setResponse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Resposta enviada!");
    setResponse('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea
        value={response}
        onChange={(e) => setResponse(e.target.value)}
        placeholder="Digite sua resposta aqui..."
      />
      <button type="submit">Enviar</button>
      <p>Usuário autenticado: Sandy</p>
    </form>
  );
}

