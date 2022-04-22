import React, { useState } from "react";
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
import products from "../data";
import { addtocart, removefromcart } from "../redux/action";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function Home({ navigation }) {
  const [cartItems, updatecartItems] = useState(store.getState());
  store.subscribe(() => updatecartItems(store.getState()));

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          height: 50,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: 25,
            width: "80%",
            textAlign: "center",
            paddingLeft: "10%",
          }}
        >
          Home
        </Text>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Text>{cartItems.length}</Text>
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
      </View>
      <FlatList
        numColumns={2}
        contentContainerStyle={styles.list}
        data={products.products}
        keyExtractor={({ id }, index) => id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.product}
              onPress={() => addtocart(item)}
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
