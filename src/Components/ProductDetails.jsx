import React from "react";
import data from "../data.json";
import {useNavigate} from 'react-router-dom'

function ProductDetails({ selectedProduct , setQty}) {

  const navigate = useNavigate();
  // console.log("product Id", selectedProduct);

  const product = data.products.filter((i) => i.id == selectedProduct);

  // console.log(product);

  const setQtyHandler = (e) => {
   
    setQty(e.target.value);
    console.log(e.target.value);
  };

  function addToCartHandler(e){
    console.log("Inside handler", e);
    navigate('/shoppingCart');
  }

  return (
    <div className="product-details-container">
      <div>
      <div className="carousel w-96 h-96 mt-10 ml-10 p-15">
        <div id="item1" className="carousel-item w-96">
          {product &&
            product.map((i) => <img src={i.pics[0]} className="w-full" />)}
        </div>
        <div id="item2" className="carousel-item w-full">
          {product &&
            product.map((i) => <img src={i.pics[1]} className="w-full" />)}
        </div>
        <div id="item3" className="carousel-item w-full">
          {product &&
            product.map((i) => <img src={i.pics[2]} className="w-full" />)}
        </div>
        <div id="item4" className="carousel-item w-full">
          {product &&
            product.map((i) => <img src={i.pics[3]} className="w-full" />)}
        </div>
      </div>
      <div className="flex justify-center w-96 py-2 gap-2 ml-10">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
      </div>
      

      <div className="product-details">
        {product &&
          product.map((i) => <div> <h2 className="prod-name">{i.name}</h2>
          <h4>{i.brand}</h4>
          <h2>€{i.price}</h2>
          <div className="prod-quantity">
          <h4>Quantity </h4>:
          <input type="number" name="quantity" id="quantity" min={1} max={10} onChange={setQtyHandler} /> </div><br /><br />
          <button className = "btn btn-primary" onClick= {(e) => {addToCartHandler(e);}}>Add to Cart</button>
         
         

          </div>
          )}
      </div>
    </div>
  );
}

export default ProductDetails;
