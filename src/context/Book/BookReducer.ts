import { Book, BookState } from '../../interface/interface';


// Define the action type with possible actions and payloads
interface Action {
  type: "GET_BOOK" | "UPDATE_BOOK" | "GET_BOOKS";
  payload: Book | Book[];
}

// Reducer function with proper typing
const reducer = (globalState: BookState, action: Action): BookState => {

  switch (action.type) {

    case "GET_BOOK":
    case "UPDATE_BOOK":
      return {
        ...globalState,
        singleBook: action.payload as Book, // Type assertion to ensure `payload` is of type `Book`
      };

    case "GET_BOOKS":
      return {
        ...globalState,
        books: action.payload as Book[], // Type assertion to ensure `payload` is an array of `Book`
      };

    default:
      return globalState;
  }

}

export default reducer;
