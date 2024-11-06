import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Stack = createNativeStackNavigator();

export default function Index() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={({ navigation }) => ({
            headerTitleAlign: "center",
            header: () => <Header title="Home" onMenuPress={() => {}} />,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}