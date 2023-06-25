import React from 'react'
import {useNavigate} from 'react-router-dom'

function ShoppingCart({selectedProductId ,qty ,products , cart , setCart}) {

  const navigate = useNavigate();
  console.log(cart);
  console.log('local stg:',(sessionStorage.getItem('cart')));
  const productsInCart = JSON.parse(sessionStorage.getItem('cart'));
  // console.log(cart.map( i => i.name));
  return (
    <div className='shopping-cart-wrapper'> 
      <h2>Shopping Cart</h2>

    
      {productsInCart && productsInCart.map(i => <div>{i.name}
      <div>
      <img src={i.pics[0]}/>
      </div>
      <div className='cart-details'>
        <div className="prod-name">{i.name}</div>
        <div className='price'>{i.price}</div>
      </div> 
      <div className='cart-details'>
        <div className="cart-amount"><h2>€40</h2></div>
        <div className='Qty'><h4>Quantity</h4> <span>{qty}</span></div>
      </div>
      </div>
        )}
        
<button onClick={() =>{navigate('/')}}>Continue Shopping</button>
<button onClick={() =>{navigate('/payment')}}>Go to Checkout</button>
</div> 
    
  )
}

export default ShoppingCart;