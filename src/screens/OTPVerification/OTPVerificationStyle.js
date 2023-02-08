import { React } from "react";
import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  mainScreen: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  subView: {
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    width: "100%",
    padding: 15,
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
  button: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 30,
    padding: 15,
    borderRadius: 10,
    width: "50%",
    backgroundColor: "#000000",
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 14,
  },
});
