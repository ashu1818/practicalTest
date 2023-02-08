import { React } from "react";
import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  mainScreen: {
    alignItems: "center",
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 15,
  },
  mainTitle: {
    fontSize: 22,
    fontWeight: 700,
    color: "#000000",
    marginBottom: 25,
  },
  mobileInput: {
    padding: 10,
    borderWidth: 0.8,
    borderColor: "#000000",
    borderRadius: 10,
    width: "90%",
    marginTop: 10,
  },
  otpText: {
    marginTop: 15,
    color: "#000000",
    fontSize: 16,
    fontWeight: 400,
  },
  uploadText: {
    color: "#000000",
    fontSize: 16,
    fontWeight: 400,
    textAlign: "center",
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
