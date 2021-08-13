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
        amount={amount * 100}
        shippingAddress 
        billingAddress
        currency="TTD"
        stripeKey="pk_test_51JLnihDp6xifSmVcHA3bEOOl1a8WyjlsH6oS8v0kStNRIdFtqIvOHvDWVwSnZEIi5prBlekCfIUQySdm4ozAdaX400SXsrEzcW"
      >
        <div className="bt">
          <button className="btn" onClick={validation}>PAY NOW</button>
        </div>
      </StripeCheckout>
    </div> 
  );
}

export default Checkout;
