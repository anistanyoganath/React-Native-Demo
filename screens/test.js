import React from "react";
import { View } from "react-native";
import { connect } from "react-redux";

function Test() {
  return <View></View>;
}
const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (product) =>
      dispatch({
        type: "ADD_TO_CART",
        payload: product,
      }),
  };
};
export default connect(null, mapDispatchToProps)(Test);
