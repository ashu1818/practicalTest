import {
  View,
  Text,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  PermissionsAndroid,
  Alert,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./ProductsStyle";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/getAllProductsAction";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Geolocation from "react-native-geolocation-service";

const requestLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: "Geolocation Permission",
        message: "Can we access your location?",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK",
      }
    );
    console.log("granted", granted);
    if (granted === "granted") {
      console.log("You can use Geolocation");
      return true;
    } else {
      console.log("You cannot use Geolocation");
      return false;
    }
  } catch (err) {
    return false;
  }
};
const Products = (props) => {
  const navigation = props.navigation;
  const dispatch = useDispatch();
  const [location, setLocation] = useState(false);
  const loader = useSelector((state) => state.GetProducts.isLoading);
  const products = useSelector((state) => state.GetProducts.products);
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const getLocation = () => {
    const result = requestLocationPermission();
    result.then((res) => {
      console.log("res is:", res);
      if (res) {
        Geolocation.getCurrentPosition(
          (position) => {
            console.log(position);
            setLocation(position);
            navigation.navigate("CurrentLocation", {
              location: position,
            });
          },
          (error) => {
            // See error code charts below.
            console.log(error.code, error.message);
            setLocation(false);
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
      }
    });
    console.log(location);
  };

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
              getLocation();
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
    <>
      {loader ? (
        <View
          style={{
            justifyContent: "center",
            alignSelf: "center",
            alignItems: "center",
            flex: 1,
          }}
        >
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
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
      )}
    </>
  );
};

export default Products;
