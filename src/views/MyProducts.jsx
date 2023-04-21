
import React, { useReducer } from "react";
import ProductList from "../components/ProductList";
import { REMOVE_PRODUCT, removeProductReducer } from "../reducers/reducers"
import { Link } from "react-router-dom";

function MyProducts() {
  const [state, dispatch] = useReducer(removeProductReducer, {
    products: JSON.parse(localStorage.getItem("products")) || [],
  });

  const removeProduct = (product) => {
    dispatch({ type: REMOVE_PRODUCT, payload: product });
  };

  return (
    <div>
    <h2>Mis Productos</h2>
    {state.products.length === 0 ? (
      <p>En el momento no tienes ningun producto, dirigete a la pagina de inicio para crear uno! <Link to="/">Crear nuevo producto</Link></p>
    ) : (
      <>
        <h3 style={{fontWeight: "normal"}}>Aqui podras administrar tu productos, puedes agregar tu producto a favorito y ademas puedes eliminar los productos que ya haz creado</h3>
        <ProductList products={state.products} removeProduct={removeProduct} />
      </>
    )}
  </div>
  );
}

export default MyProducts;
