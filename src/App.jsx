
import './App.css';
import Footer from './components/Footer';
import MainSection from './components/MainSection';
import Nav from './components/Nav';
import {Routes , Route} from 'react-router-dom'
import ProductList from './components/ProductList';
import { useState } from 'react';
import ProductDetails from './components/ProductDetails';

function App() {

  const [selectedCategory, setSelectedCategory] = useState();
  const [selectedProduct, setSelectedProduct] = useState();
  const [categories, setCategories] = useState()
  const [products, setProducts] = useState()

  return (
    <div data-theme="cupcake" className="app min-h-screen">
      <Nav />
        <Routes >
          <Route path='/' element={<MainSection setCategories={setCategories} categories={categories} setSelectedCategory = {setSelectedCategory}/>} />
          <Route path='/productList' element={<ProductList products={products} setProducts={setProducts} selectedCategory={selectedCategory} setSelectedProduct = {setSelectedProduct} />} />
          <Route path='/productDetails' element = {<ProductDetails selectedProduct = {selectedProduct}/>} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
