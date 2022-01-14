import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Products from "./Components/Products";
import Navigation from "./Components/Navigation";
import './App.css'



function App() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [cartItem, setCartItem] = useState([]);
  
  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const productData = await response.json();
      setProducts(productData);
    };
    getProducts();
  }, []);

  const handleDelete = (id) =>{
    let newCart = [...cartItem]
    newCart = newCart.filter(item => item.id !== id)
    setCartItem(newCart);
  }

  const onGetItemData = (data) =>{
    const cartData = [
      ...data
    ]
    setCartItem(cartData);
  }
  return (
    <>
    <Navigation cartData={cartItem} onSearch={setSearchTerm} searchTerm={searchTerm} handleDelete={handleDelete}/>
    <Products onGetItemData={onGetItemData} searchTerm={searchTerm} products={products}/>
    </>
  );
}

export default App;
