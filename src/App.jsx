
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

function App() {

  const [selectedCategory, setSelectedCategory] = useState();
  const [selectedProductId, setSelectedProductId] = useState();
  const [categories, setCategories] = useState();
  const [products, setProducts] = useState();
  const [qty, setQty] = useState();
  const [cart, setCart] = useState()

  return (
    <div data-theme="cupcake" className="app min-h-screen">
      <Nav />
        <Routes >
          <Route path='/' element={<MainSection setCategories={setCategories} categories={categories} setSelectedCategory = {setSelectedCategory}/>} />
          <Route path='/productList' element={<ProductList products={products} setProducts={setProducts} selectedCategory={selectedCategory} setSelectedProductId = {setSelectedProductId} />} />
          <Route path='/productDetails' element = {<ProductDetails selectedProductId = {selectedProductId} setQty = {setQty} setCart = {setCart}/>} />
          <Route path='/shoppingCart' element = {<ShoppingCart selectedProductId = {selectedProductId} qty = {qty} products = {products} cart={cart} setCart = {setCart}/>} />
          <Route path='/payment' element = {<Payment />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
