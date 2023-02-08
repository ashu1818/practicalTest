import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import styles from "./ProductDetailStyle";
import { useSelector } from "react-redux";

const ProductDetail = (props) => {
  const item = useSelector((state) => state.UploadProduct.product);

  const navigation = props.navigation;
  return (
    <View>
      <View style={styles.productView}>
        <Image
          source={{ uri: item.image }}
          style={styles.imageBackground}
          resizeMode={"contain"}
        />

        <Text numberOfLines={2} style={styles.title}>
          {item.title}
        </Text>
        <Text numberOfLines={2} style={styles.title}>
          {item.description}
        </Text>
        <Text style={styles.price}>{item.price} $</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Products");
        }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductDetail;
