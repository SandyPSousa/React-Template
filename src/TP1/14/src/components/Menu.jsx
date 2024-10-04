import React, { useState } from "react";
import styles from "./styles.module.css";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <header className={styles.header}>
        <h1 className={styles.headerText}>Lana Del Rey</h1>
        <nav className={styles.menu}>
          <button onClick={toggleMenu} className={styles.menuButton}>
            Ver Mais
          </button>
          {isOpen && (
            <ul className={styles.menuList}>
              <li>Discussões Gerais</li>
              <li>Novidades sobre Lana</li>
              <li>Letras e Significados</li>
              <li>Álbuns Favoritos</li>
              <li>Eventos e Shows</li>
            </ul>
          )}
        </nav>
      </header>
    </div>
  );
}
