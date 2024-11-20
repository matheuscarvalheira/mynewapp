import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";

import Geolocalizacao from "./screens/Geolocation";
import Login from "./screens/Login";
import Header from "../components/Header";
import Footer from "../components/Footer";


const StackNavigation = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer independent={true}>
        <StackNavigation.Navigator initialRouteName="Login">
          <StackNavigation.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <StackNavigation.Screen
            name="Home"
            component={Home}
            options={({ navigation }) => ({
              header: () => <Header title="Home" onMenuPress={() => {}} />,
            })}
          />
          <StackNavigation.Screen
            name="Geolocation"
            component={Geolocalizacao}
            options={({ navigation }) => ({
              header: () => (
                <Header
                  title="Geolocation"
                  onMenuPress={() => {}}
                  canGoBack={navigation.canGoBack()}
                />
              ),
              footer: () => <Footer />,
            })}
          />
        </StackNavigation.Navigator>
      </NavigationContainer>
  );
}