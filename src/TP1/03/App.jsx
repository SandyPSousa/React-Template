import React, { useState } from "react";
import ImageGallery from "./ImageGallery";
import style from "./ImageGallery.module.css";

export default function App() {
  const [numImages, setNumImages] = useState(5);
  const addImage = () => setNumImages((prev) => prev + 1);
  const removeImage = () => setNumImages((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className={style.app}>
      <div className={style.controls}>
        <button className={style.button} onClick={removeImage}>-</button>
        <span className={style.span}>{numImages}</span>
        <button  className={style.button} onClick={addImage}>+</button>
      </div>
      <ImageGallery numImages={numImages} />
    </div>
  );
}
