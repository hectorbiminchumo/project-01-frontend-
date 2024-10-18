import { ReactNode } from "react";

export interface Props {
  children: ReactNode;
}
export interface Book {
    _id: string;
    title: string;
    description: string;
    price: number;
    image: string;
    pages: string;
    quantity: number

  }
  
  // Define the shape of the global state
export interface BookState {
    books: Book[];
    singleBook: Book;
  }
  
  export const initialState: BookState = {
    books: [],
    singleBook: {
      _id: "",
      title: "",
      description: "",
      price: 0,
      image: "",
      pages: "",
      quantity: 0,
    }
  };
  export interface CartState {
    items: Book[];
  }
  export const initialCartState: CartState = {
    items: [],
  };

  export interface CartContextType {
    items: Book[]; 
    addItem: (item: Book) => void;
    removeItem: (id: string) => void;
  }
  export interface AddItemAction {
  type: "ADD_ITEM";
  payload: Book;
}
  export interface RemoveItemAction {
  type: "REMOVE_ITEM";
  payload: string; 
}

  export type CartAction = AddItemAction | RemoveItemAction;

  export interface UserProgressContextType {
    progress: string;
    showCart: () => void;
    hideCart: () => void;
    showCheckout: () => void;
    hideCheckout: () => void;
  }

  export interface CartItemProps {
    name: string;
    quantity: number;
    price: number;
    onIncrease: () => void;
    onDecrease: () => void;
  }