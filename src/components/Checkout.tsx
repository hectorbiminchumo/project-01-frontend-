import { useContext, FormEvent } from 'react';
import CartContext from '../context/Cart/CartContext';
import UserProgressContext from '../context/User/UserProgressContext';
import { CartContextType, UserProgressContextType } from '../interface/interface';
import Modal from './UI/Modal';
import Button from './UI/Button';
import Input from './UI/Input';
import { currencyFormatter } from '../util/formating';
import { loadStripe } from '@stripe/stripe-js';
import { makePaymentRequest } from './api/payment';




function Checkout() {
  // Use context with proper typing
  const cartCtx = useContext<CartContextType>(CartContext)
  const userProgressCtx = useContext<UserProgressContextType>(UserProgressContext);

  const stripePublishableKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;


  const stripePromise = loadStripe(stripePublishableKey|| '')

  

  // Calculate cart total price
  const cartTotal = cartCtx.items.reduce((totalPrice, item) => totalPrice + item.quantity * item.price, 0);

  // Handle close action
  function handleClose() {
    userProgressCtx.hideCheckout();
  }

  // Handle form submission
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const fd = new FormData(event.currentTarget);
    const customerData = Object.fromEntries(fd.entries()); // Convert FormData to object

    // Send order request
    fetch('http://localhost:3005/orders/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        order: {
          items: cartCtx.items,
          customer: customerData,
        }
        
      }),
    });
  }

  const buyStripe = async () => {
    try {
       const stripe = await stripePromise
       const res = await makePaymentRequest.post("/api/orders", {
          products: cartCtx.items
       })
       await stripe?.redirectToCheckout({
        sessionId: res.data.stripeSession.id
       })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Modal open={userProgressCtx.progress ==='checkout'} onClose={handleClose}>
      <form onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>

        <Input label="Full Name" type="text" id="name" />
        <Input label="E-Mail Address" type="email" id="email" />
        <Input label="Street" type="text" id="street" />

        <div className="control-row">
          <Input label="Postal Code" type="text" id="postalCode" />
          <Input label="City" type="text" id="city" />
        </div>

        <p className="modal-actions">
          <Button type="button" textOnly onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" onClick={buyStripe}>Submit Order</Button>
        </p>
      </form>
    </Modal>
  );
}

export default Checkout;
