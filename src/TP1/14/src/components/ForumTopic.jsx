import React from 'react';
import styles from './styles.module.css';

export default function ForumTopic() {
  return (
    <div className={styles.forumTopic}>
      <h1>Discussões sobre <span className={styles.title}>Lana Del Rey</span></h1>
      <h2>Explorando a Música e o Estilo da Artista</h2>
      <p>
        Este fórum é dedicado a fãs de Lana Del Rey, onde podemos discutir suas músicas,
        letras e impacto na cultura pop.
      </p>
      <p>Autor: @lanita</p>
      <p>Data de Publicação: 01/10/2024</p>
      <p>Curtidas: 120, Respostas: 35</p>
    </div>
  );
}


