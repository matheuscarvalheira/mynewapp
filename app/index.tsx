import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Geolocalizacao from "./screens/Geolocation";


const StackNavigation = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer independent={true}>
        <StackNavigation.Navigator initialRouteName="Home">
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
              footer: () => <Footer navigation={navigation} />,
            })}
          />
        </StackNavigation.Navigator>
      </NavigationContainer>
  );
}