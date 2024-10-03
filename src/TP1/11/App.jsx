import React, { useState } from "react";
import style from "./container.module.css";

export default function App() {
  const [expanded, setExpanded] = useState(false);
  const [hideToggle, setHideToggle] = useState(false);

  const handleToggleClick = () => {
    setExpanded(!expanded);
    setHideToggle(true);
  };

  return (
    <div className={style.container}>
      <div className={style.hiddenHeader}>
        <h1>Header</h1>
      </div>
      <div className={style.hiddenMenu}>
        <h1>Global Menu</h1>
      </div>
      
      <div className={style.menuDiv}>
        <div className={style.globalMenu}>
          <div
            className={hideToggle ? style.hideToggle : style.menuToggle}
            onClick={handleToggleClick}
          >
            <img
              className={style.img}
              src="https://img.icons8.com/ios-filled/50/000000/menu--v1.png"
              alt="Menu Toggle"
            />
          </div>
          <h1>Global Menu</h1>
        </div>
      </div>
      
      {expanded && (
        <div className={style.menuItems}>
          <div className={style.menuItem}>Home</div>
          <div className={style.menuItem}>About</div>
          <div className={style.menuItem}>Services</div>
          <div className={style.menuItem}>Contact</div>
        </div>
      )}

      <div className={style.header}>
        <h1>Header</h1>
      </div>
      <div className={style.contextMenu}>
        <h1>Context Menu</h1>
      </div>
      <div className={style.mainContent}>
        <h1>Main Content</h1>
      </div>
      <div className={style.ads}>
        <h1>Ads</h1>
      </div>
      <div className={style.footer}>
        <h1>Footer</h1>
      </div>
    </div>
  );
}
