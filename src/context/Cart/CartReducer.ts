import { Book, CartAction, CartState } from "../../interface/interface";

const CartReducer = (state: CartState, action: CartAction): CartState => {
  let existingCartItemIndex = 0;
  let updatedItems = [];
  let existingCartItem;

  switch (action.type) {
    case "ADD_ITEM":
      existingCartItemIndex = state.items.findIndex(
        (item: Book) => item._id === action.payload._id
      );
      updatedItems = [...state.items];

      if (existingCartItemIndex > -1) {
        const existingItem = state.items[existingCartItemIndex];
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity + 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems.push({ ...action.payload, quantity: 1 });
      }
      return { ...state, items: updatedItems };

    case "REMOVE_ITEM":
      existingCartItemIndex = state.items.findIndex(
        (item) => item._id === action.payload
      );

      existingCartItem = state.items[existingCartItemIndex];

      updatedItems = [...state.items];

      if (existingCartItem.quantity === 1) {
        updatedItems.splice(existingCartItemIndex, 1);
      } else {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity - 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      }
      return { ...state, items: updatedItems };

    default:
      return state;
  }
};

export default CartReducer;
