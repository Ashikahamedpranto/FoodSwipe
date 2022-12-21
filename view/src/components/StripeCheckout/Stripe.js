import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Cart from '../Cart/Cart'
import './Stripe.css'


  const Message = ({ message }) => (
    <section>
      <p>{message}</p>
    </section>
  );

const Stripe = () => {

  const cart=useSelector(state=>state.cart)
  // console.log(cart)
  const{cartItems,totalPrice}=cart;
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);
  return message ? (
    <Message message={message} />
  ) : (
    <Cart/>
  );
}

export default Stripe