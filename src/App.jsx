
import './App.css';
import Footer from './components/Footer';
import MainSection from './components/MainSection';
import Nav from './components/Nav'; 
import { Routes , Route } from 'react-router-dom'
import ProductList from './components/ProductList';
import { useState } from 'react';
import ProductDetails from './components/ProductDetails';
import ShoppingCart from './components/ShoppingCart';
import Payment from './components/Payment';
import React, { useEffect } from 'react';
import axios from 'axios';

function App() {

  const [selectedCategory, setSelectedCategory] = useState();
  const [selectedProductId, setSelectedProductId] = useState();
  const [categories, setCategories] = useState();
  const [products, setProducts] = useState();
  const [qty, setQty] = useState();
  const [cartItem, setCartItem] = useState([]);
  const [product, setProduct] = useState();

  // console.log("cartItem",cartItem);

  useEffect(() => {
    axios("https://ecommerce-website-backend-2lob.onrender.com/products").then(i => setProducts(i.data)).catch(i => console.log(i))

}, []);



  return (
    <div data-theme="cupcake" className="app min-h-screen">
      <Nav />
        <Routes >
          <Route path='/' element={<MainSection setCategories={setCategories} categories={categories} setSelectedCategory = {setSelectedCategory}/>} />
          <Route path='/productList' element={<ProductList products={products} selectedCategory={selectedCategory} setSelectedProductId = {setSelectedProductId} />} />
          <Route path='/productDetails' element = {<ProductDetails cartItem={cartItem} selectedProductId = {selectedProductId} qty={qty} setQty = {setQty} setCartItem = {setCartItem} product = {product} products={products} setProduct={setProduct}/>} />
          <Route path='/shoppingCart' element = {<ShoppingCart   cartItem={cartItem} setCartItem = {setCartItem}/>} />
          <Route path='/payment' element = {<Payment />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
