import React, { useContext } from 'react';
import Modal from '../UI/Modal'
import CartContext from '../../context/Cart/CartContext';
import UserProgressContext from '../../context/User/UserProgressContext';
import Button from '../UI/Button';
import { currencyFormatter } from '../../util/formating';



const Cart: React.FC = () => {
 
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  // Calculate the cart total
  const cartTotal = cartCtx?.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  // Handle close cart action
  function handleCloseCart() {
    userProgressCtx.hideCart();
  }

  return (
    <Modal className="cart" open={userProgressCtx.progress === 'cart'}>
      <h2>Your Cart</h2>
      <ul>
        {cartCtx?.items.map(item => (
          <li key={item._id}>
            {item.title} - {item.quantity}
          </li>
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal !== undefined ? cartTotal : 0)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={handleCloseCart}>
          Close
        </Button>
        <Button onClick={handleCloseCart}>Go to Checkout</Button>
      </p>
    </Modal>
  );
};

export default Cart;