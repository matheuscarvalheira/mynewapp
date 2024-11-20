import React, { useState } from "react";
import { styles } from "./styles";
import { View, Button, StyleSheet } from "react-native";
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";
import Footer from "../../../components/Footer";
import { GOOGLE_API_KEY } from "@env";


export default function Geolocalizacao() {
  const [location, setLocation] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const handleGetCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission to access location was denied");
      return;
    }

    let { coords } = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.High,
    });
    const { latitude, longitude } = coords;

    setLocation((prev) => ({
      ...prev,
      latitude,
      longitude,
    }));

    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_API_KEY}`
      );
      const data = await response.json();

      if (data.results.length > 0) {
        const address = data.results[0].formatted_address;
        console.log("Endereço atual:", address);
      } else {
        console.log("Nenhum resultado encontrado");
      }
    } catch (error) {
      console.error("Erro ao obter o endereço da API do Google", error);
    }
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={location}
        showsUserLocation={true}
        followsUserLocation={true}
      >
        <Marker
          coordinate={{
            latitude: location.latitude,
            longitude: location.longitude,
          }}
          title="Você está aqui"
        />
      </MapView>
      <View style={styles.buttonContainer}>
        <Button
          title="Pegar Localização Atual"
          onPress={handleGetCurrentLocation}
        />
      </View>
      <Footer />
    </View>
  );
}
