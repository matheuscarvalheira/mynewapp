import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Container, FooterButton, FooterText } from './styles';
import { Text } from 'react-native';

export default function Footer() {
  const navigation = useNavigation<any>();

  const handleNavigateToHome = () => {
    navigation.navigate('Home');
  };

  const handleNavigateToGeolocation = () => {
    navigation.navigate('Geolocation');
  };

  return (
    <Container>
      <FooterButton onPress={handleNavigateToHome}>
        <Ionicons name="home" size={24} color="white" />
        <FooterText><Text>Home</Text></FooterText>
      </FooterButton>
      <FooterButton onPress={handleNavigateToGeolocation}>
        <Ionicons name="navigate" size={24} color="white" />
        <FooterText><Text>Geolocation</Text></FooterText>
      </FooterButton>
    </Container>
  );
};