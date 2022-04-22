import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import store from "../redux/store";

import { addtocart, removefromcart } from "../redux/action";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function Home({ navigation }) {
  const [allproducts, getData] = useState(store.getState().allProducts);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((json) => {
        getData(json.products);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);
  const [cartProducts, updatecartProducts] = useState(
    store.getState().cartProducts
  );
  store.subscribe(() => updatecartProducts(store.getState().cartProducts));
  navigation.setOptions({
    headerRight: () => (
      <View
        style={{
          flexDirection: "row",
          top: 0,
          height: 50,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>{cartProducts.length}</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
          <Text
            style={{
              fontSize: 20,
              textAlign: "right",
            }}
          >
            🛒
          </Text>
        </TouchableOpacity>
      </View>
    ),
  });
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        numColumns={2}
        contentContainerStyle={styles.list}
        data={allproducts}
        keyExtractor={({ id }, index) => id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.product}
              onPress={() =>
                cartProducts.includes(item)
                  ? removefromcart(item)
                  : addtocart(item)
              }
            >
              <Image
                source={{ uri: item.thumbnail }}
                resizeMode="cover"
                style={{
                  width: "100%",
                  height: "80%",
                }}
              ></Image>
              <Text style={{ textAlign: "center" }}>{item.title}</Text>
            </TouchableOpacity>
          );
        }}
      ></FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  product: {
    margin: 2,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#000000",
    width: windowWidth * (45 / 100),
    height: windowHeight * (30 / 100),
  },
  list: {
    backgroundColor: "#f0ffff",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
});

export default Home;
