
import { useState } from "react";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const FormContainer = styled("form")`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  max-width: 500px;
  margin: 0 auto;

  @media (min-width: 768px) {
    max-width: 768px;
  }
`;

const ErrorMessage = styled("p")`
  color: red;
  margin: -5px 0 0 0;
  font-size: 0.8rem;
`;

function ProductForm({ onProductSubmit }) {
  const [codigo, setCodigo] = useState("");
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [creacion, setCreacion] = useState("");
  const [errors, setErrors] = useState({});
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      codigo,
      nombre,
      descripcion,
      cantidad,
      creacion,
    };

    const newErrors = {};
    if (!codigo) {
      newErrors.codigo = <ErrorMessage><span>Este espacio no puede ir en blanco</span></ErrorMessage>;
    }
    
    if (!nombre) {
      newErrors.nombre = <ErrorMessage><span>Este espacio no puede ir en blanco</span></ErrorMessage>;
    }
    
    if (!descripcion) {
      newErrors.descripcion = <ErrorMessage><span>Este espacio no puede ir en blanco</span></ErrorMessage>;
    }
    
    if (!cantidad) {
      newErrors.cantidad = <ErrorMessage><span>Este espacio no puede ir en blanco</span></ErrorMessage>;
    }
    
    if (!creacion) {
      newErrors.creacion = <ErrorMessage><span>Este espacio no puede ir en blanco</span></ErrorMessage>;
    }
    

    if (Object.keys(newErrors).length === 0) {
      onProductSubmit(newProduct);

      setCodigo("");
      setNombre("");
      setDescripcion("");
      setCantidad("");
      setCreacion("");

      const products = JSON.parse(localStorage.getItem("products")) || [];
      localStorage.setItem("products", JSON.stringify([...products, newProduct]));

      setShowSuccessMessage(true);

      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 5000);
    } else {
      setErrors(newErrors);

      setTimeout(() => {
        setErrors({});
      }, 2500);
    }
  };

  return (
    <>
    <h2>Crear nuevo producto:</h2>
    <FormContainer onSubmit={handleSubmit} style={{ margin: "0 100px 100px 100px"
      
    
   }} >
    <TextField
      id="codigo"
      label="Código"
      variant="outlined"
      value={codigo}
      onChange={(e) => setCodigo(e.target.value)}
      error={Boolean(errors.codigo)}
     
    />
   {errors.codigo && (
        <span className="error">{errors.codigo}</span>
       )}
    <TextField
      id="nombre"
      label="Nombre"
      variant="outlined"
      value={nombre}
      onChange={(e) => setNombre(e.target.value)}
      error={Boolean(errors.nombre)}
     
    />
  {errors.nombre && (
        <span className="error">{errors.nombre}</span>
       )}
    <TextField
      id="descripcion"
      label="Descripción"
      variant="outlined"
      value={descripcion}
      onChange={(e) => setDescripcion(e.target.value)}
      error={Boolean(errors.descripcion)}
     
    />
  {errors.descripcion && (
        <span className="error">{errors.descripcion}</span>
       )}
    <TextField
      id="cantidad"
      label="Cantidad"
      variant="outlined"
      type="number"
      value={cantidad}
      onChange={(e) => setCantidad(e.target.value)}
      error={Boolean(errors.cantidad)}
    
    />
  {errors.cantidad && (
        <span className="error">{errors.cantidad}</span>
       )}
    <TextField
      id="creacion"
      variant="outlined"
      type="date"
      value={creacion}
      onChange={(e) => setCreacion(e.target.value)}
      error={Boolean(errors.creacion)}
    
    />
  {errors.creacion && (
        <span className="error">{errors.creacion}</span>
       )}
    <div>
      <Button className="button"
        type="submit"
        variant="contained"
        disabled={Object.keys(errors).length > 0}
        color="primary"
      >
       <span>Agregar producto</span> 
      </Button>
    </div>
  </FormContainer>
  </>
  );
}

export default ProductForm;