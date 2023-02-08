import { React } from "react";
import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
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
  button: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 30,
    padding: 15,
    borderRadius: 10,
    width: "50%",
    backgroundColor: "#000000",
    zIndex: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 14,
  },
});
