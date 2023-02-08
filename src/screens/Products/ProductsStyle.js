import { React } from "react";
import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: "#FFFFFFFF",
  },
  productView: {
    justifyContent: "center",
    alignSelf: "center",
    margin: 25,
    width: "90%",
    alignItems: "center",
  },
  imageBackground: {
    width: 200,
    height: 200,
  },
  buttonMap: {
    position: "absolute",
    right: 10,
    bottom: 10,
    backgroundColor: "#000000",
    borderRadius: 40,
    padding: 10,
  },
  title: {
    width: "20%",
    color: "#000000",
    fontSize: 18,
    textAlign: "center",
    marginVertical: 15,
  },
  price: {
    width: "50%",
    color: "#000000",
    fontSize: 16,
    textAlign: "center",
    fontWeight: 700,
  },
});
