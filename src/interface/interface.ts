// Define the shape of a book object
export interface Book {
    _id: string;
    title: string;
    author: string;
    description: string;
    price: string;
    condition: string;
    image: string;
    pages: string;
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
      author: "",
      description: "",
      price: "",
      condition: "",
      image: "",
      pages: "",
    }
  };
