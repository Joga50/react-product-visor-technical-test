import React, { useReducer, useContext, useState } from "react";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";
import { ContextGlobal } from "../context/context";
import { ADD_PRODUCT, addProductReducer } from "../reducers/reducers";
import { Link } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const Heading = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

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
    }, 25000); // Hide the message after 5 seconds
  };

  return (
    <HomeContainer maxWidth="md" sx={{ backgroundColor: theme === "dark" ? "#333" : "#fff" }}>
      <Heading variant="h5">Bienvenido al creador de productos. En la siguiente sección, podrás crear un producto con las características especificadas en el formulario. Recuerda que para administrar tus productos, debes ir a la sección de "Mis productos" una vez hayas creado tu producto</Heading>
      <Heading variant="h4">Create a new product</Heading>

      {showSuccessMessage && (
        <SuccessMessage>
          <Typography>Your object has been created. Go to My Products to manage your products.</Typography>
          <Link to="/myproducts">
            <Typography variant="h6">Click here to go to My Products</Typography>
          </Link>
        </SuccessMessage>
      )}

      <ProductForm onProductSubmit={handleProductSubmit} />
    </HomeContainer>
  );
}

export default Home;
