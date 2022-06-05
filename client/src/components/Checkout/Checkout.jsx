import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { useDispatch, useSelector } from "react-redux";
import { placeOrder } from "../../actions/orderAction";
import Loader  from "../Loader/Loader"
import Success from "../Success/Success"
import Error from "../Error/Error"


function Checkout({ amount }) {

  const dispatch = useDispatch(); 
  const orderstate = useSelector(state=> state.placeOrderReducer)

  const { loading , success , error} = orderstate

  function tokenHandler(token) {
    console.log(token);
    dispatch(placeOrder(token, amount));
  }

  function validation()
  {

    if(!localStorage.getItem('currentUser')){
      window.location.href='/login'
    }
  }

  return (
    <div>

      {loading && (<Loader/>)}
      {success && (<Success success = 'Your Order Placed Successfully'/>)}
      {error && (<Error error ='Something wrong!'/>)}


      <StripeCheckout
        token={tokenHandler}
        amount={amount}
        shippingAddress 
        billingAddress
        currency="TTD"
        stripeKey="pk_test_51L7LQ1HDXRSJrbqUzoNgF2pOWAzxe4n1G17v3a2bTKNLrmVFGUqIHWJ72Taftx9TWmBDNtrQ5VQs18VlOnprhyAr00aCxqvjb8"
      >
        <div className="bt">
          <button className="btn" 
                style={{
                  color: "white",
                  backgroundColor: "#BF382C",
                  width: "200px",
                }} onClick={validation}>PAY NOW</button>
        </div>
      </StripeCheckout>
    </div> 
  );
}

export default Checkout;
