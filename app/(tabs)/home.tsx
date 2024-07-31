import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  RefreshControl,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { styles } from "../../styles/StylesHomePage/styles";
import { Header } from "../../components/Home/headerHome/Header";
import { OpcoesHome } from "../../components/Home/opcoesHome/OpcoesHome";
import { buscarAderente, buscarAgendamentosConsulta } from "@/utils/requestConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ModalCarregamento from "@/components/constants/ModalCarregamento";
import Carrossel from "@/components/Home/CarrosselHome/Carrossel";
import AgendamentosHome from "@/components/Home/agendamentosHome/AgendamentosHome";

interface User {
  idAderente: number;
  nome: string;
  dataNasc: string;
  tipoAdesao: string;
  statusContrato: boolean;
  titularDoContrato: boolean;
  fotoBase64: string;
}

interface Consulta {
  idAgenda: number;
  dataAgenda: string;
  horaAgenda: string;
  medico: string;
  especialidade: string;
  status: string;
}

export default function Home() {
  const [user, setUser] = useState<User | null>(null);
  const [consultas, setConsultas] = useState<Consulta[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchConsultas = async (userId: string, empresaId: string): Promise<Consulta[]> => {
    try {
      const response = await buscarAgendamentosConsulta(userId, empresaId);
      console.log("Consultas agendadas:", response.data);
      return response.data ?? [];
    } catch (error) {
      console.error("Erro ao buscar consultas:", error);
      return [];
    }
  };

  const loadUser = async () => {
    setLoading(true);
    const userCpf = await AsyncStorage.getItem("userCpf");
    const isTitular = await AsyncStorage.getItem("isTitular");

    if (userCpf) {
      const response = await buscarAderente(userCpf, isTitular === "true");
      const userData: User | null = response.data;
      setUser(userData);

      if (userData) {
        const userId = userData.idAderente.toString();
        const empresaId = await AsyncStorage.getItem("empresaId");
        if (userId && empresaId) {
          const consultas = await fetchConsultas(userId, empresaId);
          setConsultas(consultas);
        }
      }
    }
    setLoading(false);
  };

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
        <Header nomeUsuario={user?.nome} />
        <AgendamentosHome consultas={consultas} />
        <OpcoesHome />
        <Carrossel />
      </ScrollView>
      <ModalCarregamento visivel={loading} />
    </SafeAreaView>
  );
}