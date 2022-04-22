import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import store from "../redux/store";
import { removefromcart } from "../redux/action";

function Cart() {
  const [cartItems, updatecartItems] = useState(store.getState());
  store.subscribe(() => updatecartItems(store.getState()));

  return (
    <SafeAreaView style={{ flex: 1, margin: 10 }}>
      <Text>💵 852</Text>
      <FlatList
        data={cartItems}
        keyExtractor={({ id }, index) => id}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                height: 120,
                flexDirection: "row",
                alignItems: "center",
                borderWidth: 1,
                borderRadius: 5,
                margin: 5,
                padding: 5,
              }}
            >
              <Image
                source={{
                  uri: item.thumbnail,
                }}
                resizeMode="cover"
                style={{
                  width: "30%",
                  height: "100%",
                }}
              ></Image>
              <Text style={{ width: "60%" }}>{item.title}</Text>
              <TouchableOpacity
                onPress={() => {
                  removefromcart(item);
                }}
                id={item.id}
              >
                <Text style={{ fontSize: 25 }}>⛔</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      ></FlatList>
    </SafeAreaView>
  );
}

export default Cart;
