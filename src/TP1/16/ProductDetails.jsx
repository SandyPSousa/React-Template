import React, { useState } from "react";

export default function ProductDetails({ data }) {
  const [selectedImage, setSelectedImage] = useState(data.images[0]);
  const isLargeScreen = window.innerWidth > 400;

  return (
    <section style={{ padding: "1rem", borderBottom: "1px solid #ddd" }}>
      <div style={{ textAlign: "center", marginBottom: "1rem" }}>
        <h2>{data.name}</h2>
        <p>{data.description}</p>
        <img
          src={selectedImage}
          alt={data.name}
          style={{
            width: isLargeScreen ? "600px" : "300px",
            height: "auto",
            border: "1px solid #ccc",
          }}
        />
      </div>

      <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        {data.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${data.name} - ${index + 1}`}
            style={{
              width: isLargeScreen ? "200px" : "100px",
              height: "auto",
              cursor: "pointer",
              border:
                selectedImage === image ? "2px solid #333" : "1px solid #ccc",
            }}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>
      <p>Nota: {data.rating} / 5</p>

      <p>
        <strong>Preço: R$ {data.price.toFixed(2)}</strong>
      </p>
      <button>Comprar</button>
    </section>
  );
}
