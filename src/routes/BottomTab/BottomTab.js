import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Products from "../../screens/Products/Products";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AddProducts from "../../screens/AddProducts/AddProducts";
import ProductDetail from "../../screens/ProductDetail/ProductDetail";
export default function MyTabs() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Products"
        component={Products}
        options={{
          tabBarLabel: "Home",
          tabBarLabelStyle: {
            color: "#000000",
            fontSize: 12,
            fontWeight: 500,
          },
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={"#000000"} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="AddProducts"
        component={AddProducts}
        options={{
          tabBarLabel: "Add Products",
          tabBarLabelStyle: {
            color: "#000000",
            fontSize: 12,
            fontWeight: 500,
          },
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="cart-plus"
              color={"#000000"}
              size={30}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
