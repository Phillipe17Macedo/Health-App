import { SafeAreaView, ScrollView, RefreshControl } from "react-native";
import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { styles } from "../../styles/StylesHomePage/styles";
import { Header } from "../../components/Home/headerHome/Header";
import { Cartao } from "../../components/Home/cartaoHome/Cartao";
import { Carrossel } from "../../components/Home/carrosselHome/Carrossel";
import { buscarUsuario } from "../../connection/buscarUsuario";
import { buscarAderente } from "@/utils/requestConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface User {
  nome: string;
  dataNascimento: string;
  status: string;
}

export default function Home() {
  const [user, setUser] = useState<User | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  async function loadUser() {
    const userCpf = await AsyncStorage.getItem('userCpf');
    if (userCpf) {
      const userData: User | null = await buscarAderente(userCpf);
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
