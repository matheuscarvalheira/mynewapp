import React from "react";
import { View, Text, FlatList, Image, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Car, carData } from "@/assets/data/carData";

export default function Home() {
  const [data, setData] = useState<Car[]>(carData.slice(0, 1));
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const handleGoToGeolocation = () => {
    navigation.navigate("Geolocation");
  }

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.year}>{item.year}</Text>
    </View>
  );

  const loadMoreData = () => {
    if (loading) return;

    setLoading(true);
    const newData = carData.slice(data.length, data.length + 1);
    setTimeout(() => {
      setData([...data, ...newData]);
      setLoading(false);
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <View>
        <Button title="Geolocation" onPress={handleGoToGeolocation} />
      </View>
      <Text style={styles.sectionTitle}>Carros</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        numColumns={1}
        onEndReached={loadMoreData}
        onEndReachedThreshold={0.5}
        ListFooterComponent={loading ? <Text>Loading...</Text> : null}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center',
  },
  list: {
    paddingHorizontal: 20,
  },
  itemContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: 200,
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  year: {
    fontSize: 16,
    color: '#666',
  },
});