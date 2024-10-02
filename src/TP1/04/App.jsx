import style from "./container.module.css"
   


export default function App() {
  return (
    <div className={style.container}>
      <div className={style.header}>
        <h1>Header</h1>
      </div>
      <div className={style.globalMenu}>
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
