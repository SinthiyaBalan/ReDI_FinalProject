import React from 'react'
import { useNavigate } from 'react-router-dom'

function Payment() {

  const navigate = useNavigate();
  return (
    <div className='payment-page'>
      <h1 className='payment-title text-primary'>Shipping address</h1>
      {/* <input type="text" placeholder="Type here" className="input input-bordered input-success w-full max-w-xs" /> */}

      <form className='form-wrapper'>
  <label for="fname">First name:
  <input type="text" id="fname" name="fname" value="" /> </label>
  <label for="lname">Last name:
  <input type="text" id="lname" name="lname" value="" /></label>
  <label for="lname">Address:
  <input type="text" id="lname" name="lname" value="" /></label>
  <label for="lname">City:
  <input type="text" id="lname" name="lname" value="" /></label>
  <label for="lname">Country:
  <input type="text" id="lname" name="lname" value="" /></label>
  <label for="email">Enter your email:
  <input type="text" id="email" name="email" /></label>
  <label for="payment">Payment Type:
  <select id="payment" name="payment">
    <option value="volvo">Debit Card</option>
    <option value="saab">Credit Card</option>
    <option value="fiat">Paypal</option>
    <option value="audi">Google Pay</option>
  </select></label>
  <label for="lname">Card Number:
  <input type="text" id="lname" name="lname" value="" /></label>
  <button className= "btn btn-primary mb-10 w-36 ml-12" onClick={()=>window.my_modal_5.showModal()}>Place Order</button>


  {/* <button className="btn" onClick={()=>window.my_modal_5.showModal()}>open modal</button> */}
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <form method="dialog" className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Your Order # 2334579911 is placed successfully. Check your Email for tracking details</p>
    <div className="modal-action">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn" onClick={ () => navigate('/')}>Close</button>
    </div>
  </form>
</dialog>
</form> 
    </div>
  )
}

export default Payment