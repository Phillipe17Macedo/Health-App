import {
  SafeAreaView,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { styles } from "../../styles/StylesHomePage/styles";
import { Header } from "../../components/Home/headerHome/Header";
import { Cartao } from "../../components/Home/cartaoHome/Cartao";
import { Carrossel } from "../../components/Home/carrosselHome/Carrossel"
import { user } from '../../components/Home/cartaoHome/dadosCartao';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView>
        <Header/>
        <Cartao user={user}/>
        <Carrossel/>
      </ScrollView>
    </SafeAreaView>
  );
}
