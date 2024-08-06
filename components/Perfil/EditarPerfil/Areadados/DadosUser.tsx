import React, { useState, useEffect } from "react";
import { View, RefreshControl, SafeAreaView, ScrollView } from "react-native";
import { buscarAderente } from "@/utils/requestConfig";
import { StatusBar } from "expo-status-bar";
import { Cartao } from "@/components/Perfil/EditarPerfil/cartaoPerfil/Cartao";
import ModalCarregamento from "@/components/constants/ModalCarregamento";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "./styles";

interface User {
  nome: string;
  dataNasc: string;
  tipoAdesao: string;
  statusContrato: boolean;
  titularDoContrato: boolean;
  fotoBase64: string;
}

interface DadosUserProps {
  cpf: string;
}

const DadosUser: React.FC<DadosUserProps> = ({ cpf }) => {
  const [user, setUser] = useState<User | null>(null);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);

  const loadUser = async () => {
    setLoading(true);
    const isTitular = await AsyncStorage.getItem("isTitular");

    if (cpf) {
      const response = await buscarAderente(cpf, isTitular === "true");
      const userData: User | null = response.data;
      setUser(userData);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadUser();
  }, [cpf]);

  const onRefresh = async () => {
    setRefreshing(true);
    await loadUser();
    setRefreshing(false);
  };

  return (
    <>
      <SafeAreaView style={[styles.container]}>
        <StatusBar style="auto" />
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {user && <Cartao user={user} />}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default DadosUser;