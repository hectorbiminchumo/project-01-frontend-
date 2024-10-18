import { createContext } from 'react';
import { CartContextType } from '../../interface/interface';


// Create the context with the correct type, initially set to `null`
const CartContext = createContext<CartContextType>(
    {
        items: [],
        addItem: () => {},
        removeItem: () => {}
    }
);

export default CartContext;