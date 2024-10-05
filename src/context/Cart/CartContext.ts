import { createContext } from 'react';
import { CartContextType } from '../../interface/interface';


// Create the context with the correct type, initially set to `null`
const CartContext = createContext<CartContextType | null>(null);

export default CartContext;