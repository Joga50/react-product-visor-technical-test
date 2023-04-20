import {  Route,  Routes } from "react-router-dom";
import Navbar from "./components/NavBar.jsx";
import Home from "./views/Home";
import MyProducts from "./views/MyProducts";
import "./App.css"
import {ContextProvider, ContextGlobal } from "./context/context"

import React, {  useContext} from "react";
import Footer from "./components/Footer.jsx";

function App() {
  const { theme } = useContext(ContextGlobal);
  return (
    <ContextProvider>
    <div className={`${theme === "dark" ? "dark" : ""}, App`}>
   
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
     
      <Route path='/myproducts' element={<MyProducts />} />
     
    </Routes>
   <Footer />
</div>
</ContextProvider>
  );
}

export default App;
