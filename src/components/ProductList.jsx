// ProductList.js

import Product from "./Product";

function ProductList({ products, removeProduct }) {
  return (
    <div>
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
