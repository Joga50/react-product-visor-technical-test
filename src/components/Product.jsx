import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Product(props) {
  const { product, removeProduct } = props;
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    const favoritesString = localStorage.getItem("favorites");
    const favorites = JSON.parse(favoritesString) || [];
    if (favorites.find(f => f.codigo === product.codigo)) {
      setIsFav(true);
    }
  }, [product]);

  const addFav = () => {
    localStorage.setItem(
      `favorites_${product.codigo}`,
      JSON.stringify(product)
    );
    setIsFav(true);
  };

  const handleRemove = () => {
    removeProduct(product);
  };

  return (
    <div>
      <h2>{product.nombre}</h2>
      <p>Código: {product.codigo}</p>
      <p>Descripción: {product.descripcion}</p>
      <p>Cantidad: {product.cantidad}</p>
      <p>Fecha de creación: {product.creacion}</p>
      {isFav ? (
        <button
          style={{ backgroundColor: "rgb(133, 182, 225)" }}
          onClick={() => {
            localStorage.removeItem(`favorites_${product.codigo}`);
            setIsFav(false);
          }}
          className="favButton"
        >
          <FontAwesomeIcon
            icon={faStar}
            style={{ color: "yellow", height: "15px" }}
          />
        </button>
      ) : (
        <button
          style={{ backgroundColor: "rgb(133, 182, 225)" }}
          onClick={addFav}
          className="favButton"
        >
          <FontAwesomeIcon
            icon={faStar}
            style={{ color: "white", height: "15px" }}
          />
        </button>
      )}
      <button onClick={handleRemove}>Remove Product</button>
    </div>
  );
}

export default Product