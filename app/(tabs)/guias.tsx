import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  Alert,
  RefreshControl,
  View,
  Text,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "../../styles/StylesServicosPage/styles";
import { StatusBar } from "expo-status-bar";
import { ComponenteGuiaConsulta } from "@/components/Guias/ComponentesGuiaConsulta/ComponenteGuiaConsulta";
import { ComponenteGuiaExame } from "@/components/Guias/ComponentesGuiaExame/ComponenteGuiaExame";
import GuiaConsultaEmitida from '@/components/Guias/GuiasEmitidas/GuiaConsulta/GuiaConsultaEmitida';
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
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface Consulta {
  idAgenda: number;
  dataAgenda: string | null;
  horaAgenda: string | null;
  medico: string;
  status: string;
}

const Guias: React.FC = () => {
  const [consultas, setConsultas] = useState<Consulta[]>([]);
  const [exames, setExames] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [idAderente, setIdAderente] = useState<string | null>(null);
  const [idEmpresa, setIdEmpresa] = useState<string | null>(null);

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

        const consultaOrdenada = (response.data ?? []).sort((a: Consulta, b: Consulta) => {
          const dateA = new Date(`${a.dataAgenda?.split("T")[0]}T${a.horaAgenda}`);
          const dateB = new Date(`${b.dataAgenda?.split("T")[0]}T${b.horaAgenda}`);
          return dateA.getTime() - dateB.getTime();
        });

        setConsultas(consultaOrdenada);
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
        <View style={styles.containerOpcoesServicos} >
          <ComponenteGuiaConsulta />
          <ComponenteGuiaExame />
        </View>

        <View style={styles.constainerTituloAgendamento}>
          <MaterialCommunityIcons name="calendar-clock" size={21} color="#025940" />
          <Text style={styles.tituloAgendamento}>Minhas Guias de Consulta e Exame</Text>
        </View>

        {loading ? (
          <ModalCarregamento visivel={loading} />
        ) : (
          consultas.length > 0 ? (
            <GuiaConsultaEmitida
              consultas={consultas}
              onConsultaCancelada={fetchConsultas}
            />
          ) : (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>Não há guias emitidas.</Text>
            </View>
          )
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Guias;