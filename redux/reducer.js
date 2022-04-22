import { ADD_TO_CART, REMOVE_FROM_CART } from "./constants";
import { removefromcart } from "../redux/action";

// fetch("https://dummyjson.com/products")
//   .then((response) => response.json())
//   .then((json) => {
//     initialstate.products = json.products;
//   })
//   .catch((error) => {
//     alert(error);
//   });

export default function useReducer(state = [], action) {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.includes(action.payload)) {
        removefromcart(action.payload);
      } else {
        return [...state, action.payload];
      }

    case REMOVE_FROM_CART:
      return state.filter((cartItem) => cartItem.id !== action.payload.id);

    default:
      return state;
  }
}
