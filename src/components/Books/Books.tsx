import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import BookContext from "./../../context/Book/BookContext";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import UserContext from "../../context/User/UserContext";
import { BookContextType } from '../../interfaces/interface'; // Adjust this import based on where you define these interfaces

interface Book {
  _id: string;
  title: string;
  image: string;
  condition: string;
  price: string;
}

interface BookContextType {
  books: Book[];
  getBooks: () => void;
}

interface UserContextType {
  currentUser: { admin: boolean };
}

const Books: React.FC = () => {
  // ESTADO GLOBAL

  const bookCtx = useContext(BookContext);
  const { books, getBooks } = bookCtx;

  // const userCtx = useContext<UserContextType>(UserContext);
  // const { currentUser } = userCtx;
  const currentUser = { admin: false };

  // ESTADO LOCAL

  useEffect(() => {
    getBooks();
    console.log('books->>>',books);
    console.log('bookCtx ->>>', bookCtx);
    
    
  }, []);

  return (
    <>
      {currentUser.admin ? (
        <>
          <div className="relative">
            <Link to="/books/crear">
              <button
                type="button"
                id="button-create"
                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#557C55] hover:bg-[#A6CF98] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
              >
                Create Book
              </button>
            </Link>
          </div>
        </>
      ) : (
        <></>
      )}

      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-5xl font-sans font-bold">Books</h2>

          <h1 className="text-5xl font-sans font-bold">New Books</h1>

          <div className="mx-px grid grid-cols-2 sm:mx-0 md:grid-cols-3 lg:grid-cols-5 gap-x-6 mt-10">
            {books.map((element: Book) => {
              return (
                <div
                  key={element._id}
                  className="group relative bg-white rounded-lg flex flex-col overflow-hidden"
                >
                  <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                    <Link to={`/books/${element._id}`}>
                      <img
                        src={element.image}
                        alt="imagen de libro"
                        className="w-full h-full object-contain h-100 w-200"
                      />
                    </Link>
                  </div>

                  <div className="flex-1 p-4 space-y-2 flex flex-col">
                    <h3 className="text-center text-sm font-medium text-gray-900 ">
                      <Link to={`/books/${element._id}`}>
                        <span aria-hidden="true" className="absolute inset-0"></span>
                        {element.title}
                      </Link>
                    </h3>
                  </div>

                  <div className="flex-1 flex flex-col justify-end">
                    <p className="text-center text-sm italic text-gray-500">
                      {element.condition}
                    </p>

                    <p className="text-center text-base font-medium text-gray-900">
                      ${element.price} USD
                    </p>

                    <div className="image-cart flex justify-center">
                      <ShoppingCartIcon />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mx-px grid grid-cols-2 sm:mx-0 md:grid-cols-3 lg:grid-cols-6 gap-x-6"></div>
        </div>
      </div>
    </>
  );
};

export default Books;
