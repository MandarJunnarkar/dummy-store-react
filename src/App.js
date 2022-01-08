import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Products from "./Components/Products";
import Navigation from "./Components/Navigation";
import './App.css'



function App() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const productData = await response.json();
      setProducts(productData);
    };
    getProducts();
  }, []);

  return (
    <>
    <Navigation onSearch={setSearchTerm} searchTerm={searchTerm}/>
    <Products searchTerm={searchTerm} products={products}/>
    </>
  );
}

export default App;
