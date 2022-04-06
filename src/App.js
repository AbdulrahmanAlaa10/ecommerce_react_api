import React from 'react'
import { useState, useEffect } from 'react';
import { BrowserRouter, Link , Router , Route , Routes , NavLink } from 'react-router-dom'
import { commerce } from "./Lib/commerce";
import Navbar from "./Navbar";
import Home from "./Home";
import Products from "./Products"
import Cart from "./Cart"


const App = () => {
  const [products, setProducts] = useState([]);


  const fetchProducts = async () => {
    const { data } = await commerce.products.list(); // 8
    setProducts(data)
  }


  useEffect(() => {
    fetchProducts();
    // fetchCart();
  }, []);


  // console.log(cart);
  console.log(products);



  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Navbar" element={<Navbar />} />
        <Route path="/Products" element={<Products products={products} />} />
        <Route path="/Cart" element={<Cart />} />

      </Routes>


      

    </BrowserRouter>
  )
}

export default App