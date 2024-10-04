import React from 'react';
import styles from './styles.module.css';

export default function RecentTopics() {
  return (
    <div className={styles.recentTopics}>
      <h3>Tópicos Recentes</h3>
      <ul>
        <li>Tópico 1: Último Álbum da Lana</li>
        <li>Tópico 2: O Significado de "Born to Die"</li>
        <li>Tópico 3: Contribuições de Lana na Cultura Pop</li>
        <li>Tópico 4: As Melhores Colaborações</li>
        <li>Tópico 5: Discussão sobre Turnê</li>
      </ul>
      <h3>Tópicos Mais Respondidos</h3>
      <ul>
        <li>Tópico 1: Análise da Letra de "Summertime Sadness"</li>
        <li>Tópico 2: Impacto Cultural de "Young and Beautiful"</li>
        <li>Tópico 3: As Melhores Músicas para Ouvir ao Luar</li>
        <li>Tópico 4: Os Melhores Videoclipes da Lana</li>
        <li>Tópico 5: Comparação de Estilos: Lana vs. Outros Artistas</li>
      </ul>
      <h3>Tópicos Mais Curtidos</h3>
      <ul>
        <li>Tópico 1: Melhores Músicas de Todos os Tempos</li>
        <li>Tópico 2: Qual é o Melhor Álbum?</li>
        <li>Tópico 3: As Letras mais Impactantes</li>
        <li>Tópico 4: Eventos e Shows Recentes</li>
        <li>Tópico 5: As Influências Musicais da Lana</li>
      </ul>
    </div>
  );
}

