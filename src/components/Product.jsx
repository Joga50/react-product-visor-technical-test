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
    <div className="product-card">
      <h2>{product.nombre}</h2>
      <p>Código: {product.codigo}</p>
      <p>Descripción: {product.descripcion}</p>
      <p>Cantidad: {product.cantidad}</p>
      <p>Fecha de creación: {product.creacion}</p>
      {isFav ? (
        <button
          className="fav-button"
          onClick={() => {
            localStorage.removeItem(`favorites_${product.codigo}`);
            setIsFav(false);
          }}
        >
          <FontAwesomeIcon
            icon={faStar}
            className="fav-icon"
            style={{ color: "yellow" }}
          />
        </button>
      ) : (
        <button
          className="fav-button"
          onClick={addFav}
        >
          <FontAwesomeIcon
            icon={faStar}
            className="fav-icon"
            style={{ color: "white" }}
          />
        </button>
      )}
      <button className="remove-button" onClick={handleRemove}>Eliminar producto.</button>
    </div>
  );
}

export default Product;
