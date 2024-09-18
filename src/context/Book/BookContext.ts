import { createContext } from 'react';
import { Book } from '../../interface/interface';

// Define the type for the context
interface BookContextType {
  books: Book[];   // Replace 'any[]' with the actual type for your books array
  singleBook: Book; // Replace 'any' with the actual type for a single book
  getBooks: () => void;
  getBook: (bookId: string) => void;
  createBook: (form: Book) => void;  // Adjust type of 'form' accordingly
  updateBook: (form: Book, idBook: string) => void; // Adjust type of 'form' accordingly
  deleteBook: (idBook: string) => void;
}

// Create the context with the correct type, initially set to `null`
const BookContext = createContext<any | null>(null);

export default BookContext;