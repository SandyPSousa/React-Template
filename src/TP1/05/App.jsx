import style from "./container.module.css";

export default function App() {
  return (
    <div className={style.container}>
      <div className={style.menuDiv}>
        <div className={style.globalMenu}>
          <img
            className={style.img}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkNEBO2OUKQjP-RSbIZae3jIq76g3rMrn9vQ&s"
          />
          <h1>Global Menu</h1>
        </div>
        <div className={style.header}>
          <h1>Header</h1>
        </div>
      </div>
      <div className={style.hiddenHeader}>
        <h1>Header</h1>
      </div>
      <div className={style.hiddenMenu}>
        <h1>Global Menu</h1>
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
