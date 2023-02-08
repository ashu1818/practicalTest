import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OTPVerification from "../screens/OTPVerification/OTPVerification";
import MyTabs from "./BottomTab/BottomTab";
import ProductDetail from "../screens/ProductDetail/ProductDetail";
import CurrentLocation from "../screens/CurrentLocation/CurrentLocation";

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="OTPVerification"
          component={OTPVerification}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name="MyTabs"
          component={MyTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetail}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CurrentLocation"
          component={CurrentLocation}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
