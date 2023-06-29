
import './App.css';
import Footer from './Components/Footer';
import MainSection from './Components/MainSection';
import Nav from './Components/Nav'; 
import { Routes , Route } from 'react-router-dom'
import ProductList from './Components/ProductList';
import { useState } from 'react';
import ProductDetails from './Components/ProductDetails';
import ShoppingCart from './Components/ShoppingCart';
import Payment from './Components/Payment';
import React, { useEffect } from 'react';
import axios from 'axios';
import AdminLogin from './Components/AdminLogin';


function App() {

  const [selectedCategory, setSelectedCategory] = useState();
  const [selectedProductId, setSelectedProductId] = useState();
  const [categories, setCategories] = useState();
  const [products, setProducts] = useState();
  const [qty, setQty] = useState(1);
  const [defaultqty, setDefaultqty] = useState()
  const [cartItem, setCartItem] = useState([]);
  const [product, setProduct] = useState();
  const [users, setUsers] = useState()

  // console.log("cartItem",cartItem);

  useEffect(() => {
    axios("https://ecommerce-website-backend-2lob.onrender.com/products").then(i => setProducts(i.data)).catch(i => console.log(i))

}, []);

useEffect(() => {
  axios("https://ecommerce-website-backend-2lob.onrender.com/admin").then(i => setUsers(i.data)).catch(i => console.log(i))

}, []);



  return (
    <div data-theme="cupcake" className="app min-h-screen">
      <Nav cartItem={cartItem} setSelectedCategory = {setSelectedCategory}/>
        <Routes >
          <Route path='/' element={<MainSection setCategories={setCategories} categories={categories} setSelectedCategory = {setSelectedCategory}/>} />
          <Route path='/productList' element={<ProductList products={products} selectedCategory={selectedCategory} setSelectedProductId = {setSelectedProductId} setDefaultqty = {setDefaultqty}/>} />
          <Route path='/productDetails' element = {<ProductDetails cartItem={cartItem} selectedProductId = {selectedProductId} qty={qty} setQty = {setQty} setCartItem = {setCartItem} product = {product} products={products} setProduct={setProduct}/>} />
          <Route path='/shoppingCart' element = {<ShoppingCart   cartItem={cartItem} setCartItem = {setCartItem}/>} />
          <Route path='/payment' element = {<Payment />} />
          <Route path='/adminLoginPage' element = {<AdminLogin />}/>
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
