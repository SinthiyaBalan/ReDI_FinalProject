import React from 'react'
import {useNavigate} from 'react-router-dom'

function ShoppingCart({ cartItem , setCartItem}) {

  const navigate = useNavigate();
  console.log(cartItem);
  // console.log('local stg:',(localStorage.getItem('cart')));
  // const productsInCart = JSON.parse(localStorage.getItem('cart'));
  // console.log(cart.map( i => i.name));
  return (
    <div className='shopping-cart-wrapper'> 
      
        <h2 className='cart-heading'>Your Shopping Cart</h2>

    
      {/* {productsInCart && productsInCart.map(i => <div>{i.name} */}
        {cartItem && cartItem.map( (i ,index) => <div className='cart-wrapper' key={index} >
        <div className='cart-img'>
           <img src={i.pics[0]}/>
        </div>
      <div className='cart-details-first'>
        <div className="prod-name">{i.name}</div>
        <div className='price'>€{i.price}</div>
      </div> 
      <div className='cart-details-second'>
        <div className="cart-amount"><h2 className='total-amount'>€ {Number(i.price) * Number(i.quantity)}</h2></div>
        <div className='t-qty'><h4>Quantity : </h4> <span>{i.quantity}</span>  <button className='btn-remove'>Remove</button></div>
      </div>
      </div>
        )}
   <div className='btn-wrapper'>
   <button className="btn btn-primary" onClick={() =>{navigate('/')}}>Continue Shopping</button>
<button className="btn btn-primary" onClick={() =>{navigate('/payment')}}>Go to Payment</button>
    </div> 

    <div className= "final-amountWrapper">
      <div>
        <h4 className='final-amount'>Total Inclv VAT </h4> <span>€400</span>
        <h3>Shipping by DHL for free</h3>
      </div>

      
      
      </div> 

</div> 
    
  )
}

export default ShoppingCart;