import React, { useEffect, useContext } from "react";
import BookContext from "./../../context/Book/BookContext";
import { Book } from "../../interface/interface";
import BookItem from "./BookItem";

const Books: React.FC = () => {

  const bookCtx = useContext(BookContext);
  const { books, getBooks } = bookCtx;

  

  useEffect(() => {
    getBooks();
  }, []);
  

  return (
    <ul id="books">
      {books.map((book: Book) => (
        <BookItem  key={book._id} book={book}/>
      ))}

    </ul>
  );
};

export default Books;
