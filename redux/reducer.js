import { ADD_TO_CART, REMOVE_FROM_CART } from "./constants";

const initialstate = {
  allProducts: [],
  cartProducts: [],
  totalPrice: 0,
};
export default function useReducer(state = initialstate, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        cartProducts: [...state.cartProducts, action.payload],
        totalPrice: state.totalPrice + action.payload.price,
      };

    case REMOVE_FROM_CART:
      return {
        cartProducts: [
          ...state.cartProducts.filter((i) => i.id !== action.payload.id),
        ],
        totalPrice: state.totalPrice - action.payload.price,
      };

    default:
      return state;
  }
}
