import React, { useContext } from 'react';
import Modal from '../UI/Modal'
import CartContext from '../../context/Cart/CartContext';
import UserProgressContext from '../../context/User/UserProgressContext';
import Button from '../UI/Button';
import { currencyFormatter } from '../../util/formating';
import CartItem from './CartItem';



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

  function handleGoToCheckout() {
    userProgressCtx.showCheckout();
  }

  return (
    <Modal className="cart" open={userProgressCtx.progress ==='cart'} 
    onClose={userProgressCtx.progress==='cart' ? handleCloseCart : undefined}
    >
      <h2>Your Cart</h2>
      <ul>
        {cartCtx?.items.map(item => 
          <CartItem 
          key={item._id}
          name={item.title}
          quantity={item.quantity}
          price={item.price}
          onIncrease={() => cartCtx.addItem(item)}
          onDecrease={() => cartCtx.removeItem(item._id)}
          />
        )}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal !== undefined ? cartTotal : 0)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={handleCloseCart}>
          Close
        </Button>
        {cartCtx.items.length > 0 ? (
          <Button onClick={handleGoToCheckout}>Go to Checkout</Button>
         ) : null} 
      </p>
    </Modal>
  );
};

export default Cart;