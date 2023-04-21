import React, { useReducer, useContext, useState } from "react";
import ProductForm from "../components/ProductForm";
import { ContextGlobal } from "../context/context";
import { ADD_PRODUCT, addProductReducer } from "../reducers/reducers";
import { Link } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";



const SuccessMessage = styled("div")(({ theme }) => ({
  color: theme.palette.success.main,
}));

const HomeContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  minHeight: "calc(100vh - 64px)",
});

function Home() {
  const { theme } = useContext(ContextGlobal);
  const [state, dispatch] = useReducer(addProductReducer, {
    products: JSON.parse(localStorage.getItem("products")) || [],
  });

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleProductSubmit = (product) => {
    dispatch({ type: ADD_PRODUCT, payload: product });
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 25000);
  };

  return (
    <HomeContainer maxWidth="md"  >
     
      <h4 style={{fontWeight: "normal", padding: "30px"}}>Bienvenido al creador de productos. En la siguiente sección, podrás crear un producto con las características especificadas en el formulario. Recuerda que para administrar tus productos, debes ir a la sección de "Mis productos" una vez hayas creado tu producto</h4>
 

      {showSuccessMessage && (
        <SuccessMessage>
          <Typography>Tu producto ha sido creado satisfactoriamente. Dirigete a la Pagina de productos para administrar tus productos creados.</Typography>
          <Link to="/myproducts">
            <Typography variant="h6">Click aqui para ir a MIS PRODUCTOS</Typography>
          </Link>
        </SuccessMessage>
      )}

      <ProductForm onProductSubmit={handleProductSubmit} />
    </HomeContainer>
  );
}

export default Home;
