import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import React, { useContext } from "react";
import { ContextGlobal } from "../context/context";
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

const NavWrapper = styled(AppBar)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    flexDirection: "column",
    alignItems: "center"
  },
}));

const NavItemsWrapper = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  [theme.breakpoints.down('sm')]: {
    width: "100%",
    padding: 0,
  },
}));

const NavMenuWrapper = styled('ul')(({ theme }) => ({
  listStyle: 'none',
  margin: 0,
  padding: 0,
  display: 'flex',
  alignItems: 'center',
  '& li': {
    margin: '0 20px',
    [theme.breakpoints.down('sm')]: {
      margin: '10px 0',
    },
  },
}));

function Navbar() {
  const { theme, setTheme } = useContext(ContextGlobal);

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <NavWrapper position="static">
      <NavItemsWrapper>
        <Link to="/">
          <Button color="inherit" variant="text">Home</Button>
        </Link>
        <NavMenuWrapper>
          <li>
            <Link to="/myproducts">
              <Button color="inherit" variant="text">Mis Productos</Button>
            </Link>
          </li>
          <li>
            <IconButton onClick={toggleTheme} color="inherit">
              {theme === "light" ? (
                <FontAwesomeIcon icon={faMoon} style={{color: "white"}} />
              ) : (
                <FontAwesomeIcon icon={faSun} style={{color: "white"}} />
              )}
            </IconButton>
          </li>
        </NavMenuWrapper>
      </NavItemsWrapper>
    </NavWrapper>
  );
}

export default Navbar;
