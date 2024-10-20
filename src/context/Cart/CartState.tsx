import { useReducer } from 'react'
import { Book, initialCartState, Props } from '../../interface/interface'
import CartReducer from './CartReducer'
import CartContext from './CartContext'



const CartState: React.FC<Props> = ({children}) => {
  // Setup reducer and global state
  const [cart, dispatchCartAction] = useReducer(CartReducer, initialCartState);

  //Functions that modify the global state

  const addItem = (item: Book) => {

    dispatchCartAction({
      type: "ADD_ITEM",
      payload: item,
    });
  };

  const removeItem = (id: string) => {
    dispatchCartAction({ type: 'REMOVE_ITEM', payload: id })
  }

  const cartContext = {
    items: cart.items,
    addItem,
    removeItem
  }


  return (
    <CartContext.Provider 
    value={cartContext     
    }>
    {children}
    </CartContext.Provider>
    );
};

export default CartState;
