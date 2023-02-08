import { View, Text } from "react-native";
import React from "react";
import MyStack from "./src/routes";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <MyStack />
      </Provider>
    </>
  );
};

export default App;
