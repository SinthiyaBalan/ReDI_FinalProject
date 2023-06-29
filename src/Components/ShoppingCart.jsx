import React from "react";
import { useNavigate } from "react-router-dom";

function ShoppingCart({ cartItem, setCartItem }) {

  let total_amount = 0;
  let total_amount_perItem = 0;

  function deleteItem (e) {
    const result = cartItem.filter(i => i.id != e)
    setCartItem(result)

  }
  const navigate = useNavigate();
  console.log(cartItem);
  
  return (
    <div className="shopping-cart-wrapper">
      <h2 className="cart-heading">Your Shopping Cart</h2>

     
      {cartItem &&
        cartItem.map((i, index) => (
          <div className="cart-wrapper" key={index}>
            <div className="cart-img">
              <img src={i.pics[0]} />
            </div>
            <div className="cart-details-first">
              <div className="prod-name">{i.name}</div>
              <div className="price">€{i.price}</div>
            </div>
            <div className="cart-details-second">
              <div className="cart-amount">
                <h2 className="total-amount">
                  € {total_amount_perItem = (Number(i.price) * Number(i.quantity))}
                </h2>
              </div>
              <div className="t-qty">
                <h4>Quantity : </h4> <span>{i.quantity}</span>{" "}
                <button onClick={() => deleteItem(i.id)} className="btn-remove">Remove</button>
              </div>
            </div>
          </div>
          
        ))}
      <div className="btn-wrapper">
        <button
          className="btn btn-primary"
          onClick={() => {
            navigate("/");
          }}
        >
          Continue Shopping
        </button>
      </div>

      <div className="final-amountWrapper">
        <div className="famount-wrapper">
          <h4>Total Inclv VAT </h4>
          
          <h2  className="final-amount"> €{
            cartItem && cartItem.reduce((acc, cur) => {
              return (acc + (Number(cur.quantity) * Number(cur.price)));
            }, 0)
          }</h2>

        </div>

        <h3 className="shipping-info">You are eligible for free delivery.</h3>
        <button
          className="btn btn-primary"
          onClick={() => {
            navigate("/payment");
          }}
        >
          Go to Checkout
        </button>
      </div>
    </div>
  );
}

export default ShoppingCart;
