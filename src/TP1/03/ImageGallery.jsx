import React from "react";
import style from "./ImageGallery.module.css";
const imageUrls = [
  "https://img.freepik.com/free-photo/view-adorable-3d-cats_23-2150473757.jpg?t=st=1727887037~exp=1727890637~hmac=fc7f3813f9557d8bca507f3e4531ab8545607fe71cf42393f853a579d6ccd737&w=740",
  "https://img.freepik.com/free-photo/view-adorable-3d-cats_23-2150473757.jpg?t=st=1727887037~exp=1727890637~hmac=fc7f3813f9557d8bca507f3e4531ab8545607fe71cf42393f853a579d6ccd737&w=740",
  "https://img.freepik.com/free-photo/view-adorable-3d-cats_23-2150473757.jpg?t=st=1727887037~exp=1727890637~hmac=fc7f3813f9557d8bca507f3e4531ab8545607fe71cf42393f853a579d6ccd737&w=740",
  "https://img.freepik.com/free-photo/view-adorable-3d-cats_23-2150473757.jpg?t=st=1727887037~exp=1727890637~hmac=fc7f3813f9557d8bca507f3e4531ab8545607fe71cf42393f853a579d6ccd737&w=740",
  "https://img.freepik.com/free-photo/view-adorable-3d-cats_23-2150473757.jpg?t=st=1727887037~exp=1727890637~hmac=fc7f3813f9557d8bca507f3e4531ab8545607fe71cf42393f853a579d6ccd737&w=740",
];

export default function ImageGallery({ numImages }) {
  const images = Array.from({ length: numImages }, (_, index) => (
    <div key={index} className={style.imageBox}>
      <img className={style.img}src={imageUrls[index % imageUrls.length]} alt={`Cat ${index + 1}`} />
    </div>
  ));

  return <div className={style.galleryContainer}>{images}</div>;
}