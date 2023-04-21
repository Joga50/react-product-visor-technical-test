import React, {useContext} from "react";
import { ContextGlobal } from "../context/context";



import Product from "./Product";

function ProductList({ products, removeProduct }) {
  const { theme } = useContext(ContextGlobal);
  return (
    <div className={theme === "dark" ? "dark" : ""} style={{padding: "15px", minHeight: "calc(100vh - 185px)"}}>

      <h2>Lista de productos:</h2>
      <ul>
        {products.map((product, i) => (
          <Product key={i} product={product} removeProduct={removeProduct} />
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
