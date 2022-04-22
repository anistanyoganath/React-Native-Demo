import { ADD_TO_CART, REMOVE_FROM_CART } from "../redux/constants";
import store from "../redux/store";

export function addtocart(product) {
  store.dispatch({
    type: ADD_TO_CART,
    payload: product,
  });
}
export function removefromcart(product) {
  store.dispatch({
    type: REMOVE_FROM_CART,
    payload: product,
  });
}
