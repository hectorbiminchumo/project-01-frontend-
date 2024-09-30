import { createContext } from 'react';
import { Book } from '../../interface/interface';

// Define the type for the context
interface CartContextType {
  items: []; 
  addItem: (item: Book) => void;
}

// Create the context with the correct type, initially set to `null`
const CartContext = createContext<CartContextType | null>(null);

export default CartContext;