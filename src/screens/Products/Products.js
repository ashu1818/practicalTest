import {
  View,
  Text,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import styles from "./ProductsStyle";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/getAllProductsAction";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Products = (props) => {
  const navigation = props.navigation;
  const dispatch = useDispatch();
  const products = useSelector((state) => state.GetProducts.products);
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  const renderItem = ({ item }) => {
    return (
      <View style={styles.productView}>
        <ImageBackground
          source={{ uri: item.image }}
          style={styles.imageBackground}
          resizeMode={"contain"}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("CurrentLocation");
            }}
            style={styles.buttonMap}
          >
            <MaterialCommunityIcons
              name="map-marker"
              color={"#FFFFFF"}
              size={20}
            />
          </TouchableOpacity>
        </ImageBackground>

        <Text numberOfLines={2} style={styles.title}>
          {item.title}
        </Text>
        <Text style={styles.price}>{item.price} $</Text>
      </View>
    );
  };
  return (
    <View style={styles.mainView}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={{
          justifyContent: "center",
          alignSelf: "center",
        }}
        initialNumToRender={products.length}
      />
    </View>
  );
};

export default Products;
