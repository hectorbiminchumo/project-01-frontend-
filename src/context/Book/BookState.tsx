import { useReducer, ReactNode } from 'react'
import BookContext from './BookContext'
import BookReducer from './BookReducer'
import { Book, initialState } from '../../interface/interface'
import axiosClient from "../../config/axios"

// Define the props for BookState component
interface Props {
  children: ReactNode;
}

const BookState: React.FC<Props> = ({children}) => {
  // 2. Setup reducer and global state
  const [globalState, dispatch] = useReducer(BookReducer, initialState);

  // 3. Functions that modify the global state

  const getBooks = async () => {
    const res = await axiosClient.get("books/readall");
    console.log("Getting books...");
    console.log(res);

    const list = res.data.data;

    dispatch({
      type: "GET_BOOKS",
      payload: list,
    });
  };

  const getBook = async (bookId: string) => {
    console.log("This is the id", bookId);

    const res = await axiosClient.get(`books/readone/${bookId}`);
    console.log(res);

    const selectedBook = res.data.data;

    dispatch({
      type: "GET_BOOK",
      payload: selectedBook,
    });
  };

  const createBook = async (form: Book) => {
    const res = await axiosClient.post("books/create", form);
    console.log(res);
    window.location.replace("/books");
  };

  const updateBook = async (form: Book, idBook: string) => {
    const res = await axiosClient.put(`books/edit/${idBook}`, form);

    const updatedBook = res.data.data;

    dispatch({
      type: "UPDATE_BOOK",
      payload: updatedBook,
    });

    window.location.replace("/books");
  };

  const deleteBook = async (idBook: string) => {
    await axiosClient.delete(`books/delete/${idBook}`);
    window.location.replace("/books");
  };

  // 4. Return
  return (
    <BookContext.Provider 
    value={{
        books: globalState.books,
        singleBook: globalState.singleBook,
        getBooks,
        getBook,
        createBook,
        updateBook,
        deleteBook
    }}>
      {children}
    </BookContext.Provider>
  );
};

export default BookState;
