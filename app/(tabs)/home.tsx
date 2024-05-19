import { SafeAreaView, ScrollView, RefreshControl } from "react-native";
import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { styles } from "../../styles/StylesHomePage/styles";
import { Header } from "../../components/Home/headerHome/Header";
import { Cartao } from "../../components/Home/cartaoHome/Cartao";
import { Carrossel } from "../../components/Home/carrosselHome/Carrossel";
import { buscarUsuario } from "../../connection/buscarUsuario";

interface User {
  nome: string;
  dataNascimento: string;
  status: string;
}

export default function Home() {
  const [user, setUser] = useState<User | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  async function loadUser() {
    const userId = "04506739108";
    const userData: User | null = await buscarUsuario(userId);
    setUser(userData);
  }

  useEffect(() => {
    loadUser();
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    await loadUser();
    setRefreshing(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Header />
        {user && <Cartao user={user} />}
        <Carrossel />
      </ScrollView>
    </SafeAreaView>
  );
}
