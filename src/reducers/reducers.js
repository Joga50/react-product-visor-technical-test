
export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";

export const addProductReducer = (state, action) => {
  const newProducts = [...state.products, action.payload];
  localStorage.setItem("products", JSON.stringify(newProducts));
  return {
    ...state,
    products: newProducts,
  };
};

export const removeProductReducer = (state, action) => {
  const updatedProducts = state.products.filter(
    (p) => p.codigo !== action.payload.codigo
  );
  localStorage.setItem("products", JSON.stringify(updatedProducts));
  return {
    ...state,
    products: updatedProducts,
  };
};
