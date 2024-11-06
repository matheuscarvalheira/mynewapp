import { Ionicons } from "@expo/vector-icons";
import { Container, FooterButton, FooterText } from './styles';
import { useNavigation } from "expo-router";

export default function Footer(){
  const navigation = useNavigation();

  const handleNavigateToHome = () => {
    navigation.navigate("Home");
  }

  return (
    <Container>
      <FooterButton onPress={handleNavigateToHome}>
        <Ionicons name="home" size={24} color="white" />
        <FooterText>Home</FooterText>
      </FooterButton>
    </Container>
  )
}