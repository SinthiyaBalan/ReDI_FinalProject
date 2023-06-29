import React ,{useEffect} from "react";

import {useNavigate } from 'react-router-dom'


function ProductDetails({ cartItem, selectedProductId , qty,  setQty , setCartItem ,product ,products ,setProduct }) {

  const navigate = useNavigate();
  
  useEffect(() => {
    
    setProduct(products.find((i) => i.id == selectedProductId))
  }, []);

  

  const setQtyHandler = (e) => {
   
    setQty(Number(e.target.value));
    console.log(e.target.value);
  };

  function addToCartHandler(e){

    const available = cartItem.find(i => i.id == product.id)
    if (available) {

      const newArray = cartItem.filter(i => i.id != product.id)
      setCartItem(newArray)
      product.quantity = Number(qty) + Number(available.quantity)
      setCartItem(i => [...i, product])
      console.log(cartItem[0].quantity);
    } else {

      product.quantity = qty
      setCartItem(i => [...i, product])
    }
    
    console.log("cartItem",cartItem);
    
  }

  return (
    <div className="product-details-container">
      <div>
      <div className="carousel w-96 h-96 mt-10 ml-10 p-15">
        <div id="item1" className="carousel-item w-96">
          {product &&
            <img src={product.pics[0]} className="w-full" />}
        </div>
        <div id="item2" className="carousel-item w-full">
          {product &&
            <img src={product.pics[1]} className="w-full" />}
        </div>
        <div id="item3" className="carousel-item w-full">
          {product && <img src={product.pics[2]} className="w-full" />}
        </div>
        <div id="item4" className="carousel-item w-full">
          {product &&
            <img src={product.pics[3]} className="w-full" />}
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
      

      <div >
        {product &&
          <div className="product-details"> <h1 className="prod-name">{product.name}</h1>
          <h4 className="prod-brand">{product.brand}</h4>
          <h2 className="prod-price">€{product.price}</h2>
          <p className="prod-desc">{product.description}</p><br />
          <div className="prod-quantity">
          <h4>Quantity </h4>:
          <input type="number" name="quantity" id="quantity" defaultValue={1}  min={1} max={10} onChange={setQtyHandler} /> </div><br />
          <div className="product-btn">
            <button className = "btn btn-primary" onClick= {(e) => {addToCartHandler(e)}}>Add to Cart</button>
          <button className = "btn btn-primary" onClick={ () => 
                            
                            navigate('/shoppingCart')
                        }>Go to CheckOut</button>
          </div>
         

          </div>
          }
      </div>
    </div>
  );
}

export default ProductDetails;
