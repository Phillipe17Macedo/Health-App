import { SafeAreaView, ScrollView, RefreshControl } from "react-native";
import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { styles } from "../../styles/StylesHomePage/styles";
import { Header } from "../../components/Home/headerHome/Header";
import { Cartao } from "../../components/Home/cartaoHome/Cartao";
import { Carrossel } from "../../components/Home/carrosselHome/Carrossel";
import { buscarAderente } from "@/utils/requestConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface User {
  nome: string;
  dataNasc: string;
  statusContrato: boolean;
}

export default function Home() {
  const [user, setUser] = useState<User | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  async function loadUser() {
    const userCpf = await AsyncStorage.getItem('userCpf');
    const isTitular = await AsyncStorage.getItem('isTitular');

    if (userCpf) {
      const response = await buscarAderente(userCpf, isTitular === 'true');
      const userData: User | null = response.data;
      setUser(userData);
    }
  }

  useEffect(() => {
    loadUser();
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    await loadUser();
    setRefreshing(false);
  };

  const getPrimeiroNome = (nomeCompleto: string) => {
    return nomeCompleto.split(" ")[0];
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Header nomeUsuario={user ?.nome} />
        {user && <Cartao user={user} />}
        <Carrossel />
      </ScrollView>
    </SafeAreaView>
  );
}
