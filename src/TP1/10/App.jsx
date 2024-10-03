import React, { useState } from "react";
import styles from "./style.module.css";

export default function App() {
  const [expanded, setExpanded] = useState(false);
  const [hideToggle, setHideToggle] = useState(false);
  const handleToggleClick = () => {
    setExpanded(!expanded);
    setHideToggle(true);
  };

  return (
    <div className={styles.menuContainer}>
      <div className={styles.menuHeader}>
        <div
          className={hideToggle ? styles.hideToggle : styles.menuToggle}
          onClick={handleToggleClick}
        >
          <img
            className={styles.img}
            src="https://cdn-icons-png.flaticon.com/512/2311/2311531.png"
          />
        </div>
        <div className={styles.platformBrand}>Brand</div>
        <div className={styles.profileIcon}>
          <img
            className={styles.img}
            src="https://freesvg.org/img/abstract-user-flat-4.png"
          />
        </div>
      </div>

      {expanded && (
        <div className={styles.menuItems}>
          <div className={styles.menuItem}>Home</div>
          <div className={styles.menuItem}>About</div>
          <div className={styles.menuItem}>Services</div>
          <div className={styles.menuItem}>Contact</div>
        </div>
      )}
    </div>
  );
}
