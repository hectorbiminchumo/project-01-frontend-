import { ReactNode } from "react";

// Define the shape of a book object
export interface Props {
  children: ReactNode;
}
export interface Book {
    _id: string;
    title: string;
    description: string;
    price: string;
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
      price: "",
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

  export interface Action {
    type: "ADD_ITEM";
    payload: Book;
  }