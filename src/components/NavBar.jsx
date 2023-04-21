import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import React, { useContext } from "react";
import { ContextGlobal } from "../context/context";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

function Navbar() {
  const { theme, setTheme } = useContext(ContextGlobal);

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <AppBar position="static" sx={{ backgroundColor: theme === "light" ? "#fff" : "#333" }} style={{ position: "relative"}}>
    <Toolbar>
      <Link to="/">
        <Button className="button" color="inherit" variant="text" sx={{ color: theme === "light" ? "#333" : "#fff" }}>Home</Button>
      </Link>
      <div style={{ flex: 1 }}></div>
      <Link to="/myproducts">
        <Button color="inherit" variant="text" sx={{ color: theme === "light" ? "#333" : "#fff" }}>Mis Productos</Button>
      </Link>
      <IconButton onClick={toggleTheme} color="inherit" sx={{ color: "#fff" }}>
        {theme === "light" ? (
          <FontAwesomeIcon icon={faMoon} style={{color: "#333"}} />
        ) : (
          <FontAwesomeIcon icon={faSun} />
        )}
      </IconButton>
    </Toolbar>
  </AppBar>
  );
}

export default Navbar;

