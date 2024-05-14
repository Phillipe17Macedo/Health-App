import {
  SafeAreaView,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { styles } from "../../styles/StylesHomePage/styles";
import { Cartao } from "../../components/cartaoHome/Cartao";
import { Carrossel } from "../../components/carrosselHome/Carrossel"

export default function TabOneScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView>
        <Cartao/>
        <Carrossel/>
      </ScrollView>
    </SafeAreaView>
  );
}
