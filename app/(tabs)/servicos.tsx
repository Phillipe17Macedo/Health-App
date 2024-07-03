import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  Alert,
  RefreshControl,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "../../styles/StylesServicosPage/styles";
import { StatusBar } from "expo-status-bar";
import { ComponentesConsulta } from "@/components/Servicos/ComponentesConsulta/ComponenteConsulta";
import { ComponentesExame } from "@/components/Servicos/ComponentesExame/ComponenteExame";
import AgendadoConsulta from "@/components/Servicos/Agendados/Consulta/AgendadoConsulta";
import AgendadoExame from "@/components/Servicos/Agendados/Exames/AgendadoExame";
import {
  ConsultasFicticias,
  ExamesFicticios,
} from "@/components/Servicos/Agendados/AgedamentosFiciticios";
import {
  buscarAgendamentosConsulta,
  buscarUnidadeAtendimento,
} from "@/utils/requestConfig";
import ModalCarregamento from "@/components/constants/ModalCarregamento";

const Servicos: React.FC = () => {
  const [consultas, setConsultas] = useState<any[]>([]);
  const [exames, setExames] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [idAderente, setIdAderente] = useState<string | null>(null);
  const [idEmpresa, setIdEmpresa] = useState<string | null>(null);
  const [mostrarConsultas, setMostrarConsultas] = useState(false);

  const fetchConsultas = async () => {
    try {
      setLoading(true);
      const userId = await AsyncStorage.getItem("userId");
      const empresaId = await AsyncStorage.getItem("empresaId");
      if (userId && empresaId) {
        setIdAderente(userId);
        setIdEmpresa(empresaId);
        const response = await buscarAgendamentosConsulta(userId, empresaId);
        console.log("Consultas agendadas:", response.data);
        setConsultas(response.data ?? []);
      } else {
        console.error("Erro", "Usuário ou empresa não encontrados.");
      }
    } catch (error) {
      console.error("Erro ao carregar as consultas:", error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const userId = await AsyncStorage.getItem("userId");
        if (userId) {
          setIdAderente(userId);
          const unidadesResponse = await buscarUnidadeAtendimento();
          const idEmpresa = unidadesResponse.data[0].idEmpresa;
          setIdEmpresa(idEmpresa);
          await AsyncStorage.setItem("empresaId", idEmpresa.toString());
          await fetchConsultas();
        }
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    setExames(ExamesFicticios);
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchConsultas();
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <ComponentesConsulta />
        <ComponentesExame />

        <TouchableOpacity
          style={styles.toggleButton}
          onPress={() => setMostrarConsultas(!mostrarConsultas)}
        >
          <Text style={styles.toggleButtonText}>
            {mostrarConsultas
              ? "Esconder Consultas Agendadas"
              : "Mostrar Consultas Agendadas"}
          </Text>
        </TouchableOpacity>

        {loading ? (
          <ModalCarregamento visivel={loading} />
        ) : mostrarConsultas ? (
          consultas.length > 0 ? (
            <AgendadoConsulta
              consultas={consultas}
              onConsultaCancelada={fetchConsultas}
            />
          ) : (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>Não há consultas agendadas.</Text>
            </View>
          )
        ) : null}
        <AgendadoExame exames={exames} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Servicos;
