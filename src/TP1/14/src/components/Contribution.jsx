import React from 'react';
import styles from './styles.module.css';

export default function Contribution({ response, author, date, likes }) {
  return (
    <div className={styles.contribution}>
      <p>{response}</p>
      <p>Autor: {author}</p>
      <p>Data de Publicação: {date}</p>
      <p>Curtidas: {likes}</p>
    </div>
  );
}

