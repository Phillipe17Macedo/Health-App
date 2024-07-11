import {
  SafeAreaView,
  ScrollView,
  RefreshControl,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { styles } from "../../styles/StylesHomePage/styles";
import { Header } from "../../components/Home/headerHome/Header";
import { Cartao } from "../../components/Home/cartaoHome/Cartao";
import { OpcoesHome } from "../../components/Home/opcoesHome/OpcoesHome";
import { buscarAderente } from "@/utils/requestConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ModalCarregamento from "@/components/constants/ModalCarregamento";
import Carrossel from "@/components/Home/CarrosselHome/Carrossel";
import { useNavigation, NavigationProp } from '@react-navigation/native';

interface User {
  nome: string;
  dataNasc: string;
  tipoAdesao: string;
  statusContrato: boolean;
  titularDoContrato: boolean;
  fotoBase64: string;
}

export default function Home() {
  const [user, setUser] = useState<User | null>(null);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation<NavigationProp<any>>();

  async function loadUser() {
    setLoading(true);
    const userCpf = await AsyncStorage.getItem("userCpf");
    const isTitular = await AsyncStorage.getItem("isTitular");

    if (userCpf) {
      const response = await buscarAderente(userCpf, isTitular === "true");
      const userData: User | null = response.data;
      setUser(userData);
    }
    setLoading(false);
  }

  useEffect(() => {
    const verificarTermos = async () => {
      const aceitouTermos = await AsyncStorage.getItem("aceitouTermos");
      if (!aceitouTermos) {
        Alert.alert("Termos de Uso", "Você precisa aceitar os termos de uso.");
        navigation.navigate('Login'); // Redireciona para a tela de login se os termos não foram aceitos
      } else {
        loadUser();
      }
    };
    verificarTermos();
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
        <Header nomeUsuario={user?.nome} />
        {user && <Cartao user={user} />}
        <OpcoesHome />
        <Carrossel />
      </ScrollView>
      <ModalCarregamento visivel={loading} />
    </SafeAreaView>
  );
}