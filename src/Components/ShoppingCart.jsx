import React from 'react'
import {useNavigate} from 'react-router-dom'

function ShoppingCart({selectedProductId ,qty ,products , cart , setCart}) {

  const navigate = useNavigate();
  console.log(cart);
  // console.log(cart.map( i => i.name));
  return (
    <div className='shopping-cart-wrapper'> 

    
      {cart && cart.map(i => <div>{i.name}
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
        {/* { cart.map((i)  => { <><img  src={i.pics[0]} alt="" />

      <div className='cart-details'>
        <div className="prod-name">{i.name}</div>
        <div className='price'>{i.price}</div>
      </div></>  })} */}

      {/* <div className='cart-details'>
        <div className="cart-amount"><h2>€40</h2></div>
        <div className='Qty'><h4>Quantity</h4> <span>{qty}</span></div>
      </div> */}
<button onClick={() =>{navigate('/')}}>Continue Shopping</button>
</div> 
    
  )
}

export default ShoppingCart;