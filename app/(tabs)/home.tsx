import {
  SafeAreaView,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { styles } from "../../styles/StylesHomePage/styles";
import { Header } from "../../components/Home/headerHome/Header";
import { Cartao } from "../../components/Home/cartaoHome/Cartao";
import { Carrossel } from "../../components/Home/carrosselHome/Carrossel"
import { buscarUsuario } from "../../connection/buscarUsuario";


export default function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function loadUser() {
      const userId = "1709";
      const userData = await buscarUsuario(userId);
      setUser(userData);
    }
    loadUser();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView>
        <Header/>
        {user && <Cartao user={user} />}
        <Carrossel/>
      </ScrollView>
    </SafeAreaView>
  );
}
